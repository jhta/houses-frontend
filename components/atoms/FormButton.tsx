import classnames from 'classnames';

export const FormButton = (props) => {
  const { children, disable } = props;
  return (
    <label className="block">
      <button
        onClick={props.action}
        disabled={disable}
        className={classnames(
          'form-input mt-4 block font-bold text-base w-full rounded',
          { 'bg-gray-5 text-textColor cursor-not-allowed': disable },
          { 'bg-primary text-white': !disable }
        )}
        type="submit"
      >
        {children}
      </button>
    </label>
  );
};
