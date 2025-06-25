// Utility function for page type checking
export const pageTypeCheck = (type, list) => {
    return list.includes(type)
}

// Content width styles by page type
export const elementContentWidthStyle = (function () {
  const md = "max-w-[870px]";
  const xl = "max-w-screen-xl";
  return {
    main: xl,
    project: `${md} xl:${xl}`,
    article: md,
    page: md,
  };
})();

// Navigation height styles
export const navHeightStyle = {
    base: 'h-[58px] md:h-[75px] lg:h-96',
}

// Navigation menu gap styles by page type
export const navMenuGapStyle = {
    project: 'sm:gap-36 md:gap-52 lg:gap-64 xl:gap-[7.2rem] 2xl:gap-[8.8rem]',
    article: 'gap-24 sm:gap-[30px] md:gap-40 lg:gap-64',
    page: 'gap-24 sm:gap-[30px] md:gap-40 lg:gap-64',
}

// Navigation link styles
export const navLinkStyle = 'leading-none select-none text-[2rem] before:-mt-[1.2rem] md:text-[2.4rem] md:before:-mt-[1.3rem]'

// Shadow styles
export const shadowStyle = {
    nav: 'shadow-[0_1px_4px_0_rgba(50,50,50,0.45),0_15px_8px_0_rgba(230,230,230,0.3)]',
}

// Base style generators
export const getNavMenuStyle = (type) => {
    const baseStyle = 'sr-only sm:not-sr-only sm:flex'
    if (pageTypeCheck(type, ['project'])) {
        return `${baseStyle} ${navMenuGapStyle.project}`
    }
    if (pageTypeCheck(type, ['article', 'page'])) {
        return `${baseStyle} ${navMenuGapStyle[type] || navMenuGapStyle.article}`
    }
    return baseStyle
}

export const getFooterContentStyle = (type) => {
    const baseStyle = 'w-full site-padding-x text-white'
    if (pageTypeCheck(type, ['main'])) {
        return `${baseStyle} ${elementContentWidthStyle.main}`
    }
    if (pageTypeCheck(type, ['project'])) {
        return `${baseStyle} ${elementContentWidthStyle.project}`
    }
    if (pageTypeCheck(type, ['article', 'page'])) {
        return `${baseStyle} ${elementContentWidthStyle.article}`
    }
    return baseStyle
}
