export default function Hero() {
  return (
    <section id="top" className="border-b-4 border-ink bg-paper">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:gap-8 md:px-10 md:py-28">
        <div>
          <p className="font-data text-xs tracking-wide text-signal">
            Fulda, Germany
          </p>
          <h1 className="mt-4 max-w-xl font-display text-4xl leading-[1.1] font-semibold text-ink md:text-5xl">
            Machine Learning &amp; Software Engineering student.
          </h1>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ink/70">
            Master&apos;s student in Global Software Development at Fulda
            University of Applied Sciences, currently an R&amp;D intern at
            Sereact collecting and curating robot teleoperation data for an
            embodied-AI pipeline. Background spans a self-correcting agentic
            RAG system, full-stack development, and reinforcement learning
            for control.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-none bg-ink px-6 py-3 font-body text-sm font-semibold text-paper transition-colors hover:bg-signal"
            >
              See the projects
            </a>
            <a
              href="#contact"
              className="rounded-none border-2 border-ink px-6 py-3 font-body text-sm font-semibold text-ink transition-colors hover:border-signal hover:text-signal"
            >
              Get in touch
            </a>
          </div>
        </div>

        <PhotoFrame />
      </div>
    </section>
  );
}

function PhotoFrame() {
  return (
    <div className="flex items-start justify-center md:justify-end">
      <div className="relative w-full max-w-[280px] rotate-2">
        <div className="border-4 border-ink bg-stone p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/rashid-photo.jpg"
            alt="Portrait of Rashid Hussain Mohammed"
            width={900}
            height={1125}
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <div className="absolute -bottom-3 -left-3 -rotate-2 border-2 border-ink bg-signal px-3 py-1 font-data text-xs font-bold text-paper">
          R.H.M.
        </div>
      </div>
    </div>
  );
}
