import Shade from "./shade";
import Ticker from "./ticker";

export default function Banner() {
    return (
        <div className="bg-white">
            <div className="relative isolate px-6 lg:px-8">
                <Shade position="top" />
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-30">
                    <Ticker />
                    <div className="text-center mt-8">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Collaborator to enrich your Innovations</h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">A global digital collaborator (Web, Mobile & AI) dedicated to guiding businesses through transformative journeys, fostering innovation in product development, and supporting team expansion initiatives.</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="https://linktr.ee/thrashtech" className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-600" target="blank">Get started</a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
                        </div>
                    </div>
                </div>
                <Shade position="bottom" />
            </div>
        </div>
    );
}