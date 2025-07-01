import Card from './Card'
import HTMLComment from 'react-html-comment'
import type { ElementType } from 'react'
import type { ContentApiResponse } from '../../types'

interface ItemsProps {
    data: ContentApiResponse
    as?: ElementType
}

export default function Items({
    data: { _type, route, value: items },
    as,
}: ItemsProps) {
    const Component = as ?? 'div'
    return (
        <>
            <HTMLComment text="CONTENT ITEMS (DEFAULT: PROJECTS)" />
            <Component className="flex min-h-[180px] w-full items-start justify-center bg-white px-20 pb-36 pt-20 sm:min-h-[300px] sm:px-[8rem] md:min-h-[380px] md:px-96 md:pb-32 md:pt-28 lgtall:min-h-[450px] lgtall:pb-56 lgtall:pt-48 xl:min-h-[250px] 2xl:min-h-[350px] 2xl:px-0 3xl:min-h-[400px] 2k:pb-56 2k:pt-40 2k3:min-h-[480px]">
                <ul className="grid w-full max-w-[400px] grid-cols-1 justify-center gap-[18px] md:min-w-[620px] md:max-w-[900px] md:grid-cols-2 md:gap-20 2xl:gap-24">
                    {items.map((item) => {
                        return (
                            <Card
                                as="li"
                                key={item._id}
                                route={route}
                                data={item}
                            />
                        )
                    })}
                </ul>
            </Component>
        </>
    )
}
