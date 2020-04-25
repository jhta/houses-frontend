import { RequiredLabel } from '../atoms/RequireLabel';

export const FormInput = (props) => {
  const { label, name = '', type, value, onChange, className } = props;
  return (
    <>
      <label className={`block ${className}`}>
        <span className="text-gray-700">{label}</span>
        <input
          className="form-input mt-1 block w-full"
          autoComplete="off"
          name={name}
          type={type}
          value={value}
          onChange={onChange}
        />
        {/* <RequiredLabel name={name} /> */}
      </label>
    </>
  );
};
