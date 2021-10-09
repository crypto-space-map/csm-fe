export const validateLdap = (username: string | undefined) =>
  username &&
  username.length >= 8 &&
  (/^\d{8,}@leroymerlin.ru$/g.test(username) ||
    /^ru1000\/\d{8,}$/g.test(username) ||
    /^\d{8,}$/g.test(username));

export const validatePassword = (password: string | undefined) =>
  password && password.length >= 8 && password.length <= 127;
