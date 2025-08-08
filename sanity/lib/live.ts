// Temporarily disabled live content due to React 19 compatibility issues
// import { defineLive } from "next-sanity";
// import { client } from './client'

// export const { sanityFetch, SanityLive } = defineLive({ 
//   client: client.withConfig({ 
//     apiVersion: 'vX' 
//   }) 
// });

// Fallback to regular client
import { client } from './client'

export const sanityFetch = client.fetch
