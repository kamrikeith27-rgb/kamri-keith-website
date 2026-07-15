import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. @default "royal" */
  tone?: 'royal' | 'ink' | 'accent' | 'clay' | 'spirit';
  /** Use the soft (tinted) variant. @default false */
  soft?: boolean;
  children?: React.ReactNode;
}

/**
 * Small uppercase status/label pill.
 * @startingPoint section="Core" subtitle="Status & label badges" viewport="700x130"
 */
export function Badge(props: BadgeProps): JSX.Element;
