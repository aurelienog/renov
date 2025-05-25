'use client'
import { useEffect, useState } from 'react';
import { useHashFromUrl } from './useHashFromUrl';

export function useOpenDetails(targetId: string): boolean {
  const hash = useHashFromUrl()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(hash === `#${targetId}`)
  }, [hash, targetId])

  return isOpen
}