import React from "react";

const Input = ({
  label,
  id,
  value,
  onChange,
  onBlur,
  name,
  type,
  autoComplete,
  placeholder,
  touched,
  error,
  ...rest
}) => {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value !== undefined && value !== null ? value : ""}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={autoComplete}
        placeholder={placeholder}
        {...rest}
      />
      {touched && error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
};

export default Input;
