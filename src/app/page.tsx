import Link from 'next/link';
import { portfolioNarrative, principles } from '@/lib/profile';
import { additionalProjects, featuredProjects } from '@/lib/projects';

const skillGroups: { title: string; skills: string[] }[] = [
  { title: 'Product & Frontend', skills: ['React Native', 'React', 'TypeScript', 'React Query', 'Zustand'] },
  { title: 'Backend & Infra', skills: ['FastAPI', 'Python', 'AWS', 'Vercel', 'Render'] },
  { title: 'Data & AI', skills: ['Firebase Analytics', 'Airbridge', 'BigQuery', 'PyTorch', 'CLIP'] },
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-6 py-20">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-accent">{portfolioNarrative.eyebrow}</p>
        <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-ink md:text-7xl">
          {portfolioNarrative.heroTitle}
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-muted md:text-xl">
          {portfolioNarrative.heroDescription}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white" href="https://github.com/geon-2">GitHub</a>
          <a className="rounded-full border border-line px-5 py-3 text-sm font-semibold text-ink" href="mailto:sslmyo24@gmail.com">Contact</a>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">About</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-ink">화면 구현을 넘어, 제품이 실제로 동작하는 과정을 봅니다.</h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-ink/80">
          {portfolioNarrative.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">How I Think</p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {principles.map((principle) => (
              <div key={principle.title} className="rounded-3xl bg-white p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-ink">{principle.title}</h3>
                <p className="mt-3 leading-7 text-muted">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {skillGroups.map(({ title, skills }) => (
            <div key={title} className="rounded-3xl bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-ink">{title}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-surface px-3 py-1 text-sm text-muted">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Featured Projects</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-ink">대표 프로젝트</h2>
          </div>
        </div>
        <div className="grid gap-5">
          {featuredProjects.map((project, index) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group rounded-3xl border border-line p-7 transition hover:-translate-y-1 hover:shadow-soft">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-accent">0{index + 1}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-ink">{project.title}</h3>
                  <p className="mt-2 text-muted">{project.subtitle}</p>
                  <p className="mt-5 max-w-3xl leading-7 text-ink/80">{project.summary}</p>
                </div>
                <span className="text-sm font-semibold text-muted group-hover:text-accent">View case study →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-2xl font-semibold text-ink">Additional / Current</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {additionalProjects.map((project) => (
            <div key={project.slug} className="rounded-3xl bg-surface p-6">
              <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
              <p className="mt-2 text-muted">{project.summary}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
