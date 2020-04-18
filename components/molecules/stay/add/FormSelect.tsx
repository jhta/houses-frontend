import { Select, FormLabel } from '../../../atoms';

export const FormSelect = ({ options = [], label = '', onChange }) => (
  <div className="flex flex-col mb-6">
    <FormLabel>{label}</FormLabel>
    <Select options={options} onChange={onChange} />
  </div>
);
