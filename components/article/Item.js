/* eslint-disable @next/next/no-img-element */
import { urlForImage } from "/lib/sanity";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

export default function Item({ data }) {
  const { headline, body } = data;

  return (
    <>
      <h1 className="mb-20 text-3xl font-light leading-tight text-black text-balance -tracking-1 lg:mb-40">
        {headline}
      </h1>
      <div className="prose-lg lg:prose-xl">
        {(() => {
          const [_type, content] = [body._type, body.body];
          return <PortableText value={content} onMissingComponent={false} />;
        })()}
      </div>
    </>
  );
}
