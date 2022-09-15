import { Field } from "./Filter.styled";

interface AppProps {
  value: string;
  onChangeFilter: any;
}

export const Filter = ({ value, onChangeFilter }: AppProps) => {
  return (
    <label>
      Search contacts:
      <Field
        type="text"
        value={value}
        onChange={onChangeFilter}
        placeholder="enter contact"
      />
    </label>
  );
};
