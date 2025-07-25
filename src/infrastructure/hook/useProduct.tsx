import React, { JSX } from 'react';
import LazyLoad from 'react-lazyload';
import Link from 'next/link';
import NotFoundImg from '@/asset/img/not-found.jpg'
import { configImageURL, convertSlug, formatCurrency } from '../helper/helper';
import { ROUTE_PATH } from '@/core/common/appRouter';
import Image from 'next/image';
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
  percent_sale: number;
  image?: string;
  badges?: Badge[];
  badge?: Badge[];
  brands?: Brand[];
}


export default function useProduct() {
  return {
    thumbnailImage: (payload: ProductPayload): JSX.Element => {
      if (payload?.image) {
        return (
          <LazyLoad>
            <Image
              width={400}
              height={400}
              style={{ objectFit: 'cover', width: '100%', height: '150px' }}
              className="product-image"
              src={configImageURL(payload.image)}
              alt={payload.name}
            />
          </LazyLoad>
        );
      }
      else {
        return (
          <LazyLoad>
            <Image width={400}
              height={400}
              style={{ objectFit: 'cover', width: '100%', height: '150px' }}
              className="product-image"
              src={NotFoundImg}
              alt={payload.name} />
          </LazyLoad>
        )
      }
    },

    price: (payload: ProductPayload): JSX.Element => {
      if (Number(payload.percent_sale) > 0) {
        const remain_price = payload.price - (payload.price * payload.percent_sale) / 100;
        return (
          <p className="ps-product__price sale">
            <span>₫</span>
            {formatCurrency(Number(remain_price))}
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
      if (Number(payload.percent_sale) > 0) {
        return (
          <div className="ps-product__badge">-{Number(payload.percent_sale).toFixed(0)}%</div>
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

      return;
    },

    name: (payload: ProductPayload): JSX.Element => {
      return (
        <Link href={`${ROUTE_PATH.PRODUCT}/${convertSlug(payload.name)}-${payload.id}.html`}>
          <a className="ps-product__name text-truncate-2">{payload.name}</a>
        </Link>
      );
    }
  };
}
