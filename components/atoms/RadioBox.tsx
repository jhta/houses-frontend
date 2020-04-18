export const RadioBox = ({ label = '', checked = false, ...rest }) => (
  <label className="inline-flex items-center">
    <input type="radio" className="form-radio" name="radio" checked={checked} {...rest} />
    <span className="ml-2">{label}</span>
  </label>
);
