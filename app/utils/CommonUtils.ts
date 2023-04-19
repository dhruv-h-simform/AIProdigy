import { checkMultiple, requestMultiple } from 'react-native-permissions';
import { toastRef } from '../configs';

export const checkMultiplePermission = async (permission: any) => {
  const response = await checkMultiple(permission);
  return response;
};

export function multipleRequest(permission: any) {
  requestMultiple(permission).then(() => {
    checkMultiplePermission(permission);
  });
}

export const customFileNameForUpload = (filePath: string, name: string) => {
  const fileExtension = filePath?.split('.')?.pop() ?? '';
  return `${name}.${fileExtension}`;
};

export async function handleError(response: any) {
  if (response?.error?.message) {
    toastRef.current?.error(response?.error?.message);
  } else {
    return undefined;
  }
}
