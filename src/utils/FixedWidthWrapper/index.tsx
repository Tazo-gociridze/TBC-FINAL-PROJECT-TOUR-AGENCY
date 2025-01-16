import { FC, HTMLAttributes, PropsWithChildren } from 'react';

interface FixedWidthWrapperProps extends HTMLAttributes<HTMLDivElement> {}

const FixedWidthWrapper: FC<PropsWithChildren<FixedWidthWrapperProps>> = ({ children, ...props }) => {
  return <div {...props} className="w-[1300px] m-auto flex items-center justify-between">{children}</div>;
};

export default FixedWidthWrapper;
