import ko from "./content/ko.json";
import en from "./content/en.json";

export type Locale = "ko" | "en";
export type Project = Omit<(typeof ko.projects)[number], "videoUrl"> & {
  videoUrl: string | null;
};
export type PortfolioContent = Omit<typeof ko, "projects"> & {
  projects: Project[];
};

const content: Record<Locale, PortfolioContent> = { ko, en };

export function getLocale(value: string | string[] | undefined): Locale {
  return value === "en" ? "en" : "ko";
}

export function getContent(locale: Locale = "ko") {
  return content[locale];
}

export function projectHref(slug: string, locale: Locale) {
  return `/projects/${slug}?lang=${locale}`;
}

export const projects = ko.projects;
export const featuredProjects = projects.filter((project) => project.featured);
export const additionalProjects = projects.filter(
  (project) => !project.featured,
);

export function getProjectBySlug(slug: string, locale: Locale = "ko") {
  return content[locale].projects.find((project) => project.slug === slug);
}
