import fetch from 'node-fetch'
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const body = req.body || {}
  // support form-encoded bodies in simple dev mode
  const email = body.email || req.query.email
  if (!email) return res.status(400).json({ error: 'email required' })

  const API_KEY = process.env.MAILCHIMP_KEY
  const LIST_ID = process.env.MAILCHIMP_LIST_ID
  if (!API_KEY || !LIST_ID) return res.status(500).json({ error: 'Mailchimp not configured' })

  const DATACENTER = API_KEY.split('-')[1]
  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `apikey ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email_address: email, status: 'subscribed' })
  })

  if (!response.ok) {
    const err = await response.text()
    return res.status(500).json({ error: err })
  }

  return res.status(200).json({ ok: true })
}
