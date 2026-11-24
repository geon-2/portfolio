import { describe, expect, it } from "vitest";
import { contacts } from "../src/lib/profile";
import { getContent, getLocale } from "../src/lib/projects";

describe("language and public contact details", () => {
  it("uses a safe locale fallback and a complete translated interface", () => {
    expect(getLocale("en")).toBe("en");
    expect(getLocale("ko")).toBe("ko");
    expect(getLocale(["en", "ko"])).toBe("ko");
    expect(getLocale("javascript:alert(1)")).toBe("ko");
    expect(Object.keys(getContent("en").ui)).toEqual(
      Object.keys(getContent("ko").ui),
    );
    expect(getContent("en").profile.name).toBe("Geon Lee");
  });

  it("only exposes intended contact channels", () => {
    expect(contacts.find((c) => c.label === "Email")?.href).toBe(
      "mailto:gunle0416@gmail.com",
    );
    expect(contacts.map((c) => c.value).join(" ")).not.toMatch(/010-/);
    expect(contacts.find((c) => c.label === "LinkedIn")?.href).toContain(
      "geon-lee-440922305",
    );
  });
});
