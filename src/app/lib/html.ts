// Small helpers for handling the rich HTML content produced by RichTextEditor.
// No sanitization library dependency — this is a personal, single-author,
// client-only blog with no backend, so there is nothing for an injected
// script to persist to or steal; the removals below are just hygiene so a
// pasted <script>/<iframe> or an onerror="" attribute doesn't do anything
// unexpected in the author's own browser tab.

const DISALLOWED_TAGS = ["script", "iframe", "object", "embed", "style", "link", "meta"];

export function sanitizeHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, "text/html");

  DISALLOWED_TAGS.forEach((tag) => {
    doc.querySelectorAll(tag).forEach((el) => el.remove());
  });

  doc.querySelectorAll("*").forEach((el) => {
    [...el.attributes].forEach((attr) => {
      const name = attr.name.toLowerCase();
      const value = attr.value.trim().toLowerCase();
      if (name.startsWith("on")) {
        el.removeAttribute(attr.name);
      } else if ((name === "href" || name === "src") && value.startsWith("javascript:")) {
        el.removeAttribute(attr.name);
      }
    });
  });

  return doc.body.innerHTML;
}

export function stripHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent?.trim() ?? "";
}

export function isHtmlEmpty(html: string): boolean {
  return stripHtml(html).length === 0;
}
