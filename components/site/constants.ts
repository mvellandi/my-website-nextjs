import type { PageTypeChecker, StyleGenerator, StyleConfig, NavStyles, NavMenuStyles } from '../../types'

// Utility function for page type checking
export const pageTypeCheck: PageTypeChecker = (type, list) => {
    return list.includes(type)
}

// Content width styles by page type
export const elementContentWidthStyle: StyleConfig = (function () {
  const md = "max-w-[870px]";
  const xl = "max-w-screen-xl";
  return {
    main: "max-w-[900px]",
    project: `${md} xl:${xl}`,
    article: md,
    page: md,
  };
})();

// Navigation height styles
export const navHeightStyle: NavStyles = {
    base: 'h-[58px] md:h-[65px] 3xl:h-80',
}

// Navigation menu gap styles by page type
export const navMenuGapStyle: NavMenuStyles = {
    project: 'sm:gap-36 md:gap-52 lg:gap-64 xl:gap-[4.5rem] 2xl:gap-[5.5rem]',
    article: 'gap-24 sm:gap-[30px] md:gap-40 lg:gap-64',
    page: 'gap-24 sm:gap-[30px] md:gap-40 lg:gap-64',
}

// Navigation link styles
export const navLinkStyle = 'leading-none select-none text-[1.25rem] before:-mt-12 md:text-[1.5rem] md:before:-mt-[13px] pt-16'

// Shadow styles
export const shadowStyle: StyleConfig = {
    nav: 'shadow-[0_1px_4px_0_rgba(50,50,50,0.45),0_15px_8px_0_rgba(230,230,230,0.3)]',
}

// Base style generators
export const getNavMenuStyle: StyleGenerator = (type) => {
    const baseStyle = 'sr-only sm:not-sr-only sm:flex'
    if (pageTypeCheck(type, ['project'])) {
        return `${baseStyle} ${navMenuGapStyle.project}`
    }
    if (pageTypeCheck(type, ['article', 'page'])) {
        return `${baseStyle} ${navMenuGapStyle[type as keyof NavMenuStyles] || navMenuGapStyle.article}`
    }
    return baseStyle
}

export const getFooterContentStyle: StyleGenerator = (type) => {
    const baseStyle = 'w-full mx-auto px-20 lg:px-0 text-white'
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