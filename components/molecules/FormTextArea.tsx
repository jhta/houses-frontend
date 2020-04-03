import { RequiredLabel } from '../atoms/RequireLabel';

export const FormTextArea = (props) => {
  const { label, name, value, onChange, className } = props;
  return (
    <>
      <label className={`block ${className}`}>
        <span className="text-gray-700">{label}</span>
        <textarea
          className="form-textarea mt-1 block w-full"
          rows={3}
          autoComplete="off"
          name={name}
          value={value}
          onChange={onChange}
        />
        <RequiredLabel name={name} />
      </label>
    </>
  );
};
