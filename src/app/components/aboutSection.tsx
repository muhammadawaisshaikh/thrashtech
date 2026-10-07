import Image from "next/image";

export default function AboutSection() {
    const stats = [
        { value: "100+", label: "Projects Accomplished" },
        { value: "7+",   label: "Tech Experts" },
        { value: "20+",  label: "Conferences" },
        { value: "∞",    label: "AI in Everything" },
    ];

    return (
        <div id="about" className="relative overflow-hidden bg-gray-900 py-24 sm:py-32">
            {/* Background image with overlay */}
            <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
                alt="Team collaborating"
                className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-10"
                width={1920}
                height={1080}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-950 via-gray-900/90 to-gray-950" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3">
                        Why work with us
                    </p>
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Work with{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                            us
                        </span>
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        Accelerate the development of groundbreaking products, achieving innovation efficiently and on a larger scale. Maximize the potential of your current technology by strategically reimagining it for the future. Our expertise lies in revitalizing platforms with high performance, enhanced user experiences, scalability, and robust security.
                    </p>
                </div>

                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="flex flex-wrap gap-6 text-base font-semibold leading-7">
                        <a
                            href="#"
                            className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 hover:opacity-80 transition-opacity duration-200"
                        >
                            Our values <span aria-hidden="true">&rarr;</span>
                        </a>
                        <a
                            href="#"
                            className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 hover:opacity-80 transition-opacity duration-200"
                        >
                            Meet our leadership <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>

                    {/* Stats */}
                    <dl className="mt-16 grid grid-cols-2 gap-8 sm:mt-20 sm:grid-cols-4">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="flex flex-col rounded-2xl border border-gray-800 bg-gray-900/60 px-6 py-8 backdrop-blur-sm"
                            >
                                <dd className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                                    {stat.value}
                                </dd>
                                <dt className="mt-2 text-sm leading-6 text-gray-400">{stat.label}</dt>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
