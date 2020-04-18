import { RadioBox } from '../atoms';

export const FormRadioBox = ({ label = '', secondaryLabel = '', value, ...rest }) => (
  <div className="my-3">
    <RadioBox label={label} {...rest} value={value} />
    <p>{secondaryLabel}</p>
  </div>
);
