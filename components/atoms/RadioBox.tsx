export const RadioBox = ({ label = '', checked = false }) => (
  <label className="inline-flex items-center">
    <input type="radio" className="form-radio" name="radio" checked={checked} />
    <span className="ml-2">{label}</span>
  </label>
);
