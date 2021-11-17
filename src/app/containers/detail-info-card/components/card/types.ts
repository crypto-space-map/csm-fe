export interface CompanyProps {
  title: string;
  linkText: string;
  link: string;
  logo: string;
}

export interface ButtonsProps {
  id: string;
  text: string;
  link: string;
}

export interface CardProps {
  company: CompanyProps;
  text: string;
  date?: string;
  buttons?: ButtonsProps[];
}
