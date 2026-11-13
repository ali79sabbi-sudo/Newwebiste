import Link from "next/link";
import type { ReactNode } from "react";

/** Inline renderer for [text](/href) and **bold**. */
export function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) {
      const href = m[2];
      out.push(
        href.startsWith("/") ? (
          <Link key={k++} href={href}>
            {inline(m[1])}
          </Link>
        ) : (
          <a key={k++} href={href} rel="noopener" target="_blank">
            {m[1]}
          </a>
        ),
      );
    } else if (m[3]) {
      out.push(<strong key={k++}>{inline(m[3])}</strong>);
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

/** Renders paragraphs; consecutive lines starting with "- " become a list. */
export function RichText({ body }: { body: string[] }) {
  const blocks: ReactNode[] = [];
  let list: string[] = [];
  const flush = () => {
    if (list.length) {
      blocks.push(
        <ul key={`ul-${blocks.length}`}>
          {list.map((li, i) => (
            <li key={i}>{inline(li)}</li>
          ))}
        </ul>,
      );
      list = [];
    }
  };
  body.forEach((p, i) => {
    if (p.startsWith("- ")) list.push(p.slice(2));
    else {
      flush();
      blocks.push(<p key={i}>{inline(p)}</p>);
    }
  });
  flush();
  return <>{blocks}</>;
}
