import { PROJECTS } from '../data'
import { ProjectVideo } from '@/components/motion-primitives/project-video'

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <div key={project.id} className="space-y-4">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
            {project.video && (
              <ProjectVideo 
                src={project.video} 
                coverImage={project.coverImage}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
