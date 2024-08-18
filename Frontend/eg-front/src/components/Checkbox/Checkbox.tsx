import { InputProps } from "../../props-types/InputProps";

export default function Checkbox({
  label,
  name,
  placeholder,
  required,
  id,
  type,
}: InputProps) {
  return (
    <input
      id={id}
      aria-describedby="remember"
      type={type}
      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-orange-600 dark:ring-offset-gray-800"
      required={required}
      name={name}
    />
  );
}
