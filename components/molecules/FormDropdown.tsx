import React from 'react';
import { RequiredLabel } from '../atoms/RequireLabel';

export const FormDropdown = (props) => {
  const { children, labeltag, name, label, required, onChange, onBlur, value, className } = props;
  return (
    <>
      <label className={`block ${className}`}>
        <span className="text-gray-700">{labeltag}</span>
        <select
          name={name}
          required={required}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          className="form-select mt-1 block w-full"
        >
          {label && (
            <option value="" hidden>
              {label}
            </option>
          )}
          {children &&
            children.map((option) => (
              <option value={option.id} key={option.id}>
                {option.value}
              </option>
            ))}
        </select>
        <RequiredLabel name={name} />
      </label>
    </>
  );
};
