import { StaticImageData } from 'next/image';

export interface Column {
  title: string;
  one: string | React.ReactNode
  two?: string | React.ReactNode
  three?: string | React.ReactNode
  four?: string | React.ReactNode
  five?: string | React.ReactNode
  six?: string | React.ReactNode
  seven?: string | React.ReactNode
  eight?: string | React.ReactNode
}
export interface FaqEntry {
  question: string;
  answer: React.ReactNode;
}

export interface Service {
  name: string
  image: StaticImageData
  rank: number
  id: string
}

export interface WorkStep {
    name: string
    description: string
    icon: StaticImageData
}

export interface BeforeAfterComparison {
    name: string
    before: StaticImageData
    after: StaticImageData
}

export interface TrustStatistic {
  icon: StaticImageData | StaticImageData[],
  stat: number
  information: string
  prefix? : string
  suffix?: string
  characters?: number // necessary to animate the numbers without impacting the position of the text
}

export interface DetailedService {
  title: string
  intro : string
  details: React.ReactNode
  result: string
  image: StaticImageData
  id: string
}