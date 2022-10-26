import client, { getClient, previewClient } from "./sanity";
import { getUniqueItems } from "./utils";

export const project = {
  name: "project",
  title: "Projects",
  route: "/projects",
  navOrder: 1,
  getAllProjectCards,
};

const projectCardFields = `_id, name, description, 'slug': slug.current, coverImage`;

export async function getAllProjectCards({
  preview,
  fields = projectCardFields,
}) {
  const results = await getClient(preview).fetch(
    `*[_type == "project"] | order(completionDate desc){
        ${fields}
      }`
  );

  const cards = results.map(({ _id, name, description, slug, coverImage }) => ({
    _id,
    slug,
    coverImage,
    title: name,
    subtitle: description,
  }));

  return {
    name: project.name,
    title: project.title,
    route: project.route,
    value: getUniqueItems(cards),
  };
}

export default project;
