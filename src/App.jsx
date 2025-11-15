import React from 'react'
import Spline from '@splinetool/react-spline'

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="group inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 shadow-inner" />
          <span className="font-semibold tracking-tight text-gray-900 group-hover:text-gray-700 transition">Blue Studio</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#work" className="hover:text-gray-900 transition">Work</a>
          <a href="#about" className="hover:text-gray-900 transition">About</a>
          <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
          <a href="/test" className="text-gray-500 hover:text-gray-800 transition">System Test</a>
        </nav>
        <a href="#contact" className="ml-4 inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition">
          Let’s work
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50" />

      {/* Decorative gradients */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gray-500 mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Available for freelance
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-gray-900">
            Graphic Designer & Art Director crafting playful, modern visuals
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-xl">
            Portfolio of interactive brand identities, album covers, posters, and digital experiences with a tech-forward aesthetic.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#work" className="inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition">View projects</a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:border-gray-400 hover:-translate-y-0.5 transition">Get in touch</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-gray-500">
            <a href="#" className="hover:text-gray-900 transition">Dribbble</a>
            <a href="#" className="hover:text-gray-900 transition">Behance</a>
            <a href="#" className="hover:text-gray-900 transition">Instagram</a>
          </div>
        </div>

        <div className="order-1 md:order-2 relative h-[420px] md:h-[560px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-white">
          {/* 3D Spline Scene */}
          <Spline 
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />

          {/* Subtle top gradient overlay – ensure it doesn't block interaction */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/0 via-transparent to-white/0" />
        </div>
      </div>
    </section>
  )
}

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-3">{eyebrow}</p>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">{title}</h2>
      {desc && <p className="mt-4 text-gray-600 text-lg">{desc}</p>}
    </div>
  )
}

const projects = [
  {
    title: 'Neon Noise — Album Artwork',
    tag: 'Art Direction',
    image:
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop',
    palette: 'from-fuchsia-500 to-cyan-400',
  },
  {
    title: 'Orbital — Brand Identity',
    tag: 'Branding',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop',
    palette: 'from-indigo-500 to-emerald-400',
  },
  {
    title: 'PlayLab — Interactive Posters',
    tag: 'Poster Design',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop',
    palette: 'from-amber-500 to-rose-500',
  },
  {
    title: 'Flux — Web Experience',
    tag: 'Web Design',
    image:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    palette: 'from-sky-500 to-violet-500',
  },
]

function ProjectCard({ p }) {
  return (
    <a
      href="#contact"
      className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-sm hover:shadow-xl transition-all"
    >
      <div className="aspect-[16/11] overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-80" />
      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between">
        <div>
          <p className="text-white/80 text-xs">{p.tag}</p>
          <h3 className="text-white text-lg font-semibold">{p.title}</h3>
        </div>
        <div className={`hidden md:block h-10 w-10 rounded-xl bg-gradient-to-br ${p.palette} shadow-lg opacity-90 group-hover:opacity-100 transition`} />
      </div>
    </a>
  )
}

function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-transparent to-indigo-50/40" />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionTitle
          eyebrow="About"
          title="Design with attitude, guided by strategy"
          desc="I blend bold color, playful geometry, and clean typography to craft brand systems and visuals that feel modern and alive."
        />

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Brand Systems',
              desc: 'Naming, logo, type, color, and full identity kits with real-world guidelines.',
            },
            {
              title: 'Editorial & Art Direction',
              desc: 'Key visuals, album covers, and campaign art with a strong conceptual center.',
            },
            {
              title: 'Digital & Motion',
              desc: 'Web, social content, and kinetic graphics with an interactive edge.',
            },
          ].map((f, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm hover:shadow-md transition"
            >
              <h4 className="font-semibold text-gray-900">{f.title}</h4>
              <p className="mt-2 text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className="relative py-24 md:py-32 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          eyebrow="Selected Work"
          title="Playful, modern, and a little bit futuristic"
          desc="A snapshot of recent projects across music, fashion, and tech."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <ProjectCard p={p} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl overflow-hidden ring-1 ring-black/5 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900">
          <div className="px-8 py-14 md:px-14 md:py-16 grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-indigo-300 mb-3">Collaborations</p>
              <h3 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
                Let’s make something striking together
              </h3>
              <p className="mt-4 text-indigo-200 max-w-md">
                Send a note with your project details, timeline, and vibe. I’ll reply within 24 hours.
              </p>
            </div>
            <div className="flex items-end md:items-center">
              <a
                href="mailto:hello@bluestudio.design?subject=Project%20Inquiry"
                className="inline-flex items-center rounded-full bg-white text-gray-900 px-6 py-3 text-sm font-medium shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition"
              >
                hello@bluestudio.design
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Blue Studio — All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-800">Instagram</a>
          <a href="#" className="hover:text-gray-800">Dribbble</a>
          <a href="#" className="hover:text-gray-800">Behance</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <Nav />
      <main className="pt-24">
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
