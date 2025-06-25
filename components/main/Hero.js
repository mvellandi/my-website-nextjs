import Image from 'next/image'
import Link from 'next/link'
import HTMLComment from 'react-html-comment'
import Social from '../site/Social'
import { urlForImage } from '/lib/sanity'

const portraitImageRef = 'image-71d8cc18df547fbc9fbf3606d46b980ec44aa4f1-225x225-jpg'

const imageStyle = {
    borderRadius: '9999px',
    border: '1px solid #980F0F',
    filter: 'drop-Shadow(0 5px 12px rgba(62, 17, 17, 0.4)',
}

export default function Hero({ as }) {
    const Component = as ?? 'div'
    return (
        <div className="site-padding-x flex justify-center border-b-[16px] border-red-shade bg-red">
            {/* SECTION BACKGROUND + CONTENT ROW: full-width, h-centered children */}
            <Component className="hero relative flex w-full max-w-screen-xl justify-center gap-28 pb-24 pt-48 text-white sm:gap-48 md:pb-24 md:pt-24 lgtall:pt-28 xl:gap-52 2k:pb-48 2k:pt-72">
                <HTMLComment text="HERO TEXT" />
                <div className="flex w-full max-w-[500px] flex-col items-end justify-center text-right sm:pl-24 md:pt-28">
                    <h1
                        className={`-mr-4 pb-4 font-slab text-[3.6rem] leading-[1.2] tracking-tight drop-shadow md:text-[4.2rem] md:leading-none md:tracking-normal lgtall:text-[4.2rem] xl:text-[4.2rem]`}
                    >
                        Mario Vellandi
                    </h1>
                    <h2 className="text-balance text-[2.1rem] font-light leading-none tracking-tight sm:leading-[1.3] md:text-[2.2rem] md:leading-[1.3]">
                        Marketer, Developer
                    </h2>
                    <nav>
                        <ul className="-mr-14 flex gap-16 pt-24 text-[2.1rem] leading-[1] md:pt-32">
                            <li>
                                <Link href="/about">
                                    → <span className="cta">about me</span>
                                </Link>
                            </li>
                            <li className="hidden sm:block">
                                <Link href="/contact">
                                    → <span className="cta">contact</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <HTMLComment text="HERO IMAGE" />
                <div className="w-full max-w-[170px] md:max-w-[210px] md:pr-24 lgtall:max-w-[215px] 2k:max-w-[215px]">
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
