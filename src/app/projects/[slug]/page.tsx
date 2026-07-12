import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '@/lib/projects';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <Link href="/" className="text-sm font-semibold text-muted hover:text-accent">← Back to home</Link>
      <section className="mt-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{project.period}</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-ink md:text-6xl">{project.title}</h1>
        <p className="mt-4 text-xl text-muted">{project.subtitle}</p>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-ink/80">{project.summary}</p>
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-line p-7">
          <h2 className="text-xl font-semibold text-ink">Role</h2>
          <p className="mt-3 leading-7 text-muted">{project.role}</p>
        </div>
        <div className="rounded-3xl bg-surface p-7">
          <h2 className="text-xl font-semibold text-ink">Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full bg-white px-3 py-1 text-sm text-muted">{item}</span>
            ))}
          </div>
        </div>
      </section>

      <Section title="핵심 구현" items={project.highlights} />
      <Section title="성과 / 근거" items={project.metrics} />

      <section className="mt-12 rounded-3xl border border-line p-7">
        <h2 className="text-2xl font-semibold text-ink">어려웠던 문제</h2>
        <p className="mt-4 leading-8 text-ink/80">{project.challenge}</p>
      </section>

      <Section title="해결 방식" items={project.solution} />

      {project.links?.length ? (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-ink">Links</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white">
                {link.label}
              </a>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-ink">{title}</h2>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item} className="rounded-2xl bg-surface px-5 py-4 leading-7 text-ink/80">{item}</li>
        ))}
      </ul>
    </section>
  );
}
