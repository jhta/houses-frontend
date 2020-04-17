import { Select, FormLabel } from '../../../atoms';

export const FormSelect = ({ options = [], label = '' }) => (
  <div className="flex flex-col mb-6">
    <FormLabel>{label}</FormLabel>
    <Select options={options} />
  </div>
);
