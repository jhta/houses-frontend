import React from 'react';
import { RequiredLabel } from '../atoms/RequireLabel';

export const FormDropdown = (props) => {
  const { children, labeltag, name, label, required } = props;
  return (
    <div>
      <label className="block">
        <span className="text-gray-700">{labeltag}</span>
        <select {...props} name={name} required={required} className="form-select mt-1 block w-full">
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
      </label>
      <RequiredLabel name={name} />
    </div>
  );
};
