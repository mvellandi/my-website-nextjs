import Section from './Section'
import { urlForImage } from '../../lib/sanity'
import FsLightbox from 'fslightbox-react'
import { useState } from 'react'

interface MediaItem {
    _key: string
    image: any
    alt?: string
}

interface MediaProps {
    media: MediaItem[]
}

interface LightboxController {
    toggler: boolean
    slide: number
}

export default function Media({ media }: MediaProps) {
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

    return (
        <Section title="Media" className="media">
            <div className="grid grid-cols-3 items-start gap-20 pb-8 pt-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 lg:gap-28 xl:grid-cols-5 xl:gap-16">
                {media.map(({ _key, ...rest }, n) => (
                    <a
                        key={_key}
                        aria-hidden
                        onClick={() => openLightboxOnSlide(n + 1)}
                        className="cursor-pointer overflow-hidden rounded-xl border-2 border-[#d4e3fd] shadow-md"
                    >
                        <img
                            src={urlForImage(rest.image)
                                .width(500)
                                .sharpen(30)
                                .url()}
                            alt="rest.alt"
                            className="h-[70px] w-full object-cover"
                        />
                    </a>
                ))}
            </div>
            <FsLightbox
                toggler={lightboxController.toggler}
                sources={media.map(
                    ({ _key, ...rest }) => `${urlForImage(rest.image).url()}`
                )}
                slide={lightboxController.slide}
            />
        </Section>
    )
}
