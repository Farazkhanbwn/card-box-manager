import React from 'react'
import { CustomInputProps } from './custom-input.types'
import { customInput, customInputError, customInputFocus, customInputLabel } from './custom-input.styles'

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
        <label htmlFor={name} className={customInputLabel}>
          {label}
        </label>
      )}
      <input
        name={name}
        type={type}
        className={`${customInput} ${customInputFocus} ${className}`}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        required={required}
        placeholder={placeholder}
        id={name}
      />
      {errorMessage && <div className={customInputError}>{errorMessage}</div>}
    </div>
  )
}

export default CustomInput
