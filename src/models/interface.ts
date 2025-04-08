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