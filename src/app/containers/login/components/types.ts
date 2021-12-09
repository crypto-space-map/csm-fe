export enum UserForms {
  LOGIN,
  REGISTER,
  FORGOT_PASS,
}

export type SignFormProps = {
  signIn?: boolean;
  handleClickForgotPass: () => void;
};
