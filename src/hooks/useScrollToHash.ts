'use client'

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react";

export function useScrollToHash(delay: number = 100): void {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if( typeof window === 'undefined') return

    const hash = window.location.hash;
    if(!hash) return

    const scrollToElement = (): void => {
      const element = document.querySelector<HTMLElement>(hash)
      if (element) {
        element.scrollIntoView({ block: 'start' })
      }
    }

    const timeout = setTimeout(scrollToElement, delay);

    return () => clearTimeout(timeout);
    
  }, [pathname, searchParams, delay])
}