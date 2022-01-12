const http = 'http://';
const https = 'https://';

export const getProductNameFromPath = (path: string, type: 'fund' | 'project') => {
  if (path.includes(type)) {
    const parts = path.split('/');
    return parts[parts.length - 1];
  }
  return '';
};

export const cutLink = (link: string) =>
  link.includes('http://') ? link.replace(http, '') : link.replace(https, '');
