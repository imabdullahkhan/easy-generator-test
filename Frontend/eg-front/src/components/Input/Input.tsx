import React, { memo } from "react";
import { InputProps } from "../../props-types/InputProps";

function Input({
  label,
  name,
  placeholder,
  required,
  id,
  type,
  touched,
  error,
  onChange,
  onBlur,
  value
}: InputProps) {
  return (
    <>
      {label ? (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      ) : null}
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder || ''}
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required={required}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {touched && error && <div style={{ color: 'red' }}>{error}</div>}
    </>
  );
}

export default memo(Input);