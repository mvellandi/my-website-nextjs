// These are extra article cards to include in the articles index page
// The cards refer to either static local article pages or external URLs
// Images are now hosted on Sanity CDN for better performance

// THE IDs needs to be unique and manually updated

export const firstArticles = [
    {
        isCMSImage: true, // Now using Sanity CDN
        _id: '14528482166013190',
        slug: 'writing-collection',
        coverImage:
            'image-f3a9274ae5a7de99bc81211e83bd006c824b92ed-500x500-webp',
        title: 'Written Works',
        subtitle: 'Articles, interviews, and copywriting',
    },
    {
        isCMSImage: true, // Now using Sanity CDN
        _id: '14528482166013191',
        slug: 'rich-media-collection',
        coverImage:
            'image-eb7f12585b4bd51e319add0adb092d95312277eb-500x500-webp',
        title: 'Rich Media',
        subtitle: 'Videos, infographics, and multimedia',
    },
]

export const lastArticles = [
    {
        isCMSImage: true, // Now using Sanity CDN
        _id: '14528482166013192',
        url: 'https://old-journal.vellandi.net',
        coverImage:
            'image-a12cbcb37e5c176e1bc47c242e205a4c3e432cd7-123x123-svg',
        title: 'Blog Archive 2006-2016',
        subtitle: '618 posts on marketing, product development, and more',
    },
]
