import Link from "next/link";
import { contacts } from "@/lib/profile";
import {
  getContent,
  projectHref,
  type Locale,
  type Project,
} from "@/lib/projects";
import { LanguageSwitch, PrintButton } from "./controls";

export function Header({
  locale,
  path = "/",
}: {
  locale: Locale;
  path?: string;
}) {
  const { ui } = getContent(locale);
  return (
    <>
      <a className="skip-link" href="#main">
        {ui.skip}
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Link
            href={`/?lang=${locale}`}
            className="wordmark"
            aria-label="Geon Lee home"
          >
            <span className="brand-mark" aria-hidden="true">
              g.
            </span>{" "}
            <span>GEON LEE</span>
          </Link>
          <nav
            className="main-nav"
            aria-label={locale === "ko" ? "주 메뉴" : "Main navigation"}
          >
            <Link href={`/?lang=${locale}#work`}>{ui.work}</Link>
            <Link href={`/?lang=${locale}#background`}>{ui.background}</Link>
            <a href="#contact">{ui.contact}</a>
          </nav>
          <LanguageSwitch locale={locale} path={path} />
        </div>
      </header>
    </>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  const { ui } = getContent(locale);
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-heading">
          <div>
            <p className="eyebrow">CONTACT</p>
            <h2>{ui.contactTitle}</h2>
          </div>
          <a className="contact-email" href={contacts[0].href}>
            {contacts[0].value}
          </a>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Geon Lee</p>
          <nav aria-label={ui.contact}>
            {contacts.slice(1).map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer">
                {c.label}
              </a>
            ))}
          </nav>
          <p>{ui.updated}</p>
        </div>
      </div>
    </footer>
  );
}

export function ProjectVisual({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  if (project.slug === "snaplink") {
    return (
      <div className="project-visual snaplink-visual">
        <div className="browser-frame">
          <div className="browser-bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <small>snaplink.run</small>
          </div>
          <img
            src="/images/snaplink-landing.png"
            width="1512"
            height="806"
            alt={project.captions[0] || "Snaplink landing page"}
          />
        </div>
        <div className="visual-caption">
          <span className="snap-symbol" aria-hidden="true">
            ◇
          </span>
          <strong>Snaplink</strong>
          <span>iOS · Android · Web</span>
        </div>
      </div>
    );
  }
  if (project.slug === "pertineo-ai-rookie") {
    return (
      <div className="project-visual pertineo-screenshot">
        <img
          src="/images/pertineo-ai-rookie-home.png"
          width="1440"
          height="960"
          alt={locale === "ko" ? "Pertineo AI Rookie 버전 메인 화면" : "Pertineo AI Rookie homepage"}
        />
      </div>
    );
  }
  return (
    <div className="project-visual filterify-visual">
      <div className="album-composition" aria-hidden="true">
        <div className="album album-one" />
        <div className="album album-two" />
        <div className="album album-three" />
      </div>
      <div className="filterify-caption">
        <strong>Filterify</strong>
        <span>
          {locale === "ko" ? "이미지 + 텍스트 + 음악" : "Image + Text + Music"}
        </span>
      </div>
      <span className="visual-foot">CLIP · PyTorch · Multimodal</span>
    </div>
  );
}

export function ProjectCard({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  const { ui } = getContent(locale);
  return (
    <article className={`project-card project-${project.slug}`}>
      <Link
        className="project-visual-link"
        href={projectHref(project.slug, locale)}
        aria-label={`${project.title} — ${ui.caseStudy}`}
      >
        <ProjectVisual project={project} locale={locale} />
      </Link>
      <div className="project-card-content">
        <div className="card-meta">
          <span>{project.category}</span>
          <span className="state-label">{project.state}</span>
        </div>
        <h3>
          <Link href={projectHref(project.slug, locale)}>{project.title}</Link>
        </h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-summary">{project.summary}</p>
        <p className="card-role">{project.role}</p>
        <ul className="tags" aria-label={ui.stack}>
          {project.stack.slice(0, 5).map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <Link className="text-link" href={projectHref(project.slug, locale)}>
          {ui.caseStudy}
          <span className="link-line" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function ProjectLinks({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  const { ui } = getContent(locale);
  return (
    <section className="case-links">
      <h2>{ui.links}</h2>
      <div className="link-list">
        {project.links.map((l) => (
          <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
            <span>{l.label}</span>
            <span className="link-url">{l.href}</span>
          </a>
        ))}
      </div>
      {project.videoUrl && (
        <div className="project-video">
          <h3>{ui.video}</h3>
          <video controls playsInline preload="metadata" aria-label={`${project.title} ${ui.video}`}>
            <source src={project.videoUrl} type="video/mp4" />
          </video>
          <a href={project.videoUrl} target="_blank" rel="noreferrer">
            {ui.video} ↗
          </a>
        </div>
      )}
    </section>
  );
}

export function CaseContent({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  const { ui } = getContent(locale);
  return (
    <>
      <dl className="case-facts">
        <div>
          <dt>{ui.period}</dt>
          <dd>{project.period}</dd>
        </div>
        <div>
          <dt>{ui.role}</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt>{ui.team}</dt>
          <dd>{project.team}</dd>
        </div>
        <div>
          <dt>{ui.stack}</dt>
          <dd>{project.stack.join(" · ")}</dd>
        </div>
      </dl>
      {project.metrics.length > 0 && (
        <section className="metrics-section">
          <h2>{ui.operations}</h2>
          <div className="metrics-grid">
            {project.metrics.map((m) => (
              <div className="metric" key={m.label}>
                <strong>{m.value}</strong>
                <h3>{m.label}</h3>
                <p>{m.note}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      <div className="case-body">
        <section className="case-section">
          <p className="eyebrow">CONTEXT</p>
          <h2>{ui.problem}</h2>
          <p>{project.problem}</p>
        </section>
        <section className="case-section">
          <p className="eyebrow">CONTRIBUTION</p>
          <h2>{ui.contribution}</h2>
          <ul className="contributions">
            {project.highlights.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>
        <section className="case-section">
          <p className="eyebrow">DECISIONS</p>
          <h2>{ui.decisions}</h2>
          <div className="decisions">
            {project.decisions.map((d) => (
              <div key={d.title}>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="case-section">
          <p className="eyebrow">REFLECTION</p>
          <h2>{ui.results}</h2>
          <ul className="results">
            {project.results.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>
      </div>
      <ProjectLinks project={project} locale={locale} />
    </>
  );
}

export function PrintControl({ locale }: { locale: Locale }) {
  return <PrintButton label={getContent(locale).ui.print} />;
}

export function ProjectGallery({
  project,
  locale,
  printOnly = false,
}: {
  project: Project;
  locale: Locale;
  printOnly?: boolean;
}) {
  if (!project.images.length) return null;
  const { ui } = getContent(locale);
  return (
    <section className={`gallery${printOnly ? " print-only-gallery" : ""}`}>
      <h2>{ui.gallery}</h2>
      <p className="gallery-note">{ui.imageNote}</p>
      {project.images.map((src, i) => (
        <figure key={src}>
          <a href={src} target="_blank" rel="noreferrer">
            <img
              src={src}
              width="1512"
              height="806"
              alt={project.captions[i]}
              loading={printOnly ? "eager" : "lazy"}
            />
          </a>
          <figcaption>{project.captions[i]}</figcaption>
        </figure>
      ))}
    </section>
  );
}
