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
                <h4>Resourceful and helpful to others.</h4>
                <p className="mb-10">
                    I like helping customers through communications and product
                    development. To the table, I'll bring marketing, software
                    engineering, and media production skills. In addition to a
                    brief CV below, you can see:
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
                            href="https://www.youtube.com/watch?v=lqUNdlZV0yQ"
                            target="_blank"
                        >
                            My story in video (7min)
                        </Link>
                    </li>
                </ul>
                <h2>CV</h2>
                <h3>Upbringing</h3>
                <p>
                    - Raised in LA by hotel and packaging entrepreneurs
                    <br />
                    - Spent many summers in Germany
                    <br />- Exchange student to Sweden
                </p>
                <h3>Young Adult</h3>
                <p>
                    - Sold helmets to skate shops nationwide
                    <br />
                    - Did customer service and operations jobs
                    <br />
                    - Created websites for student financial aid, work, and
                    local volunteering
                    <br />
                    - U.S. Congress scholarship to study/work in Germany
                    <br />
                    - Intern at 2 ocean shipping companies
                    <br />
                    - Bachelors International Business
                    <br />- Global Logistics Specialist certification
                </p>
                <h3>Early Career</h3>
                <p>
                    - Marketing for home goods manufacturers
                    <br />
                    - Created websites & media for clients
                    <br />
                    - Guest speaker on social marketing
                    <br />- Community and content for B2B media
                </p>
                <h3>Professional Career</h3>
                <p>
                    - Moved to New York City
                    <br />
                    - CRM, UX, and communications manager
                    <br />
                    - Content strategy advisor to brands
                    <br />
                    - Meetup organizer for UX and media
                    <br />
                    - Moved to Bremen, Germany
                    <br />
                    - Public markets investor
                    <br />
                    - Built projects with JS, Elixir, and Figma
                    <br />
                    - 4mo. software training with Elixir
                    <br />
                    - Began backend training at Boot.dev
                    <br />
                    - Video marketing project for tech education
                    <br />- Web development for a game writer and a computer
                    vision company
                </p>
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
