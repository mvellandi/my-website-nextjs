import HTMLComment from 'react-html-comment'
import type { ReactNode, ElementType } from 'react'

interface ContentColumnProps {
    as?: ElementType
    children: ReactNode
}

export default function ContentColumn({ as, children }: ContentColumnProps) {
    const Component = as ?? 'div'

    return (
        <>
            <HTMLComment text="CENTER COLUMN" />
            <div className="site-padding-x flex flex-col items-center bg-white">
                <HTMLComment text="CONTENT ITEM" />
                <Component className="project flex w-full max-w-[870px] flex-col gap-14 bg-white pb-[60px] pt-[35px] sm:gap-24 lg:pb-[100px] lg:pt-[50px] xl:max-w-screen-xl xl:flex-none xl:gap-40">
                    {children}
                </Component>
            </div>
        </>
    )
}
