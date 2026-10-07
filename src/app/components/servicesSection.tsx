import { Service, ServiceItem } from "../../types/service";

const data: Service = {
    miniHead: "Turning your Ideas into Innovations",
    title: "Develop your dream concept now!",
    description: "Thrashtech builds more than websites and apps — we build intelligent futures. We combine the artistry of web and mobile development with the boundless potential of AI to create solutions that learn, adapt, and evolve.",
    anotherDescription: "Don't just build apps, build possibilities. Develop your dream concept today and let's co-create the future.",
    services: [
        {
            icon: "fa-solid fa-laptop-code",
            title: "Web Applications",
            description: "We push the boundaries of what's possible, crafting web applications that revolutionize the way you interact, collaborate, and achieve."
        },
        {
            icon: "fa-solid fa-mobile-screen-button",
            title: "AI-Powered Mobile Apps",
            description: "Experience the future of mobile with AI-driven apps that adapt to your users and push the boundaries of what's possible."
        },
        {
            icon: "fa-solid fa-cloud",
            title: "Cloud & DevOps",
            description: "Breaking down walls, building pipelines — a collaborative ecosystem for streamlined, scalable service and application delivery."
        },
        {
            icon: "fa-solid fa-chart-simple",
            title: "Data & Analytics",
            description: "Transform raw data into strategic insight — unlock hidden patterns, forecast trends, and make decisions driven by intelligence."
        },
        {
            icon: "fa-solid fa-chalkboard",
            title: "Content & Technical Writing",
            description: "Clear, compelling documentation and content that bridges the gap between complex technology and the people who use it."
        },
        {
            icon: "fa-solid fa-pen-nib",
            title: "UX & Strategy Design",
            description: "Human-centered design that balances beauty with purpose — crafting experiences users love and products that convert."
        }
    ]
}

export default function ServicesSection() {
    return (
        <div className="bg-gray-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-2xl text-center lg:text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3">
                        {data.miniHead}
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {data.title.split('now!')[0]}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                            now!
                        </span>
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-400">{data.description}</p>
                    <p className="mt-4 text-base leading-7 text-gray-500">{data.anotherDescription}</p>
                </div>

                {/* Services grid */}
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {data.services.map((service: ServiceItem, index: number) => (
                            <div
                                key={index}
                                className="group relative rounded-2xl p-px bg-gradient-to-br from-gray-800 via-gray-800/50 to-gray-800 hover:from-indigo-500/50 hover:via-purple-500/30 hover:to-indigo-500/50 transition-all duration-300"
                            >
                                <div className="rounded-2xl bg-gray-900 p-8 h-full flex flex-col gap-4">
                                    {/* Icon */}
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow duration-300">
                                        <i className={`${service.icon} text-white text-lg`} />
                                    </div>
                                    <dt className="text-base font-semibold text-white">
                                        {service.title}
                                    </dt>
                                    <dd className="text-sm leading-7 text-gray-400">
                                        {service.description}
                                    </dd>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
