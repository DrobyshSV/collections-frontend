import {
  ImgHTMLAttributes,
  memo,
  ReactElement,
  useLayoutEffect,
  useState,
} from 'react';
import { Image as BootstrapImage } from 'react-bootstrap';
import { ImageProps } from 'react-bootstrap/Image';

interface AppImageProps extends ImageProps {
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

export const AppImage = memo((props: AppImageProps) => {
  const {
    className,
    src,
    alt = 'image',
    errorFallback,
    fallback,
    ...otherProps
  } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? '';
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (hasError && errorFallback) {
    return errorFallback;
  }

  return <BootstrapImage className={className} src={src} alt={alt} {...otherProps} />;
});
