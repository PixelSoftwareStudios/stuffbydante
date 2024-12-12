export const baseUrl = 'https://stuffbydante.net'

import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
	{
		url: baseUrl,
	},
	{
		url: `${baseUrl}/about`,
	},
	{
		url: `${baseUrl}/projects`,
	},
  ]
}