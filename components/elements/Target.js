import cn from "classnames";

/**
 * Target component provides minimum touch target sizing (48x48px) for accessibility.
 * Handles all touch target logic internally - child components don't need 'target' class.
 */
export default function Target({ as, className, children }) {
  className ??= "";
  const Component = as || "div";
  return (
    <Component className={cn("relative target-wrapper", className)}>
      {children}
    </Component>
  );
}
