import type { ITextProps } from 'native-base';
import type { IImageProps, IStackProps } from 'native-base';
import type {
  Asset,
  CameraOptions,
  ImageLibraryOptions,
  PhotoQuality,
} from 'react-native-image-picker';

export interface InputFile {
  click: () => void;
}

export interface CustomImagePickerProps extends IStackProps {
  selectionLimit?: number;
  quality?: PhotoQuality;
  options?: CameraOptions | ImageLibraryOptions;
  label: string;
  onImageAdd?: (res: Asset[]) => void;
  imageProps?: IImageProps;
  imageIconProps?: IImageProps;
  labelTextProps?: ITextProps;
  enableAttachment?: boolean;
  attachmentProps?: IImageProps;
  isDisabled?: boolean;
  required?: boolean;
  setImages?: [];
}
