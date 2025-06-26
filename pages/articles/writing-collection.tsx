import type { GetStaticProps } from 'next'
import SectionLayout from '../../components/section/Layout'
import Link from 'next/link'
import { getArticleAndNavData } from '../../lib/article'
import Details from '../../components/elements/Details'
import type { NavigationData } from '../../types'

interface WritingPageProps {
    nav: NavigationData
    preview?: boolean
}

export default function WritingCollection({ nav, preview = false }: WritingPageProps) {
    return (
        <SectionLayout type="article" nav={nav}>
            <>
                <h1 style={{ marginBottom: '1.8rem' }}>Written Works</h1>

                <Details summary="Articles">
                    <h3 className="not-prose">Personal Blog (618):</h3>
                    <ul className="item-list">
                        <li>
                            <a
                                href="http://old-journal.vellandi.net"
                                target="_blank"
                            >
                                Melodies in Marketing
                            </a>
                            , 2006-2016
                        </li>
                    </ul>
                    <h3 className="not-prose">MarketingProfs:</h3>
                    <ul className="item-list">
                        <li>
                            <a
                                href="https://web.archive.org/web/20130325070048/http://www.mpdailyfix.com/show-the-world-whats-inside/"
                                target="_blank"
                            >
                                Show the World What&apos;s Inside
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://web.archive.org/web/20120529171949/http://www.mpdailyfix.com/sustainable-green-what-does-it-mean/"
                                target="_blank"
                            >
                                Sustainable, Green… What Does It Mean?
                            </a>
                        </li>
                    </ul>
                    <h3 className="not-prose">Sellion (5):</h3>
                    <ul className="item-list">
                        <li>
                            <a
                                href="https://drive.google.com/file/d/1yHooDcF8k-vBYSZAJ4XzXsFxN7X-ulpC/view?usp=drive_link"
                                target="_blank"
                            >
                                Discovery - The Pursuit of Breakthrough Ideas
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://drive.google.com/file/d/1xUb1YLlmqC35FFkn_YKfixYc8TboddVi/view?usp=drive_link"
                                target="_blank"
                            >
                                Idea Screening
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://drive.google.com/file/d/1HZuyUblIgJ-CRNlb2wwRfdW1NByD-cG5/view?usp=drive_link"
                                target="_blank"
                            >
                                Scoping
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://drive.google.com/file/d/1jSALHG551Ouc7viEx0ZkS1iap4UGxScp/view?usp=drive_link"
                                target="_blank"
                            >
                                The Business Case and Plan for New Products
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://drive.google.com/file/d/1-9xjjoPO9SRxfumdibFw9ZsB4egChbDd/view?usp=drive_link"
                                target="_blank"
                            >
                                New Product Design Strategy
                            </a>
                        </li>
                    </ul>
                    <h3 className="not-prose">Sustainable Brands (16):</h3>
                    <ul className="item-list">
                        <li>
                            <a
                                href="https://web.archive.org/web/20140130080342/http://www.sustainablebrands.com/news_and_views/articles/dawn-saves-wildlife-cause-campaign"
                                target="_blank"
                            >
                                Dawn Saves Wildlife with Cause Campaign
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://web.archive.org/web/20130614090218/https://sustainablebrands.com/news_and_views/articles/10-hot-cause-related-marketing-trends"
                                target="_blank"
                            >
                                10 Hot Cause-Related Marketing Trends
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://web.archive.org/web/20121124003557/http://www.sustainablebrands.com/news_and_views/articles/bmw-leaves-formula-one-focus-sustainable-engineering"
                                target="_blank"
                            >
                                BMW Leaves Formula One to Focus on Sustainable
                                Engineering
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://web.archive.org/web/20120229104539/http://www.sustainablebrands.com/news_and_views/articles/hps-power-change-campaign-taking"
                                target="_blank"
                            >
                                HP&apos;s Power To Change Campaign Taking Off
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://web.archive.org/web/20130326195338/http://www.sustainablebrands.com/news_and_views/articles/kraft-uk-partners-terracycle-coffee-bag-recycling"
                                target="_blank"
                            >
                                Kraft UK Partners with Terracycle for Coffee Bag
                                Recycling
                            </a>
                        </li>
                        <li>
                            For full archive,{' '}
                            <a
                                href="https://docs.google.com/document/d/1NFi898mT8bU_CtHXgf3FWBbau19C5NMcdSwA1SPR1bs/edit?usp=sharing"
                                target="_blank"
                            >
                                click here
                            </a>
                        </li>
                    </ul>
                </Details>
                <Details summary="Interviews">
                    <h3 className="not-prose">Sustainable Brands:</h3>
                    <ul className="item-list">
                        <li>
                            <a href="https://web.archive.org/web/20130331151529/http://www.sustainablebrands.com/news_and_views/articles/authenticity-and-alignment-interview-mona-amodeo-president-idgroup-consultin">
                                Authenticity and Alignment with Mona Amodeo
                            </a>
                        </li>
                        <li>
                            <a href="https://web.archive.org/web/20130326195033/http://www.sustainablebrands.com/news_and_views/articles/diane-maceachern-products-and-standards">
                                Diane MacEachern on Products and Standards
                            </a>
                        </li>
                        <li>
                            IxD and Sea Change Design with Lauralee Alben
                            (Unarchived)
                        </li>
                    </ul>
                </Details>
                <Details summary="Brand Identity">
                    <h3 className="not-prose">Sellion:</h3>
                    <p className="prose-area">
                        Healthy brands deserve special care. We are a group of
                        professionals that since 2001, have applied our
                        expertise in developing new products and successfully
                        bringing them to market. No matter where you are in your
                        product life cycle, we would like to listen to your
                        story and see if we can build you a custom development,
                        marketing, or distribution solution that fits your
                        needs.
                    </p>
                    <h3 className="not-prose">Sustainable Brands:</h3>
                    <p className="prose-area">
                        Join the most forward-looking business thinkers, brand
                        strategists, sustainability executives and designers who
                        are working together to create new ways to leverage
                        environmental and social innovation to build business
                        and brand value.
                    </p>
                </Details>
                <Details summary="Descriptions">
                    <h3 className="not-prose">Shonfelds:</h3>
                    <p className="prose-area">
                        Great for parties, gifts, and use in the home bar, our
                        assortment of drink mix items are sure to make any
                        occasion an event to remember. Come see our Kahlua,
                        Sauza, Malibu, and Beefeater branded barware.... With
                        summer just around the corner, we&apos;ve designed for you a
                        fantastic new line of tasty bbq and grill sauces,
                        seasonings, and accessories perfect for father&apos;s day and
                        family get togethers.
                        <br />- - - - - - - - - - - - - - - - - - - - - - - - -
                        <br />
                        Inspired by a touch of class within the comfort of your
                        own home, this line exudes pleasure...be it for sheer
                        relaxation or the unconscious confidence that you&apos;re
                        looking and feeling your best.
                    </p>
                    <h3 className="not-prose">
                        Sustainable Brands, Interview:
                    </h3>
                    <p className="prose-area">
                        <em>
                            Chocolate Production in Ghana with John
                            Scharffenberger
                        </em>
                        <br /> What&apos;s better than tasting high quality, great
                        tasting chocolate? Knowing that the cacao farmers are
                        doing well too. John Scharffenberger discusses in this
                        interview with SLM&apos;s Mario Vellandi, the work that he
                        does with the Gates Foundation in Ghana to improve
                        farming methods, production yield, and quality.
                        Additionally, he talks about the current situation in
                        the marketplace of confectioners and farmers at last
                        working more closely together, how the produced
                        chocolate is largely unknown to children in these
                        countries or not as widely available as one might think,
                        and what he sees as the future issues to be addressed in
                        farming and sustainable development.
                    </p>
                </Details>
                <Details summary="Promotional Copy">
                    <h3 className="not-prose">
                        Sustainable Brands, Digital Learning:
                    </h3>
                    <p className="prose-area">
                        Designed to get you building stronger and more
                        successful brands. Participants learn from some of the
                        world&apos;s top sustainable business and design consultants
                        how to &quot;Observe, Re-Design, Measure, and Communicate&quot; on
                        the path to market leading brands. In an hour a day
                        along with questions and answers, over lunch or in the
                        comfort of your home evenings, you and your teams can
                        gain a solid grounding in the core disciplines needed
                        for moving successfully into the new age of sustainable
                        business. Course sessions are available on-demand, so
                        you can catch them all on your own time.
                        <br />- - - - - - - - - - - - - - - - - - - - - - - - -
                        <br />
                        You&apos;ve just watched Highlights from the Sustainable
                        Brands Boot Camp Series... Taught by leading experts in
                        a variety of business and design topics. Available live
                        and on-demand. http://bit.ly/sbbootcamp Memberships
                        offer all-access digital learning passes, in addition to
                        attending our yearly conference in June. Learn more at:
                        http://bit.ly/sbmembership
                    </p>
                </Details>
                <Details summary="Advertorial">
                    <h3 className="not-prose">
                        Sustainable Brands, LinkedIn Announcement:
                    </h3>
                    <div className="prose-area [&>*:first-child]:mt-4 [&>*:last-child]:mb-0">
                        <p>
                            <b>On Connectedness and the Power of AND</b>
                            <br />
                            Greetings Sustainability Aficionados,
                            <br />
                            Springtime is nigh up on us. A ripening time for the
                            seeds we&apos;ve planted. An opportunity for us to drive
                            further in our endeavors; Striving to achieve both
                            the planned and expected, and tackle the challenges
                            that lay before us.
                        </p>
                        <p>
                            I&apos;d like to abstain this week from cheerfully
                            sharing some of the latest stories from around the
                            web, and take some time to reflect on connectedness
                            and the Power of AND.
                        </p>
                        <p>
                            We are a community with an affinity toward positive
                            change - whatever form that may take. Be it in
                            sustainability or CSR - In some way through our
                            gifts in observing, re-designing, measuring, or
                            communicating, we aim to make this world better for
                            ourselves and everyone else.
                        </p>
                        <p>
                            Naturally, we cannot learn or accomplish much simply
                            on our own. The path that led us here included some
                            amazing people that have inspired us, and forged our
                            attitude of what We can Be and Do. And the circle is
                            widening thanks to new forms of social networking
                            opportunities, both online and through gatherings
                            like our Sustainable Brands event and professional
                            meetups.
                        </p>
                        <p>
                            At large, it&apos;s about connecting organizations
                            together into collaborative partnerships for change.
                            Sustainable and Resilient Change. That which
                            addresses potential improvements in our products,
                            services, processes, management, and organizational
                            culture. That which results in enhanced brand value,
                            business profitability, and social & environmental
                            prosperity.
                        </p>
                        <p>
                            That is the Power of AND
                            <br />
                            That is the promise of applied Systems Thinking
                            <br />
                            The only way we can excel forward - faster...
                            <br />
                            Because we recognize that change comes from within
                            and without
                            <br />
                            And this community is here to help
                            <br />
                            What say You?
                            <br />
                            By clicking through to this discussion on LinkedIn,
                            I invite you to share your thoughts on this subject
                            (please do!)
                        </p>
                    </div>
                </Details>
                <Details summary="Press Releases">
                    <h3 className="not-prose">Sustainable Brands:</h3>
                    <div className="prose-area [&>*:first-child]:mt-4 [&>*:last-child]:mb-0">
                        <p>
                            BURLINGAME, Calif., March 25 /PRNewswire/ --
                            Sustainable Life Media announces Season 2 of its
                            Sustainable Brands Boot Camp, this round, an 8
                            session online course in sustainable business &
                            design. Starting Friday April 2nd and running thru
                            May 21st, the course is geared to teach companies to
                            build business value and brand equity by innovating
                            for sustainability, and give students additional
                            resume qualifications and tools to enact change from
                            within their company.
                        </p>
                        <p>
                            Developed by the producers of the Sustainable Brands
                            Conference, Boot Camp participants learn from some
                            of the world&apos;s top sustainable business thought
                            leaders, each a leading sustainable business expert
                            in his/her specialty. These long-time sustainability
                            practitioners have consulted with top global brands,
                            including Coke, Wal-Mart, UPS, HP, Unilever and
                            Kraft, among many others.
                        </p>
                        <p>
                            Designed for executives and managers seeking to
                            understand how to identify and respond to today&apos;s
                            market demands around improving the environmental
                            and social impact of business, the course follows a
                            4-step prescription for building the better brands
                            of the future: &quot;Observe, Re-Design, Measure and
                            Communicate.&quot; Sessions are designed to fit a lunch
                            hour and are also available on demand. New sessions
                            are added weekly which students may join live or as
                            it fits their schedule. With a commitment of 8-12
                            hours, participants will gain a solid grounding in
                            the core disciplines needed for moving successfully
                            in to the new age of sustainable business. Speakers
                            and topics include:
                        </p>
                        <ol>
                            <li style={{ listStyleType: 'decimal' }}>
                                Understanding Ecological Overshoot, with Susan
                                Burns of Global Footprint Network
                            </li>
                            <li style={{ listStyleType: 'decimal' }}>
                                Sustainable Packaging Design Strategies, with
                                JoAnn Hines
                            </li>
                            <li style={{ listStyleType: 'decimal' }}>
                                Three Strategies for Managing Extended Producer
                                Responsibility, with Seetha Coleman-Kammula of
                                SimplySustain
                            </li>
                            <li style={{ listStyleType: 'decimal' }}>
                                Getting Started and Keeping Going on the Path to
                                Better Brands, with Asheen Phansey of Babson
                                College
                            </li>
                            <li style={{ listStyleType: 'decimal' }}>
                                Green Chemistry&apos;s Potential Impact, with Leonard
                                Robinson of the California Department of Toxic
                                Substances Control
                            </li>
                            <li style={{ listStyleType: 'decimal' }}>
                                Design Tools for Sustainability, with Terry
                                Swack of SustainableMinds
                            </li>
                            <li style={{ listStyleType: 'decimal' }}>
                                Sustainability Reporting: Methods & Measures
                                with Elaine Cohen of BeyondBusiness
                            </li>
                            <li style={{ listStyleType: 'decimal' }}>
                                Effective Communications for Social
                                Entrepreneurs, with Cheryl Heller
                            </li>
                        </ol>
                        <p>
                            For the full program guide, schedule, and speaker
                            bios, please visit:
                            <br />
                            (URL link)
                            <br />
                            Be sure to join the conversation and community at:
                            <br />
                            LinkedIn - http://bit.ly/SB-LinkedIn
                            <br />
                            Twitter - http://twitter.com/SLMCommunity
                        </p>
                        <p>
                            About Sustainable Life Media
                            <br />A business-to-business online community,
                            e-newsletter and event company located in
                            Burlingame, CA. Sustainable Life Media (SLM) is home
                            for business professionals looking to build new
                            value and competitive advantage by innovating more
                            sustainable strategies, practices and products. For
                            more information, visit:
                            <br />
                            (URL link)
                        </p>
                        <p>
                            Contact:
                            <br />
                            Sasha Lastname
                            <br />
                            Agency Name
                            <br />
                            Office: number
                            <br />
                            email address
                        </p>
                    </div>
                </Details>
            </>
        </SectionLayout>
    )
}

export const getStaticProps: GetStaticProps<WritingPageProps> = async ({ preview = false }) => {
    const data = await getArticleAndNavData({
        slug: 'writing-collection',
        preview,
    })

    return { props: { nav: data.nav, preview } }
}