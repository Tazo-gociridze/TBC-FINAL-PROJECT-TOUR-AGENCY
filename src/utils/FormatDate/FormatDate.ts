import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

export const formatDate = (date: Date) => {
  return format(date, 'MMMM dd, yyyy', { locale: enUS });
};
