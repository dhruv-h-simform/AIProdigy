import type { IButtonProps, IImageProps } from 'native-base';

export interface CustomButtonProps extends IButtonProps {
  title: string;
  children?: React.ReactElement;
  leftIconProps?: IImageProps;
}
