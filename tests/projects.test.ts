import { describe, expect, it } from "vitest";
import { getContent, getProjectBySlug, projectHref } from "../src/lib/projects";

describe("case studies", () => {
  it("preserves project identity, evidence and real links in both languages", () => {
    const ko = getContent("ko");
    const en = getContent("en");
    expect(en.projects.map((p) => p.slug)).toEqual(
      ko.projects.map((p) => p.slug),
    );
    for (const p of ko.projects) {
      const translated = getProjectBySlug(p.slug, "en")!;
      expect(translated.links).toEqual(p.links);
      expect(translated.stack).toEqual(p.stack);
      expect(translated.metrics).toHaveLength(p.metrics.length);
      expect(translated.decisions).toHaveLength(p.decisions.length);
      expect(translated.highlights).toHaveLength(p.highlights.length);
      expect(translated.results).toHaveLength(p.results.length);
      if (translated.videoUrl)
        expect(new URL(translated.videoUrl, "https://portfolio-blush-phi-70.vercel.app").protocol).toBe("https:");
      p.links.forEach((l) => expect(new URL(l.href).protocol).toBe("https:"));
    }
  });

  it("does not equate analytics or downloads with paying customers", () => {
    const snaplink = getProjectBySlug("snaplink")!;
    const downloads = snaplink.metrics.find((m) => m.value === "100+")!;
    expect(downloads.label).toContain("다운로드");
    expect(downloads.note).toMatch(/가입자.*활성 사용자/);
    expect(downloads.note).toContain("다운로드");
    expect(snaplink.results.join(" ")).toContain("팀원과 테스트 기기");
    expect(snaplink.results.join(" ")).toContain("종료 예정");
    expect(snaplink.results.join(" ")).toContain("0건");
    const apiTeam = getProjectBySlug("pertineo-ai-rookie")!.team;
    expect(apiTeam).toContain("AI 담당자");
    expect(apiTeam).toMatch(/모델.*에이전트 파이프라인/);
  });

  it("retains locale when entering a case study and rejects unknown project IDs", () => {
    expect(projectHref("snaplink", "en")).toBe("/projects/snaplink?lang=en");
    expect(getProjectBySlug("unknown-project")).toBeUndefined();
  });
});
