import Meta from '/components/site/Meta'
import MainLayout from '/components/main/Layout'
import Items from '/components/main/Items'
import { getAllProjectCards } from '/lib/project'

export default function Home({ data, preview }) {
    let meta = {
        title: 'Mario Vellandi: Software Engineer and Product Developer for Elixir, JS, and CSS',
        description:
            'Portfolio, services offered, articles, and quick projects by Mario Vellandi.',
        // image: "/images/og-image.png",
    }
    return (
        <>
            <Meta data={meta} />
            <MainLayout preview={preview} data={data}>
                <Items as="main" data={data} />
            </MainLayout>
        </>
    )
}

export async function getStaticProps({ preview = false }) {
    const data = await getAllProjectCards({ preview })
    return {
        props: {
            data,
            preview,
        },
        revalidate: 1,
    }
}
