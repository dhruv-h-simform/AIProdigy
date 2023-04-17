import type { ImageSourcePropType } from 'react-native/types';
import type { CustomImageProps } from '../CustomImage';
import type { IPressableProps } from 'native-base';
import type { IStackProps } from 'native-base';

export interface UsersCardProps {
  userDetails: { firstName: string; lastName?: string; email: string };
  profileImage?: ImageSourcePropType;
  profileImageProps?: CustomImageProps;
  cardProps?: CustomCardProps;
}

export interface CustomCardProps extends IStackProps {
  children?: React.ReactElement;
  pressableProps?: IPressableProps;
  onPress?: () => void;
  enableLine?: boolean;
  isSelected?: boolean;
  enableCircle?: boolean;
}
