import classnames from 'classnames';

export const FormStep = ({ children, isActive = false }) => (
  <div
    className={classnames(
      'py-1 px-10 rounded-full mr-6 text-2xl',
      { 'bg-primary text-white': isActive },
      { 'bg-gray-6 text-gray-2': !isActive }
    )}
  >
    {children}
  </div>
);
