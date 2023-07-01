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
  } = props;

  const defaultClassName =
    "border-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500";

  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
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
