"use client"

import React, {ChangeEvent, FormEvent} from 'react';


export default function Portfolio() {
  const projects = [
    {
      title: 'Thesis – Dysarthric Speech Classification',
      desc: 'Convolutional Neural Network for dysarthric speech severity classification. Includes dataset preprocessing, voicegrams and CNN training experiments.',
      tags: ['Python', 'CNN', 'AI', 'UA-Speech'],
      link: 'https://github.com/Samouil16/Speech_Pathology_Classification',
    },
  ];

  const handleFormSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.target);
    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });
  }

  return (
      <div className="min-h-screen bg-slate-50 text-slate-800">
        <header className="max-w-5xl mx-auto px-6 py-10 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Samouil Pratzioti</h1>
            <p className="text-sm text-slate-600">Software Developer</p>
          </div>
          <nav className="space-x-4">
            <a href="#projects" className="text-sm hover:underline">Projects</a>
            <a href="#experience" className="text-sm hover:underline">Experience</a>
            <a href="#contact" className="text-sm hover:underline">Contact</a>
          </nav>
        </header>

        <main className="max-w-5xl mx-auto px-6 pb-24">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-white rounded-2xl shadow-md p-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-extrabold mb-2">Hi — I’m Samouil.</h2>
              <p className="text-slate-600 mb-4">Computer Science graduate (Aristotle University of Thessaloniki) currently working as a software developer at HF Markets.</p>
              <div className="flex gap-3 flex-wrap">
                <a href="mailto:samouilpratziotis@gmail.com" className="inline-block px-4 py-2 rounded-lg border text-sm">Email</a>
                <a href="https://www.linkedin.com/in/samouil-pratzioti-a4b925178" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 rounded-lg bg-slate-800 text-white text-sm">LinkedIn</a>
                <a href="https://github.com/Samouil16" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 rounded-lg border text-sm">GitHub</a>
                <a href="#cv" className="inline-block px-4 py-2 rounded-lg border text-sm">Download CV</a>
              </div>
            </div>

            <div className="bg-gradient-to-tr from-slate-800 to-slate-600 text-white p-6 rounded-xl text-sm">
              <p className="font-semibold">Contact</p>
              <p className="mt-2 text-xs">Larnaca, Cyprus</p>
              <p className="mt-1 text-xs">+357 96 521527</p>
              <p className="mt-1 text-xs">samouilpratziotis@gmail.com</p>
              <div className="mt-4">
                <p className="font-semibold">Core</p>
                <p className="text-xs mt-1">Python · JavaScript/TypeScript · FastAPI · Next.js · REST</p>
              </div>
            </div>
          </section>

          <section id="projects" className="mt-12">
            <h3 className="text-xl font-bold mb-4">Selected Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projects.map((p) => (
                  <article key={p.title} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                    <h4 className="font-semibold text-lg">{p.title}</h4>
                    <p className="text-sm text-slate-600 mt-2">{p.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                          <span key={t} className="text-xs border rounded-full px-3 py-1">{t}</span>
                      ))}
                    </div>
                    <div className="mt-4">
                      <a href={p.link} className="text-sm underline">View details</a>
                    </div>
                  </article>
              ))}
            </div>
          </section>

          <section id="experience" className="mt-12">
            <h3 className="text-xl font-bold mb-4">Experience</h3>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">Software Developer — HF Markets</h4>
                    <p className="text-xs text-slate-500">August 2024 — Present</p>
                  </div>
                  <p className="text-xs text-slate-500">Payments team</p>
                </div>
                <p className="text-sm text-slate-600 mt-3">Design and maintain payment integrations, backend features for deposits and withdrawals, collaborate with QA/DevOps to ensure secure and reliable payment flows.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">Platform Administrator Intern — HF Markets</h4>
                    <p className="text-xs text-slate-500">July 2023 — September 2023</p>
                  </div>
                  <p className="text-xs text-slate-500">Larnaca, Cyprus</p>
                </div>
                <p className="text-sm text-slate-600 mt-3">Monitored trading platforms, handled incidents, supported internal users, and learned system architecture and backend ops.</p>
              </div>
            </div>
          </section>

          <section id="skills" className="mt-12">
            <h3 className="text-xl font-bold mb-4">Skills & Education</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="font-semibold mb-3">Technical Skills</h4>
                <ul className="text-sm text-slate-600 list-disc pl-5 space-y-1">
                  <li>Python (PCAP), JavaScript/TypeScript</li>
                  <li>FastAPI, Tornado, Next.js</li>
                  <li>RESTful API design, async programming</li>
                  <li>CI/CD, containerized development, Kubernetes basics</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="font-semibold mb-3">Education</h4>
                <p className="text-sm text-slate-600">B.Sc. Computer Science — Aristotle University of Thessaloniki (2020–2024)</p>
                <p className="text-sm text-slate-600 mt-2">Course Streams: Artificial Intelligence · Data & Web Management</p>
              </div>
            </div>
          </section>

          <section id="contact" className="mt-12">
            <h3 className="text-xl font-bold mb-4">Get in touch</h3>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="text-sm text-slate-600">Available for full-time roles and interesting freelance projects. If you want to collaborate, hire me, or view the full CV, reach out below.</p>
              <div className="mt-4 flex gap-3">
                <a href="mailto:samouilpratziotis@gmail.com" className="px-4 py-2 rounded-lg border">Email me</a>
                <a href="https://www.linkedin.com/in/samouil-pratzioti-a4b925178" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-slate-800 text-white">LinkedIn</a>
                <a href="https://github.com/Samouil16" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg border">GitHub</a>
              </div>

              <div className="mt-6">
                <form name="feedback" className="grid grid-cols-1 md:grid-cols-2 gap-3" onSubmit={handleFormSubmit}>
                  <input type="hidden" name="form-name" value="feedback" />
                  <input className="border rounded-lg p-3" name="name" placeholder="Your name" required />
                  <input className="border rounded-lg p-3" name="email" placeholder="Your email" type="email" required />
                  <textarea className="border rounded-lg p-3 md:col-span-2" name="message" placeholder="Message" rows={4} required />
                  <button type="submit" className="md:col-span-2 px-4 py-2 rounded-lg bg-slate-800 text-white">Send message</button>
                </form>
              </div>
            </div>
          </section>

          <footer className="mt-12 text-center text-sm text-slate-500">© {new Date().getFullYear()} Samouil Pratzioti ️</footer>
        </main>
      </div>
  );
}
