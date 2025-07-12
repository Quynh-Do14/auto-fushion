import React, { useEffect, useRef, useState } from 'react'
import Slider, { Settings } from 'react-slick'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

import NextArrow from '@/infrastructure/common/carousel/NextArrow'
import PrevArrow from '@/infrastructure/common/carousel/PrevArrow'
import { configImageURL } from '@/infrastructure/helper/helper'
import Image from 'next/image'

type Props = {
  product: {
    images?: string[]
  }
  vertical?: boolean
}

const ThumbnailDefault = (props: Props) => {

  const { product, vertical = true } = props;

  const galleryCarousel = useRef<Slider | null>(null)
  const variantCarousel = useRef<Slider | null>(null)

  const [gallery, setGallery] = useState<Slider | null>(null)
  const [variant, setVariant] = useState<Slider | null>(null)
  const [productImages, setProductImages] = useState<string[]>([])

  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  const handleOpenLightbox = (e: React.MouseEvent<HTMLAnchorElement>, imageIndex: number) => {
    e.preventDefault()
    setPhotoIndex(imageIndex)
    setIsOpen(true)
  }

  useEffect(() => {
    setGallery(galleryCarousel.current)
    setVariant(variantCarousel.current)
    const newImages = (product.images ?? []).map((img) =>
      configImageURL(img)
    )
    setProductImages(newImages)
  }, [product])

  const gallerySetting: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  const variantSetting: Settings = {
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          dots: false,
          arrows: false,
          vertical: false,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          dots: false,
          arrows: false,
          vertical: false,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          dots: false,
          arrows: false,
          vertical: false,
          infinite: false,
        },
      },
    ],
  }


  const imagesView = productImages.map((item, index) => (
    <div className='item' key={item}>
      <img
        width={100}
        height={100}
        src={item}
        alt={`Thumbnail ${index}`}
        style={{ objectFit: 'cover', width: '100%', height: '100px'}}
      />
    </div>
  ))

  const galleryImagesView = productImages.map((item, index) => (
    <div className='item' key={item}>
      <a href='#' onClick={(e) => handleOpenLightbox(e, index)}>
        <Image src={item} alt={`Product ${index}`} width={800} height={800}/>
      </a>
    </div>
  ))

  const variantCarouselView = vertical ? (
    <Slider
      asNavFor={gallery ?? undefined}
      ref={(slider) => { variantCarousel.current = slider }}
      swipeToSlide={true}
      arrows={false}
      slidesToShow={3}
      vertical={true}
      infinite={true}
      focusOnSelect={true}
      {...variantSetting}
      className='ps-product__variants'
    >
      {imagesView}
    </Slider>
  ) : (
    <Slider
      asNavFor={gallery ?? undefined}
      ref={(slider) => { variantCarousel.current = slider }}
      swipeToSlide={true}
      arrows={false}
      slidesToShow={6}
      vertical={false}
      // centered={true}
      infinite={false}
      focusOnSelect={true}
      className='ps-product__variants'
    >
      {imagesView}
    </Slider>
  )

  const lightboxView = isOpen && productImages.length > 0 && (
    <Lightbox
      mainSrc={productImages[photoIndex]}
      nextSrc={productImages[(photoIndex + 1) % productImages.length]}
      prevSrc={productImages[(photoIndex + productImages.length - 1) % productImages.length]}
      onCloseRequest={() => setIsOpen(false)}
      onMovePrevRequest={() =>
        setPhotoIndex((photoIndex + productImages.length - 1) % productImages.length)
      }
      onMoveNextRequest={() =>
        setPhotoIndex((photoIndex + 1) % productImages.length)
      }
    />
  )

  return (
    <div className='ps-product__thumbnail' data-vertical={vertical ? 'true' : 'false'}>
      <figure>
        <div className='ps-wrapper'>
          <Slider
            {...gallerySetting}
            ref={(slider) => { galleryCarousel.current = slider }}
            asNavFor={variant ?? undefined}
            className='ps-product__gallery ps-carousel inside'
          >
            {galleryImagesView}
          </Slider>
        </div>
      </figure>
      {variantCarouselView}
      {lightboxView}
    </div>
  )
}

export default ThumbnailDefault
