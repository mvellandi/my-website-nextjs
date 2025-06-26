/* eslint-disable @next/next/no-img-element */
import { imageBuilder } from '../../lib/sanity'
import { getImageDimensions } from '@sanity/asset-utils'
import { PortableText } from '@portabletext/react'

interface ImageNode {
    alt?: string;
    asset: {
        _ref: string;
        _type: string;
    };
    _type: string;
    [key: string]: any;
}

interface ArticleData {
    headline: string;
    body: {
        _type: string;
        body: any[];
    };
}

interface ItemProps {
    data: ArticleData;
}

const ImageComponent = ({ value }: { value: ImageNode }) => {
    const { width, height } = getImageDimensions(value)
    return (
        <img
            src={imageBuilder.image(value).url()}
            alt={value.alt || ' '}
            loading="lazy"
            style={{ aspectRatio: width / height }}
        />
    )
}

export default function Item({ data }: ItemProps) {
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