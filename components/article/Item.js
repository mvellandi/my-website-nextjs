/* eslint-disable @next/next/no-img-element */
import { urlForImage } from '/lib/sanity'
import Link from 'next/link'
import urlBuilder from '@sanity/image-url'
import { imageBuilder } from '../../lib/sanity'
import { getImageDimensions } from '@sanity/asset-utils'
import { PortableText } from '@portabletext/react'

const ImageComponent = ({ node }) => {
    const { width, height } = getImageDimensions(node)
    return (
        <img
            src={imageBuilder.image(node).url()}
            alt={node.alt || ' '}
            loading="lazy"
            style={{ aspectRatio: width / height }}
        />
    )
}

export default function Item({ data }) {
    const { headline, body } = data

    return (
        <>
            <h1>{headline}</h1>
            <div className="prose-lg 3xl:prose-xl">
                {(() => {
                    const [_type, content] = [body._type, body.body]
                    return (
                        <PortableText
                            value={content}
                            onMissingComponent={false}
                            components={{
                                types: {
                                    image: ImageComponent,
                                },
                            }}
                        />
                    )
                })()}
            </div>
        </>
    )
}
