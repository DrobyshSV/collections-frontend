import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

export type TextVariant = 'primary' | 'error' | 'accent';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 's' | 'm' | 'l';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;
  bold?: boolean;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToClass: Record<TextSize, string> = {
  s: 's',
  m: 'm',
  l: 'l',
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  s: 'h3',
  m: 'h2',
  l: 'h1',
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    variant = 'primary',
    align = 'left',
    size = 'm',
    bold,
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];
  const sizeClass = mapSizeToClass[size];
  const additionalClasses = [
    className,

    sizeClass,
  ];

  return (
    <div
      className={classNames(
       ' Text',
        { ['bold']: bold },
        additionalClasses,
      )}
    >
      {title && (
        <HeaderTag
          className={title}
        >
          {title}
        </HeaderTag>
      )}
      {text && (
        <p className={'styles.text'}>
          {text}
        </p>
      )}
    </div>
  );
});
