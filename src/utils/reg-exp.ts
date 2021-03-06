export const EMAIL_REG_EXP =
  /^([a-zA-Z0-9!#$%&'*+\\=?^_`{|}~-]+(\.[a-zA-Z0-9!#$%&'*+\\=?^_`{|}~-]+)*)@([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)\.([a-zA-Z]{2,})$/;
export const PASS_REG_EXP = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/g;

export const LETTERS_REG_EXP = /[a-zA-Za-яА-я]/g;

export const ONLY_NUMBERS_REG_EXP = /^[\d ]*$/;

export const NUMBER_SEPARATOR_REG_EXP = /\B(?=(\d{3})+(?!\d))/g;
export const THOUSAND_REG_EXP = /(\d)(?=(\d\d\d)+([^\d]|$))/g;
export const NUMBER_WITH_E = /(\d.\d+)(e-)(\d+)/;
export const SMALL_NUMBER_WITH_ZERO = /(\d.)(0+)(\d+)/;
