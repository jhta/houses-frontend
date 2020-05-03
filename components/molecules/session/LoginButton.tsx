import classnames from 'classnames';
import { Spinner } from '../../atoms';

export const FormButton = (props) => {
  const { children, disable, isLoading } = props;
  return (
    <label className="block">
      <button
        disabled={disable}
        className={classnames(
          'form-input mt-4 block font-bold text-base w-full rounded',
          { 'bg-gray-2 text-textColor p-3 cursor-not-allowed': disable },
          { 'bg-primary text-white': !disable }
        )}
        type="submit"
      >
        {isLoading ? <Spinner /> : children}
      </button>
    </label>
  );
};
