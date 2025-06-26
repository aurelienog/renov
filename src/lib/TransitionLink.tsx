'use client'

import Link, { LinkProps } from 'next/link';
import React, { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function TransitionLink({
  children,
  href,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const body = document.querySelector('body');
    body?.classList.add('page-transition-out');
    await sleep(500);
    router.push(href);
    body?.classList.remove('page-transition-out');
    body?.classList.add('page-transition-in');
    await sleep(500);
    body?.classList.remove('page-transition-in');
  }

  return (
    <Link href={href} {...props} onClick={handleTransition}>{children}</Link>
  )
}

export default TransitionLink