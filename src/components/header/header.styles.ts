import { cva } from 'class-variance-authority';

export const ChangeLangAndThemeContainerStyles = cva(['flex items-center gap-x-5 text-white'], {
  variants: {
    variant: {
      default: 'flex items-center gap-x-5 text-white',
    },
    size: {},
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const ChangeThemeStyles = cva(
  [
    'flex h-9 w-9 text-[11px] lg:text-xl lg:h-10 lg:w-10 cursor-pointer items-center justify-center rounded-md bg-[#0000003] text-xl',
  ],
  {
    variants: {
      variant: {
        default:
          'flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-[#0000003a] text-xl',
      },
      size: {},
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
