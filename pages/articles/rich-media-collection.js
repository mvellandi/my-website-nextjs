import SectionLayout from '/components/section/Layout'
import Link from 'next/link'
import { getArticleAndNavData } from '/lib/article'
import FsLightbox from 'fslightbox-react'
import Details from '/components/elements/Details'
import { useState } from 'react'
import Script from 'next/script'
import { infographics } from '/data/media'

export default function WritingCollection({ nav, preview = false }) {
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1,
    })

    function openLightboxOnSlide(number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number,
        })
    }

    return (
        <SectionLayout type="article" nav={nav}>
            <>
                <h1 style={{ marginBottom: '1.8rem' }}>Rich Media</h1>

                <Details summary="Video">
                    <p>
                        My early career videos were produced for business media
                        companies like Sustainable Brands and Gravity Summit, in
                        addition to consultants, nonprofits, and my blog. While
                        most videos are either paywalled or unarchived, below
                        are a few samples.{' '}
                        <a
                            href="https://docs.google.com/spreadsheets/d/1xFa-HlEXkyEiG10tYzrBAnRBcreJyJF_gytCKU8CADc/edit?usp=sharing"
                            target="_blank"
                        >
                            See this directory
                        </a>{' '}
                        for a complete list.
                    </p>
                    <h3 className="not-prose">Stage Presentations (112):</h3>
                    <p>
                        <a
                            href="https://www.youtube.com/watch?v=NQZ2QMDdxVY"
                            target="_blank"
                        >
                            Innovations in Fashion⧸Interior Design - Summer
                            Rayne Oakes
                        </a>
                    </p>
                    <h3 className="not-prose">Webinars (25)</h3>
                    <p>
                        For Sustainable Brands, I produced premium training
                        videos which included planning, speaker outreach,
                        hosting, marketing, and video editing.
                    </p>
                    <h3 className="not-prose">Interviews (58)</h3>
                    <p>
                        <a
                            href="https://www.youtube.com/watch?v=0stOKdMQReI"
                            target="_blank"
                        >
                            Ford Motor Company&apos;s Sustainability Strategy -
                            John Viera
                        </a>
                    </p>
                </Details>
                <Details summary="Audio Interviews">
                    <h3 className="not-prose">Personal (5):</h3>
                    <h4 className="not-prose">
                        Igniting Change{' '}
                        <a href="https://www.youtube.com/playlist?list=PLpSojh5lPEF5KwxC0ZBBDAJlVptLq4-G8">
                            [Link]
                        </a>
                    </h4>
                    <p>
                        <a href="https://www.youtube.com/watch?v=TT7lnJZjuHc">
                            Community Management and Marketing Justin Isaf,
                            Huffington Post
                        </a>
                    </p>
                    <h3 className="not-prose">Sustainable Brands:</h3>
                    <p>
                        <a href="https://web.archive.org/web/20130326212221/http://www.sustainablebrands.com/news_and_views/articles/responsibility-revolution-jeffrey-hollender">
                            The Responsibility Revolution with Jeffrey Hollender
                        </a>
                    </p>
                </Details>
                <Details summary="Infographics">
                    <p>
                        <a
                            href="https://drive.google.com/drive/folders/1S3nOBKJHGaDy4yIecBM1vOtMTKVCZMW6"
                            target="_blank"
                        >
                            Full archive here
                        </a>
                    </p>
                    <div className="mt-16 grid grid-cols-2 items-start gap-28 pb-8 pt-4 sm:grid-cols-3 md:grid-cols-4">
                        {infographics.map(({ title, src }, n) => (
                            <div
                                key={n}
                                onClick={() => openLightboxOnSlide(n + 1)}
                                className="h-[120px] w-[150px] cursor-pointer overflow-hidden rounded-xl border-2 border-[#d4e3fd] shadow-md"
                                style={{
                                    backgroundImage: `url(${src})`,
                                    backgroundPosition: 'left top',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                }}
                                aria-label={title}
                                role="img"
                            />
                        ))}
                    </div>
                    <FsLightbox
                        toggler={lightboxController.toggler}
                        sources={infographics.map(({ title, src }) => src)}
                        slide={lightboxController.slide}
                    />
                </Details>
                <Details summary="Multimedia">
                    <h3 className="not-prose mt-24">
                        CBYX Student Exchange Guide{' '}
                    </h3>
                    <p>
                        I created this website for fellow participants in the
                        19th Congress Bundestag Youth Exchange, where students
                        from both USA and Germany study abroad for a year in
                        each country. It was my second project producing Flash
                        multimedia. The biggest challenge was learning how to
                        load XML files at runtime for display in the UI.{' '}
                    </p>
                    <div
                        style={{
                            padding: '56.25% 0 0 0',
                            position: 'relative',
                        }}
                    >
                        <iframe
                            src="https://player.vimeo.com/video/1016537895?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{
                                position: 'absolute',
                                top: '0',
                                left: '0',
                                width: '100%',
                                height: '100%',
                            }}
                            title="Axelion Student Resource Guide"
                        ></iframe>
                    </div>
                    <Script
                        src="https://player.vimeo.com/api/player.js"
                        strategy="lazyOnload"
                    />
                    <h3 className="not-prose mt-36">
                        Axelion Student Resource Guide
                    </h3>
                    <p>
                        While in junior college, I created this website using
                        Macromedia Flash. It provided info on financial aid and
                        a variety of other subjects, and was my first multimedia
                        project.{' '}
                    </p>
                    <div
                        style={{
                            padding: '56.25% 0 0 0',
                            position: 'relative',
                        }}
                    >
                        <iframe
                            src="https://player.vimeo.com/video/1016535354?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{
                                position: 'absolute',
                                top: '0',
                                left: '0',
                                width: '100%',
                                height: '100%',
                            }}
                            title="CBYX Student Exchange Resource Guide"
                        ></iframe>
                    </div>
                </Details>
            </>
        </SectionLayout>
    )
}

export async function getStaticProps({ preview = false }) {
    const data = await getArticleAndNavData({
        slug: 'rich-media-collection',
        preview,
    })

    return {
        props: {
            nav: data.nav,
            preview,
        },
    }
}
