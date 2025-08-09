// Webhook receiver stub for age verification provider
// Providers: Persona, Yoti, AgeChecked, Veratad
export default async function handler(req, res) {
  // Verify signature from provider using env secret
  // Parse payload and set your session/state accordingly
  console.log('age-verify webhook', req.method)
  res.status(200).json({ ok: true })
}
