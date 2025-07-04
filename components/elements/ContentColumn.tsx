import type { ReactNode, ElementType } from 'react'

interface ContentColumnProps {
    id?: string
    as?: ElementType
    type?: string
    children: ReactNode
}

export default function ContentColumn({
    id,
    as,
    type,
    children,
}: ContentColumnProps) {
    const Component = as ?? 'div'

    return (
        <div
            id={id}
            className="site-padding-x flex flex-col items-center bg-white"
        >
            <Component className="min-h-[450px] w-full max-w-[870px] bg-white pb-[60px] pt-[30px] lg:pb-[100px] lg:pt-[70px] 2k3:min-h-[550px]">
                {children}
            </Component>
        </div>
    )
}
