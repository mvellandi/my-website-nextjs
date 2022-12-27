import cn from "classnames"

export default function Target ({ as, className, children}) {
  const Component = as || 'div'
  return (
    <Component className={cn("relative", className)}>
      {children}
    </Component>
  )
}