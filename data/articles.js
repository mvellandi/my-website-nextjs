// These are extra article cards to include in the articles index page
// The cards refer to either static local article pages or external URLs
// Images are now hosted on Sanity CDN for better performance

// THE IDs needs to be unique and manually updated

export const firstArticles = [
    {
        isCMSImage: true,  // Now using Sanity CDN
        _id: '14528482166013190',
        slug: 'writing-collection',
        coverImage: 'image-73e2fc62705846524ee55c2f86482c41f277d091-500x500-jpg',
        title: 'Written Works',
        subtitle: 'Journalism, interviews, and copywriting, oh my!',
    },
    {
        isCMSImage: true,  // Now using Sanity CDN
        _id: '14528482166013191',
        slug: 'rich-media-collection',
        coverImage: 'image-6412cb7f53cd387c5b92f963b0b0d302287792c6-500x500-jpg',
        title: 'Rich Media Collection',
        subtitle: 'Videos, audio, infographics, and multimedia',
    },
]

export const lastArticles = [
    {
        isCMSImage: true,  // Now using Sanity CDN
        _id: '14528482166013192',
        url: 'https://old-journal.vellandi.net',
        coverImage: 'image-a12cbcb37e5c176e1bc47c242e205a4c3e432cd7-123x123-svg',
        title: 'Blog Archive 2006-2016',
        subtitle:
            '618 posts on marketing, design, product development, and sustainability',
    },
]
