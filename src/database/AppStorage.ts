import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: string | object) => {
  try {
    if (typeof value === 'string') {
      await AsyncStorage.setItem(key, value);
      console.log('yepp');
    } else {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    }
  } catch (e) {
    // saving error
  }
};

export const removeData = async (key: string) => {
  try {
    AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(e);
  }
};

export const getData = async (key: string) => {
  let value = null;
  try {
    value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
  }
};

export const getObjectData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};