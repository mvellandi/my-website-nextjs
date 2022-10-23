export const getUniqueItems = (items) => {
  const paths = new Set();
  return items.filter((item) => {
    const path = item.slug || item.url;
    if (paths.has(path)) {
      return false;
    } else {
      paths.add(path);
      return true;
    }
  });
};
