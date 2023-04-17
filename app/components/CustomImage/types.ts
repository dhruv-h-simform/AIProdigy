import type { IImageProps } from 'native-base';
import type { ImageSourcePropType } from 'react-native/types';

export interface CustomImageProps extends IImageProps {
  source?: ImageSourcePropType;
}
