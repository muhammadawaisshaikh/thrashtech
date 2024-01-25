import Image from "next/image"
import { ProjectItem } from "../types/projects";

interface ProjectProps {
    projects: ProjectItem[];
    isOnLanding: boolean
}

const ProjectsSection: React.FC<ProjectProps> = ({ projects, isOnLanding }) => {
    const posts = projects;

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recent Work.</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Let's innovate your business with our experts.
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post: any) => (
                        <div key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="group relative">
                                <div className="bg-black-500">
                                    <Image className="object-cover hover:object-scale-down h-48 w-96 rounded-lg border border-gray-20" src={post.image} width={500} height={500} alt="Project Image" />
                                </div>
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href={post.href}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                            </div>
                            <div className="flex items-center gap-x-4 text-xs mt-5">
                                <a href={post.category.href} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                    {post.category.title}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {
                isOnLanding && (
                    <div className="text-center mt-16">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">See All Projects <span aria-hidden="true">→</span></a>
                    </div>
                )
            }

        </div>
    )
}
export default ProjectsSection;