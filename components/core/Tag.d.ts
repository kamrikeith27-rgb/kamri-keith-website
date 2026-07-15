import React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Show a cyan status dot. @default false */
  dot?: boolean;
  /** Filled/selected state. @default false */
  active?: boolean;
  children?: React.ReactNode;
}

/** Outlined meta chip (skills, positions, filters). */
export function Tag(props: TagProps): JSX.Element;
