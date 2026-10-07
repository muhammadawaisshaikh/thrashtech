import Image from "next/image";

export default function TeamSection() {
    const team = [
        { id: 1, name: "Muhammad Awais", designation: "Chief Executive Officer", image: "https://avatars.githubusercontent.com/u/24633059?v=4" },
        { id: 2, name: "Ilyas Ahmed", designation: "Chief Technology Officer", image: "https://i.ibb.co/N4JSP9r/Screenshot-2026-10-08-at-02-08-07.png" },
        { id: 3, name: "Muhammad Idrees", designation: "Software Development Manager", image: "https://i.ibb.co/7tH6wCKV/Screenshot-2026-10-08-at-02-08-25.png" },
        { id: 4, name: "Muhammad Anis", designation: "Team Lead Web Technology", image: "https://i.ibb.co/zWWP0yyd/Screenshot-2026-10-08-at-02-08-37.png" }
    ]

    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3">
                        The people behind the magic
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Meet our{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                            Experts
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        A global team of creators and innovators — we prioritize consistently delivering excellence.
                    </p>
                </div>

                {/* Team grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {team.map((member) => (
                        <div
                            key={member.id}
                            className="group relative rounded-2xl p-px bg-gradient-to-br from-gray-700 via-gray-800 to-gray-700 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500 transition-all duration-300"
                        >
                            <div className="rounded-2xl bg-gray-950 px-6 py-8 flex flex-col items-center text-center gap-4">
                                {/* Avatar ring */}
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300 scale-110" />
                                    <Image
                                        className="relative h-20 w-20 rounded-full object-cover ring-2 ring-gray-700 group-hover:ring-indigo-500 transition-all duration-300"
                                        src={member.image}
                                        alt={member.name}
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-white">{member.name}</h3>
                                    <p className="mt-1 text-sm text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-medium">
                                        {member.designation}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
