import React, { useEffect, useState } from 'react';
import { Blurhash } from 'react-blurhash';

interface Props {
  src: string;
  alt: string;
  loading?: "eager" | "lazy" | undefined,
  style?: string,
  clickEvent?: () => void,
  animation?: string,
  animationDelay?: number
  blurWidth?: number | string
  blurHeight?: number | string
}

const CompressedImage = ({
  src,
  alt,
  style,
  loading = undefined,
  clickEvent,
  animation,
  animationDelay,
  blurWidth,
  blurHeight, }: Props): React.ReactElement => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };

    img.src = src
  }, [src]);

  return imageLoaded ? (
    <img
      src={src}
      alt={alt}
      loading={loading}
      className={style}
      onClick={clickEvent}
      data-ani={animation}
      data-delay={animationDelay}
    />
  ) : (
    <Blurhash
      className='d-block'
      hash="LxHyOFIoWBay~qWWayayt8s:ofj]"
      resolutionX={32}
      resolutionY={32}
      width={blurWidth}
      height={blurHeight}
      punch={1}
    />
  );
};

export default CompressedImage;
