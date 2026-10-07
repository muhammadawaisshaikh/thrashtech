'use client';

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';

const pageRoutes: { path: string, title: string }[] = [
    { path: '/projects', title: 'Projects' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="absolute w-full h-24 z-10">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Thrashtech</span>
                        <Image
                            className="h-8 w-auto brightness-0 invert"
                            src="https://i.ibb.co/7JNwXdC/t.png"
                            alt="Logo"
                            width={100}
                            height={100}
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {pageRoutes.map((p, i) => (
                        <a
                            href={p.path}
                            key={i}
                            className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors duration-200"
                        >
                            {p.title}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a
                        href="tel:+18134678431"
                        className="text-sm font-semibold leading-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 hover:opacity-80 transition-opacity duration-200"
                    >
                        Let&apos;s Connect <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>

            {/* Mobile menu */}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10 bg-black/50 backdrop-blur-sm" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-950 border-l border-gray-800 px-6 py-6 sm:max-w-sm">
                    <div className="flex items-center justify-between">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Thrashtech</span>
                            <Image
                                className="h-8 w-auto brightness-0 invert"
                                src="https://i.ibb.co/7JNwXdC/t.png"
                                alt="Logo"
                                width={100}
                                height={100}
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-400"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-800">
                            <div className="space-y-2 py-6">
                                {pageRoutes.map((p, i) => (
                                    <a
                                        href={p.path}
                                        key={i}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-900 hover:text-white transition-colors duration-200"
                                    >
                                        {p.title}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="tel:+18134678431"
                                    className="text-sm font-semibold leading-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
                                >
                                    Let&apos;s Connect <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
