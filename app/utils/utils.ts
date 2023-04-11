import moment from 'moment';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const hexToRgb = (hex: string, alpha: number) => {
  hex = hex.replace('#', '');
  const r = parseInt(
    hex.length == 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2),
    16,
  );
  const g = parseInt(
    hex.length == 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4),
    16,
  );
  const b = parseInt(
    hex.length == 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6),
    16,
  );
  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
};

export const getActiveRouteName: any = (state: any) => {
  const route = state?.routes[state?.index || 0];
  if (route?.state) {
    return getActiveRouteName(route?.state);
  }
  return route?.name;
};

export const dateFormat = (date: string | undefined, format = 'YYYY-MM-DD') => {
  return !!date ? moment(date)?.format(format) : '';
};

export const diffrenceDate = (startDate: string, endDate: string) => {
  const dateB = moment(endDate);
  const dateC = moment(startDate);

  const day = dateB.diff(dateC, 'days');
  const week = dateB.diff(dateC, 'weeks');
  const months = dateB.diff(dateC, 'months');
  const year = dateB.diff(dateC, 'years');

  if (months >= 12) {
    return `${year} Year`;
  } else if (week > 4) {
    return `${months} Months`;
  } else if (day >= 7) {
    return `${week} Weeks`;
  }
  return !isNaN(day) ? `${day} Days` : `0 Days`;
};
