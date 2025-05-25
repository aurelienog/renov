'use client'

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export function useHashFromUrl(): string | null {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [hash, setHash] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    setHash(window.location.hash || null)
  }, [pathname, searchParams])

  return hash
}