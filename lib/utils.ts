import type { ContentCard } from '../types';

export const getUniqueItems = (items: Array<ContentCard>): Array<ContentCard> => {
  const paths = new Set<string>();
  return items.filter((item: ContentCard): boolean => {
    const path: string | undefined = item.slug || item.url;
    if (path && paths.has(path)) {
      return false;
    } else {
      if (path) paths.add(path);
      return true;
    }
  });
};