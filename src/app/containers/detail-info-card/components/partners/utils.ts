const http = 'http://';
const https = 'https://';

export const cutLink = (link: string) =>
  link.includes('http://') ? link.replace(http, '') : link.replace(https, '');
