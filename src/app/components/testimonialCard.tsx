import Image from "next/image";
import { Testimonial } from "../../types/testimonial";

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    return (
        <div className="relative px-6 py-16 lg:px-8 bg-gray-950">
            {/* Subtle glow */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-3xl" />
            </div>

            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                {/* Company logo */}
                <div className="flex justify-center">
                    <div className="rounded-xl overflow-hidden ring-1 ring-gray-700">
                        <Image
                            className="h-12 w-12 object-cover"
                            src={testimonial.companyLogo}
                            alt="Company logo"
                            width={48}
                            height={48}
                        />
                    </div>
                </div>

                {/* Quote */}
                <figure className="mt-8">
                    <blockquote className="text-center text-lg font-normal leading-8 text-gray-300 sm:text-xl sm:leading-9">
                        <p className="before:content-['\u201C'] after:content-['\u201D']">
                            {testimonial.description}
                        </p>
                    </blockquote>

                    {/* Author */}
                    <figcaption className="mt-8 flex flex-col items-center gap-3">
                        <Image
                            className="h-12 w-12 rounded-full object-cover ring-2 ring-indigo-500/40"
                            src={testimonial.clientImage}
                            alt={testimonial.companyName}
                            width={48}
                            height={48}
                        />
                        <div className="flex items-center gap-3 text-sm">
                            <span className="font-semibold text-white">{testimonial.companyName}</span>
                            <span className="text-gray-600" aria-hidden="true">·</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-medium">
                                {testimonial.clientDesignation}
                            </span>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}
export default TestimonialCard;
