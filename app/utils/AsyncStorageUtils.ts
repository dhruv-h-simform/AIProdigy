import AsyncStorage from '@react-native-async-storage/async-storage';

type StorageKey = string;

export const saveString = async (
  key: StorageKey,
  value: string
): Promise<boolean> => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    return false;
  }
};

export const save = async (key: StorageKey, value: any): Promise<boolean> =>
  saveString(key, JSON.stringify(value));

export const getString = async (key: StorageKey): Promise<string | null> => {
  try {
    return AsyncStorage.getItem(key);
  } catch (error) {
    return null;
  }
};

export const get = async (key: StorageKey): Promise<string | null> => {
  try {
    const itemString = await AsyncStorage.getItem(key);
    if (itemString) {
      return JSON.parse(itemString);
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export const remove = async (
  key: StorageKey | StorageKey[]
): Promise<boolean> => {
  try {
    if (Array.isArray(key)) {
      await AsyncStorage.multiRemove(key);
    } else {
      await AsyncStorage.removeItem(key);
    }
    return true;
  } catch (error) {
    return false;
  }
};

export const clear = async (): Promise<boolean> => {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (error) {
    return false;
  }
};

export default {
  saveString,
  getString,
  save,
  get,
  remove,
  clear,
};
