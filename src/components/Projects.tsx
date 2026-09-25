function ExternalIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M7 17L17 7M17 7H9M17 7V15" />
    </svg>
  );
}

function ProjectCard({
  href,
  title,
  stack,
  description,
  visual,
}: {
  href: string;
  title: string;
  stack: string;
  description: React.ReactNode;
  visual: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border-4 border-ink bg-paper-raised p-6 transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_var(--ink)] md:p-8"
    >
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_1.1fr]">
        <div>
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-display text-2xl font-semibold text-ink">
              {title}
            </h3>
            <span className="flex shrink-0 items-center gap-1 font-data text-xs font-bold text-signal">
              GitHub
              <ExternalIcon />
            </span>
          </div>
          <p className="mt-1 font-data text-xs text-muted">{stack}</p>
          <div className="mt-3 max-w-lg font-body text-sm leading-relaxed text-ink/75">
            {description}
          </div>
        </div>
        {visual}
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-b-4 border-ink bg-stone">
      <div className="mx-auto max-w-5xl px-6 py-20 md:px-10">
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          Selected work
        </h2>

        <div className="mt-12 space-y-8">
          <ProjectCard
            href="https://github.com/Rashid-hussain-mohammed/Agentic-RAG-Proof-of-Concept"
            title="Agentic RAG system"
            stack="LangGraph · FastAPI · Ollama · ChromaDB · React/TypeScript"
            description={
              <p>
                A self-correcting agentic RAG system built with LangGraph.
                Retrieved context is judged for relevance before generation,
                with automatic query rewriting and a bounded retry loop
                instead of a single-shot pipeline. Runs fully offline, with
                grounded refusal instead of hallucination when no relevant
                context exists — shipped with a custom evaluation harness,
                pytest, GitHub Actions CI/CD, and Docker.
              </p>
            }
            visual={<RagVisual />}
          />

          <ProjectCard
            href="https://github.com/Rashid-hussain-mohammed/Way2home_team5"
            title="Way2Home"
            stack="Node.js · React · MySQL · Azure · GitHub Actions"
            description={
              <p>
                A rental platform connecting students and landlords, built by
                a 7-person agile team across roughly 20 scoped functional
                requirements and deployed on an Azure VM with GitHub Actions
                CI/CD. Served as GitHub Master — defining branching and
                commit conventions and enforcing PR review policy — and
                built the Save Search feature end-to-end.
              </p>
            }
            visual={<Way2HomeVisual />}
          />

          <ProjectCard
            href="https://github.com/Rashid-hussain-mohammed/ml_eng_A3C"
            title="Vehicle powertrain optimization"
            stack="A3C reinforcement learning · TensorFlow · Team of 3"
            description={
              <p>
                Led implementation on a 3-person team for &quot;Machine
                Learning in Engineering Applications&quot;: an Asynchronous
                Advantage Actor-Critic (A3C) agent tuning engine
                displacement, compression ratio, and three gear ratios
                against an external vehicle simulator, with parallel worker
                threads training a shared global network. Gear-ratio
                ordering (G3 &gt; G4 &gt; G5) is enforced in the action
                space. In a later rebuild, I found and fixed an
                output-parsing bug that had invalidated the original
                results, and added a random-search baseline to test
                whether A3C actually helped.
              </p>
            }
            visual={<PowertrainVisual />}
          />
        </div>
      </div>
    </section>
  );
}

function RagVisual() {
  const stages = ["Query", "Retrieve", "Judge", "Rewrite", "Generate"];
  return (
    <div className="border-2 border-ink bg-paper p-6">
      <div className="flex flex-wrap items-center gap-2">
        {stages.map((stage, i) => (
          <div key={stage} className="flex items-center gap-2">
            <div className="border-2 border-ink bg-paper-raised px-3 py-2 font-data text-xs text-ink">
              {stage}
            </div>
            {i < stages.length - 1 && (
              <span className="text-ink/40" aria-hidden>
                &rarr;
              </span>
            )}
          </div>
        ))}
      </div>
      <p className="mt-3 font-data text-[11px] text-muted">
        Judge fails &rarr; rewrite query &rarr; retry (bounded)
      </p>
      <div className="mt-5 border-t-2 border-line pt-4">
        <span className="font-display text-4xl font-bold text-signal">
          88%
        </span>
        <p className="mt-1 font-body text-xs text-muted">
          pass rate on a 25-question adversarial stress test against real
          financial filings
        </p>
      </div>
    </div>
  );
}

function Way2HomeVisual() {
  return (
    <div className="relative">
      <div className="border-2 border-ink bg-paper-raised p-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/way2home/home.png"
          alt="Way2Home homepage: search filters and a list of studio apartment listings"
          width={1346}
          height={1156}
          className="w-full border border-line/60"
        />
      </div>
      <div className="absolute -bottom-6 -left-6 hidden w-2/5 border-2 border-ink bg-paper-raised p-1.5 shadow-[4px_4px_0_var(--ink)] sm:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/way2home/favorites.png"
          alt="Way2Home favorites page with saved listings and site navigation"
          width={1337}
          height={1145}
          className="w-full border border-line/60"
        />
      </div>
    </div>
  );
}

function PowertrainVisual() {
  const results = [
    { label: "A3C", value: "995.25", width: "100%", color: "#c6ff3d" },
    { label: "Random search", value: "773.62", width: "78%", color: "#a6a29a" },
  ];
  return (
    <div className="border-2 border-ink bg-paper p-6">
      <p className="font-data text-[11px] text-muted">
        Best reward · equal evaluation budget
      </p>
      <div className="mt-4 space-y-3">
        {results.map((r) => (
          <div key={r.label}>
            <div className="flex items-baseline justify-between font-data text-xs text-ink">
              <span>{r.label}</span>
              <span>{r.value}</span>
            </div>
            <div className="mt-1 h-3 border-2 border-ink bg-paper-raised">
              <div
                className="h-full"
                style={{ width: r.width, background: r.color }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 border-t-2 border-line pt-4">
        <span className="font-display text-4xl font-bold text-signal">
          +29%
        </span>
        <p className="mt-1 font-body text-xs text-muted">
          higher best reward than a random-search baseline, measured after
          fixing an output-parsing bug in the original results
        </p>
      </div>
    </div>
  );
}
