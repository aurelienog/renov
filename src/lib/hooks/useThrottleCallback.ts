import { useCallback, useEffect, useRef } from "react";

function useThrottleCallback<Args extends unknown[]>(
  callback: (...args: Args) => void,
  delay: number
): (...args: Args) => void {
  const lastExecutionTimeRef = useRef(0);
  const latestCallbackRef = useRef(callback);

  useEffect(() => {
    latestCallbackRef.current = callback;
  }, [callback]);

  return useCallback((...args: Args) => {
    const now = Date.now();
    if (now - lastExecutionTimeRef.current >= delay) {
      lastExecutionTimeRef.current = now;
      latestCallbackRef.current(...args);
    }
  }, [delay]);
}


export default useThrottleCallback