import React from 'react'
import style from './custom-input.styles.module.css'
import { CustomInputProps } from './custom-input.types'

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  type,
  className,
  placeholder,
  onChange,
  readOnly,
  errorMessage,
  required,
  value,
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={name} className={style['custom-input_label']}>
          {label}
        </label>
      )}
      <input
        name={name}
        type={type}
        className={`${style['custom-input']} ${className}`}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        required={required}
        placeholder={placeholder}
        id={name}
      />
      {errorMessage && <div className={style['custom-input__error']}>{errorMessage}</div>}
    </div>
  )
}

export default CustomInput
