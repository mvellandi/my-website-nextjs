import Card from '/components/main/Card'
import HTMLComment from 'react-html-comment'

export default function Items({ data: { _type, route, value: items }, as }) {
    const Component = as ?? 'div'
    return (
        <>
            <HTMLComment text="CONTENT ITEMS (DEFAULT: PROJECTS)" />
            <Component className="site-padding-x flex min-h-[180px] w-full items-start justify-center bg-white pb-36 pt-20 sm:min-h-[300px] md:min-h-[380px] md:py-36 lgtall:min-h-[450px] lgtall:pb-56 lgtall:pt-48 xl:min-h-[250px] 2xl:min-h-[350px] 3xl:min-h-[400px] 2k:pb-64 2k:pt-56 2k3:min-h-[480px]">
                <ul className="grid w-full max-w-screen-xl grid-cols-1 justify-center gap-24 md:min-w-[620px] md:grid-cols-2 md:gap-36 xl:grid-cols-3 2xl:gap-36 2k:gap-64">
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
