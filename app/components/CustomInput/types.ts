import type {
  IFormControlErrorMessageProps,
  IFormControlLabelProps,
  IInputProps,
} from 'native-base';
import type { IFormControlProps } from 'native-base';

export interface CustomTextInputProps extends IInputProps {
  label?: string;
  labelVariant?: string;
  errorMessage?: string;
  formControlProps?: IFormControlProps;
  formControlLabelProps?: IFormControlLabelProps;
  formControlErrorProps?: IFormControlErrorMessageProps;
  isInvalid?: boolean | any;
  rightText?: string;
  required?: boolean;
}
