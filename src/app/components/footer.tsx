"use client";

import Image from "next/image";
import { useState } from "react";
import { contact } from "@/utils/mock-data/contact";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/thrashtech",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/thrashtech",
    icon: "fa-brands fa-x-twitter",
  },
  {
    label: "GitHub",
    href: "https://github.com/thrashtech",
    icon: "fa-brands fa-github",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/thrashtech",
    icon: "fa-brands fa-instagram",
  },
];

export default function Footer() {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="bg-gray-950 text-white">
      {/* CTA Banner */}
      <div className="relative overflow-hidden border-b border-gray-800">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-64 w-96 translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-2">
              Ready to build something amazing?
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s create the future{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                together.
              </span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="mailto:thrashtechinfo@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 transition-all duration-200"
            >
              <i className="fa-solid fa-envelope" />
              Email Us
            </a>
            <a
              href="https://linktr.ee/thrashtech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-600 px-6 py-3 text-sm font-semibold text-white hover:border-indigo-400 hover:text-indigo-400 transition-all duration-200"
            >
              Get Started
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">

          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <Image
              src="https://i.ibb.co/SxQDp9Q/logo.png"
              alt="Thrashtech Logo"
              width={180}
              height={60}
              className="brightness-0 invert"
            />
            <p className="text-sm leading-6 text-gray-400 max-w-xs">
              A global digital collaborator in Web, Mobile &amp; AI — dedicated
              to transforming ideas into intelligent products.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:border-indigo-500 hover:text-indigo-400 transition-all duration-200 hover:scale-110"
                >
                  <i className={`${s.icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>

          {/* Office cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contact.map((c) => (
              <div
                key={c.id}
                className="group relative rounded-2xl p-px bg-gradient-to-br from-gray-700 via-gray-800 to-gray-700 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500 transition-all duration-300"
              >
                <div className="rounded-2xl bg-gray-900 p-6 h-full flex flex-col gap-4 group-hover:bg-gray-900/95 transition-colors duration-300">
                  {/* Card header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{c.flag}</span>
                      <h5 className="font-bold text-white">{c.office}</h5>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 group-hover:bg-indigo-500/20 transition-colors duration-300">
                      <i className="fa-regular fa-building text-gray-500 group-hover:text-indigo-400 transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gray-800 group-hover:bg-gray-700 transition-colors duration-300" />

                  {/* Contact details */}
                  <div className="flex flex-col gap-3 text-sm">
                    <a
                      href={c.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <i className="fa-solid fa-location-pin mt-0.5 text-indigo-400 shrink-0" />
                      <span>{c.address}</span>
                    </a>
                    <a
                      href={`tel:${c.phone}`}
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <i className="fa-solid fa-phone text-indigo-400 shrink-0" />
                      <span>{c.phone}</span>
                    </a>
                    <a
                      href={`mailto:${c.email}`}
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <i className="fa-solid fa-envelope text-indigo-400 shrink-0" />
                      <span>{c.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            © {year} Thrashtech. All rights reserved.
          </p>
          <p className="text-sm text-gray-600">
            Built with ❤️ by the Thrashtech team
          </p>
        </div>
      </div>
    </footer>
  );
}
