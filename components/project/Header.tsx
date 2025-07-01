import cn from 'classnames'

interface HeaderProps {
    name: string
    sector: string
    coverImage: string
}

export default function Header({ name, sector, coverImage }: HeaderProps) {
    function smallerText(text: string): string {
        return text.length > 30 ? 'text-2xl mb-4' : 'text-3xl mb-0'
    }

    // Map of project names to their crop percentages (20px out of 120px = ~16.67%)
    const projectsNeedingCrop = new Map([
        ['Sustainable Brands', 16.67],
        // Add more projects as needed:
        // ['Another Project', 12.5],  // 15px crop
        // ['Yet Another Project', 25.0]  // 30px crop
    ])

    // 10px crop = 8.33%
    // 15px crop = 12.5%
    // 20px crop = 16.67%
    // 25px crop = 20.83%
    // 30px crop = 25%

    // Check if this project needs image cropping and get the crop percentage
    const cropPercentage = projectsNeedingCrop.get(name) || 0

    const nameStyle = `${cn(
        smallerText(name),
        'text-balance font-light leading-[1.1] text-black -tracking-1 sm:text-3xl sm:leading-[1.15]'
    )}`

    return (
        <header className="flex w-full justify-between gap-24 sm:justify-start sm:gap-36">
            <div className="flex flex-col gap-2 sm:order-2 sm:gap-8">
                <h1 className={nameStyle}>{name}</h1>
                <p className="mb-0 text-sm font-bold uppercase tracking-3 text-gray-700">
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
                    style={
                        cropPercentage > 0
                            ? {
                                  clipPath: `inset(0 0 ${cropPercentage}% 0)`,
                                  marginBottom: `-${cropPercentage}%`,
                              }
                            : {}
                    }
                />
            </div>
        </header>
    )
}
