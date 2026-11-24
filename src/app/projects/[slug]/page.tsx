import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getContent,
  getLocale,
  getProjectBySlug,
  projectHref,
} from "@/lib/projects";
import {
  CaseContent,
  Footer,
  Header,
  PrintControl,
  ProjectVisual,
  ProjectGallery,
} from "@/components/portfolio";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProjectBySlug(slug, getLocale((await searchParams).lang));
  return p
    ? { title: `${p.title} — Geon Lee`, description: p.summary }
    : { title: "Project not found" };
}

export default async function ProjectPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const locale = getLocale((await searchParams).lang);
  const project = getProjectBySlug(slug, locale);
  if (!project) notFound();
  const { ui, projects } = getContent(locale);
  return (
    <div lang={locale}>
      <Header locale={locale} path={`/projects/${slug}`} />
      <main id="main" className="container case-main">
        <div className="case-toolbar">
          <Link className="text-link" href={`/?lang=${locale}#work`}>
            {ui.back}
          </Link>
          <PrintControl locale={locale} />
        </div>
        <header className="case-heading">
          <div className="card-meta">
            <span>{project.category}</span>
            <span className="state-label">{project.state}</span>
          </div>
          <h1>{project.title}</h1>
          <p className="case-subtitle">{project.subtitle}</p>
          <p className="case-summary">{project.summary}</p>
        </header>
        {project.featured && (
          <ProjectVisual project={project} locale={locale} />
        )}
        <CaseContent project={project} locale={locale} />
        <ProjectGallery project={project} locale={locale} />
        <section className="related">
          <h2>{ui.related}</h2>
          {projects
            .filter((p) => p.featured && p.slug !== slug)
            .map((p) => (
              <Link key={p.slug} href={projectHref(p.slug, locale)}>
                <span>{p.title}</span>
                <span>{p.category}</span>
              </Link>
            ))}
        </section>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
