export default function Btn ({ as, className, children}) {
  const Component = as || 'div'
  return (
    <div className='relative'>
      <Component className={className}>
        {children}
      </Component>
    </div>
  )
}