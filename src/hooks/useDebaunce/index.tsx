import { useRef } from 'react';

const useDebounce = <T extends (...args: Parameters<T>) => void>(callback: T, delay: number) => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (...args: Parameters<T>): void => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export default useDebounce;
