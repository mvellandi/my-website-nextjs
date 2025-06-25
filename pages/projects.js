import { useEffect } from 'react'
import { useRouter } from 'next/router'

// Redirect page for /projects to maintain backward compatibility
// This handles any existing bookmarks or inbound links to /projects
export default function ProjectsRedirect() {
    const router = useRouter()
    
    useEffect(() => {
        router.replace('/')
    }, [router])
    
    // Return null while redirecting
    return null
}

// No getStaticProps needed since this is just a redirect