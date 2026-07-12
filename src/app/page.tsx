import Link from 'next/link';
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
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-accent">Software Engineer Portfolio</p>
        <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-ink md:text-7xl">
          제품을 출시하고 운영하며, 백엔드·데이터·AI로 확장하는 개발자 이건입니다.
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-muted md:text-xl">
          React Native 앱 출시와 운영 경험을 바탕으로, 사용자 흐름·상태 관리·데이터 계측·서버 구조까지 서비스 전체를 이해하는 Software Engineer로 성장하고 있습니다.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white" href="https://github.com/geon-2">GitHub</a>
          <a className="rounded-full border border-line px-5 py-3 text-sm font-semibold text-ink" href="mailto:sslmyo24@gmail.com">Contact</a>
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
