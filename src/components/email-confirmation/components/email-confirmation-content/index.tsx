import { FC } from 'react';
import { EmailConfirmationProps } from '../..';

const ConfirmationContent: FC<EmailConfirmationProps> = ({ getEmailServiceLink, email }) => {
  return (
    <>
      <p className="mb-6 text-center leading-relaxed text-gray-600">
        Please check your inbox at
        <a
          href={getEmailServiceLink(email) || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 font-medium text-blue-600 hover:underline"
        >
          {email}
        </a>
        to confirm your email.
      </p>
    </>
  );
};

export default ConfirmationContent;
