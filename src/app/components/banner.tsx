import Ticker from "./ticker";

export default function Banner() {
    return (
        <div className="relative overflow-hidden bg-gray-950">
            {/* Ambient glow blobs */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-0 left-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
                <div className="absolute top-20 right-1/4 h-96 w-96 translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />
                <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-2xl" />
            </div>

            <div className="mx-auto max-w-3xl px-6 py-40 sm:py-52 lg:py-56 text-center">
                <Ticker />
                <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight">
                    Collaborator to enrich your{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                        Innovations
                    </span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-400 max-w-2xl mx-auto">
                    A global digital collaborator in Web, Mobile &amp; AI — dedicated to guiding businesses through transformative journeys, fostering innovation in product development, and supporting team expansion initiatives.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-4">
                    <a
                        href="https://linktr.ee/thrashtech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:opacity-90 hover:shadow-indigo-500/40 transition-all duration-200"
                    >
                        Get started
                    </a>
                    <a
                        href="#about"
                        className="rounded-full border border-gray-700 px-6 py-3 text-sm font-semibold text-gray-300 hover:border-indigo-500 hover:text-white transition-all duration-200"
                    >
                        Learn more <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
