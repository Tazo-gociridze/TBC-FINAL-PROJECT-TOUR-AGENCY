import { FC, ReactNode } from 'react';

const ContactItem: FC<{ children: ReactNode; text: string }> = ({ children, text }) => {
  return (
    <li>
      <span className="flex items-center gap-x-3">
        <span className="text-xl font-bold text-blue-400">{children}</span>
        <span className="">{text}</span>
      </span>
    </li>
  );
};

export default ContactItem;
