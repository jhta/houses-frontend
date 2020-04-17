import { RadioBox } from '../atoms';

export const FormRadioBox = ({ label = '', secondaryLabel = '', checked = false }) => (
  <div className="my-3">
    <RadioBox checked={checked} label={label} />
    <p>{secondaryLabel}</p>
  </div>
);
