import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { secret, slug } = req.query

  if (secret !== process.env.SANITY_STUDIO_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  if (!slug || typeof slug !== 'string') {
    return res.status(400).json({ message: 'Missing slug' })
  }

  res.setPreviewData({})
  res.redirect(`/articles/${slug}`)
}
