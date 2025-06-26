import cn from "classnames";
import type { ReactNode, ElementType } from 'react';

interface TargetProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/**
 * Target component provides minimum touch target sizing (48x48px) for accessibility.
 * Handles all touch target logic internally - child components don't need 'target' class.
 */
export default function Target({ as, className, children }: TargetProps) {
  className ??= "";
  const Component = as || "div";
  return (
    <Component className={cn("relative target-wrapper", className)}>
      {children}
    </Component>
  );
}