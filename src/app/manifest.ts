import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TrennFreund | B2B Abfallmanagement',
    short_name: 'TrennFreund',
    description: 'Die kompromisslose B2B-App für Handwerk und Abbruch. Digitale Dokumentation von Bauabfällen.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#84cc16',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
    ],
  }
}
