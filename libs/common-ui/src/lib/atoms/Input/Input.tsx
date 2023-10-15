import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

type Variant = 'outlined' | 'filled';
type Size = 'small' | 'normal';
type State = 'success' | 'error' | 'warning' | 'active' | 'disabled';
type LabelPosition = 'inline' | 'above';

type Props = {
  label?: string;
  variant?: Variant;
  inputSize?: Size;
  inputState?: State;
  labelPosition?: LabelPosition;
};

export const Input = ({
  type,
  id,
  label,
  placeholder,
  variant = 'outlined',
  inputSize = 'normal',
  className,
  inputState,
  labelPosition = 'above',
}: Props & InputHTMLAttributes<HTMLInputElement>) => {
  const inputClasses = clsx(
    'px-1 py-0.5',
    'rounded-md',
    {
      'border-2': variant === 'outlined',
      'border-b-2 bg-gray-100': variant === 'filled',
      'text-sm': inputSize === 'small',
      'text-base': inputSize === 'normal',
    },
    {
      'border-green-500': inputState === 'success',
      'border-yellow-500': inputState === 'warning',
      'border-blue-500': inputState === 'active',
      'border-red-500': inputState === 'error',
      'border-gray-150 cursor-not-allowed': inputState === 'disabled',
    },
    className
  );

  return (
    <div
      className={clsx('flex gap-2', {
        'flex-col': labelPosition === 'above',
        'items-center': labelPosition === 'inline',
      })}
    >
      <label htmlFor={id}>{label}</label>
      <div>
        <input
          aria-label={label}
          disabled={inputState === 'disabled'}
          placeholder={placeholder}
          className={inputClasses}
          id={id}
          type={type}
        />
      </div>
    </div>
  );
};
