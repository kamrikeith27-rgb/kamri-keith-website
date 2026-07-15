import React from 'react';

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The big number (e.g. "1.82", "65", "12"). */
  value: React.ReactNode;
  /** Uppercase label under the number (e.g. "ERA"). */
  label: string;
  /** Optional unit shown beside the number (e.g. "MPH", "K"). */
  unit?: string;
  /** Optional small caption line. */
  caption?: string;
  /** Surface treatment. @default "plain" */
  variant?: 'plain' | 'hard' | 'ink' | 'royal';
  /** Text alignment. @default "left" */
  align?: 'left' | 'center';
}

/**
 * Hero stat block — huge numeral + label.
 * @startingPoint section="Data" subtitle="Big-number stat blocks" viewport="700x200"
 */
export function StatCard(props: StatCardProps): JSX.Element;
