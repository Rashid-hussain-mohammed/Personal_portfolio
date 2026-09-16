const GROUPS = [
  {
    label: "AI & Machine Learning",
    items:
      "Python, LangChain, LangGraph, RAG pipelines, Ollama (local LLMs), ChromaDB, scikit-learn, sentence-transformers, PyTorch",
  },
  {
    label: "Full-Stack Development",
    items: "TypeScript, ReactJS, Node.js, FastAPI, Java Spring Boot, Django",
  },
  {
    label: "Cloud, Data & DevOps",
    items:
      "Docker, MySQL, PostgreSQL, Nginx, GitHub Actions, CI/CD, Git, Pytest, Azure",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-b-4 border-ink bg-paper">
      <div className="mx-auto max-w-5xl px-6 py-20 md:px-10">
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          Toolbox
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border-2 border-ink bg-ink md:grid-cols-3">
          {GROUPS.map((group) => (
            <div key={group.label} className="bg-paper-raised p-6">
              <p className="font-data text-xs font-bold text-signal">
                {group.label}
              </p>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/75">
                {group.items}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
