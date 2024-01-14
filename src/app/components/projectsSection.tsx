const posts = [
    {
        id: 1,
        title: 'Unation',
        image: "https://assets.unation.com/wp-content/uploads/2022/12/un_evnt_og_img.png",
        href: 'https://www.unation.com',
        description: 'Dive into a world of vibrant local events, exclusive deals, great attractions and the hottest things to do in our city with UNATION.',
        category: { title: 'Event Management', href: 'https://www.unation.com/' },
    },
    {
        id: 2,
        title: 'Noice',
        image: "https://cdn1-production-images-kly.akamaized.net/YGta3ZkORmGGyhZUY9YFTiJG_F8=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3565170/original/017485700_1631090195-noice.jpeg",
        href: 'https://open.noice.id/',
        description: 'Indonesias #1 local audio platform, bringing delightful screenless moments throughout the day. Noice is a multi-vertical audio platform.',
        category: { title: 'Audio Streaming', href: 'https://open.noice.id/' },
    },
    {
        id: 3,
        title: 'Jonas Club',
        image: "https://public-site.marketing.pandadoc-static.com/assets/assets/case-studies/jonas-club-software-72adacbfbe.png",
        href: 'https://jonasclub.com/Main/Home',
        description: 'The recognized global leader in Club Management Software, worldwide over 2300 clubs in more than 17 different countries with memberships.',
        category: { title: 'Club Management ERP', href: 'https://jonasclub.com/Main/Home' },
    },
]

export default function ProjectsSection() {
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
                    {posts.map((post) => (
                        <div key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="group relative">
                            <div className="bg-black-500">
                                <img className="object-cover hover:object-scale-down h-48 w-96 rounded-lg border border-gray-20" src={post.image} />
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
        </div>
    )
}
