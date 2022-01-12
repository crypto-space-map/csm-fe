export const EMAIL_REG_EXP =
  /^([a-zA-Z0-9!#$%&'*+\\=?^_`{|}~-]+(\.[a-zA-Z0-9!#$%&'*+\\=?^_`{|}~-]+)*)@([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)\.([a-zA-Z]{2,})$/;
export const PASS_REG_EXP = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/g;

export const LETTERS_REG_EXP = /[a-zA-Za-яА-я]/g;

export const THOUSAND_REG_EXP = /(\d)(?=(\d\d\d)+([^\d]|$))/g;
