// @ts-nocheck
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Menu, X, Star, MapPin, Phone, Mail, Clock,
  Instagram, Facebook, CheckCircle, ArrowRight, ChevronDown, Play
} from 'lucide-react';
import { studioInfo, stats, disciplines, instructors, testimonials, pricing } from '@/lib/site-data';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const links = ['Disciplines', 'Coaches', 'Pricing', 'Contact'];
  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#080808]/96 backdrop-blur border-b border-[#1E1E1E]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 px-3 bg-cm-orange flex items-center justify-center">
            <span className="font-heading font-bold text-white text-sm uppercase tracking-widest">CAGE MMA</span>
          </div>
          <span className="font-heading font-bold text-white text-sm uppercase tracking-wider hidden sm:block">Las Vegas</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}
                className="text-sm font-heading font-semibold text-cm-muted hover:text-white transition-colors tracking-wide uppercase">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-cm-orange hover:bg-[#CC2D00] text-white font-heading font-bold text-sm uppercase tracking-widest px-5 py-2.5 transition-colors">
          Free Trial
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-1">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#121212] border-t border-[#1E1E1E] px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              className="text-sm font-heading font-bold text-cm-muted uppercase tracking-wide">{l}</a>
          ))}
          <a href="#contact" className="bg-cm-orange text-white font-heading font-bold text-sm uppercase tracking-widest px-5 py-3 text-center">Start Free Trial</a>
        </div>
      )}
    </nav>
  );
}

