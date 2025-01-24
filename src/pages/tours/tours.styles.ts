import { cva } from 'class-variance-authority';

export const sectionStyles = cva(
  'mt-16 bg-gray-100 px-4 py-8 pt-16 dark:bg-gray-900 transition-[0.5s]'
);

export const titleStyles = cva('mb-8 text-4xl font-semibold text-gray-800 dark:text-white');

export const cardStyles = cva(
  `transform rounded-xl bg-white border-gray shadow-2xl transition-all select-none
  overflow-hidden duration-300 ease-in-out hover:scale-105 hover:shadow-lg dark:bg-gray-800 border-[#ffffff26]`,
  {
    variants: {
      hoverable: {
        true: 'hover:shadow-lg',
        false: '',
      },
    },
  }
);

export const inputSearchStyles = cva('h-12');

export const selectStyles = cva('w-full sm:w-auto', {
  variants: {
    height: {
      full: 'style={{ height: "100%" }}',
    },
  },
});

export const cardMetaStyles = cva('p-4');

export const buttonStyles = cva(
  'bg-gradient-to-r rounded-full from-blue-500 to-teal-500 px-6 py-2 text-lg text-gray-800 transition-all hover:scale-105'
);
