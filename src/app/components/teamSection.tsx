import Shade from "./shade";

export default function TeamSection() {

    const team = [
        { name: "Ilyas Ahmed", designation: "Chief Executive Officer", image: "https://media.licdn.com/dms/image/D4D03AQGXAYn7wEtnSQ/profile-displayphoto-shrink_800_800/0/1689973889622?e=1710979200&v=beta&t=mr3oyLRlPp23D0C5clINwlF539uvTxZA21wXwYZKyuA" },
        { name: "Muhammad Awais", designation: "Chief Technology Officer", image: "https://avatars.githubusercontent.com/u/24633059?v=4" },
        { name: "Muhammad Idrees", designation: "Development Manager", image: "https://media.licdn.com/dms/image/C5103AQH5BcbpI7WHaw/profile-displayphoto-shrink_800_800/0/1544538913257?e=1710979200&v=beta&t=wW-VT26v3UY8LfIcMzwpIOS6NEAamjhrnDtpNPOo89U" },
        { name: "Muhammad Idrees", designation: "Team Lead Web Technology", image: "https://media.licdn.com/dms/image/D4D03AQHLVcLIK9XJHg/profile-displayphoto-shrink_800_800/0/1696415837192?e=1710979200&v=beta&t=HJ0nZwWR2AJC_9ZyX-9bHTeOoq6Jt-ddJwgfPpFSgDY" }
    ]

    return (
        <div className="bg-white py-24 sm:py-32 relative isolate">
            <Shade position="top" />
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Experts!</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {
                        team?.map(member => {
                            return (
                                <li>
                                    <div className="flex items-center gap-x-6">
                                        <img className="h-16 w-16 rounded-full" src={member.image} alt="" />
                                        <div>
                                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{member.name}</h3>
                                            <p className="text-sm font-semibold leading-6 text-indigo-600">{member.designation}</p>
                                        </div>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>

    );
}