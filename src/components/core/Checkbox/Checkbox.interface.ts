export default interface CheckboxInterface {
  label: string;
  checked?: boolean;
  onChange?: () => void;
  disabled?: boolean;
}
