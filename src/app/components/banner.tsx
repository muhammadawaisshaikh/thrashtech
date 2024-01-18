import Shade from "./shade";

const chips = [
    { id: 1, typo: "AI is embedded in everything we do." },
    // { id: 2, typo: "We add a secret sauce in our deliverables." },
    // { id: 3, typo: "Decisions with Data, Results with Intelligence." },
    // { id: 4, typo: "Smarter Healthcare, Streamlined Business." },
    // { id: 5, typo: "Beyond Code from Factories to Finances" },
]

export default function Banner() {
    return (
        <div className="bg-white">
            <div className="relative isolate px-6 lg:px-8">
                <Shade position="top" />
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-30">
                    <div className="scroll-container">
                        {
                            chips.map((chip) => {
                                return (
                                    <div className="hidden sm:mb-8 sm:flex sm:justify-center" key={chip.id}>
                                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                            {chip.typo}
                                            <a href="#" className="font-semibold text-dark-600"><span className="absolute inset-0" aria-hidden="true"></span></a>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Collaborator to enrich your Innovations</h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">A global digital collaborator (Web, Mobile & AI) dedicated to guiding businesses through transformative journeys, fostering innovation in product development, and supporting team expansion initiatives.</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="#" className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-600">Get started</a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
                        </div>
                    </div>
                </div>
                <Shade position="bottom" />
            </div>
        </div>
    );
}