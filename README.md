# Geon Lee Portfolio

Bilingual project portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Local development

```bash
npm ci
npm run dev -- --port 3100
```

- Korean: http://localhost:3100/?lang=ko
- English: http://localhost:3100/?lang=en
- Case study: http://localhost:3100/projects/snaplink?lang=ko

Language links retain the current case study. Each page is server-rendered in the requested language; a small client control updates the document language and opens browser printing.

## Content

- `src/lib/content/ko.json` and `en.json`: matched Korean/English copy, project details, metrics, public links, and demo URLs.
- `src/lib/profile.ts`: public contact links and skills.
- `public/images/`: selected, reviewed archive screenshots only. Raw analytics and account data are not included.

To add the recorded demo, set the relevant project's `videoUrl` to a real HTTPS URL in **both** content files. A video link appears automatically on the case study and in its PDF. Null URLs produce no empty buttons or placeholder players.

## PDF

Select **PDF로 저장 / Save as PDF** and choose the browser's **Save as PDF** destination. Use A4, 100% scale, and background graphics. The homepage print layout includes all three featured case studies and readable service/repository addresses; a case-study page prints only that project. Disable the browser's default headers if you do not want a local URL in the header.

## Checks

```bash
npm test
npm run typecheck
npm run lint
npm run build
```

Production preview: `npm run start -- --port 3100` after building.

## Design references

- https://brittanychiang.com/ — clear hierarchy, scope of work, and direct evidence links.
- https://leerob.com/ — concise identity and restrained navigation.
- https://www.joshwcomeau.com/ — readable long-form technical content.

These informed layout and reading flow; no source code or wording was copied.
