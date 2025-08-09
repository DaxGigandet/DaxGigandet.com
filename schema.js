export const personSchema = {
  '@type': 'Person',
  '@id': 'https://daxgigandet.com/#person',
  name: 'Dax Gigandet',
  url: 'https://daxgigandet.com',
  sameAs: [
    'https://www.tiktok.com/@daxgigandet',
    'https://www.youtube.com/@daxgigandet',
    'https://twitter.com/DaxGigandet',
    'https://instagram.com/daxgigandet'
  ],
  jobTitle: 'Musician, Influencer, Activist',
  description: 'Dax Gigandet — musician, TikTok personality, activist. Official website and creator hub.'
}

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': 'https://daxgigandet.com/#website',
  url: 'https://daxgigandet.com',
  name: 'Dax Gigandet — Official',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://daxgigandet.com/?s={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
}

export const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://daxgigandet.com' }
  ]
}

export const musicSchema = [
  {
    '@type': 'MusicRecording',
    name: 'Voices',
    url: 'https://daxgigandet.com/music/voices',
    byArtist: { '@type': 'MusicGroup', name: 'Dax Gigandet' },
    inAlbum: { '@type': 'MusicAlbum', name: 'Sinister', url: 'https://daxgigandet.com/album/sinister' }
  },
  {
    '@type': 'MusicRecording',
    name: 'Medicaid',
    url: 'https://daxgigandet.com/music/medicaid',
    byArtist: { '@type': 'MusicGroup', name: 'Dax Gigandet' },
    inAlbum: { '@type': 'MusicAlbum', name: 'Sinister', url: 'https://daxgigandet.com/album/sinister' }
  }
]
