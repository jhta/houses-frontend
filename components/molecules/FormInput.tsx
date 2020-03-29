import { RequiredLabel } from '../atoms/RequireLabel';

export const FormInput = (props) => {
  const { label, name } = props;
  return (
    <div>
      <label className="block">
        <span className="text-gray-700">{label}</span>
        <input className="form-input mt-1 block w-full" autoComplete="off" name={name} {...props} />
      </label>
      <RequiredLabel name={name} />
    </div>
  );
};
