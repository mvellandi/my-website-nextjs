import { getProjectAndNavData, getAllProjectSlugs } from '/lib/project'
import SectionLayout from '/components/section/Layout'
import ProjectItem from '/components/project/Item'

export default function Project({ nav, project, preview = false }) {
    return (
        <SectionLayout type="project" nav={nav}>
            <ProjectItem data={project} />
        </SectionLayout>
    )
}

export async function getStaticProps({ params, preview = false }) {
    const data = await getProjectAndNavData({
        slug: params.slug,
        preview,
    })
    return {
        props: {
            nav: data.nav,
            project: data.project,
            preview,
        },
        revalidate: 1,
    }
}

// For each project, compute the previous/next project slugs and pass them to each
export async function getStaticPaths() {
    const slugs = await getAllProjectSlugs()
    return {
        paths: slugs || [],
        fallback: false,
    }
}
