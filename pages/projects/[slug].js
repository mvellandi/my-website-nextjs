import {
  getProjectAndPrevNextProjectSlugs,
  getAllProjectsWithSlug,
} from "/lib/project";
import SectionLayout from "/components/section/Layout";
import SectionNav from "/components/section/Nav";
import ProjectItem from "/components/project/Item";

export default function Project({ data, preview }) {
  return (
    <>
      <SectionLayout>
        <SectionNav
          as="nav"
          place="top"
          sectionTitle={data.sectionTitle}
          route={data.route}
          prev={data.previousItemSlug}
          next={data.nextItemSlug}
        />
        <ProjectItem data={data.item} />
      </SectionLayout>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getProjectAndPrevNextProjectSlugs({
    slug: params.slug,
    preview,
  });
  return {
    props: {
      data,
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
