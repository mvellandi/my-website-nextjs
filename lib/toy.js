import client, { getClient, previewClient } from "./sanity";
import { getUniqueItems } from "./utils";

export const toy = {
  name: "toy",
  title: "Play",
  route: "/play",
  navOrder: 3,
  getAllToyCards,
};

const toyCardFields = `_id, name, description, url, coverImage`;

export async function getAllToyCards({ preview, fields = toyCardFields }) {
  const results = await getClient(preview)
    .fetch(`*[_type == "toy"] | order(publishedAt desc){
      ${fields}
    }`);

  const cards = results.map(({ _id, name, description, url, coverImage }) => ({
    _id,
    url,
    coverImage,
    title: name,
    subtitle: description,
  }));
  // TODO: uncomment line below to see unique results
  // return getUniqueItems(results);
  return {
    name: toy.name,
    title: toy.title,
    route: toy.route,
    value: cards,
  };
}

export default toy;
