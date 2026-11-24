import Link from "next/link";
import type { Metadata } from "next";
import { contacts, skillGroups } from "@/lib/profile";
import { getContent, getLocale, projectHref } from "@/lib/projects";
import {
  CaseContent,
  Footer,
  Header,
  PrintControl,
  ProjectCard,
  ProjectGallery,
} from "@/components/portfolio";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const locale = getLocale((await searchParams).lang);
  return {
    title:
      locale === "en" ? "Geon Lee — Portfolio" : "이건 · Geon Lee — Portfolio",
    description: `Geon Lee — Snaplink, Pertineo / AI Rookie, Filterify / APRIL. Backend · Frontend · AI/ML.`,
  };
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const locale = getLocale((await searchParams).lang);
  const { ui, profile, projects } = getContent(locale);
  const featured = projects.filter((p) => p.featured);
  return (
    <div lang={locale}>
      <Header locale={locale} />
      <main id="main" className="container">
        <section className="hero">
          <div className="hero-main">
            <p className="eyebrow">SOFTWARE ENGINEER / PORTFOLIO</p>
            <h1>
              {profile.name}
              <span>{profile.englishName}</span>
            </h1>
            <p className="hero-role">{profile.role}</p>
            <p className="print-contact">
              gunle0416@gmail.com · github.com/geon-2
              <br />
              https://portfolio-blush-phi-70.vercel.app/?lang={locale}
            </p>
            <div className="hero-actions">
              <a className="button" href="#work">
                {ui.work}
              </a>
              <PrintControl locale={locale} />
            </div>
          </div>
          <nav className="hero-links" aria-label={ui.contact}>
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.label === "Email" ? undefined : "_blank"}
                rel="noreferrer"
              >
                {contact.label}
              </a>
            ))}
          </nav>
        </section>
        <section id="work" className="work-section">
          <div className="section-heading">
            <div>
              <h2>{ui.workTitle}</h2>
            </div>
          </div>
          <div className="project-list">
            {featured.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                locale={locale}
              />
            ))}
          </div>
        </section>
        <section className="other-work">
          <h2>{ui.other}</h2>
          <div className="other-grid">
            {projects
              .filter((p) => !p.featured)
              .map((p) => (
                <Link
                  key={p.slug}
                  className="other-project"
                  href={projectHref(p.slug, locale)}
                >
                  <div className="card-meta">
                    <span>{p.category}</span>
                    <span>{p.state}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <span className="text-link">{ui.caseStudy}</span>
                </Link>
              ))}
          </div>
        </section>
        <section id="background" className="background-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">BACKGROUND</p>
              <h2>{ui.skills}</h2>
            </div>
          </div>
          <div className="skill-list">
            {skillGroups.map((g) => (
              <div key={g.title}>
                <h3>{g.title}</h3>
                <p>{g.skills.join(" · ")}</p>
              </div>
            ))}
          </div>
          <div className="education">
            <h2>{ui.education}</h2>
            <div>
              <h3>{profile.education}</h3>
              <p>{profile.educationPeriod}</p>
              <h3 className="course-provider">{profile.courseProvider}</h3>
              {profile.courses.map((c) => (
                <p className="course" key={c.title}>
                  <span>{c.title}</span>
                  <span>{c.period}</span>
                </p>
              ))}
            </div>
          </div>
        </section>
        <section className="print-case-studies" aria-label={ui.work}>
          {featured.map((p) => (
            <article className="print-case" key={p.slug}>
              <p className="eyebrow">{p.category}</p>
              <h2>{p.title}</h2>
              <p className="print-summary">{p.summary}</p>
              <CaseContent project={p} locale={locale} />
              <ProjectGallery project={p} locale={locale} printOnly />
            </article>
          ))}
        </section>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
