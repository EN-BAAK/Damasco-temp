import React from 'react';
import HeadingTitle from '../HeadingTitle';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from 'react-bootstrap';
import { useAppContext } from '../../context/AppContext';
import CompressedImage from '../CompressedImage';

import image from "../../assets/gallery/image-min.png"
import image1 from "../../assets/gallery/image-1-min.png"
import image2 from "../../assets/gallery/image-2-min.png"
import image3 from "../../assets/gallery/image-3-min.png"
import image4 from "../../assets/gallery/image-4-min.png"
import image5 from "../../assets/gallery/image-5-min.png"
import image6 from "../../assets/gallery/image-6-min.png"
import image7 from "../../assets/gallery/image-7-min.png"
import image8 from "../../assets/gallery/image-8-min.png"
import image9 from "../../assets/gallery/image-9-min.png"

const Gallery = (): React.JSX.Element => {
  const { t: translating } = useTranslation('global');
  const { showImage } = useAppContext();

  const images = [
    { id: 1, src: image, alt: 'Image Min' },
    { id: 2, src: image1, alt: 'Image 1' },
    { id: 3, src: image2, alt: 'Image 2' },
    { id: 4, src: image3, alt: 'Image 3' },
    { id: 5, src: image4, alt: 'Image 4' },
    { id: 6, src: image5, alt: 'Image 5' },
    { id: 7, src: image6, alt: 'Image 6' },
    { id: 8, src: image7, alt: 'Image 7' },
    { id: 9, src: image8, alt: 'Image 8' },
    { id: 10, src: image9, alt: 'Image 9' },
  ];

  return (
    <section id='gallery'>
      <Container>
        <HeadingTitle title={translating('gallery.title')} />

        <Swiper
          navigation
          pagination
          spaceBetween={10}
          slidesPerView={5}
          breakpoints={{
            1024: {
              slidesPerView: 5,
            },
            0: {
              slidesPerView: 3,
            },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={`img-${img.id}`}>
              <div
                className='img-holder position-relative rounded-4 border border-4 border-light-subtle shadow-lg overflow-hidden'
              >
                <CompressedImage
                  animation='bomb'
                  animationDelay={index * 0.05}
                  clickEvent={() => showImage(img.src)}
                  src={img.src}
                  loading='lazy'
                  alt={img.alt}
                  blurWidth={85}
                  blurHeight={85}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Gallery;