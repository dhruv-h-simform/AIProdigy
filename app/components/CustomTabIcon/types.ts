import type { IImageProps } from 'native-base';

export interface CustomTabIconProps extends IImageProps {
  icon: number;
  focused?: boolean;
}
