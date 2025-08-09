import Head from 'next/head'
import { personSchema, websiteSchema, breadcrumbSchema, musicSchema } from '../lib/schema'
import { getCanonicalUrl } from '../lib/seo'

export default function Home() {
  const canonical = getCanonicalUrl('/')
  const jsonLd = { '@context': 'https://schema.org', '@graph': [personSchema, websiteSchema, breadcrumbSchema, ...musicSchema] }

  return (
    <>
      <Head>
        <title>Dax Gigandet — Musician, Creator, Activist | Official Site</title>
        <meta name="description" content="Official creator hub for Dax Gigandet. Music, merch, activism, press kit, and secure links." />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Dax Gigandet — Official Creator Hub" />
        <meta property="og:description" content="Music, activism, and exclusive content. Join the newsletter." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SITE_URL}/assets/og-image.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DaxGigandet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>
      <main style={{maxWidth:1000, margin:'2rem auto', padding:'0 1rem'}}>
        <header>
          <h1>Dax Gigandet — Official Creator Hub</h1>
          <p>Music • Activism • Content • Merch • Bookings</p>
        </header>
        <section style={{marginTop:20}}>
          <h2>Official Links</h2>
          <ul>
            <li><a href="/api/redirect?to=https://youtube.com/@daxgigandet">YouTube</a></li>
            <li><a href="/api/redirect?to=https://www.tiktok.com/@daxgigandet">TikTok</a></li>
            <li><a href="/api/redirect?to=https://onlyfans.com/daxgigandet">OnlyFans (age-gated)</a></li>
          </ul>
        </section>
        <section style={{marginTop:20}}>
          <h2>Newsletter</h2>
          <form method="post" action="/api/subscribe">
            <input name="email" placeholder="Email address" />
            <button type="submit">Subscribe</button>
          </form>
        </section>
        <footer style={{marginTop:40, borderTop:'1px solid #ddd', paddingTop:10}}>
          © {new Date().getFullYear()} Dax Gigandet
        </footer>
      </main>
    </>
  )
}
