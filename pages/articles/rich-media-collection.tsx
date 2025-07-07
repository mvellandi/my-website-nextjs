import type { GetStaticProps } from 'next'
import { useState } from 'react'
import SectionLayout from '../../components/section/Layout'
import Link from 'next/link'
import { getArticleAndNavData } from '../../lib/article'
import FsLightbox from 'fslightbox-react'
import Details from '../../components/elements/Details'
import Script from 'next/script'
import { infographics } from '../../data/media'
import { urlForImage } from '../../lib/sanity'
import type { NavigationData } from '../../types'

interface MediaItem {
    title: string
    coverImage?: string
    src?: string
    isCMSImage?: boolean
}

interface LightboxController {
    toggler: boolean
    slide: number
}

interface RichMediaPageProps {
    nav: NavigationData
    preview?: boolean
}

export default function WritingCollection({
    nav,
    preview = false,
}: RichMediaPageProps) {
    const [lightboxController, setLightboxController] =
        useState<LightboxController>({
            toggler: false,
            slide: 1,
        })

    function openLightboxOnSlide(number: number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number,
        })
    }

    function getImageSrc(item: MediaItem): string {
        if (item.isCMSImage) {
            const imageRef = item.coverImage || item.src
            return urlForImage(imageRef).url()
        }
        return item.src || item.coverImage || ''
    }

    return (
        <SectionLayout type="article" nav={nav}>
            <>
                <h1 style={{ marginBottom: '1.8rem' }}>Rich Media</h1>

                <Details summary="Video">
                    <h3 className="not-prose">Promotional</h3>
                    <p>
                        <a href="http://boot.rocks" target="_blank">
                            Boot.Rocks
                        </a>{' '}
                        campaign for a tech education platform, plus{' '}
                        <a
                            href="https://www.youtube.com/playlist?list=PL9ojmHdC8ix0iJqNwMCs-9NxubxmcxjLM"
                            target="_blank"
                        >
                            10 social shorts
                        </a>
                    </p>
                    <h3 className="not-prose">Storytelling</h3>
                    <p>
                        <a
                            href="https://www.youtube.com/watch?v=lqUNdlZV0yQ"
                            target="_blank"
                        >
                            My Personal and Professional Story
                        </a>
                    </p>
                    <div className="bottom-1 border-t border-gray-400"></div>
                    <p>
                        My early career are mostly paywalled or unarchived.
                        <br />
                        Below are a few samples.{' '}
                        <a
                            href="https://docs.google.com/spreadsheets/d/1xFa-HlEXkyEiG10tYzrBAnRBcreJyJF_gytCKU8CADc/edit?usp=sharing"
                            target="_blank"
                        >
                            See this directory
                        </a>{' '}
                        for a complete list.
                    </p>
                    <h3 className="not-prose">Stage Presentations (107)</h3>
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
                        {infographics.map((item, n) => (
                            <div
                                key={n}
                                onClick={() => openLightboxOnSlide(n + 1)}
                                className="h-[120px] w-[150px] cursor-pointer overflow-hidden rounded-xl border-2 border-[#d4e3fd] shadow-md"
                                style={{
                                    backgroundImage: `url(${getImageSrc(item)})`,
                                    backgroundPosition: 'left top',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                }}
                                aria-label={item.title}
                                role="img"
                            />
                        ))}
                    </div>
                    <FsLightbox
                        toggler={lightboxController.toggler}
                        sources={infographics.map((item) => getImageSrc(item))}
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

export const getStaticProps: GetStaticProps<RichMediaPageProps> = async ({
    preview = false,
}) => {
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
