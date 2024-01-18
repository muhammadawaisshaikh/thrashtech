import Image from "next/image";
import { Testimonial } from "../types/testimonial";

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 lg:px-8" key={testimonial.id}>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

            <div className="mx-auto max-w-2xl lg:max-w-6xl">
                <Image className="mx-auto w-20 h-20 rounded-full" src={testimonial.companyLogo} alt="companyLogo" width={500} height={500} />
                <figure className="mt-10">
                    <blockquote className="text-center text-xl font-normal leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p>
                            “{testimonial.description}”
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <Image
                            className="mx-auto h-10 w-10 rounded-full"
                            src={testimonial.clientImage}
                            alt="clientImage"
                            width={500} 
                            height={500}
                        />
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">{testimonial.companyName}</div>
                            <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                                <circle cx={1} cy={1} r={1} />
                            </svg>
                            <div className="text-gray-600">{testimonial.clientDesignation}</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}
export default TestimonialCard;