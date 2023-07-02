import React from "react";

type Props = {
  label?: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  type?: string;
  className?: string;
  id: string;
  required?: boolean;
  disabled?: boolean;
  autoComplete?: string;
  maxLength?: number;
  size?: string;
};

const Input = (props: Props) => {
  const {
    label,
    placeholder,
    value,
    onChange,
    name,
    type,
    className,
    id,
    required,
    disabled,
    autoComplete,
    maxLength,
    size,
  } = props;

  const defaultClassName =
    "border-pink-300 border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-white "+size;

  return (
    <div className="flex flex-col w-full">
      {label && <label htmlFor={id} className="mb-1 mt-4 font-semibold">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className={className || defaultClassName}
        id={id}
        required={required}
        disabled={disabled}
        autoComplete={autoComplete}
        maxLength={maxLength}
      />
    </div>
  );
};

export default Input;
