import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Apply the varsity hard offset shadow. @default false */
  hard?: boolean;
  /** Stretch to full container width. @default false */
  full?: boolean;
  /** Render as a different element (e.g. "a"). @default "button" */
  as?: 'button' | 'a';
  children?: React.ReactNode;
}

/**
 * Pill-shaped athletic action button.
 * @startingPoint section="Core" subtitle="Primary / secondary / accent action buttons" viewport="700x180"
 */
export function Button(props: ButtonProps): JSX.Element;
