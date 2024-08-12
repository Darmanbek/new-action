import dayjs from 'dayjs';

export const phoneFormatter = (phone?: string | null) => {
  return phone
    ? phone.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '+$1 $2 $3 $4 $5')
    : '-';
};

export const phoneReverseFormatter = (phone?: string | null) => {
  return phone ? phone.replace(/ /g, '').substring(1) : '-';
};

export const priceFormatter = (price?: number) => {
  if (price === undefined) return 0;
  return Intl.NumberFormat('ru-RU', {}).format(price);
};

export const formatEmpty = <T>(value?: T) => value || '-';

export const formatNum = <T>(value: T) =>
  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const handleNumericInputKeyDown = (
  event: React.KeyboardEvent<HTMLInputElement>
) => {
  const charCode = event.which ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) event.preventDefault();
};

export const formatPercent = <T>(value: T) => `${value}%`;

export const dateFormatter = (date: string, format?: string) =>
  dayjs(date).format(format || 'YYYY-MM-DD');

export const getDayTime = () => {
  const hour = new Date().getHours();
  if ([7, 8, 9, 10, 11, 12].includes(hour)) {
    return 'Доброе утро,';
  }
  if ([13, 14, 15, 16, 17, 18].includes(hour)) {
    return 'Добрый день,';
  }
  if ([22, 23, 0, 1, 22].includes(hour)) {
    return 'Добрый вечер,';
  }
  return 'Добрая ночь,';
};

export const roleColor = (role?: number) => {
  switch (role) {
    case 1:
      return 'magenta';
    case 2:
      return 'geekblue';
    case 3:
      return 'cyan';
    default:
      return 'green';
  }
};
