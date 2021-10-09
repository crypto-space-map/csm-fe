export function getCookie(name: string) {
  let matches = document.cookie.match(
    new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`)
  );
  return matches ? matches[1] : undefined;
}

export type Options = { expires?: Date | string; path?: string; domain?: string };

export function setCookie(name: string, value: string, options: Options = {}) {
  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  const cookie = [];
  cookie.push(`${name}=${value}`);

  for (let optionKey in options) {
    if (Object.prototype.hasOwnProperty.call(options, optionKey)) {
      let optionValue = options[optionKey as keyof Options];
      if (optionValue) cookie.push(`${optionKey}=${optionValue}`);
    }
  }

  document.cookie = cookie.join(';');
}

export function deleteCookie(name: string) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}
