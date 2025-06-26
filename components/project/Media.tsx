import Section from "./Section";
import { urlForImage } from "../../lib/sanity";
import FsLightbox from "fslightbox-react";
import { useState } from "react";

interface MediaItem {
    _key: string;
    image: any;
    alt?: string;
}

interface MediaProps {
    media: MediaItem[];
}

interface LightboxController {
    toggler: boolean;
    slide: number;
}

export default function Media({ media }: MediaProps) {
  const [lightboxController, setLightboxController] = useState<LightboxController>({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number: number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <Section title="Media" className="media">
      <div className="grid items-start grid-cols-2 pt-4 pb-8 gap-28 sm:grid-cols-3 md:grid-cols-4">
        {media.map(({ _key, ...rest }, n) => (
          <a
            key={_key}
            aria-hidden
            onClick={() => openLightboxOnSlide(n + 1)}
            className="rounded-xl overflow-hidden border-2 border-[#d4e3fd] cursor-pointer shadow-md"
          >
            <img
              src={urlForImage(rest.image).width(500).sharpen(30).url()}
              alt="rest.alt"
              className="w-full max-h-[120px] object-cover"
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
  );
}