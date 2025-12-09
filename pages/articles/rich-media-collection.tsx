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
                    <div className="flex flex-col gap-8 pl-8 pt-12 [&>p]:my-0">
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
                        <p>
                            <a
                                href="https://www.youtube.com/watch?v=xXLwITrxjkY"
                                target="_blank"
                            >
                                My Story
                            </a>{' '}
                            (personal and career)
                        </p>
                        <p>
                            <a
                                href="https://docs.google.com/spreadsheets/d/1xFa-HlEXkyEiG10tYzrBAnRBcreJyJF_gytCKU8CADc/edit?usp=sharing"
                                target="_blank"
                            >
                                Client Archive
                            </a>{' '}
                            with 107 stage presentations, 25 webinars, 58
                            interviews.
                        </p>
                        <p>
                            Stage Presentation:{' '}
                            <a
                                href="https://www.youtube.com/watch?v=NQZ2QMDdxVY"
                                target="_blank"
                            >
                                Innovations in Fashion⧸Interior Design
                            </a>
                        </p>
                        <p>
                            Interview:{' '}
                            <a
                                href="https://www.youtube.com/watch?v=0stOKdMQReI"
                                target="_blank"
                            >
                                Ford Motor Company&apos;s Sustainability
                                Strategy
                            </a>
                        </p>
                    </div>
                </Details>
                <Details summary="Audio Interviews">
                    <div className="flex flex-col gap-8 pl-8 pt-12 [&>p]:my-0">
                        <p>
                            Igniting Change:{' '}
                            <a href="https://www.youtube.com/playlist?list=PLpSojh5lPEF5KwxC0ZBBDAJlVptLq4-G8">
                                [5 part series]
                            </a>
                        </p>
                        <p>
                            <a href="https://web.archive.org/web/20130326212221/http://www.sustainablebrands.com/news_and_views/articles/responsibility-revolution-jeffrey-hollender">
                                The Responsibility Revolution with Jeffrey
                                Hollender
                            </a>
                        </p>
                    </div>
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
                    <div className="flex flex-col gap-8 pl-8 pt-12 [&>p]:my-0">
                        <p>
                            Exchange Student Guide to Germany{' '}
                            <a
                                href="https://www.youtube.com/watch?v=_ttZ9tCnqrw"
                                target="_blank"
                            >
                                <b>[Video]</b>
                            </a>{' '}
                        </p>
                        <p>
                            College Student Guide.{' '}
                            <a
                                href="https://www.youtube.com/watch?v=9kie1HXgRds"
                                target="_blank"
                            >
                                <b>[Video]</b>
                            </a>{' '}
                        </p>
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
