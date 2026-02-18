import type { GetStaticProps } from 'next'
import PageLayout from '../components/page/Layout'
import Link from 'next/link'

interface AboutPageProps {
    preview?: boolean
}

export default function About({ preview = false }: AboutPageProps) {
    return (
        <PageLayout id="about" page="about">
            <h1>About Me</h1>
            <article className="prose-lg leading-[1.3] 2xl:leading-[1.4]">
                <p>
                    I love helping customers. Whether it be through market
                    research, R&D, promoting new products or just helping them
                    out with little things. It's about consistently giving great
                    service and real value. I learned this from my parents who
                    ran a motel by Disneyland, and I've tackled whatever needed
                    to be done to serve customers exceptionally well.
                </p>
                <p>
                    That's included product manufacturers, media, nonprofits, a
                    game writer, and a computer vision company.
                    <br /> How can I help you?
                </p>
                <ul>
                    <li>
                        <Link
                            href="https://www.linkedin.com/in/mvellandi/"
                            target="_blank"
                        >
                            LinkedIn resume
                        </Link>
                    </li>
                    <li>
                        {' '}
                        <Link
                            href="https://modern-art-670.notion.site/Mario-s-Skill-Chart-e895b545dd6547f5bcc62ccafede2365"
                            target="_blank"
                        >
                            Skill Chart
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://www.youtube.com/watch?v=xXLwITrxjkY"
                            target="_blank"
                        >
                            My story in video (7min)
                        </Link>
                    </li>
                </ul>
            </article>
        </PageLayout>
    )
}

export const getStaticProps: GetStaticProps<AboutPageProps> = async ({
    preview = false,
}) => {
    // const data = await getAboutPage({ preview });

    return {
        props: {
            preview,
        },
    }
}
