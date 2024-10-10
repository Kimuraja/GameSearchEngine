import { useRef, useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFunction = (...args: any[]) => void;


export function useDebounce<DebouncedFunction extends AnyFunction>(
  func: DebouncedFunction,
  delay = 1000
) {


  const timer = useRef<ReturnType<typeof setTimeout>>();


  useEffect(() => {
    return () => {
      if (!timer.current) return;
      clearTimeout(timer.current);
    };
  }, []);


  const debouncedFunction = ((...args: Parameters<DebouncedFunction>) => {
    const newTimer = setTimeout(() => {
      func(...args);
    }, delay);
    clearTimeout(timer.current);
    timer.current = newTimer;
  }) as DebouncedFunction;

  return debouncedFunction;
}
