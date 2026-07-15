import React from 'react';

export interface NumberMarkProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Text inside the plate — jersey number or monogram. @default "5" */
  value?: string;
  /** Plate shape. @default "circle" */
  shape?: 'circle' | 'shield' | 'plate';
  /** Color tone. @default "royal" */
  tone?: 'royal' | 'ink' | 'accent' | 'outline' | 'chalk';
  /** Diameter/size in px. @default 96 */
  size?: number;
}

/**
 * Jersey-number brand device (stands in for a logo).
 * @startingPoint section="Brand" subtitle="Jersey-number / monogram mark" viewport="700x220"
 */
export function NumberMark(props: NumberMarkProps): JSX.Element;
