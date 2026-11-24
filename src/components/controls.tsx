"use client";

import Link from "next/link";
import { useEffect } from "react";
import type { Locale } from "@/lib/projects";

export function LanguageSwitch({
  locale,
  path = "/",
}: {
  locale: Locale;
  path?: string;
}) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <nav
      className="language-switch"
      aria-label={locale === "ko" ? "언어 선택" : "Language"}
    >
      <Link
        href={`${path}?lang=ko`}
        hrefLang="ko"
        lang="ko"
        aria-current={locale === "ko" ? "true" : undefined}
      >
        한국어
      </Link>
      <Link
        href={`${path}?lang=en`}
        hrefLang="en"
        lang="en"
        aria-current={locale === "en" ? "true" : undefined}
      >
        EN
      </Link>
    </nav>
  );
}

export function PrintButton({ label }: { label: string }) {
  return (
    <button
      className="button button-outline print-button"
      onClick={() => window.print()}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        aria-hidden="true"
      >
        <path d="M7 8V3h10v5M7 17H4V9h16v8h-3M7 14h10v7H7z" />
        <path d="M17 11h1" />
      </svg>
      {label}
    </button>
  );
}
