/* eslint-disable @next/next/no-img-element */
import { urlForImage } from "/lib/sanity";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

export default function Item({ data, as }) {
  const Component = as || "div";
  const { headline, body } = data;

  return (
    <div className="flex flex-col items-center bg-white site-padding-x">
      <div className="flex w-full max-w-[870px]">
        <Component className="flex flex-col gap-10 md:gap-14 bg-white w-full max-w-[870px] pt-[50px] lg:pt-[80px] pb-[60px] lg:pb-[100px]">
          <h1 className="text-3xl text-black font-light -tracking-1 leading-tight">
            {headline}
          </h1>
          <div className="prose-lg lg:prose-xl">
            {(() => {
              const [_type, content] = [body._type, body.body];
              return (
                <PortableText value={content} onMissingComponent={false} />
              );
            })()}
          </div>
        </Component>
      </div>
    </div>
  );
}
