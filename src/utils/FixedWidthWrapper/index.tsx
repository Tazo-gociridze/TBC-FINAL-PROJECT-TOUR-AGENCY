import { FC, HTMLAttributes, PropsWithChildren } from 'react';

type FixedWidthWrapperProps = HTMLAttributes<HTMLDivElement>;

const FixedWidthWrapper: FC<PropsWithChildren<FixedWidthWrapperProps>> = ({
  children,
  ...props
}) => {
  return (
    <div {...props} className="m-auto flex w-[1650px] items-center justify-between">
      {children}
    </div>
  );
};

export default FixedWidthWrapper;
