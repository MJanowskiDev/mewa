import { ReactNode, SelectHTMLAttributes } from 'react';
import clsx from 'clsx';

type Variant = 'outlined' | 'filled';
type Size = 'small' | 'normal';
type State = 'success' | 'error' | 'warning' | 'active' | 'disabled';
type LabelPosition = 'inline' | 'above';

type Props = {
  options: Option[];
  label: string;
  variant?: Variant;
  selectSize?: Size;
  selectState?: State;
  labelPosition?: LabelPosition;
};

type Option = {
  value: string;
  label: ReactNode;
};

export const Select = ({
  options,
  label,
  labelPosition = 'above',
  id,
  variant = 'outlined',
  selectSize = 'normal',
  className,
  selectState,
  ...rest
}: Props & SelectHTMLAttributes<HTMLSelectElement>) => {
  const selectClasses = clsx(
    'px-1 py-0.5',
    'rounded-md',
    {
      'border-2': variant === 'outlined',
      'border-b-2 bg-gray-100': variant === 'filled',
      'text-sm': selectSize === 'small',
      'text-base': selectSize === 'normal',
    },
    {
      'border-green-500': selectState === 'success',
      'border-yellow-500': selectState === 'warning',
      'border-blue-500': selectState === 'active',
      'border-red-500': selectState === 'error',
      'border-gray-150 cursor-not-allowed': selectState === 'disabled',
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
        <select
          aria-label={label}
          id={id}
          disabled={selectState === 'disabled'}
          className={selectClasses}
          {...rest}
        >
          {options.map((option, index) => (
            <option
              key={`option-${option.value}-index-${index}`}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
