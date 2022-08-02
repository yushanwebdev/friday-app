import AsyncStorage from '@react-native-async-storage/async-storage';

const Storage = {
  get: async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);

      if (value) return JSON.parse(value);

      return value;
    } catch (error) {
      console.error(`AsyncStorage Get Failed: ${key}`, error);
    }
  },
  set: (key: string, value: any) => {
    try {
      return AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`AsyncStorage Set Failed: ${key}`, error);
    }
  },
};

export default Storage;
