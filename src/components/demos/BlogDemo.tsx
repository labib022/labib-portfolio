import { useState } from "react";
import { ArrowLeft, ArrowUpRight, Bookmark, Search } from "lucide-react";

const articles = [
  {
    id: "components", category: "Frontend", title: "Small components. Better interfaces.",
    description: "Why the best interface decisions often start with thinking a little smaller.",
    paragraphs: ["A useful component has one clear responsibility. It might render a form field, explain a status, or let someone complete a small action. That boundary makes the code easier to understand and the interface easier to test.", "Start with the interaction, not with an arbitrary line count. Keep related state close to the element that needs it. When a pattern appears in more than one place, give it a name and a clear set of props.", "Accessibility belongs in the component from the beginning. A reusable input should connect its label, description, and validation message. Doing that work once makes every form that uses it a little more dependable."],
  },
  {
    id: "apis", category: "Backend", title: "An API is a conversation.",
    description: "Clear requests, predictable responses, and errors that actually help.",
    paragraphs: ["An API is a contract between two parts of an application. A good contract makes the common path straightforward and the unexpected path understandable. Use consistent resource names and return status codes that reflect what happened.", "Validate every request on the server, even if the frontend already checks it. Client-side validation improves the experience; server-side validation protects the data. They solve different problems.", "Document the shape of successful responses and errors. A stable error code and a readable message give the interface enough information to help someone recover without exposing internal details."],
  },
  {
    id: "git", category: "Workflow", title: "Leave a trail worth following.",
    description: "A practical approach to commits, context, and your future self.",
    paragraphs: ["A useful commit explains one coherent change. Keep unrelated refactors separate from a new feature so that another developer can understand the intent without reconstructing your entire day.", "Write the reason behind a decision where it will be useful. Sometimes that belongs in a commit message, sometimes in a short code comment, and sometimes in the project documentation.", "Before finishing a change, read the diff as if you did not write it. Look for accidental files, sensitive values, and behavior that deserves a test. A little care here saves a lot of uncertainty later."],
  },
  {
    id: "responsive", category: "Frontend", title: "Responsive is more than a breakpoint.",
    description: "Designing an experience that feels at home on every screen.",
    paragraphs: ["Responsive design begins with flexible content. A layout should handle longer labels, larger text, and an unexpected screen width without hiding important information.", "Use the available space rather than assuming a particular device. Let grids wrap, set sensible maximum widths for paragraphs, and test forms with real validation messages. Those messages are part of the layout too.", "Touch targets, keyboard focus, and reduced motion all belong in the same conversation. A responsive interface adapts to people as well as to pixels."],
  },
];

export function BlogDemo() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);
  const [saved, setSaved] = useState<string[]>([]);
  const article = articles.find((item) => item.id === selected);
  const filtered = articles.filter((item) => (category === "All" || item.category === category) && `${item.title} ${item.description}`.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="demo-surface demo-blog">
      <div className="demo-topbar"><span className="demo-blog-brand">devlog<span>_</span></span><span className="demo-fine-print">A PLACE FOR CURIOUS MINDS</span></div>
      {article ? <article className="demo-article"><button type="button" className="demo-back" onClick={() => setSelected(null)}><ArrowLeft size={15} /> All articles</button><p className="demo-kicker">{article.category} / Sample article</p><h3>{article.title}</h3><p className="article-lede">{article.description}</p>{article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<button type="button" className="demo-save" aria-pressed={saved.includes(article.id)} onClick={() => setSaved((previous) => previous.includes(article.id) ? previous.filter((id) => id !== article.id) : [...previous, article.id])}><Bookmark size={16} fill={saved.includes(article.id) ? "currentColor" : "none"} />{saved.includes(article.id) ? "Saved for this session" : "Save for this session"}</button></article> : <><div className="blog-demo-intro"><p className="demo-kicker">THINK. BUILD. SHARE.</p><h3>Stories for the<br /><span>curious developer.</span></h3></div><div className="demo-search"><Search size={16} /><label htmlFor="article-search" className="sr-only">Search articles</label><input id="article-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find a new perspective..." /></div><div className="demo-blog-filters" role="group" aria-label="Article category">{["All", "Frontend", "Backend", "Workflow"].map((item) => <button type="button" key={item} aria-pressed={category === item} className={category === item ? "is-active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="blog-article-list">{filtered.map((item, index) => <button type="button" key={item.id} className="blog-article-link" onClick={() => setSelected(item.id)}><span className="article-number">0{index + 1}</span><span><span className="demo-kicker">{item.category}</span><h4>{item.title}</h4><p>{item.description}</p></span><ArrowUpRight size={22} /></button>)}</div>{filtered.length === 0 && <p className="demo-empty">No articles found. Try another topic or search term.</p>}<p className="demo-fine-print">Original sample articles for this interactive concept. Bookmarks last for this preview only.</p></>}
    </div>
  );
}