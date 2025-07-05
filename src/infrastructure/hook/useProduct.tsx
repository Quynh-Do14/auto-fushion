import React, { JSX } from 'react';
import LazyLoad from 'react-lazyload';
import Link from 'next/link';
import NotFoundImg from '@/asset/img/not-found.jpg'
import { configImageURL, convertSlug, formatCurrency } from '../helper/helper';
import { ROUTE_PATH } from '@/core/common/appRouter';
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';

interface ImageFormat {
  url: string;
}

interface Badge {
  id?: number | string;
  type?: string;
  value: string;
}

interface Brand {
  name: string;
}

interface ProductPayload {
  id: number | string;
  name: string;
  price: number;
  sale_price?: number;
  images?: string[];
  badges?: Badge[];
  badge?: Badge[];
  brands?: Brand[];
}


export default function useProduct() {
  return {
    thumbnailImage: (payload: ProductPayload): JSX.Element => {

      if (payload?.images?.length) {
        return (
          <LazyLoad>
            <img
              className="product-image"
              src={configImageURL(payload.images[0])}
              alt={payload.name}
            />
          </LazyLoad>
        );
      }
      else {
        return (
          <LazyLoad>
            <img className="product-image" src={NotFoundImg.src} alt={payload.name} />
          </LazyLoad>
        )
      }
    },

    price: (payload: ProductPayload): JSX.Element => {
      if (payload.sale_price) {
        return (
          <p className="ps-product__price sale">
            <span>₫</span>
            {formatCurrency(Number(payload.sale_price))}
            <br />
            <del className="ml-2">
              <span>₫</span>
              {formatCurrency(Number(payload.price))}
            </del>
          </p>
        );
      } else {
        return (
          <p className="ps-product__price">
            <span>₫</span>
            {formatCurrency(Number(payload.price))}
          </p>
        );
      }
    },

    badges: (payload: ProductPayload): JSX.Element | null => {
      if (payload.badges && payload.badges.length > 0) {
        const items = payload.badges.map((item) => {
          if (item.value === 'hot') {
            return (
              <span className="ps-product__badge hot" key={item.id}>
                Hot
              </span>
            );
          }
          if (item.value === 'new') {
            return (
              <span className="ps-product__badge new" key={item.id}>
                New
              </span>
            );
          }
          if (item.value === 'sale') {
            return (
              <span className="ps-product__badge sale" key={item.id}>
                Sale
              </span>
            );
          }
          return null;
        });
        return <div className="ps-product__badges">{items}</div>;
      }
      return null;
    },

    badge: (payload: ProductPayload): JSX.Element | undefined => {
      if (payload.sale_price) {
        const discountPercent = (
          ((payload.price - payload.sale_price) / payload.price) * 100
        ).toFixed(0);
        return (
          <div className="ps-product__badge">-{discountPercent}%</div>
        );
      }

      if (payload.badge && payload.badge.length > 0) {
        return (
          <>
            {payload.badge.map((badge, index) => {
              const className =
                badge.type === 'sale'
                  ? 'ps-product__badge'
                  : badge.type === 'outStock'
                    ? 'ps-product__badge out-stock'
                    : 'ps-product__badge hot';
              return (
                <div className={className} key={index}>
                  {badge.value}
                </div>
              );
            })}
          </>
        );
      }

      return undefined;
    },

    name: (payload: ProductPayload): JSX.Element => {
      return (
        <Link href={`${ROUTE_PATH.PRODUCT}/${convertSlug(payload.name)}-${payload.id}.html`}>
          <a className="ps-product__name">{payload.name}</a>
        </Link>
      );
    }
  };
}
