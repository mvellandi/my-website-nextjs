import type { GetStaticPaths, GetStaticProps } from 'next'
import { getProjectAndNavData, getAllProjectSlugs } from '../../lib/project'
import SectionLayout from '../../components/section/Layout'
import ProjectItem from '../../components/project/Item'
import type { NavigationData } from '../../types'
import type { ProjectData } from '../../components/project/Item'

interface ProjectPageProps {
    nav: NavigationData
    project: ProjectData
    preview?: boolean
}

export default function Project({ nav, project, preview = false }: ProjectPageProps) {
    return (
        <SectionLayout type="project" nav={nav}>
            <ProjectItem data={project} />
        </SectionLayout>
    )
}

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({ params, preview = false }) => {
    const slug = params?.slug as string
    const data = await getProjectAndNavData({
        slug,
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

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await getAllProjectSlugs()
    return {
        paths: slugs || [],
        fallback: false,
    }
}