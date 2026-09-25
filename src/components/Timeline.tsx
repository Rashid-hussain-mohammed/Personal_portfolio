type Entry = {
  when: string;
  title: string;
  place: string;
  detail?: string;
  current?: boolean;
};

// Newest first, so the most relevant role is the first thing a recruiter sees.
const ENTRIES: Entry[] = [
  {
    when: "2026—27",
    title: "R&D Intern",
    place: "Sereact GmbH, Stuttgart",
    detail:
      "Collecting and curating robot teleoperation data for downstream manipulation policies within an embodied-AI R&D pipeline, and coordinating a teleoperation team to keep data capture consistent and on schedule.",
    current: true,
  },
  {
    when: "2024—",
    title: "M.Sc. Global Software Development",
    place: "Fulda University of Applied Sciences, Germany",
    detail:
      "Includes a semester-long, 7-person agile team project (Way2Home, where I served as GitHub Master) and the Machine Learning in Engineering Applications course (A3C powertrain optimization).",
  },
  {
    when: "2022",
    title: "Machine Learning Intern",
    place: "SmartKnower",
    detail:
      "Analyzed an internal HR-style dataset with scikit-learn (k-means, decision trees, random forest) and delivered a comparative model evaluation report balancing interpretability against predictive performance.",
  },
  {
    when: "2019—2023",
    title: "B.E. in Information Technology",
    place: "Muffakham Jah College of Engineering & Technology, Hyderabad, India",
  },
];

export default function Timeline() {
  return (
    <section id="work" className="border-b-4 border-ink bg-paper">
      <div className="mx-auto max-w-5xl px-6 py-20 md:px-10">
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          Experience &amp; Education
        </h2>
        <div className="mt-12 divide-y-2 divide-line">
          {ENTRIES.map((entry) => (
            <div
              key={entry.title}
              className={`grid grid-cols-1 gap-2 py-8 md:grid-cols-[140px_1fr] md:gap-8 ${
                entry.current ? "border-l-4 border-signal pl-4 md:pl-6" : ""
              }`}
            >
              <p
                className={`font-data text-sm font-bold ${
                  entry.current ? "text-signal" : "text-muted"
                }`}
              >
                {entry.when}
              </p>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {entry.title}
                </h3>
                <p className="font-body text-sm text-muted">{entry.place}</p>
                {entry.detail && (
                  <p className="mt-2 max-w-lg font-body text-sm leading-relaxed text-ink/70">
                    {entry.detail}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
