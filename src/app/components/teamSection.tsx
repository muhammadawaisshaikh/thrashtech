import Image from "next/image";
import Shade from "./shade";

export default function TeamSection() {

    const team = [
        { id: 1, name: "Muhammad Awais", designation: "Chief Executive Officer", image: "https://avatars.githubusercontent.com/u/24633059?v=4" },
        { id: 2, name: "Ilyas Ahmed", designation: "Chief Technology Officer", image: "https://i.ibb.co/N4JSP9r/Screenshot-2026-10-08-at-02-08-07.png" },
        { id: 3, name: "Muhammad Idrees", designation: "Software Development Manager", image: "https://i.ibb.co/7tH6wCKV/Screenshot-2026-10-08-at-02-08-25.png" },
        { id: 4, name: "Muhammad Anis", designation: "Team Lead Web Technology", image: "https://i.ibb.co/zWWP0yyd/Screenshot-2026-10-08-at-02-08-37.png" }
    ]

    return (
        <div className="bg-white py-24 sm:py-32 relative isolate">
            <Shade position="top" />
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Experts!</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">Global team of creators and innovators! We prioritize consistently delivering innovation.</p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {
                        team?.map(member => {
                            return (
                                <li key={member.id}>
                                    <div className="flex items-center gap-x-6">
                                        <Image className="h-16 w-16 rounded-full object-cover" src={member.image} alt={member.name} width={64} height={64} />
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