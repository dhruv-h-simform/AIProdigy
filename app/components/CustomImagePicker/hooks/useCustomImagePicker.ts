import { useState } from 'react';
import { Alert } from 'react-native';
import {
  type Asset,
  type CameraOptions,
  type ImageLibraryOptions,
  type ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
  type PhotoQuality,
} from 'react-native-image-picker';
import { openSettings, PERMISSIONS } from 'react-native-permissions';
import { isAndroid } from '../../../theme';
import { checkMultiplePermission, multipleRequest } from '../../../utils';

interface CustomImagePickerHookProps {
  selectionLimit: number;
  quality: PhotoQuality;
  options: CameraOptions | ImageLibraryOptions;
  setImages: [];
}

const useCustomImagePicker = ({
  selectionLimit,
  quality,
  options,
  setImages,
}: CustomImagePickerHookProps) => {
  const [imageResponse, setImageResponse] = useState<Asset[]>(setImages);
  const launchHandle = (response: ImagePickerResponse) => {
    if (response?.didCancel) {
      return;
    }
    setImageResponse([...imageResponse, ...(response?.assets || [])]);
  };

  const onAddImage = (type: string) => {
    const optionss: CameraOptions | ImageLibraryOptions = {
      ...{
        mediaType: type,
        maxWidth: 300,
        maxHeight: 550,
        quality: quality,
        saveToPhotos: true,
        includeBase64: false,
        selectionLimit: selectionLimit,
        presentationStyle: 'fullScreen',
      },
      ...options,
    };

    if (type === 'capture') {
      launchCamera(optionss, response => {
        launchHandle(response);
      });
    } else {
      launchImageLibrary(optionss, response => {
        launchHandle(response);
      });
    }
  };

  const handleCancel = (item: Asset) => {
    const newResponse = imageResponse?.filter((value: Asset) => value !== item);
    setImageResponse(newResponse);
  };

  const permissionsAllow = () => {
    checkMultiplePermission([
      PERMISSIONS.ANDROID.CAMERA,
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      PERMISSIONS.IOS.PHOTO_LIBRARY,
      PERMISSIONS.IOS.CAMERA,
    ]).then(res => {
      if (res[PERMISSIONS.IOS.PHOTO_LIBRARY] === 'limited') {
        openSettings();
      } else if (
        (!isAndroid
          ? res[PERMISSIONS.IOS.PHOTO_LIBRARY]
          : res[
              (PERMISSIONS.ANDROID.CAMERA,
              PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
            ]) === 'denied'
      ) {
        multipleRequest([
          PERMISSIONS.IOS.PHOTO_LIBRARY,
          PERMISSIONS.ANDROID.CAMERA,
          PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
        ]);
      } else if (
        (!isAndroid
          ? res[PERMISSIONS.IOS.PHOTO_LIBRARY]
          : res[
              (PERMISSIONS.ANDROID.CAMERA,
              PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
            ]) === 'blocked'
      ) {
        openSettings();
      } else if (
        (!isAndroid
          ? res[PERMISSIONS.IOS.PHOTO_LIBRARY]
          : res[
              (PERMISSIONS.ANDROID.CAMERA,
              PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
            ]) === 'granted'
      ) {
        Alert.alert('Upload Attachments', 'Choose Options', [
          {
            text: 'Camera',
            onPress: () => {
              onAddImage('capture');
            },
          },
          {
            text: 'Gallery',
            onPress: () => {
              onAddImage('photo');
            },
          },
          { text: 'Cancel' },
        ]);
      } else if (
        (!isAndroid
          ? res[PERMISSIONS.IOS.CAMERA]
          : res[
              (PERMISSIONS.ANDROID.CAMERA,
              PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
            ]) === 'unavailable'
      ) {
        Alert.alert('No Camera Device Found');
      }
    });
  };

  return {
    permissionsAllow,
    imageResponse,
    handleCancel,
  };
};

export default useCustomImagePicker;
