import { getProjectAndNavData, getAllProjectsWithSlug } from "/lib/project";
import SectionLayout from "/components/section/Layout";
import ProjectItem from "/components/project/Item";

export default function Project({ nav, project, preview }) {
  return (
    <>
      <SectionLayout nav={nav}>
        <ProjectItem data={project} />
      </SectionLayout>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getProjectAndNavData({
    slug: params.slug,
    preview,
  });
  return {
    props: {
      nav: {
        title: data.sectionTitle,
        route: data.route,
        next: data.nextItemSlug,
        prev: data.previousItemSlug,
      },
      project: data.item,
      preview,
    },
    revalidate: 1,
  };
}

// For each project, compute the previous/next project slugs and pass them to each
export async function getStaticPaths() {
  const allProjects = await getAllProjectsWithSlug();
  return {
    paths:
      allProjects?.map((project) => ({
        params: {
          slug: project.slug,
        },
      })) || [],
    fallback: true,
  };
}