/* ─── Video Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video BG */}
      <div className="absolute inset-0 video-slash">
        <video
          autoPlay muted loop playsInline
          poster="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?w=1600&q=85"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/4770/4770-720.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Diagonal orange slash */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(105deg, rgba(8,8,8,0.97) 0%, rgba(8,8,8,0.80) 45%, rgba(255,61,0,0.08) 75%, rgba(8,8,8,0.20) 100%)'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-cm-orange" />
            <span data-cg-el="hero_eyebrow" className="text-cm-orange font-heading font-bold text-sm uppercase tracking-[0.25em]">MMA · Las Vegas, NV</span>
          </div>

          <h1 data-cg-el="hero_headline_1" className="font-heading font-bold text-7xl sm:text-8xl lg:text-[100px] text-white leading-none mb-4 uppercase">
            TRAIN<br />
            LIKE A<br />
            <span className="text-cm-orange">CHAMPION.</span>
          </h1>

          <p data-cg-el="hero_subtitle" className="text-cm-muted text-xl mb-10 max-w-xl leading-relaxed">{studioInfo.subheadline}</p>

          <div className="flex flex-wrap gap-4">
            <a data-cg-el="hero_cta_primary" href="#contact" className="inline-flex items-center gap-2 bg-cm-orange hover:bg-[#CC2D00] text-white font-heading font-bold text-base uppercase tracking-widest px-10 py-4 transition-colors">
              Start Free Trial <ArrowRight size={16} />
            </a>
            <a data-cg-el="hero_cta_secondary" href="#disciplines" className="inline-flex items-center gap-2 border-2 border-[#2A2A2A] hover:border-cm-orange text-white font-heading font-bold text-base uppercase tracking-widest px-10 py-4 transition-colors">
              Our Disciplines
            </a>
          </div>

          {/* Stats inline */}
          <div className="flex flex-wrap gap-8 mt-12 pt-12 border-t border-[#1E1E1E]">
            {stats.map(s => (
              <div key={s.label}>
                <div className="font-heading font-bold text-3xl text-white">{s.value}</div>
                <div className="text-cm-muted text-xs uppercase tracking-widest mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown size={20} className="text-white/30" />
      </div>
    </section>
  );
}

/* ─── Disciplines Grid ─── */
function Disciplines() {
  return (
    <section id="disciplines" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-1 w-8 bg-cm-orange" />
            <p className="text-cm-orange font-heading font-bold text-sm uppercase tracking-[0.3em]">Complete MMA Training</p>
            <div className="h-1 w-8 bg-cm-orange" />
          </div>
          <h2 className="font-heading font-bold text-5xl md:text-6xl text-white uppercase">6 DISCIPLINES.<br />ONE GYM.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {disciplines.map((d, i) => (
            <div key={d.name}
              className="reveal bg-[#121212] border border-[#1E1E1E] hover:border-cm-orange/40 p-7 transition-colors group"
              style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="text-3xl mb-4">{d.icon}</div>
              <h3 className="font-heading font-bold text-xl text-white uppercase mb-3">{d.name}</h3>
              <p className="text-cm-muted text-sm leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Coaches ─── */
function Coaches() {
  return (
    <section id="coaches" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-1 w-8 bg-cm-orange" />
            <p className="text-cm-orange font-heading font-bold text-sm uppercase tracking-[0.3em]">Coaching Staff</p>
            <div className="h-1 w-8 bg-cm-orange" />
          </div>
          <h2 className="font-heading font-bold text-5xl md:text-6xl text-white uppercase">WORLD-CLASS COACHES</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((inst, i) => (
            <div key={inst.name} className="reveal group" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="relative overflow-hidden aspect-[3/4] mb-5">
                <Image src={inst.image} alt={inst.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="h-1 w-8 bg-cm-orange mb-3" />
                  <h3 className="font-heading font-bold text-xl text-white">{inst.name}</h3>
                  <p className="text-cm-orange font-heading text-xs uppercase tracking-wide mt-1">{inst.rank}</p>
                </div>
              </div>
              <p className="text-cm-muted text-sm leading-relaxed">{inst.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function Testimonials() {
  return (
    <section className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-1 w-8 bg-cm-orange" />
            <p className="text-cm-orange font-heading font-bold text-sm uppercase tracking-[0.3em]">Fighter Reviews</p>
            <div className="h-1 w-8 bg-cm-orange" />
          </div>
          <h2 className="font-heading font-bold text-5xl md:text-6xl text-white uppercase">WHAT FIGHTERS SAY</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={t.name}
              className="reveal bg-[#121212] border border-[#1E1E1E] p-8"
              style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => <Star key={j} size={13} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-cm-text text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cm-orange flex items-center justify-center font-heading font-bold text-white text-sm">{t.name[0]}</div>
                <span className="font-heading font-bold text-white">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-1 w-8 bg-cm-orange" />
            <p className="text-cm-orange font-heading font-bold text-sm uppercase tracking-[0.3em]">Membership</p>
            <div className="h-1 w-8 bg-cm-orange" />
          </div>
          <h2 className="font-heading font-bold text-5xl md:text-6xl text-white uppercase">INVEST IN THE FIGHT</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pricing.map((p, i) => (
            <div key={p.name}
              className={`reveal relative p-8 ${p.highlight ? 'bg-cm-orange border-2 border-cm-orange' : 'bg-[#121212] border border-[#1E1E1E]'}`}
              style={{ animationDelay: `${i * 0.1}s` }}>
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-cm-orange font-heading font-bold text-xs uppercase tracking-wider px-4 py-1">
                  Most Popular
                </div>
              )}
              <h3 className="font-heading font-bold text-2xl text-white uppercase mb-1">{p.name}</h3>
              <div className="mb-6">
                <span className="font-heading font-bold text-5xl text-white">{p.price}</span>
                <span className={`text-sm ml-1 ${p.highlight ? 'text-orange-200' : 'text-cm-muted'}`}>{p.period}</span>
              </div>
              <ul className="space-y-2.5 mb-8">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5">
                    <CheckCircle size={13} className={p.highlight ? 'text-orange-200' : 'text-cm-orange'} />
                    <span className={`text-sm ${p.highlight ? 'text-orange-100' : 'text-cm-muted'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact"
                className={`block text-center font-heading font-bold text-sm uppercase tracking-widest py-3 transition-colors ${p.highlight ? 'bg-white text-cm-orange hover:bg-orange-50' : 'bg-cm-orange text-white hover:bg-[#CC2D00]'}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-8 bg-cm-orange" />
              <p className="text-cm-orange font-heading font-bold text-sm uppercase tracking-[0.3em]">Get Started</p>
            </div>
            <h2 className="font-heading font-bold text-5xl md:text-6xl text-white uppercase mb-6">YOUR FREE TRIAL FIGHT</h2>
            <p className="text-cm-muted leading-relaxed mb-8 max-w-md">
              One class. No commitment. Come see what the best MMA gym in Vegas has to offer.
            </p>
            <div className="space-y-4 mb-8">
              {[{ icon: MapPin, label: studioInfo.address }, { icon: Phone, label: studioInfo.phone }, { icon: Mail, label: studioInfo.email }].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon size={15} className="text-cm-orange flex-shrink-0" />
                  <span className="text-cm-muted text-sm">{label}</span>
                </div>
              ))}
            </div>
            {Object.entries(studioInfo.hours).map(([day, hrs]) => (
              <div key={day} className="flex items-center gap-3 mb-2">
                <Clock size={13} className="text-cm-muted flex-shrink-0" />
                <span className="text-cm-muted text-sm"><strong className="text-white">{day}:</strong> {hrs}</span>
              </div>
            ))}
          </div>
          <div className="reveal bg-[#121212] border border-[#1E1E1E] p-8">
            <h3 className="font-heading font-bold text-2xl text-white mb-6 uppercase">Book Your Free Trial</h3>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                {[['First Name', 'Dominic'], ['Last Name', 'Cruz']].map(([label, ph]) => (
                  <div key={label}>
                    <label className="block text-cm-muted text-xs uppercase tracking-wide mb-1.5">{label}</label>
                    <input type="text" placeholder={ph} className="w-full bg-[#080808] border border-[#1E1E1E] focus:border-cm-orange text-white text-sm px-4 py-3 outline-none transition-colors placeholder-[#444]" />
                  </div>
                ))}
              </div>
              {[['Email', 'email', 'you@email.com'], ['Phone', 'tel', '(702) 555-0000']].map(([label, type, ph]) => (
                <div key={label}>
                  <label className="block text-cm-muted text-xs uppercase tracking-wide mb-1.5">{label}</label>
                  <input type={type} placeholder={ph} className="w-full bg-[#080808] border border-[#1E1E1E] focus:border-cm-orange text-white text-sm px-4 py-3 outline-none transition-colors placeholder-[#444]" />
                </div>
              ))}
              <div>
                <label className="block text-cm-muted text-xs uppercase tracking-wide mb-1.5">Primary Interest</label>
                <select className="w-full bg-[#080808] border border-[#1E1E1E] focus:border-cm-orange text-white text-sm px-4 py-3 outline-none transition-colors">
                  <option>Full MMA Program</option>
                  {disciplines.map(d => <option key={d.name} value={d.name}>{d.name}</option>)}
                </select>
              </div>
              <button type="submit" className="w-full bg-cm-orange hover:bg-[#CC2D00] text-white font-heading font-bold text-sm uppercase tracking-widest py-4 transition-colors flex items-center justify-center gap-2">
                Book Free Trial <ArrowRight size={15} />
              </button>
              <p className="text-[#444] text-xs text-center">No credit card. Just show up ready to train.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1E1E1E] py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="h-8 px-3 bg-cm-orange flex items-center justify-center">
          <span className="font-heading font-bold text-white text-sm uppercase tracking-widest">CAGE MMA</span>
        </div>
        <p className="text-[#555] text-xs">© 2026 Cage MMA Las Vegas. All rights reserved.</p>
        <div className="flex gap-3">
          <a href={studioInfo.instagram} className="w-9 h-9 bg-[#121212] border border-[#1E1E1E] hover:border-cm-orange flex items-center justify-center transition-colors">
            <Instagram size={14} className="text-cm-muted" />
          </a>
          <a href={studioInfo.facebook} className="w-9 h-9 bg-[#121212] border border-[#1E1E1E] hover:border-cm-orange flex items-center justify-center transition-colors">
            <Facebook size={14} className="text-cm-muted" />
          </a>
        </div>
        <p className="text-[#555] text-xs">Powered by <span className="text-cm-orange">Garrison365 Sites</span></p>
      </div>
    </footer>
  );
}

export default function Page() {
  useReveal();
  return (
    <>
      <Nav />
      <Hero />
      <Disciplines />
      <Coaches />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
