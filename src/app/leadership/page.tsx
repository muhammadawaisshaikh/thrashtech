import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { team } from '@/utils/mock-data/team'

export const metadata: Metadata = {
    title: 'Meet our Leadership — Thrashtech',
    description: 'The people driving Thrashtech\'s mission to build intelligent futures.',
}

export default function LeadershipPage() {
    return (
        <div className="bg-gray-950 min-h-screen">
            {/* Hero */}
            <div className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
                {/* Glow blobs */}
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute top-0 left-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
                    <div className="absolute top-20 right-1/4 h-96 w-96 translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200 mb-8"
                    >
                        <span aria-hidden="true">←</span> Back to home
                    </Link>
                    <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
                        The people behind the mission
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Meet our{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                            Leadership
                        </span>
                    </h1>
                    <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-gray-400">
                        A globally distributed team of builders, strategists, and innovators — united by a shared belief that technology should create real, lasting impact.
                    </p>
                </div>
            </div>

            {/* Team cards */}
            <div className="mx-auto max-w-7xl px-6 pb-32 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {team.map((member) => (
                        <div
                            key={member.id}
                            className="group relative rounded-2xl p-px bg-gradient-to-br from-gray-800 via-gray-800/50 to-gray-800 hover:from-indigo-500/40 hover:via-purple-500/20 hover:to-indigo-500/40 transition-all duration-300"
                        >
                            <div className="rounded-2xl bg-gray-900 p-8 h-full flex flex-col sm:flex-row gap-6">
                                {/* Avatar */}
                                <div className="shrink-0 flex flex-col items-center gap-3">
                                    <div className="relative">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 scale-110" />
                                        <Image
                                            className="relative h-20 w-20 rounded-full object-cover ring-2 ring-gray-700 group-hover:ring-indigo-500 transition-all duration-300"
                                            src={member.image}
                                            alt={member.name}
                                            width={80}
                                            height={80}
                                        />
                                    </div>
    
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-2 flex-1">
                                    <h3 className="text-lg font-bold text-white">{member.name}</h3>
                                    <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                                        {member.designation}
                                    </p>
                                    <div className="mt-2 h-px w-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                                    <p className="mt-3 text-sm leading-7 text-gray-400">{member.bio}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="border-t border-gray-800">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-white sm:text-3xl">
                        Want to join this team?
                    </h2>
                    <p className="mt-4 text-gray-400">We&apos;re always looking for exceptional people who share our values.</p>
                    <a
                        href="mailto:thrashtechinfo@gmail.com"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:opacity-90 transition-all duration-200"
                    >
                        <i className="fa-solid fa-envelope" />
                        Get in touch
                    </a>
                </div>
            </div>
        </div>
    )
}
