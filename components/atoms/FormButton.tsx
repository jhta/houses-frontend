import classnames from 'classnames';
import { Spinner } from '../atoms';

export const FormButton = (props) => {
  const { children, disable, loading } = props;
  return (
    <label className="block">
      <button
        onClick={props.action}
        disabled={disable}
        className={classnames(
          'form-input mt-4 block font-bold text-base rounded',
          { 'bg-gray-5 text-textColor cursor-not-allowed': disable },
          { 'bg-primary text-white': !disable }
        )}
        type="submit"
      >
        {loading ? <Spinner /> : children}
      </button>
    </label>
  );
};
