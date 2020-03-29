import { ErrorMessage } from 'formik';

export const RequiredLabel = (props) => (
  <span className="text-requiredColor text-xs italic">
    <ErrorMessage {...props} />
  </span>
);
