import Image from "next/image"
import { ProjectItem } from "../../types/projects";
import Link from "next/link";

interface ProjectProps {
    projects: ProjectItem[];
    isOnLanding: boolean;
}

const ProjectsSection: React.FC<ProjectProps> = ({ projects, isOnLanding }) => {
    const posts = isOnLanding ? projects.slice(0, 6) : projects;

    return (
        <div className="bg-gray-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-2xl lg:mx-0 mb-12">
                    <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3">
                        Our work
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Recent{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                            Work.
                        </span>
                    </h2>
                    <p className="mt-3 text-lg leading-8 text-gray-400">
                        Let&apos;s innovate your business with our experts.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-6 border-t border-gray-800 pt-10 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post: ProjectItem) => (
                        <div
                            key={post.id}
                            className="group relative rounded-2xl p-px bg-gradient-to-br from-gray-800 via-gray-800/50 to-gray-800 hover:from-indigo-500/50 hover:via-purple-500/30 hover:to-indigo-500/50 transition-all duration-300"
                        >
                            <div className="rounded-2xl bg-gray-900 overflow-hidden flex flex-col h-full">
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        src={post.image}
                                        width={600}
                                        height={400}
                                        alt={post.title}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1 gap-3">
                                    <span className="inline-flex self-start rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-400">
                                        {post.category.title}
                                    </span>
                                    <h3 className="text-base font-semibold text-white group-hover:text-indigo-300 transition-colors duration-200">
                                        <a href={post.href} target="_blank" rel="noopener noreferrer">
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="text-sm leading-6 text-gray-400 line-clamp-3">
                                        {post.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* See all */}
                {isOnLanding && (
                    <div className="text-center mt-12">
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-6 py-3 text-sm font-semibold text-gray-300 hover:border-indigo-500 hover:text-white transition-all duration-200"
                        >
                            See All Projects <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
export default ProjectsSection;
