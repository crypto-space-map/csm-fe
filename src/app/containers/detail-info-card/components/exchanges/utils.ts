import moment from 'moment';

export const getUpdatevalue = (dateUpdateAt: string) => {
  const duration = moment.duration(moment().diff(moment(dateUpdateAt)));
  const hours = Math.floor(duration.asHours());
  const minutes = Math.floor(duration.asMinutes());
  return hours ? `${hours}h ago` : `${minutes}m ago`;
};
