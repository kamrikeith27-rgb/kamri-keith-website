import React from 'react';

export interface StatLineProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Left label (uppercased). */
  label: string;
  /** Right value. */
  value: React.ReactNode;
  /** Enlarge the value in the display face. @default false */
  emphasis?: boolean;
}

/** Compact label→value row with dotted leader for stat tables & measurables. */
export function StatLine(props: StatLineProps): JSX.Element;
