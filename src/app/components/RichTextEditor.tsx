import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { Bold, Italic, ImagePlus } from "lucide-react";
import { sanitizeHtml, isHtmlEmpty } from "../lib/html";

export interface RichTextEditorHandle {
  getHTML: () => string;
  isEmpty: () => boolean;
}

interface RichTextEditorProps {
  initialHTML?: string;
  placeholder?: string;
}

const FONT_OPTIONS = [
  { label: "Font", value: "" },
  { label: "Default", value: "Inter, ui-sans-serif, system-ui, sans-serif" },
  { label: "Serif", value: "'Source Serif 4', Georgia, serif" },
  { label: "Monospace", value: "ui-monospace, SFMono-Regular, Menlo, monospace" },
];

export const RichTextEditor = forwardRef<RichTextEditorHandle, RichTextEditorProps>(
  ({ initialHTML = "", placeholder = "Write your post..." }, ref) => {
    const editorRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    // Opening the font <select> moves focus off the editor before onChange
    // fires, which would collapse/clear the text selection the user made.
    // Track the last selection made *inside* the editor separately so it
    // survives that focus change.
    const savedRangeRef = useRef<Range | null>(null);

    useImperativeHandle(ref, () => ({
      getHTML: () => sanitizeHtml(editorRef.current?.innerHTML ?? ""),
      isEmpty: () => isHtmlEmpty(editorRef.current?.innerHTML ?? ""),
    }));

    useEffect(() => {
      try {
        document.execCommand("defaultParagraphSeparator", false, "p");
      } catch {
        // execCommand isn't available in every environment (e.g. some
        // headless test runners) — new paragraphs just fall back to the
        // browser's default separator, which still renders fine.
      }
      if (editorRef.current && initialHTML) {
        editorRef.current.innerHTML = initialHTML;
      }
    }, [initialHTML]);

    useEffect(() => {
      const handleSelectionChange = () => {
        const sel = window.getSelection();
        if (sel && sel.rangeCount > 0 && editorRef.current?.contains(sel.anchorNode)) {
          savedRangeRef.current = sel.getRangeAt(0).cloneRange();
        }
      };
      document.addEventListener("selectionchange", handleSelectionChange);
      return () => document.removeEventListener("selectionchange", handleSelectionChange);
    }, []);

    const exec = (command: string, value?: string) => {
      editorRef.current?.focus();
      document.execCommand(command, false, value);
    };

    // execCommand("fontName", ...) writes a legacy <font face="..."> tag,
    // which modern browsers don't actually render with a comma-separated
    // font stack — so apply a real inline style to the selection instead.
    const applyFontFamily = (fontFamily: string) => {
      const editor = editorRef.current;
      const range = savedRangeRef.current;
      if (!editor || !range || range.collapsed) return;
      if (!editor.contains(range.commonAncestorContainer)) return;

      const span = document.createElement("span");
      span.style.fontFamily = fontFamily;
      try {
        range.surroundContents(span);
      } catch {
        // Range partially selects a non-text node (crosses element
        // boundaries) — surroundContents throws in that case, so extract
        // and re-wrap instead.
        const contents = range.extractContents();
        span.appendChild(contents);
        range.insertNode(span);
      }

      editor.focus();
      const sel = window.getSelection();
      const newRange = document.createRange();
      newRange.selectNodeContents(span);
      sel?.removeAllRanges();
      sel?.addRange(newRange);
      savedRangeRef.current = newRange.cloneRange();
    };

    const handleImagePick = () => fileInputRef.current?.click();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      e.target.value = "";
      if (!file || !file.type.startsWith("image/")) return;

      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          exec("insertImage", reader.result);
        }
      };
      reader.readAsDataURL(file);
    };

    return (
      <div className="border border-border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-ring">
        <div className="flex flex-wrap items-center gap-1 p-2 border-b border-border bg-muted">
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => exec("bold")}
            className="p-2 rounded hover:bg-card text-foreground/80 hover:text-primary transition-colors"
            title="Bold"
            aria-label="Bold"
          >
            <Bold className="w-4 h-4" />
          </button>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => exec("italic")}
            className="p-2 rounded hover:bg-card text-foreground/80 hover:text-primary transition-colors"
            title="Italic"
            aria-label="Italic"
          >
            <Italic className="w-4 h-4" />
          </button>

          <select
            onMouseDown={(e) => e.stopPropagation()}
            onChange={(e) => {
              if (e.target.value) applyFontFamily(e.target.value);
              e.target.selectedIndex = 0;
            }}
            defaultValue=""
            title="Font (select text first)"
            aria-label="Font (select text first)"
            className="text-sm border border-border rounded px-2 py-1.5 bg-card text-foreground/80"
          >
            {FONT_OPTIONS.map((f) => (
              <option key={f.label} value={f.value} disabled={f.value === ""}>
                {f.label}
              </option>
            ))}
          </select>

          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleImagePick}
            className="p-2 rounded hover:bg-card text-foreground/80 hover:text-primary transition-colors"
            title="Insert image"
            aria-label="Insert image"
          >
            <ImagePlus className="w-4 h-4" />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          data-placeholder={placeholder}
          className="post-content min-h-[240px] p-4 text-foreground/80 leading-relaxed focus:outline-none"
        />
      </div>
    );
  }
);

RichTextEditor.displayName = "RichTextEditor";
