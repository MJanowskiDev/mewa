import { ComponentProps } from 'react';
import clsx from 'clsx';

const colors = {
  emerald: '#2ecc71',
  'peter-river': '#3498db',
  amethyst: '#9b59b6',
};

type Color = keyof typeof colors;

type Props = {
  label: string;
  color?: Color;
  bgColor?: Color;
};

export const Button = ({
  label,
  bgColor,
  color,
  className,
  ...rest
}: ComponentProps<'button'> & Props) => {
  const _color = color ? colors[color] : '';
  const _bgColor = bgColor ? colors[bgColor] : '';

  const classes = clsx(
    'px-4 py-1',
    'text-sm text-white',
    'bg-blue-600',
    'font-semibold',
    'rounded-full border border-blue-200',
    'hover:text-white hover:bg-blue-500 hover:border-transparent',
    className
  );

  return (
    <button
      className={classes}
      style={{ color: _color, backgroundColor: _bgColor }}
      {...rest}
    >
      {label}
    </button>
  );
};
