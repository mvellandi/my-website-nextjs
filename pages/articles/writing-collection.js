import SectionLayout from '/components/section/Layout'
import Link from 'next/link'
import { getArticleAndNavData } from '/lib/article'

export default function WritingCollection({ nav, preview = false }) {
    return (
        <SectionLayout type="article" nav={nav}>
            <>
                <h1>Written Works</h1>

                <div className="prose-lg 3xl:prose-xl">
                    <p>
                        I care about are happy customers and lean operations.
                        That&apos;s what drives word-of-mouth (the best
                        marketing tool) and keeps a high-performing business
                        alive. I&apos;ll use a combination of software
                        engineering, content strategy, CRM, and UX design to
                        continuously ship small improvements and do strategic
                        R&D.
                        <br />
                        For a full list of my skills,{' '}
                        <Link href="https://docs.google.com/document/d/1BJ20tDzvEymV5GrYedyGAdM_Rp-H80hoCbTN2loUCGQ/pub">
                            click here
                        </Link>
                        .
                    </p>
                    <h2 className="mb-12 mt-36 lg:mb-16">Backstory</h2>
                    <p>
                        In my university days, I loved business and marketing.
                        The ability to make products people loved while running
                        a tight operational ship was fascinating. And so was the
                        web! I learned HTML/CSS and started making student
                        websites and Flash multimedia while doing a Bachelors in
                        International Business.
                    </p>
                    <p>
                        In my last two years of Uni, I focused on supply chain
                        management and logistics, doing an internship at an
                        ocean carrier in Germany where I booked containers and
                        allotted vessel space, and another internship with a
                        freight forwarder and customs broker. One of my favorite
                        books back then was <em>The Goal</em> by Eliyahu
                        Goldratt, which taught me that since making money is the
                        end goal, then maximizing production throughput and
                        minimizing inventory is the way. Another influential
                        book was <em>Lean Thinking</em> by Womack and Jones
                        which explained the Toyota Production System and how
                        applying continuous improvement to product quality,
                        process time, eliminating waste, and empowering
                        employees to take corrective action leads to operational
                        excellence.
                    </p>
                    <p>
                        In retrospect, these formative experiences were
                        incredibly valuable because they instilled systems
                        thinking in me and influenced how I prioritized work and
                        searched for productivity gains, particularly when
                        working with multiple departments to deliver shared
                        goals.
                    </p>
                    <p>
                        I then went on to do sales for a few home decor
                        manufacturers where I loved working with sales agents
                        across the country, creating custom products for
                        retailers like Walgreens and Kroger, and pushing to
                        adopt Salesforce as a CRM. But after a few years,
                        something was missing. I really missed digital and
                        wanted to give it a second go. So I found clients, made
                        them websites with a partner, and helped them use social
                        media to put their brand out there.
                    </p>
                    <p>
                        A business media company then hired me as their
                        community manager and video producer for conferences,
                        interviews, and webinars. This entailed a lot of content
                        marketing, copywriting, some journalism, and constant
                        social media engagement including highlighting partners,
                        community members, and network players in the larger
                        business ecosystem.
                    </p>
                    <p>
                        But I needed new challenges and a fresh environment. So
                        I moved to New York City and led the digital
                        communications for an influential nonprofit where I
                        implemented a CRM system and built webpages,
                        newsletters, campaigns, event registrations, and more.
                        This included all digital aspects of customer experience
                        design in terms of automated emails, authentication, and
                        helping customers manage their preferences.
                    </p>
                    <p>
                        After a few years of advising clients, I took a break
                        and traveled the world, eventually moving to Bremen,
                        Germany with my partner where I became an investor.
                    </p>
                    <p>
                        My itch for tech though would not rest. I casually
                        learned web development with JavaScript and Elixir,
                        found mentorship, and pursued projects that interested
                        me. This led me to my first client and to Dockyard
                        Academy where I learned to sharpen my operational and
                        communication skills to where I am today.
                    </p>
                </div>
            </>
        </SectionLayout>
    )
}

export async function getStaticProps({ preview = false }) {
    const data = await getArticleAndNavData({
        slug: 'writing-collection',
        preview,
    })

    return {
        props: {
            nav: data.nav,
            preview,
        },
    }
}
