import cn from 'classnames'

interface HeaderProps {
    name: string;
    sector: string;
    coverImage: string;
}

export default function Header({ name, sector, coverImage }: HeaderProps) {
    function smallerText(text: string): string {
        return text.length > 30 ? 'text-2xl' : 'text-3xl'
    }

    const nameStyle = `${cn(
        smallerText(name),
        'mb-0 text-balance font-light leading-[1.3] text-black -tracking-1 sm:text-3xl'
    )}`

    return (
        <header className="flex w-full justify-between gap-24 sm:justify-start sm:gap-36">
            <div className="flex flex-col gap-8 sm:order-2">
                <h1 className={nameStyle}>{name}</h1>
                <p className="text-sm font-bold uppercase tracking-3 text-gray-700">
                    {sector}
                </p>
            </div>
            <div className="min-w-[100px] max-w-[120px] pt-6 lg:pt-8">
                <img
                    src={coverImage}
                    alt="altText"
                    width={120}
                    height={120}
                    className="order-1 h-[100px] w-[100px] lg:h-[120px] lg:w-[120px]"
                />
            </div>
        </header>
    )
}