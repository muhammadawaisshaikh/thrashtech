import Image from "next/image";
import Shade from "./shade";

export default function AboutSection() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <Image src="https://shorturl.at/wNOQ0" alt="Image" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" width="500" height="500" />
            <Shade position="top" />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">Accelerate the development of groundbreaking products, achieving innovation efficiently and on a larger scale. Maximize the potential of your current technology by strategically reimagining it for the future. Our expertise lies in revitalizing platforms and applications, ensuring they boast high performance, enhanced user experiences, scalability, and robust security measures.</p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                        <a href="#">Our values <span aria-hidden="true">&rarr;</span></a>
                        <a href="#">Meet our leadership <span aria-hidden="true">&rarr;</span></a>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col-reverse">
                            <dt className="text-base leading-7 text-gray-300">Projects Accomplished</dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">100+</dd>
                        </div>
                        <div className="flex flex-col-reverse">
                            <dt className="text-base leading-7 text-gray-300">Tech Experts</dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">7+</dd>
                        </div>
                        <div className="flex flex-col-reverse">
                            <dt className="text-base leading-7 text-gray-300">Conferences</dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">20+</dd>
                        </div>
                        <div className="flex flex-col-reverse">
                            <dt className="text-base leading-7 text-gray-300">AI in Everything</dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">Unlimited</dd>
                        </div>
                    </dl>
                </div>
            </div>
            <Shade position="bottom" />
        </div>
    );
}