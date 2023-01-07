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
