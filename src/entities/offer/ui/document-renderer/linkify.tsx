import { ReactNode } from "react";

const URL_OR_EMAIL =
  /(https?:\/\/[^\s<>"']+[^\s<>"'.,;:!?)\]])|([\w.+-]+@[\w-]+\.[\w.-]+)/g;

export const linkify = (text: string): ReactNode => {
  if (!text) return text;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  for (const match of text.matchAll(URL_OR_EMAIL)) {
    const [value, url, email] = match;
    const start = match.index ?? 0;
    if (start > lastIndex) nodes.push(text.slice(lastIndex, start));
    const href = url ? url : `mailto:${email}`;
    nodes.push(
      <a
        key={start}
        href={href}
        target={url ? "_blank" : undefined}
        rel={url ? "noopener noreferrer" : undefined}
      >
        {value}
      </a>,
    );
    lastIndex = start + value.length;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
};
