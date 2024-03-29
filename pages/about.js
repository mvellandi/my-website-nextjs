import PageLayout from '/components/page/Layout'
import Link from 'next/link'

export default function About({ data, preview = false }) {
    return (
        <PageLayout id="about" page="about">
            <h1 className="mb-20 text-[3.6rem] font-light leading-tight -tracking-1 text-black lg:mb-40">
                About Me
            </h1>
            <article className="prose-lg lg:prose-xl">
                <p>
                    Hi! I&apos;m a software engineer with a strong orientation
                    toward product development and UX design. In the last few
                    years, I&apos;ve built up a portfolio, helped a professional
                    client, and recently finished Dockyard Academy, a 3-month
                    training for software development.
                </p>
                <p>
                    Back in my university days, I loved business and marketing.
                    The ability to make products people loved while running a
                    tight operational ship was fascinating. And so was the web!
                    I learned HTML/CSS and started making student websites and
                    Flash multimedia while doing a Bachelors in International
                    Business. After working in sales for a few product
                    manufacturers, I gave it a second go and got back into
                    digital.
                </p>
                <p>
                    I found clients, made them websites, and helped them use
                    social media to put their brand out there. This was very
                    important for a business media company&apos;s early days
                    when I was hired as their community manager. After moving to
                    New York City, I led the digital communications for an
                    influential nonprofit where I had the good fortune to
                    implement a CRM system while working with various
                    departments to build webpages, newsletters, campaigns, and
                    more. After a few years of advising clients, I took a break
                    and traveled the world.
                </p>
                <p>
                    Misfortune then took a family member too early. Through a
                    pharmaceutical company&apos;s compensation, I became a
                    public markets investor. I also met my partner and moved to
                    Bremen, Germany.
                </p>
                <p>
                    My itch for tech though would not rest. I casually learned
                    web development with JavaScript and Elixir, found
                    mentorship, and pursued projects that interested me. This
                    led me to my first client and to Dockyard Academy where I
                    learned to sharpen my operational and communication skills
                    to where I am today.
                </p>
                <h2>How can I help you?</h2>
                <p>
                    My goal is happy customers, reduced expenses, and increased
                    revenue. Aside from the tech skills below that I&apos;m most
                    confident with, I carry forward project management and
                    writing skills from my previous career. Please{' '}
                    <Link href="/contact">contact me</Link> if you&apos;d like
                    to chat about your project or just want to say hello.
                </p>
                <table className="skills">
                    <tbody>
                        <tr>
                            <td>Code:</td>
                            <td>JavaScript, Elixir, CSS, HTML</td>
                        </tr>
                        <tr>
                            <td>Frameworks:</td>
                            <td>Next.js, Phoenix</td>
                        </tr>
                        <tr>
                            <td>Frontend:</td>
                            <td>React, LiveView, Tailwind</td>
                        </tr>
                        <tr>
                            <td>CMS:</td>
                            <td>Sanity</td>
                        </tr>
                        <tr>
                            <td>Design:</td>
                            <td>Figma, Illustrator</td>
                        </tr>
                        <tr>
                            <td>Testing:</td>
                            <td>Sizzy</td>
                        </tr>
                    </tbody>
                </table>
            </article>
            {/* <div className="inline-flex button md:hidden">
                  <Link href="/contact">Let&rsquo;s work together</Link>
              </div> */}
        </PageLayout>
    )
}

export async function getStaticProps({ params, preview = false }) {
    // const data = await getAboutPage({ preview });

    return {
        props: {
            preview,
        },
    }
}
