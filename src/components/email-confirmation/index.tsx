import React from 'react';
import ConfirmationHeader from './components/email-confirmation-header';
import ConfirmationContent from './components/email-confirmation-content';
import ConfirmationFooter from './components/email-confirmation-footer';

export interface EmailConfirmationProps {
  email: string | null;
  getEmailServiceLink: (email: string | null) => string | null;
}

const EmailConfirmation: React.FC<EmailConfirmationProps> = ({ email, getEmailServiceLink }) => {
  return (
    <div className="mx-auto max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-xl">
      <ConfirmationHeader />
      <ConfirmationContent getEmailServiceLink={getEmailServiceLink} email={email} />
      <ConfirmationFooter />
    </div>
  );
};

export default EmailConfirmation;
