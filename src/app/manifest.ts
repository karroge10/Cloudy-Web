import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Cloudy - Daily Gratitude Companion',
    short_name: 'Cloudy',
    description: 'A simple, beautiful gratitude journal designed to help you build a positive habit.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#f97316',
    icons: [
      {
        src: '/images/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
