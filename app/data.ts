interface Project {
  name: string
  description: string
  link: string
  video: string
  id: string
  coverImage: string
}

interface WorkExperience {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

interface BlogPost {
  title: string
  description: string
  link: string
  uid: string
}

interface SocialLink {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'JLR 2025 Hackthon',
    description: 'Placeholder for hackthon project',
    link: '/project/1',
    video: '1.mp4',
    id: 'project1',
    coverImage: '/1.jpg'
  },
  {
    name: 'Volvo One HMI OS',
    description: 'Placeholder for volvo cars project.',
    link: '/project/2',
    video: '2.mp4',
    id: 'project2',
    coverImage: '/2.jpg'
  },
  {
    name: 'SVW Project Sample',
    description: 'Placeholder for SVW project experience.',
    link: '/project/3',
    video: '3.mp4',
    id: 'project3',
    coverImage: '/3.jpg'
  },
  {
    name: 'GM Project Sample',
    description: 'Placeholder for GM project experience.',
    link: '/project/4',
    video: '4.mp4',
    id: 'project4',
    coverImage: '/4.jpg'
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'JLR China',
    title: 'UX Lead',
    start: '2024',
    end: 'Present',
    link: '/https://linkedin.com/',
    id: 'work1'
  },
  {
    company: 'Volvo Cars',
    title: 'Senior Designer',
    start: '2021',
    end: '2024',
    link: 'https://ibelick.com',
    id: 'work2'
  },
  {
    company: 'SAIC Volkswagen',
    title: 'UX Expert',
    start: '2017',
    end: '2021',
    link: 'https://ibelick.com',
    id: 'work3'
  },
  {
    company: 'General Motors',
    title: 'UX Designer',
    start: '2015',
    end: '2017',
    link: 'https://ibelick.com',
    id: 'work4'
  }  
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'A deep dive into how artificial intelligence is reshaping the landscape of design engineering.',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'exploring-the-intersection-of-design-ai-and-design-engineering'
  },
  {
    title: 'Example MDX Metadata',
    description: 'This is an example of MDX metadata.',
    link: '/blog/example-mdx-metadata',
    uid: 'example-mdx-metadata'
  }
]

export const EMAIL = 'jun.zhang@example.com'

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/junzhang'
  },
  {
    label: 'GitHub',
    link: 'https://github.com/junzhang'
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/junzhang'
  }
] 