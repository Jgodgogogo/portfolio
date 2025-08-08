import { client } from './sanity'
import { projectsQuery, workExperienceQuery, blogPostsQuery, projectQuery, blogPostQuery } from './sanity.queries'

export async function getProjects() {
  return await client.fetch(projectsQuery)
}

export async function getWorkExperience() {
  return await client.fetch(workExperienceQuery)
}

export async function getBlogPosts() {
  return await client.fetch(blogPostsQuery)
}

export async function getProject(slug: string) {
  return await client.fetch(projectQuery, { slug })
}

export async function getBlogPost(slug: string) {
  return await client.fetch(blogPostQuery, { slug })
} 