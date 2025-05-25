'use client'
import { useEffect } from "react";
import { useHashFromUrl } from "./useHashFromUrl";

export function useScrollToHash(delay: number = 100): void {
  const hash = useHashFromUrl();

  useEffect(() => {
    if(!hash) return

    const scrollToElement = (): void => {
      const element = document.querySelector<HTMLElement>(hash)
      if (element) {
        element.scrollIntoView({ block: 'center' })
      }
    }

    const timeout = setTimeout(scrollToElement, delay);

    return () => clearTimeout(timeout);
    
  }, [hash, delay])
}