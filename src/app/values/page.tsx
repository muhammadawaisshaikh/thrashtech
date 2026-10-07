import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Our Values — Thrashtech',
    description: 'The principles that guide every decision we make at Thrashtech.',
}

const values = [
    {
        icon: 'fa-solid fa-lightbulb',
        title: 'Innovation First',
        description:
            'We treat curiosity as a core skill. Every project begins with the question "what if?" — pushing us to explore solutions beyond the obvious and deliver products that lead rather than follow.',
    },
    {
        icon: 'fa-solid fa-handshake',
        title: 'Radical Transparency',
        description:
            'Honest communication builds trust. We share progress, blockers, and decisions openly — with our clients and within our team — because clarity moves faster than ambiguity.',
    },
    {
        icon: 'fa-solid fa-star',
        title: 'Relentless Excellence',
        description:
            'Good enough is never good enough. We hold every line of code, every design decision, and every client interaction to a high standard — because our work is a direct reflection of our character.',
    },
    {
        icon: 'fa-solid fa-people-group',
        title: 'Collaboration Over Ego',
        description:
            'The best ideas survive on merit, not seniority. We foster an environment where every voice contributes, diverse perspectives are sought out, and collective wins matter more than individual credit.',
    },
    {
        icon: 'fa-solid fa-user-check',
        title: 'Client-Centered Thinking',
        description:
            'Our success is measured by our clients\' success. We invest time to deeply understand every business we work with, so we can build solutions that solve real problems — not just requirements on a spec sheet.',
    },
    {
        icon: 'fa-solid fa-seedling',
        title: 'Continuous Growth',
        description:
            'Technology never stops evolving, and neither do we. We dedicate time to learning, experimentation, and sharing knowledge — keeping our team sharp and our clients ahead of the curve.',
    },
]

export default function ValuesPage() {
    return (
        <div className="bg-gray-950 min-h-screen">
            {/* Hero */}
            <div className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
                {/* Glow blobs */}
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute top-0 left-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
                    <div className="absolute top-20 right-1/3 h-96 w-96 translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200 mb-8"
                    >
                        <span aria-hidden="true">←</span> Back to home
                    </Link>
                    <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
                        What we stand for
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Our{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                            Values
                        </span>
                    </h1>
                    <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-gray-400">
                        These aren&apos;t words on a wall — they are the principles that shape how we build, how we communicate, and how we grow. Every decision at Thrashtech traces back to one of these six commitments.
                    </p>
                </div>
            </div>

            {/* Values grid */}
            <div className="mx-auto max-w-7xl px-6 pb-32 lg:px-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl p-px bg-gradient-to-br from-gray-800 via-gray-800/50 to-gray-800 hover:from-indigo-500/50 hover:via-purple-500/30 hover:to-indigo-500/50 transition-all duration-300"
                        >
                            <div className="rounded-2xl bg-gray-900 p-8 h-full flex flex-col gap-5">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow duration-300">
                                    <i className={`${value.icon} text-white text-lg`} />
                                </div>
                                <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                                <p className="text-sm leading-7 text-gray-400 flex-1">{value.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="border-t border-gray-800">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-white sm:text-3xl">
                        These values shape the people behind the work.
                    </h2>
                    <p className="mt-4 text-gray-400">Meet the leadership team that lives them every day.</p>
                    <Link
                        href="/leadership"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:opacity-90 transition-all duration-200"
                    >
                        Meet our leadership <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
