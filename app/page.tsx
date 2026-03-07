import { AutomateIcon, DeployIcon, SecureIcon, ToolIcon } from "@/components/icons";
import { LoaderScreen } from "@/components/loader-screen";
import { MobileNav } from "@/components/mobile-nav";
import { ProjectList } from "@/components/project-list";
import { ScrollEffects } from "@/components/scroll-effects";
import {
  aboutFacts,
  contactInfo,
  heroStats,
  marqueeRows,
  navItems,
  projects,
  skillBars,
  skillPillars,
  tools,
} from "@/lib/content";

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const repeated = [...items, ...items, ...items];

  return (
    <div className="marquee-shell border-y border-teal/20 bg-surface">
      <div className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}>
        {repeated.map((item, index) => (
          <span key={`${item}-${index}`} className="marquee-item">
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}

function SkillIcon({ name }: { name: "automate" | "deploy" | "secure" }) {
  const className = "h-10 w-10 text-teal";

  if (name === "automate") {
    return <AutomateIcon className={className} />;
  }

  if (name === "deploy") {
    return <DeployIcon className={className} />;
  }

  return <SecureIcon className={className} />;
}

export default function Home() {
  const cvLink = contactInfo.cvHref ?? `mailto:${contactInfo.email}?subject=CV%20Request`;
  const cvLabel = contactInfo.cvHref ? "Download CV" : "Request CV";
  const cvProps = contactInfo.cvHref
    ? { download: "Sahel-Resume-2026.pdf", target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <>
      <LoaderScreen />
      <ScrollEffects />
      <div id="progress-bar" className="fixed left-0 top-0 z-[110] h-px w-full origin-left scale-x-0 bg-teal" />
      <div id="cursor-dot" className="pointer-events-none fixed left-0 top-0 z-[115] hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal md:block" />
      <div id="cursor-ring" className="pointer-events-none fixed left-0 top-0 z-[114] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal/50 md:block" />

      <div className="noise-overlay fixed inset-0 z-[1]" />
      <div className="scanline-overlay fixed inset-0 z-[1]" />

      <header
        data-site-nav
        className="fixed left-0 top-0 z-[100] w-full border-b border-transparent px-4 py-4 transition-all duration-300 sm:px-5 md:px-8 lg:px-10"
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6">
          <a href="#top" className="font-display text-[1.6rem] uppercase tracking-[0.08em] text-paper">
            Sahel Zaffar
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-nav-link
                data-active="false"
                className="nav-link relative font-mono text-[0.72rem] uppercase tracking-[0.22em] text-paper/70 transition-colors hover:text-teal"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <MobileNav items={navItems} />
        </div>
      </header>

      <main id="top" className="relative z-10 overflow-hidden">
        <section className="hero-section relative min-h-screen px-4 pb-8 pt-24 sm:px-5 sm:pb-10 sm:pt-28 md:px-8 md:pb-12 md:pt-32 lg:px-10">
          <div className="hero-grid pointer-events-none absolute inset-x-[8%] inset-y-0 hidden md:block" />
          <div className="hero-orb pointer-events-none absolute left-[18%] top-[18%] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full" />

          <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1400px] flex-col justify-between">
            <div className="hero-copy relative max-w-[58rem]">
              <div className="hero-status mb-8 flex items-start justify-between gap-6 max-md:flex-col max-md:items-start sm:mb-10">
                <div className="max-w-[18rem] font-mono text-[0.62rem] uppercase tracking-[0.24em] text-teal sm:max-w-none sm:text-[0.72rem] sm:tracking-[0.32em]">
                  IT Support Engineer → Desktop Engineer
                </div>
                <div className="status-pill font-mono text-[0.62rem] uppercase tracking-[0.2em] text-teal sm:text-[0.7rem] sm:tracking-[0.28em]">
                  <span className="status-dot" />
                  Available for roles
                </div>
              </div>

              <div className="hero-title space-y-1.5 text-paper sm:space-y-2">
                {["Systems", "That", "Work."].map((word, index) => (
                  <div key={word} className="overflow-hidden">
                    <div
                      className={`hero-word font-display uppercase leading-[0.88] tracking-[-0.04em] ${
                        index === 0
                          ? "text-[clamp(3.6rem,14vw,10rem)]"
                          : index === 1
                            ? "text-[clamp(2.8rem,11vw,7rem)]"
                            : "text-[clamp(3.2rem,12vw,8.5rem)]"
                      }`}
                    >
                      {index === 2 ? (
                        <>
                          WORK
                          <span className="text-teal">.</span>
                        </>
                      ) : (
                        word.toUpperCase()
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <p data-cursor="text" className="hero-body mt-6 max-w-[44rem] text-[0.98rem] leading-7 text-paper/70 sm:mt-8 md:text-[1.08rem] md:leading-8">
                Based in Mumbai. I keep enterprise infrastructure running, script repetitive support work out of the way,
                and build systems that stop the same problem from happening twice.
              </p>

              <div className="hero-kicker mt-5 max-w-[42rem] font-mono text-[0.68rem] uppercase tracking-[0.16em] text-teal/85 sm:mt-6 sm:text-[0.8rem] sm:tracking-[0.2em]">
                I don&apos;t just fix problems. I script them out of existence.
              </div>

              <div className="hero-actions mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                <a href="#work" className="button-outline max-sm:w-full">
                  View My Work
                </a>
                <a href={cvLink} className="button-solid max-sm:w-full" {...cvProps}>
                  {cvLabel}
                </a>
              </div>
            </div>

            <div className="hero-stats mt-12 border-t border-white/10 pt-6 sm:mt-16 sm:pt-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:gap-8 xl:grid-cols-4">
                {heroStats.map((stat) => (
                  <div key={stat.label}>
                    <div
                      data-stat-value={stat.value}
                      data-stat-suffix={stat.suffix}
                      data-stat-prefix={stat.prefix}
                      data-stat-decimals={stat.decimals ?? 0}
                      className="font-display text-[clamp(2.3rem,5vw,3.7rem)] leading-none text-paper"
                    >
                      {`${stat.prefix ?? ""}0${stat.suffix ?? ""}`}
                    </div>
                    <div className="mt-2 max-w-[14rem] font-mono text-[0.72rem] uppercase tracking-[0.22em] text-paper/48">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div aria-hidden="true" className="space-y-[1px] bg-teal/20">
          <MarqueeRow items={marqueeRows[0]} />
          <MarqueeRow items={marqueeRows[1]} reverse />
        </div>

        <section id="about" data-section-id="about" className="section-shell relative min-h-screen px-4 py-20 sm:px-5 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32">
          <div className="about-watermark pointer-events-none absolute left-3 top-5 font-display text-[clamp(5rem,22vw,16rem)] leading-none text-surface md:left-10 md:top-8">
            03
          </div>
          <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
            <div data-reveal="left" className="relative z-10">
              <div className="eyebrow">{"// About"}</div>
              <h2 className="mt-6 font-display text-[clamp(3rem,7vw,5.6rem)] uppercase leading-[0.92] tracking-[-0.04em] text-paper">
                The IT Guy
                <br />
                Who Scripts
                <br />
                <span className="text-teal">Everything.</span>
              </h2>
            </div>

            <div data-reveal="right" className="relative z-10 pt-4">
              <div className="space-y-7 text-[1.05rem] leading-8 text-paper/75">
                <p data-cursor="text">My job title says IT Support. My job description says fix whatever&apos;s broken. But the version of me that shows up to work has a different agenda. I&apos;m there to make sure it never breaks the same way twice.</p>
                <p data-cursor="text">Over the past few years I&apos;ve worked across the full endpoint stack: imaging machines with WDS and MDT, managing hundreds of devices through Intune and SCCM, writing PowerShell scripts that handle what used to take a technician an hour, and building Python tools that audit, report, and alert so the team always knows what&apos;s happening across the fleet.</p>
                <p data-cursor="text">I&apos;m at the point where the support desk has taught me exactly what goes wrong. Now I want to apply that pattern knowledge at the engineering level: designing deployments, owning MDM strategy, and automating the entire device lifecycle from zero-touch provisioning to retirement.</p>
              </div>

              <div className="mt-12 border-t border-teal/20">
                {aboutFacts.map((fact) => (
                  <div key={fact.label} data-reveal="up" className="grid gap-2 border-b border-teal/20 py-4 md:grid-cols-[12rem_1fr]">
                    <div className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-paper/42">{fact.label}</div>
                    <div className="text-[0.98rem] text-paper/88">{fact.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" data-section-id="skills" className="section-shell relative min-h-screen bg-surface px-4 py-20 sm:px-5 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-[1400px]">
            <div data-reveal="up" className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="eyebrow">{"// Skills"}</div>
                <h2 className="mt-5 font-display text-[clamp(3.4rem,8vw,6.4rem)] uppercase leading-[0.9] tracking-[-0.04em]">
                  Technical Depth
                </h2>
              </div>
              <div className="max-w-[28rem] font-mono text-[0.75rem] uppercase tracking-[0.2em] text-paper/45">
                Automation-first capability across scripting, endpoint management, identity, and fleet-scale deployment.
              </div>
            </div>

            <div className="grid gap-4 md:gap-6 xl:grid-cols-3">
              {skillPillars.map((pillar) => (
                <div key={pillar.title} data-reveal="up" className="border border-white/8 bg-ink/60 p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6">
                  <SkillIcon name={pillar.icon} />
                  <h3 className="mt-5 font-display text-[1.7rem] uppercase tracking-[-0.03em] text-paper sm:mt-6 sm:text-[2rem]">{pillar.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {pillar.items.map((item) => (
                      <span key={item} className="border border-muted/80 px-3 py-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-paper/74 transition-none hover:border-teal hover:bg-teal/5 hover:text-teal">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 sm:mt-18">
              <div data-reveal="up" className="mb-8 flex items-center gap-4">
                <div className="font-mono text-[0.75rem] uppercase tracking-[0.24em] text-teal">Depth of Knowledge</div>
                <div className="h-px flex-1 bg-teal/20" />
              </div>

              <div className="space-y-6">
                {skillBars.map((bar) => (
                  <div key={bar.label} data-reveal="up">
                    <div className="mb-2 flex items-end justify-between gap-4">
                      <div className="font-mono text-[0.74rem] uppercase tracking-[0.14em] text-paper/80">{bar.label}</div>
                      <div className="font-mono text-[0.78rem] text-amber">{bar.value}%</div>
                    </div>
                    <div className="h-px bg-white/10">
                      <div className="skill-bar-fill h-px origin-left scale-x-0 bg-teal" data-value={bar.value} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="work" data-section-id="work" className="section-shell relative min-h-screen px-4 py-20 sm:px-5 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32">
          <div className="pointer-events-none absolute right-3 top-5 font-display text-[clamp(5rem,20vw,16rem)] leading-none text-surface md:right-10 md:top-8">
            04
          </div>
          <div className="mx-auto max-w-[1400px]">
            <div data-reveal="up" className="flex flex-col gap-4 md:flex-row md:items-end md:gap-8">
              <h2 className="font-display text-[clamp(3.4rem,8vw,6rem)] uppercase leading-[0.9] tracking-[-0.04em]">What I&apos;ve Built</h2>
              <div className="mb-4 h-px flex-1 bg-teal/30" />
            </div>

            <ProjectList items={projects} />
          </div>
        </section>

        <section id="tools" data-section-id="tools" className="section-shell relative min-h-[70vh] bg-surface px-4 py-20 sm:px-5 sm:py-24 md:px-8 md:py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-[1400px]">
            <div data-reveal="up" className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="font-display text-[clamp(3.1rem,7vw,5.4rem)] uppercase leading-[0.92] tracking-[-0.04em]">Daily Stack</h2>
              <div className="eyebrow">Tools I live in</div>
            </div>

            <div className="grid auto-rows-[minmax(9rem,auto)] gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  data-reveal="up"
                  className={`border border-white/8 bg-ink/55 p-5 transition-all duration-200 hover:border-teal hover:shadow-[0_0_24px_rgba(0,229,204,0.08)] ${tool.tall ? "xl:row-span-2" : ""}`}
                >
                  <ToolIcon icon={tool.icon} className="h-10 w-10 text-teal/80 transition-colors duration-200" />
                  <div className="mt-10 font-mono text-[0.82rem] uppercase tracking-[0.16em] text-paper">{tool.name}</div>
                  <div className="mt-2 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-paper/45">{tool.category}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" data-section-id="contact" className="section-shell relative min-h-screen overflow-hidden bg-teal px-4 py-20 text-ink sm:px-5 sm:py-24 md:px-8 md:py-24 lg:px-10 lg:py-28">
          <div className="contact-overlay absolute inset-0 bg-ink" />
          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-[1400px] flex-col justify-between sm:min-h-[calc(100vh-12rem)]">
            <div>
              <div data-reveal="up" className="font-mono text-[0.76rem] uppercase tracking-[0.26em] text-ink/80">
                {"// Let's Talk"}
              </div>
              <h2 data-reveal="up" className="mt-6 max-w-[10ch] font-display text-[clamp(3rem,13vw,10rem)] uppercase leading-[0.88] tracking-[-0.05em] sm:mt-8">
                Ready to
                <br />
                Hire an
                <br />
                Engineer
                <span className="blink-cursor">|</span>
              </h2>

              <p data-reveal="up" className="mt-6 max-w-[46rem] text-[1rem] leading-7 text-ink/80 sm:mt-8 sm:text-[1.05rem] sm:leading-8">
                I&apos;m actively looking for Desktop Engineer, Systems Engineer, or senior IT roles. If you need someone who can own your endpoint management strategy and automate the boring parts, I&apos;m your person.
              </p>

              <div data-reveal="up" className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:gap-4">
                <a href={`mailto:${contactInfo.email}`} className="button-dark">✉ Send an Email</a>
                <a href={cvLink} className="button-dark" {...cvProps}>↓ {cvLabel}</a>
                <a href={contactInfo.linkedin} className="button-dark" target="_blank" rel="noreferrer">in LinkedIn</a>
                <a href={contactInfo.github} className="button-dark" target="_blank" rel="noreferrer">◆ GitHub</a>
              </div>
            </div>

            <div data-reveal="up" className="mt-14 flex flex-col gap-4 border-t border-ink/20 pt-6 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink/70 md:mt-16 md:flex-row md:items-center md:justify-between md:text-[0.76rem] md:tracking-[0.2em]">
              <div>Mumbai, Maharashtra · India</div>
              <div>© 2026 Sahel</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
