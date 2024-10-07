export const loadFromStorage = <T>(key: string): T | undefined => {
    try {
      const serializedData = localStorage.getItem(key);
      return serializedData ? JSON.parse(serializedData) as T : undefined;
    } catch (e) {
      console.error(`Error loading key "${key}" from localStorage:`, e);
      return undefined;
    }
  };
  
  export const saveToStorage = <T>(key: string, data: T): void => {
    try {
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);
    } catch (e) {
      console.error(`Error saving key "${key}" to localStorage:`, e);
    }
  };
  
  export const removeFromStorage = (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error(`Error removing key "${key}" from localStorage:`, e);
    }
  };
  