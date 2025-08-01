interface Project {
  name: string
  description: string
  link: string
  video: string
  id: string
  coverImage: string // 添加封面图片路径
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
    coverImage: '/1.jpg' // 添加封面图片路径
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
    title: ' This is the first blog sample, talk about myself then',
    description: 'Who am I, and what interesting fact of this guy',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1'
  },
  {
    title: 'An experiment of web design and responsive layout',
    description: 'A deep dive into some of the design sample in front-end domain',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2'
  },
  {
    title: 'A new era to build your own IP, Ai is so powerful',
    description: 'How I redesign and delivery the portfolio website by using Ai',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3'
  },
  {
    title: 'What I have learnt during my experience in Volvo cars',
    description: 'Transit from a UX designer to a solution designer',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4'
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ibelick'
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/ibelick'
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ibelick'
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/ibelick'
  }
]

export const EMAIL = 'your@email.com'
