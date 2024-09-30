import Meta from '/components/site/Meta'
import MainLayout from '/components/main/Layout'
import Items from '/components/main/Items'
import { getAllArticleCards } from '/lib/article'

// TODO: Change the layout from MainLayout to a "articles index" layout

export default function Articles({ data, preview }) {
    return (
        <>
            <Meta data={null} />
            <MainLayout preview={preview} data={data}>
                <Items as="main" data={data} />
            </MainLayout>
        </>
    )
}

export async function getStaticProps({ preview = false }) {
    const data = await getAllArticleCards({ preview })

    const featured = [
        {
            local: true,
            _id: '14528482166013190',
            slug: 'writing-collection',
            coverImage: '/media/writing-collection.jpg',
            title: 'Written Works',
            subtitle: 'Journalism, interviews, and copywriting, oh my!',
        },
    ]

    const oldMedia = [
        {
            local: true,
            _id: '14528482166013191',
            url: 'https://old-journal.vellandi.net',
            coverImage: '/media/wordpress-logo.svg',
            title: 'Blog Archive 2006-2016',
            subtitle:
                'On marketing, design, product development, and sustainability',
        },
    ]

    data.value = [...featured, ...data.value, ...oldMedia]

    console.log('data: ', data)
    return {
        props: {
            data,
            preview,
        },
        revalidate: 1,
    }
}
