import { createFileRoute } from "@tanstack/react-router";
import profileImg from "@/assets/profile.jpg";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  GraduationCap,
  Award,
  Code2,
  Trophy,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hasini Sai Sri Attuluri — Data Science Portfolio" },
      { name: "description", content: "Portfolio of Hasini Sai Sri Attuluri, a Data Science student transforming data into insights and ideas into real-world solutions." },
      { property: "og:title", content: "Hasini Sai Sri Attuluri — Data Science Portfolio" },
      { property: "og:description", content: "Data Science student. Python, SQL, Visualization. Building real-world data-driven solutions." },
    ],
  }),
  component: Index,
});

const skills = ["Python","SQL","HTML","CSS","JavaScript","Git & GitHub","VS Code","NumPy","Matplotlib","Tableau","Data Visualization"];

const certifications = [
  { title: "Python for Data Science, AI & Development", issuer: "IBM" },
  { title: "Excel Basics for Data Analysis", issuer: "IBM" },
  { title: "Foundations: Data, Data, Everywhere", issuer: "Google" },
];

const projects = [
  { title: "ANVESHIKA Magazine Website", desc: "A fully responsive magazine website built with HTML, CSS, and JavaScript featuring interactive layouts.", tags: ["HTML","CSS","JavaScript"] },
  { title: "Hand Tracking System", desc: "Real-time hand tracking application using Python and OpenCV for gesture-based interaction.", tags: ["Python","OpenCV","Computer Vision"] },
  { title: "Personal Portfolio Website", desc: "Modern responsive portfolio showcasing skills, projects, and achievements with smooth animations.", tags: ["React","Vite","Tailwind"] },
];

function Nav() {
  const links = ["About","Skills","Projects","Certifications","Contact"];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-lg font-bold text-gradient">HASINI.</a>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="text-muted-foreground hover:text-foreground transition-colors">{l}</a></li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>Hire me</a>
      </div>
    </nav>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">{eyebrow}</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <Nav />

      {/* Hero */}
      <section id="home" className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 -z-10 opacity-40" style={{ background: "radial-gradient(circle at 30% 40%, oklch(0.75 0.18 220 / 30%), transparent 50%)" }} />
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Welcome to my portfolio</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Hasini Sai Sri <span className="text-gradient">Attuluri</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">Bachelor's Degree in Data Science</p>
            <p className="mt-4 text-xl text-foreground/80 max-w-lg">"Transforming data into insights and ideas into real-world solutions."</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-medium text-primary-foreground transition-transform hover:scale-105" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-medium border border-border glass hover:border-primary transition-colors">
                Contact Me
              </a>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end animate-scale-in">
            <div className="absolute inset-0 blur-3xl opacity-50" style={{ background: "var(--gradient-primary)" }} />
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-primary/40" style={{ boxShadow: "var(--shadow-glow)" }}>
              <img src={profileImg} alt="Hasini Sai Sri Attuluri" width={768} height={768} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" eyebrow="About me" title="Data-driven thinker">
        <div className="glass rounded-3xl p-8 md:p-12 max-w-3xl mx-auto" style={{ boxShadow: "var(--shadow-card)" }}>
          <p className="text-lg leading-relaxed text-foreground/90">
            Enthusiastic Data Science student with hands-on experience in building real-world projects using Python, HTML, CSS, and JavaScript. Skilled in data analysis, visualization, and developing interactive applications. Passionate about solving real-world problems using data-driven approaches.
          </p>
          <div className="mt-8 pt-8 border-t border-border flex items-start gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl glass">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Education</p>
              <h3 className="mt-1 font-semibold">Aditya Degree College, Andhra Pradesh</h3>
              <p className="text-sm text-muted-foreground">Bachelor's Degree in Data Science · 2024 – 2027</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" eyebrow="Tech stack" title="Skills & tools">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((s) => (
            <div key={s} className="glass rounded-2xl p-5 text-center transition-all hover:-translate-y-1 hover:border-primary group">
              <Code2 className="h-6 w-6 text-primary mx-auto mb-3 group-hover:text-accent transition-colors" />
              <p className="font-medium">{s}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" eyebrow="Selected work" title="Projects">
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="glass rounded-3xl p-7 flex flex-col transition-all hover:-translate-y-2 hover:border-primary" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="mb-6 h-32 rounded-2xl flex items-center justify-center" style={{ background: "var(--gradient-primary)", opacity: 0.9 }}>
                <ExternalLink className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground flex-1">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section id="certifications" eyebrow="Credentials" title="Certifications">
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((c) => (
            <div key={c.title} className="glass rounded-3xl p-7 transition-all hover:-translate-y-1 hover:border-accent">
              <div className="grid h-12 w-12 place-items-center rounded-2xl mb-5" style={{ background: "var(--gradient-primary)" }}>
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold leading-snug">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.issuer}</p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {["Solved coding problems on HackerRank and LeetCode.","Participated in coding contests and hackathons."].map((a) => (
              <div key={a} className="glass rounded-2xl p-6 flex items-start gap-4">
                <Trophy className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                <p className="text-foreground/90">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="Get in touch" title="Let's connect">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-3xl p-8 space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Location</p>
                <p className="font-medium">Tanuku, West Godavari, Andhra Pradesh, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-5 w-5 text-primary mt-1 shrink-0" />
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
                <a href="mailto:hasinisairiattuluri@gmail.com" className="font-medium hover:text-primary break-all">hasinisairiattuluri@gmail.com</a>
              </div>
            </div>
            <div className="flex gap-3 pt-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-medium glass hover:border-primary transition-colors">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-medium glass hover:border-primary transition-colors">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>

          <form className="glass rounded-3xl p-8 space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thanks! I'll get back to you soon."); }}>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
              <input required type="text" className="mt-2 w-full rounded-xl bg-input border border-border px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
              <input required type="email" className="mt-2 w-full rounded-xl bg-input border border-border px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="you@email.com" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea required rows={4} className="mt-2 w-full rounded-xl bg-input border border-border px-4 py-3 outline-none focus:border-primary transition-colors resize-none" placeholder="Tell me about your project..." />
            </div>
            <button type="submit" className="w-full rounded-full px-6 py-3.5 font-medium text-primary-foreground transition-transform hover:scale-[1.02]" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
              Send message
            </button>
          </form>
        </div>
      </Section>

      <footer className="border-t border-border mt-16">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2026 Hasini Sai Sri Attuluri. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full glass hover:border-primary transition-colors"><Github className="h-4 w-4" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full glass hover:border-primary transition-colors"><Linkedin className="h-4 w-4" /></a>
            <a href="mailto:hasinisairiattuluri@gmail.com" className="grid h-10 w-10 place-items-center rounded-full glass hover:border-primary transition-colors"><Mail className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
