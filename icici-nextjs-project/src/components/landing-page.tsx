const features = [
  {
    number: "01",
    title: "Your money, in view",
    description:
      "See your accounts and activity together, so you always know where you stand.",
  },
  {
    number: "02",
    title: "Everyday banking, made easy",
    description:
      "Handle the essentials with a clear, straightforward digital experience.",
  },
  {
    number: "03",
    title: "Plan with confidence",
    description:
      "Build better money habits with helpful insights into your spending.",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8fc] text-[#17243a]">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
        <a
          className="flex items-center gap-2.5 font-bold tracking-tight"
          href="#home"
          aria-label="Finora home"
        >
          <span
            className="flex size-9 items-center justify-center rounded-xl bg-[#ef6b35] text-lg text-white"
            aria-hidden="true"
          >
            f
          </span>
          <span className="text-xl">finora</span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          <a className="text-sm text-[#536176] transition hover:text-[#17243a]" href="#features">
            Features
          </a>
          <a className="text-sm text-[#536176] transition hover:text-[#17243a]" href="#about">
            About
          </a>
          <a
            className="rounded-full bg-[#17243a] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#273b5a]"
            href="#get-started"
          >
            Get started
          </a>
        </nav>
        <a
          className="rounded-full bg-[#17243a] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#273b5a] md:hidden"
          href="#get-started"
        >
          Get started
        </a>
      </header>

      <section
        id="home"
        className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 pb-20 pt-12 sm:px-10 sm:pb-28 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8"
        aria-labelledby="hero-heading"
      >
        <div className="relative z-10 max-w-xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e2e6ef] bg-white px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-[#536176]">
            <span className="size-2 rounded-full bg-[#ef6b35]" aria-hidden="true" />
            A better way to bank
          </p>
          <h1
            id="hero-heading"
            className="text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl"
          >
            Make room for
            <span className="block text-[#ef6b35]">what matters.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-[#657187] sm:text-lg sm:leading-8">
            Banking should move at your pace. Get a clearer view of your money
            and feel more in control of every day.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              className="rounded-full bg-[#ef6b35] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#ef6b35]/20 transition hover:bg-[#d95825]"
              href="#get-started"
            >
              Explore digital banking
            </a>
            <a
              className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-[#17243a] transition hover:text-[#ef6b35]"
              href="#features"
            >
              Discover more <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="mt-12 flex items-center gap-4 border-t border-[#e3e7ef] pt-6">
            <div className="flex -space-x-2" aria-hidden="true">
              <span className="size-9 rounded-full border-2 border-[#f7f8fc] bg-[#d6a994]" />
              <span className="size-9 rounded-full border-2 border-[#f7f8fc] bg-[#96aab9]" />
              <span className="size-9 rounded-full border-2 border-[#f7f8fc] bg-[#ddbd75]" />
            </div>
            <p className="text-sm text-[#657187]">
              <span className="font-semibold text-[#17243a]">Banking built around you</span>
              <br />
              Simple, secure, and always within reach.
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg" aria-label="Sample account overview">
          <div
            className="absolute -right-10 -top-10 size-48 rounded-full bg-[#f8d9c9]/70 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-12 -left-10 size-48 rounded-full bg-[#dce7f5] blur-3xl"
            aria-hidden="true"
          />
          <div className="relative rounded-[2rem] border border-white bg-white p-5 shadow-[0_30px_90px_-35px_rgba(23,36,58,0.28)] sm:p-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">Good morning, Alex</p>
                <p className="mt-1 text-xs text-[#8791a2]">Here&apos;s your overview</p>
              </div>
              <span className="flex size-10 items-center justify-center rounded-full bg-[#fff1e9] text-sm font-semibold text-[#d95825]">
                A
              </span>
            </div>
            <div className="mt-7 rounded-2xl bg-[#17243a] p-5 text-white sm:p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/70">Total balance</p>
                <span className="text-xs text-white/60">•••• 2846</span>
              </div>
              <p className="mt-3 text-3xl font-semibold tracking-tight">
                $24,680<span className="text-xl text-white/65">.50</span>
              </p>
              <div className="mt-6 flex items-end justify-between">
                <p className="text-xs text-white/60">Everyday account</p>
                <div className="flex -space-x-2" aria-hidden="true">
                  <span className="size-6 rounded-full bg-[#ef6b35]" />
                  <span className="size-6 rounded-full border border-white/30 bg-white/30" />
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-semibold">This month</p>
              <span className="rounded-full bg-[#f2f4f8] px-3 py-1.5 text-xs text-[#657187]">
                Spending
              </span>
            </div>
            <div className="mt-4 flex h-28 items-end gap-2" aria-label="Monthly spending chart">
              {[38, 58, 46, 75, 53, 88, 64, 100, 70, 82, 58, 92].map(
                (height, index) => (
                  <span
                    key={index}
                    className={`flex-1 rounded-t-md ${
                      index === 7 ? "bg-[#ef6b35]" : "bg-[#e8edf5]"
                    }`}
                    style={{ height: `${height}%` }}
                  />
                ),
              )}
            </div>
            <div className="mt-3 flex justify-between text-[10px] text-[#9aa3b1]">
              <span>1 Jun</span>
              <span>8 Jun</span>
              <span>15 Jun</span>
              <span>22 Jun</span>
              <span>30 Jun</span>
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-[#edf0f5] pt-5">
              <div>
                <p className="text-xs text-[#8791a2]">You spent</p>
                <p className="mt-1 text-sm font-semibold">$1,248.20</p>
              </div>
              <span className="rounded-full bg-[#e8f5ef] px-3 py-1.5 text-xs font-semibold text-[#318460]">
                12% less
              </span>
            </div>
          </div>
          <div className="absolute -left-5 top-1/2 hidden -translate-y-1/2 items-center gap-3 rounded-2xl border border-[#edf0f5] bg-white px-4 py-3 shadow-lg sm:flex">
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#e8f5ef] text-sm text-[#318460]">
              +
            </span>
            <div>
              <p className="text-[11px] text-[#8791a2]">Payment received</p>
              <p className="mt-0.5 text-sm font-semibold">+$240.00</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-white px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ef6b35]">
              Banking that fits your life
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Less complexity. More possibility.
            </h2>
            <p className="mt-4 leading-7 text-[#657187]">
              A thoughtful set of tools to help make the everyday feel a little
              easier.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="rounded-2xl border border-[#e9edf3] bg-[#fbfcfe] p-6 sm:p-7"
              >
                <span className="text-sm font-semibold text-[#ef6b35]">
                  {feature.number}
                </span>
                <h3 className="mt-7 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#657187]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-16 sm:px-10 sm:py-20">
        <div
          id="get-started"
          className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 rounded-[2rem] bg-[#17243a] px-7 py-10 text-white sm:px-12 sm:py-12 md:flex-row md:items-center"
        >
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ffb18e]">
              A fresh start
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
              Your next chapter starts here.
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/65">
              Take a closer look at a more considered banking experience.
            </p>
          </div>
          <a
            className="shrink-0 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#17243a] transition hover:bg-[#f1f3f7]"
            href="#home"
          >
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-7xl flex-col gap-2 border-t border-[#e3e7ef] px-6 py-6 text-xs text-[#7b8698] sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>© Finora. A sample landing page.</p>
        <p>Thoughtful banking for everyday life.</p>
      </footer>
    </main>
  );
}
