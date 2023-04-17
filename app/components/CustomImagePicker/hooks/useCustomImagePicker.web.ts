import { useState } from 'react';
import { type Asset } from 'react-native-image-picker';

const useCustomImagePicker = () => {
  const [imageResponse, setImageResponse] = useState<Asset[]>([]);

  const handleCancel = (item: Asset) => null;

  const permissionsAllow = () => null;

  return {
    permissionsAllow,
    imageResponse,
    handleCancel,
  };
};

export default useCustomImagePicker;
