import type { ITextProps, IAvatarProps } from 'native-base';
import type { ImageSourcePropType } from 'react-native/types';

export interface CustomAvatarProps extends IAvatarProps {
  placeholder?: string;
  size?: string | number | Array<number> | Array<string>;
  source?: ImageSourcePropType;
  name?: string;
  textType?: string;
  textProps?: ITextProps;
  subTitle?: string;
  subTitleTextProps?: ITextProps;
  subTitleTextType?: string;
}
