export default async function handler(req, res) {
  const { to } = req.query
  if (!to) return res.status(400).send('missing to')

  const ALLOWED = [
    'https://onlyfans.com',
    'https://www.onlyfans.com',
    'https://youtube.com',
    'https://www.youtube.com',
    'https://www.tiktok.com',
    'https://tiktok.com',
    'https://instagram.com',
    'https://www.instagram.com'
  ]
  const isAllowed = ALLOWED.some(domain => to.startsWith(domain))
  if (!isAllowed) return res.status(403).send('Forbidden target')

  // Log server-side click - implement your logging here (DB or analytics provider)
  // Example: store referrer, ip, user-agent for analytics and abuse monitoring

  res.writeHead(302, { Location: to })
  res.end()
}
