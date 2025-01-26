import { cva } from 'class-variance-authority';

export const ButtonStyles = cva(
  [
    'rounded-md bg-[var(--main-color)] text-[12px] lg:text-[16px] px-6 py-2 text-[var(--white-color)]',
  ],
  {
    variants: {
      variant: {
        default: [
          'rounded-md bg-[var(--main-color)] px-6 py-2 text-[var(--white-color)] font-medium',
        ],
        secondary: ['rounded-md bg-black px-6 py-2 text-[var(--white-color)]'],
      },
      size: {},
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
