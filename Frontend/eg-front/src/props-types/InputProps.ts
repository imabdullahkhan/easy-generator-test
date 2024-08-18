export interface InputProps {
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  id: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
  value?: string | number
}
