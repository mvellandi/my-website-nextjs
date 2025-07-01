import Image from 'next/image'
import Link from 'next/link'
import HTMLComment from 'react-html-comment'
import Social from '../site/Social'
import { urlForImage } from '../../lib/sanity'
import type { ElementType, CSSProperties } from 'react'

const portraitImageRef =
    'image-56fef097c41d648112e1f5d1393f7844ab7c8d30-500x500-webp'

const imageStyle: CSSProperties = {
    borderRadius: '9999px',
    border: '1px solid #980F0F',
    filter: 'drop-Shadow(0 5px 12px rgba(62, 17, 17, 0.4)',
}

interface HeroProps {
    as?: ElementType
}

export default function Hero({ as }: HeroProps) {
    const Component = as ?? 'div'
    return (
        <div
            role="banner"
            className="flex justify-center border-b-[16px] border-red-shade bg-red"
        >
            {/* SECTION BACKGROUND + CONTENT ROW: full-width, h-centered children */}
            <Component className="hero relative flex w-full max-w-[900px] justify-center gap-28 pb-24 pr-16 pt-32 text-white sm:gap-48 md:pb-16 md:pr-8 md:pt-24 lgtall:pt-28 xl:gap-52 3xl:pb-40 3xl:pt-72 2k3:pb-36 2k3:pt-[130px]">
                <HTMLComment text="HERO TEXT" />
                <div className="flex flex-col items-end justify-end text-right sm:pl-24 md:pt-16 3xl:pb-8">
                    <h1
                        className={`-mr-4 pb-4 font-slab text-[2.25rem] leading-[1.2] tracking-tight drop-shadow md:pb-2 md:text-[2.4rem] md:leading-none md:tracking-normal lg:text-[2.625rem]`}
                    >
                        Mario Vellandi
                    </h1>
                    <h2 className="text-balance text-[1.3125rem] font-light leading-[1.1] tracking-tight sm:leading-[1.3] md:text-[1.375rem] md:leading-[1.3]">
                        Marketer, Developer
                    </h2>
                    <nav>
                        <ul className="plg:-mr-0 -mr-[34px] flex gap-[30px] pt-24 text-[1.2rem] leading-[1] md:pb-2 md:pt-16 3xl:pt-[30px] 3xl:text-[1.3rem]">
                            <li>
                                <Link href="/about">
                                    <span className="hidden sm:inline">→</span>{' '}
                                    <span className="cta">about me</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <span className="hidden sm:inline">→</span>{' '}
                                    <span className="cta">contact</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <HTMLComment text="HERO IMAGE" />
                <div className="w-full max-w-[140px] 2xl:max-w-[140px] 3xl:max-w-[160px]">
                    <Image
                        src={urlForImage(portraitImageRef).url()}
                        width={225}
                        height={225}
                        style={imageStyle}
                        alt="photo: mario vellandi"
                    />
                </div>
                <Social type="hero" />
            </Component>
        </div>
    )
}
