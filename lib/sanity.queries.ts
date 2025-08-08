import { groq } from 'next-sanity'

// Projects query
export const projectsQuery = groq`
  *[_type == "project"] {
    _id,
    name,
    description,
    "slug": slug.current,
    "coverImage": coverImage.asset->url,
    "video": video.asset->url,
    link,
    order
  } | order(order asc)
`

// Work experience query
export const workExperienceQuery = groq`
  *[_type == "workExperience"] {
    _id,
    company,
    title,
    startDate,
    endDate,
    link,
    order
  } | order(order asc)
`

// Blog posts query
export const blogPostsQuery = groq`
  *[_type == "post"] {
    _id,
    title,
    "slug": slug.current,
    description,
    publishedAt,
    "mainImage": mainImage.asset->url
  } | order(publishedAt desc)
`

// Single project query
export const projectQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    name,
    description,
    "slug": slug.current,
    "coverImage": coverImage.asset->url,
    "video": video.asset->url,
    link,
    content
  }
`

// Single blog post query
export const blogPostQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    publishedAt,
    "mainImage": mainImage.asset->url,
    body
  }
` 