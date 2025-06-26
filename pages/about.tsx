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
            <article className="prose-lg lg:prose-xl">
                <p>
                    I care about are happy customers and lean operations.
                    That&apos;s what drives word-of-mouth (the best marketing
                    tool) and keeps a high-performing business alive. I&apos;ll
                    use a combination of software engineering, content strategy,
                    CRM, and UX design to continuously ship small improvements
                    and do strategic R&D.
                    <br />
                    For a full list of my skills,{' '}
                    <Link
                        href="https://modern-art-670.notion.site/Mario-s-Skill-Chart-e895b545dd6547f5bcc62ccafede2365"
                        target="_blank"
                    >
                        click here
                    </Link>
                    .
                </p>
                <h2 className="mb-12 mt-36 lg:mb-16">Backstory</h2>
                <p>
                    In my university days, I loved business and marketing. The
                    ability to make products people loved while running a tight
                    operational ship was fascinating. And so was the web! I
                    learned HTML/CSS and started making student websites and
                    Flash multimedia while doing a Bachelors in International
                    Business.
                </p>
                <p>
                    In my last two years of Uni, I focused on supply chain
                    management and logistics, doing an internship at an ocean
                    carrier in Germany where I booked containers and allotted
                    vessel space, followed by another internship with a freight
                    forwarder and customs broker. One of my favorite operations
                    books back then was <em>The Goal</em> by Eliyahu Goldratt,
                    which taught me that since profitability is a primary
                    business goal, then maximizing production throughput and
                    minimizing inventory, is the way. Another influential book
                    was <em>Lean Thinking</em> by Womack and Jones which
                    explained the Toyota Production System and how applying
                    continuous improvement to product quality, process time,
                    eliminating waste, and empowering employees to take
                    corrective action leads to operational excellence.
                </p>
                <p>
                    In retrospect, these experiences and books were incredibly
                    valuable because they instilled systems thinking in me and
                    influenced how I prioritized work and searched for
                    productivity gains, particularly when working with multiple
                    departments to deliver shared goals. Secondly, it taught me
                    that to make <b>ANY</b> product idea profitable, it first
                    has to be operationally feasible. Through research and
                    continuous improvement, reduced unit-costs and higher
                    quality will -- given stable marketing costs -- yield more
                    profitability with higher customer retention.
                </p>
                <p>
                    I then went on to do sales for a few home decor
                    manufacturers where I loved working with sales agents across
                    the country, creating custom products for retailers like
                    Walgreens and Target, and convincing management to adopt
                    Salesforce as a CRM. But after a few years, something was
                    missing. I really missed digital and wanted to give it a
                    second go. So I found clients, made them websites with a
                    partner, and helped them use social media to put their brand
                    out there.
                </p>
                <p>
                    A business media company then hired me as their community
                    manager and video producer for conferences, interviews, and
                    webinars. This entailed a lot of content marketing,
                    copywriting, some journalism, and constant social media
                    engagement including highlighting partners, community
                    members, and network players in the larger business
                    ecosystem.
                </p>
                <p>
                    Needing new challenges and a fresh environment, I moved to
                    New York City and led the digital operations for an
                    influential nonprofit. Here I implemented a CRM system and
                    built webpages, newsletters, campaigns, event registrations,
                    and more for multiple stakeholders. This included all
                    digital aspects of experience design across multiple
                    touchpoints, within the marketing funnel, and throughout the
                    customer lifecycle.
                </p>
                <p>
                    Afterwards, I started a meetup group for content strategy,
                    and helped the School of Visual Arts, a local nonprofit, and
                    two manufacturers. Needing time to recharge, I travelled the
                    world and in the last hostel on the road, I met my life
                    partner. After weeks of phone calls and a few airline
                    flights, I took a jump and moved to Bremen, Germany.
                </p>
                <p>
                    My itch for tech though would not rest. I casually learned
                    web development with JavaScript and Elixir, found
                    mentorship, and pursued projects that interested me. This
                    led me to my first client and to Dockyard Academy where I
                    learned to sharpen my operational and communication skills
                    to where I am today.
                </p>
                <p>
                    With a passion for great products and happy customers,
                    I&apos;m looking to help brands through marketing, creative
                    development, and operations.
                </p>
                <p>
                    Interested? <Link href="/contact">Let&apos;s talk</Link>.
                </p>
            </article>
        </PageLayout>
    )
}

export const getStaticProps: GetStaticProps<AboutPageProps> = async ({ preview = false }) => {
    // const data = await getAboutPage({ preview });

    return {
        props: {
            preview,
        },
    }
}