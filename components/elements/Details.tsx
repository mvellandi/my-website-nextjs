import type { ReactNode } from 'react';

interface DetailsProps {
  summary: string;
  children: ReactNode;
}

export default function Details({ summary, children }: DetailsProps) {
    return (
        <details className="group mb-12 lg:mt-12">
            <summary className="cursor-pointer list-none">
                <div className="flex w-full justify-between">
                    <h2 className="relative m-0 w-full border border-[#dadada] bg-[#e7e7e7] py-4 pl-6 text-lg font-semibold lg:p-6 lg:text-xl lg:font-[500]">
                        <span className="absolute -left-20 top-1/2 -translate-y-1/2 text-sm transition-transform group-open:rotate-90 lg:-left-28">
                            &#9654;
                        </span>
                        {summary}
                    </h2>
                </div>
                <div className="w-full border-t-3 border-orange"> </div>
            </summary>
            <div className="prose-area mb-24 mt-0 lg:mb-36">{children}</div>
        </details>
    )
}