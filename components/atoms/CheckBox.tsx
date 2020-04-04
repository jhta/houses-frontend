export const CheckBox = (props) => {
  const { children, isChecked, onChange } = props;
  return (
    <div className="flex">
      <label className="flex items-center">
        <input type="checkbox" className="form-checkbox border-titleColor" onChange={onChange} checked={isChecked} />
        <span className="ml-2">{children}</span>
      </label>
    </div>
  );
};
