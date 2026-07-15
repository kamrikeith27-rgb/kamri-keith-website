import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Surface treatment. @default "plain" */
  variant?: 'plain' | 'hard' | 'ink' | 'royal';
  /** Padding in px. @default 24 */
  pad?: number;
  children?: React.ReactNode;
}

/**
 * Surface container with brand elevation treatments.
 * @startingPoint section="Core" subtitle="Card surfaces incl. varsity hard-shadow" viewport="700x240"
 */
export function Card(props: CardProps): JSX.Element;
