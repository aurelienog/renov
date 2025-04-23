import { StaticImageData } from 'next/image';
import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
}

export interface Column {
  title: string;
  one: string | React.ReactNode;
  two?: string | React.ReactNode;
  three?: string | React.ReactNode;
  four?: string | React.ReactNode;
  five?: string | React.ReactNode;
  six?: string | React.ReactNode;
  seven?: string | React.ReactNode;
  eight?: string | React.ReactNode;
}
export interface FaqEntry {
  question: string;
  answer: React.ReactNode;
}

export interface Service {
  name: string,
  image: StaticImageData
}

export interface WorkStep {
    name: string,
    description: string,
    icon: StaticImageData,
}

export interface BeforeAfterComparison {
    name: string,
    before: StaticImageData,
    after: StaticImageData,
}