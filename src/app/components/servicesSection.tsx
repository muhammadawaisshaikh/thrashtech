import { Service, ServiceItem } from "../types/service";

const data: Service = {
    miniHead: "Turning your Ideas into Innovations",
    title: "Develop your dream concept now!",
    description: "Thrashtech builds more than websites and apps. we build intelligent futures. We combine the artistry of web and mobile development with the boundless potential of AI to create solutions that learn, adapt, and evolve. Whether it's a user experience that anticipates your needs or an Artificial Intelligence engine that fuels your business growth, we craft experiences that go beyond the screen.",
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
            description: "Experience the future of mobile with AI-driven apps that push the boundaries of what's possible."
        },
        {
            icon: "fa-solid fa-cloud",
            title: "Cloud & DevOps",
            description: "Breaking down walls, building pipelines: A collaborative ecosystem for streamlined service and application delivery."
        },
        {
            icon: "fa-solid fa-chart-simple",
            title: "Data & Analytics",
            description: "Transform your data into a treasure trove of untapped potential and unlock new possibilities within your data"
        },
        {
            icon: "fa-solid fa-chalkboard",
            title: "Content & Technical Writing",
            description: "Transform your data into a treasure trove of untapped potential and unlock new possibilities within your data"
        },
        {
            icon: "fa-solid fa-pen-nib",
            title: "UX & StrategyDesign ",
            description: "Transform your data into a treasure trove of untapped potential and unlock new possibilities within your data"
        }
    ]
}

export default function ServicesSection() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-5xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-gray-500">{data.miniHead}</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{data.title}</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">{data.description}</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">{data.anotherDescription}</p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {
                            data.services.map((service: ServiceItem)=> {
                                return(
                                    <div className="relative pl-16">
                                        <dt className="text-base font-semibold leading-7 text-gray-900">
                                            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-black text-white">
                                                <i className={service.icon}></i>
                                            </div>
                                            {service.title}
                                        </dt>
                                        <dd className="mt-2 text-base leading-7 text-gray-600">{service.description}</dd>
                                    </div>
                                );
                            })
                        }
                    </dl>
                </div>
            </div>
        </div>
    );
}