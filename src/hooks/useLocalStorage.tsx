"use client";
import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  /**
   * Initialize state with a default value.
   * This will be updated from localStorage (if available) once the component mounts and runs in the client.
   */
  const [value, setValue] = useState<T>(() => {
    //  Check if initialValue is a function, otherwise just use initialValue directly.
    return typeof initialValue === "function"
      ? (initialValue as () => T)()
      : initialValue;
  });

  // Use useEffect to interact with localStorage once the component has mounted
  // and is running in the client-side environment where window is available.
  useEffect(() => {
    try {
      const jsonValue = localStorage.getItem(key);
      // Only update the state if jsonValue is not null, otherwise keep the initial state
      if (jsonValue != null) {
        setValue(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.log(error);
    }

    // This effect should only run once on mount, hence the empty dependency array.
    // However, if you want it to run whenever the key changes, you can include [key] in the dependency array.
  }, [key]);

  // Call an effect to update localStorage each time 'value' changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}
