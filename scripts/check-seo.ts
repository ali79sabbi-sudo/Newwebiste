/**
 * Build-time SEO check. Run after `next build`:  node scripts/check-seo.ts
 * Fails (exit 1) on: duplicate titles/descriptions/H1s, title > 60 chars, description outside 140–160,
 * != 1 H1, missing canonical, invalid JSON-LD, broken internal links, or thin content.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = ".next/server/app";
const files: string[] = [];
const walk = (d: string) => {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f.endsWith(".html") && !f.startsWith("_")) files.push(p);
  }
};
walk(ROOT);

const decode = (s: string) =>
  s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ");
const strip = (h: string) => decode(h.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

type Row = { path: string; title: string; desc: string; h1: string[]; words: number; faqs: number; canonical: boolean; links: string[] };
const rows: Row[] = [];
const routes = new Set<string>();

for (const f of files) {
  const rel = f.slice(ROOT.length).replace(/\.html$/, "").replace(/\/index$/, "") || "/";
  if (rel === "/_not-found" || rel === "/404" || rel === "/500") continue;
  const html = readFileSync(f, "utf8");
  const path = rel === "" ? "/" : rel;
  routes.add(path);
  const main = html.match(/<main[^>]*>([\s\S]*)<\/main>/)?.[1] ?? "";
  // count words in main content excluding the global final CTA
  const words = strip(main).split(" ").filter(Boolean).length;
  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  for (const j of ld) {
    try {
      JSON.parse(j);
    } catch {
      console.error(`✗ invalid JSON-LD on ${path}`);
      process.exitCode = 1;
    }
  }
  rows.push({
    path,
    title: decode(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? ""),
    desc: decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? ""),
    h1: [...main.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => strip(m[1])),
    words,
    faqs: (html.match(/class="faq-item/g) || []).length,
    canonical: /<link rel="canonical"/.test(html),
    links: [...main.matchAll(/href="(\/[^"#?]*)/g)].map((m) => m[1].replace(/\/$/, "") || "/"),
  });
}

const errors: string[] = [];
const warn: string[] = [];
const dup = (key: "title" | "desc") => {
  const seen = new Map<string, string>();
  for (const r of rows) {
    const v = r[key];
    if (seen.has(v)) errors.push(`duplicate ${key}: "${v}" (${seen.get(v)} & ${r.path})`);
    else seen.set(v, r.path);
  }
};
dup("title");
dup("desc");
const h1s = new Map<string, string>();
const minWords = (p: string) =>
  p === "/" ? 900 : p.startsWith("/services/") ? 700 : p.startsWith("/locations/") ? 600 : p.startsWith("/blog/") ? 1200 : 0;
const files404 = new Set(["/opengraph-image", "/icon.svg", "/apple-icon.png", "/llms.txt", "/sitemap.xml", "/robots.txt", "/manifest.webmanifest"]);

for (const r of rows) {
  if (r.title.length > 60) errors.push(`title > 60 (${r.title.length}) on ${r.path}: ${r.title}`);
  if (r.desc.length < 140 || r.desc.length > 160) errors.push(`description length ${r.desc.length} on ${r.path}`);
  if (r.h1.length !== 1) errors.push(`${r.h1.length} H1s on ${r.path}`);
  else if (h1s.has(r.h1[0])) errors.push(`duplicate H1 "${r.h1[0]}" (${h1s.get(r.h1[0])} & ${r.path})`);
  else h1s.set(r.h1[0], r.path);
  if (!r.canonical) errors.push(`missing canonical on ${r.path}`);
  if (r.words < minWords(r.path)) errors.push(`thin content on ${r.path}: ${r.words} words (min ${minWords(r.path)})`);
  if (r.faqs < 10) warn.push(`only ${r.faqs} FAQs on ${r.path}`);
  for (const l of r.links) if (!routes.has(l) && !files404.has(l)) errors.push(`broken internal link ${l} on ${r.path}`);
}

console.log("\nPAGE REPORT");
console.log("path".padEnd(52), "title", "desc", "words", "faqs");
for (const r of rows.sort((a, b) => a.path.localeCompare(b.path)))
  console.log(r.path.padEnd(52), String(r.title.length).padStart(5), String(r.desc.length).padStart(4), String(r.words).padStart(5), String(r.faqs).padStart(4));
console.log(`\n${rows.length} pages checked.`);
warn.forEach((w) => console.warn("⚠", w));
if (errors.length) {
  errors.forEach((e) => console.error("✗", e));
  process.exitCode = 1;
} else console.log("✓ SEO checks passed");
