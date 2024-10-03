export default function Details({ summary, children }) {
    return (
        <details className="group mb-10 lg:mt-12">
            <summary className="cursor-pointer list-none">
                <div className="flex w-full justify-between">
                    <h2 className="relative m-0 w-full border border-[#dadada] bg-[#e7e7e7] py-2 pl-6 font-semibold lg:p-6 lg:text-lg lg:font-[500]">
                        <span className="absolute -left-20 top-1/2 -translate-y-1/2 text-sm transition-transform group-open:rotate-90 lg:-left-28">
                            &#9654;
                        </span>
                        {summary}
                    </h2>
                    {/* <span className="mt-12 inline-block text-sm">
                                all categories
                            </span> */}
                </div>
                <div className="w-full border-t-3 border-orange"> </div>
            </summary>
            <div className="prose-area mb-24 mt-0 lg:mb-36">{children}</div>
        </details>
    )
}
