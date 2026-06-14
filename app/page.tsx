import { AutomateIcon, DeployIcon, SecureIcon } from "@/components/icons";
import { Altimeter } from "@/components/altimeter";
import { ContactForm } from "@/components/contact-form";
import { HeroTerminal } from "@/components/hero-terminal";
import { HudCorners } from "@/components/hud-corners";
import { LoaderScreen } from "@/components/loader-screen";
import { MobileNav } from "@/components/mobile-nav";
import { ProjectList } from "@/components/project-list";
import { RunwayGrid } from "@/components/runway-grid";
import { ScrollEffects } from "@/components/scroll-effects";
import { ToolsGrid } from "@/components/tools-grid";
import {
  aboutFacts,
  certifications,
  contactInfo,
  education,
  experience,
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
    <div className="marquee-shell border-y border-teal/18 bg-surface">
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

function SectionSeam({ index, label }: { index: string; label: string }) {
  return (
    <div
      aria-hidden="true"
      data-reveal="up"
      className="relative z-10 mx-auto flex max-w-[1400px] items-center gap-4 px-4 py-7 sm:px-5 md:px-8 md:py-9 lg:px-10"
    >
      <span className="font-mono text-[0.62rem] uppercase tracking-[0.32em] text-teal/80">{index}</span>
      <span className="h-px flex-1 bg-gradient-to-r from-teal/35 via-teal/12 to-transparent" />
      <span className="font-mono text-[0.58rem] uppercase tracking-[0.26em] text-paper/35">{label}</span>
      <span className="h-1.5 w-1.5 rotate-45 border border-teal/45" />
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
      <Altimeter />

      {/* Scroll progress bar */}
      <div id="progress-bar" className="fixed left-0 top-0 z-[110] h-px w-full origin-left scale-x-0 bg-teal" />

      {/* Custom cursor — desktop only */}
      <div id="cursor-dot" className="pointer-events-none fixed left-0 top-0 z-[115] hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal md:block" />
      <div id="cursor-ring" className="pointer-events-none fixed left-0 top-0 z-[114] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal/50 md:block" />

      {/* Atmosphere overlays */}
      <div className="noise-overlay fixed inset-0 z-[1]" />
      <div className="scanline-overlay fixed inset-0 z-[1]" />

      <header
        data-site-nav
        className="fixed left-0 top-0 z-[100] w-full border-b border-transparent px-4 py-4 transition-all duration-300 sm:px-5 md:px-8 lg:px-10"
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6">
          <a href="#top" className="flex flex-col leading-none">
            <span className="font-display text-[1.6rem] uppercase tracking-[0.08em] text-paper">Sahel Zaffar</span>
            <span className="font-mono text-[0.5rem] uppercase tracking-[0.28em] text-teal/60">{"// Flight Deck"}</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-nav-link
                data-active="false"
                className="nav-link relative font-mono text-[0.72rem] uppercase tracking-[0.22em] text-paper/65 transition-colors hover:text-teal"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <MobileNav items={navItems} />
          </div>
        </div>
      </header>

      <main id="top" className="relative z-10 overflow-hidden">

        {/* ═══════════════════════════════════
            SECTOR 01 — IDENTIFICATION (HERO)
        ═══════════════════════════════════ */}
        <section className="hero-section relative min-h-dvh px-4 pb-8 pt-24 sm:px-5 sm:pb-10 sm:pt-28 md:px-8 md:pb-12 md:pt-32 lg:px-10">

          {/* Runway perspective grid */}
          <RunwayGrid className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.075] hidden md:block" />

          {/* HUD corner brackets */}
          <HudCorners />

          {/* Ambient orb */}
          <div className="hero-orb pointer-events-none absolute left-[18%] top-[18%] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full" />

          {/* Attitude indicator horizon line — tilted by mouse in scroll-effects */}
          <div
            className="hero-horizon pointer-events-none absolute left-0 right-0 hidden md:block"
            style={{ top: "53%" }}
            aria-hidden="true"
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-teal/16 to-transparent" />
            <div className="flex items-center justify-between px-4 pt-1 sm:px-5 md:px-8 lg:px-10">
              <span className="font-mono text-[0.46rem] uppercase tracking-[0.2em] text-teal/22">◈ Horizon</span>
              <span className="font-mono text-[0.46rem] uppercase tracking-[0.2em] text-teal/22">HDG 090°</span>
            </div>
          </div>

          <div className="mx-auto flex min-h-[calc(100dvh-8rem)] max-w-[1400px] flex-col justify-between lg:relative">

            {/* Left content column */}
            <div className="hero-copy relative max-w-[58rem] lg:max-w-[55%]">

              {/* Status row */}
              <div className="hero-status mb-8 flex items-start justify-between gap-6 max-md:flex-col max-md:items-start sm:mb-10">
                <div>
                  <div className="max-w-[18rem] font-mono text-[0.62rem] uppercase tracking-[0.24em] text-teal sm:max-w-none sm:text-[0.72rem] sm:tracking-[0.32em]">
                    Systems Eng → IT Lead
                  </div>
                  <div className="mt-1 font-mono text-[0.52rem] uppercase tracking-[0.18em] text-paper/28 max-sm:hidden sm:text-[0.58rem]">
                    19.0°N · 73.1°E · New Panvel, IN
                  </div>
                </div>
                <div className="status-pill font-mono text-[0.62rem] uppercase tracking-[0.2em] text-teal sm:text-[0.7rem] sm:tracking-[0.28em]">
                  <span className="status-dot" />
                  Open to Senior Roles
                </div>
              </div>

              {/* Title stack */}
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

              {/* Body */}
              <p data-cursor="text" className="hero-body mt-6 max-w-[44rem] text-[0.98rem] leading-7 text-paper/68 sm:mt-8 md:text-[1.08rem] md:leading-8">
                Based in New Panvel. IT Lead running end-to-end operations across four countries — infrastructure, cloud,
                networking, telephony, and automation for an international shipping group. Solo. No safety net.
              </p>

              <div className="hero-kicker mt-5 max-w-[42rem] font-mono text-[0.68rem] uppercase tracking-[0.16em] text-teal/80 sm:mt-6 sm:text-[0.8rem] sm:tracking-[0.2em]">
                I don&apos;t just fix problems. I script them out of existence.
              </div>

              {/* CTAs */}
              <div className="hero-actions mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                <a href="#missions" className="button-outline max-sm:w-full">
                  View Missions
                </a>
                <a href={cvLink} className="button-solid max-sm:w-full" {...cvProps}>
                  {cvLabel}
                </a>
              </div>
            </div>

            {/* MFD Terminal — right column */}
            <div className="mt-10 md:mt-12 lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:w-[34rem] xl:w-[38rem]">
              <HeroTerminal />
            </div>

            {/* Stats row with horizon divider */}
            <div className="hero-stats mt-12 sm:mt-16">
              <div className="mb-5 flex items-center gap-3 sm:mb-7">
                <span className="font-mono text-[0.52rem] leading-none text-teal/38">◈</span>
                <div className="h-px flex-1 bg-gradient-to-r from-teal/18 via-teal/10 to-transparent" />
                <span className="font-mono text-[0.46rem] uppercase tracking-[0.22em] text-teal/22">Flight Stats</span>
                <div className="h-px w-6 bg-teal/10" />
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:gap-8 xl:grid-cols-4">
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
                    <div className="mt-2 max-w-[14rem] font-mono text-[0.72rem] uppercase tracking-[0.22em] text-paper/42">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════
            MARQUEE STRIP
        ═══════════════════════════════ */}
        <div aria-hidden="true" className="space-y-[1px] bg-teal/18">
          <MarqueeRow items={marqueeRows[0]} />
          <MarqueeRow items={marqueeRows[1]} reverse />
        </div>

        {/* ═══════════════════════════════
            SECTOR 02 — DOSSIER
        ═══════════════════════════════ */}
        <section id="dossier" data-section-id="dossier" className="section-shell relative min-h-screen px-4 py-20 sm:px-5 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32">
          <div data-parallax="0.25" className="sector-index pointer-events-none absolute left-2 top-8 z-0 text-[clamp(5rem,22vw,15rem)] md:left-8 md:top-10">
            02
          </div>
          <div className="relative z-10 mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">

            <div data-reveal="left" className="relative z-10">
              <div className="eyebrow">{"◈ // Dossier"}</div>
              <h2 className="mt-6 font-display text-[clamp(3rem,7vw,5.6rem)] uppercase leading-[0.92] tracking-[-0.04em] text-paper">
                The IT Guy
                <br />
                Who Scripts
                <br />
                <span className="text-teal">Everything.</span>
              </h2>
            </div>

            <div data-reveal="right" className="relative z-10 pt-4">
              <div className="space-y-7 text-[1.05rem] leading-8 text-paper/73">
                <p data-cursor="text">My job title says IT Lead. In practice that means I&apos;m the sole IT authority for a four-country shipping group — infrastructure, cloud, networking, telephony, vendor negotiations, and endpoint management across offices in India, Dubai, Oman, and Malaysia. I report directly to the MD and own everything.</p>
                <p data-cursor="text">I&apos;ve led a zero-downtime cloud migration of 400+ mailboxes, built office IT environments from the ground up across the Middle East and Southeast Asia, deployed Azure-hosted telephony with fault-tolerant architecture, and scripted out the manual work across onboarding, provisioning, and asset management — all as a one-person IT function.</p>
                <p data-cursor="text">I came up through technical support, moved into sole-charge IT operations, then enterprise infrastructure at Medpace, then took on this international lead role. Each move was a harder, bigger environment. The next one should be bigger still.</p>
              </div>

              <div className="mt-12 border-t border-teal/15">
                {aboutFacts.map((fact) => (
                  <div key={fact.label} data-reveal="up" className="grid gap-2 border-b border-teal/15 py-4 md:grid-cols-[12rem_1fr]">
                    <div className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-paper/38">{fact.label}</div>
                    <div className="text-[0.98rem] text-paper/85">{fact.value}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════
            SECTOR 03 — SERVICE RECORD
        ═══════════════════════════════ */}
        <SectionSeam index="S/03" label="Service Record" />
        <section id="record" data-section-id="record" className="section-shell relative min-h-screen border-t border-teal/12 bg-surface/30 px-4 py-20 sm:px-5 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32">
          <div data-parallax="0.3" className="sector-index pointer-events-none absolute left-2 top-6 z-0 text-[clamp(4.5rem,20vw,14rem)] md:left-8 md:top-8">
            03
          </div>
          <div className="relative z-10 mx-auto max-w-[1400px]">

            <div data-reveal="up" className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="eyebrow">{"◈ // Service Record"}</div>
                <h2 className="mt-5 font-display text-[clamp(3.4rem,8vw,6.4rem)] uppercase leading-[0.9] tracking-[-0.04em] text-paper">
                  Flight Hours
                </h2>
              </div>
              <div className="max-w-[26rem] font-mono text-[0.75rem] uppercase tracking-[0.2em] text-paper/40">
                Tech support → sole-charge IT → enterprise systems → multi-country lead. Each leg a bigger environment.
              </div>
            </div>

            {/* Experience timeline */}
            <ol className="record-timeline relative border-l border-teal/20 pl-6 sm:pl-9">
              {experience.map((job) => (
                <li key={`${job.org}-${job.period}`} data-reveal="up" className="record-entry relative pb-12 last:pb-0">
                  <span className={`record-node ${job.current ? "record-node-live" : ""}`} aria-hidden="true" />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <h3 className="font-display text-[1.5rem] uppercase tracking-[-0.02em] text-paper sm:text-[1.85rem]">
                      {job.role}
                    </h3>
                    <span className={`shrink-0 font-mono text-[0.66rem] uppercase tracking-[0.2em] ${job.current ? "text-teal" : "text-paper/40"}`}>
                      {job.current ? "◈ " : ""}{job.period}
                    </span>
                  </div>
                  <div className="mt-1 font-mono text-[0.74rem] uppercase tracking-[0.16em] text-teal/80">{job.org}</div>
                  <div className="mt-0.5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-paper/32">{job.location}</div>
                  <p data-cursor="text" className="mt-4 max-w-[52rem] text-[0.97rem] leading-7 text-paper/68">{job.summary}</p>
                </li>
              ))}
            </ol>

            {/* Education + Certifications */}
            <div className="mt-20 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">

              <div data-reveal="left">
                <div className="mb-8 flex items-center gap-4">
                  <div className="font-mono text-[0.75rem] uppercase tracking-[0.24em] text-teal">◈ Training</div>
                  <div className="h-px flex-1 bg-teal/18" />
                </div>
                <div className="space-y-6">
                  {education.map((edu) => (
                    <div key={edu.school} className="border border-white/7 bg-surface/60 p-5 sm:p-6">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-display text-[1.35rem] uppercase tracking-[-0.02em] text-paper sm:text-[1.6rem]">{edu.degree}</h3>
                        <span className="shrink-0 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-paper/40">{edu.period}</span>
                      </div>
                      <div className="mt-1 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-teal/80">{edu.school}</div>
                      <div className="mt-3 inline-block border border-amber/40 px-2.5 py-1 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-amber">{edu.meta}</div>
                      {edu.note ? <p className="mt-3 text-[0.9rem] leading-6 text-paper/55">{edu.note}</p> : null}
                    </div>
                  ))}
                </div>
              </div>

              <div data-reveal="right">
                <div className="mb-8 flex items-center gap-4">
                  <div className="font-mono text-[0.75rem] uppercase tracking-[0.24em] text-teal">◈ Type Ratings</div>
                  <div className="h-px flex-1 bg-teal/18" />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {certifications.map((cert) => (
                    <div key={cert.code} className="cert-card group flex items-start gap-4 border border-white/7 bg-surface/60 p-4 transition-colors hover:border-teal/50 sm:p-5">
                      <div className="shrink-0 border border-teal/40 px-2 py-1 font-mono text-[0.72rem] font-bold uppercase tracking-[0.08em] text-teal transition-colors group-hover:bg-teal/10">
                        {cert.code}
                      </div>
                      <div className="min-w-0">
                        <div className="text-[0.95rem] leading-5 text-paper/88">{cert.name}</div>
                        <div className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-paper/38">{cert.issuer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ═══════════════════════════════
            SECTOR 04 — INSTRUMENT PANEL
        ═══════════════════════════════ */}
        <SectionSeam index="S/04" label="Instrument Panel" />
        <section id="skills" data-section-id="skills" className="section-shell relative min-h-screen border-t border-teal/12 bg-surface px-4 py-20 sm:px-5 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32">
          <div data-parallax="0.25" className="sector-index pointer-events-none absolute right-2 top-6 z-0 text-[clamp(4.5rem,20vw,14rem)] md:right-8 md:top-8">
            04
          </div>
          <div className="relative z-10 mx-auto max-w-[1400px]">

            <div data-reveal="up" className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="eyebrow">{"◈ // Instrument Panel"}</div>
                <h2 className="mt-5 font-display text-[clamp(3.4rem,8vw,6.4rem)] uppercase leading-[0.9] tracking-[-0.04em] text-paper">
                  Technical Depth
                </h2>
              </div>
              <div className="max-w-[28rem] font-mono text-[0.75rem] uppercase tracking-[0.2em] text-paper/40">
                Automation-first capability across cloud, identity, endpoint management, telephony, and multi-site infrastructure.
              </div>
            </div>

            <div className="grid gap-4 md:gap-6 lg:grid-cols-3">
              {skillPillars.map((pillar) => (
                <div key={pillar.title} data-reveal="scale" className="border border-white/7 bg-ink/65 p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6">
                  <SkillIcon name={pillar.icon} />
                  <h3 className="mt-5 font-display text-[1.7rem] uppercase tracking-[-0.03em] text-paper sm:mt-6 sm:text-[2rem]">{pillar.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {pillar.items.map((item) => (
                      <span key={item} className="border border-muted/70 px-3 py-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-paper/70 transition-none hover:border-teal hover:bg-teal/5 hover:text-teal">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 sm:mt-18">
              <div data-reveal="up" className="mb-8 flex items-center gap-4">
                <div className="font-mono text-[0.75rem] uppercase tracking-[0.24em] text-teal">◈ Depth of Knowledge</div>
                <div className="h-px flex-1 bg-teal/18" />
              </div>

              <div className="space-y-6">
                {skillBars.map((bar) => (
                  <div key={bar.label} data-reveal="up">
                    <div className="mb-2 flex items-end justify-between gap-4">
                      <div className="font-mono text-[0.74rem] uppercase tracking-[0.14em] text-paper/76">{bar.label}</div>
                      <div className="font-mono text-[0.78rem] text-amber">{bar.value}%</div>
                    </div>
                    <div className="h-px bg-white/8">
                      <div className="skill-bar-fill h-px origin-left scale-x-0 bg-teal" data-value={bar.value} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════
            SECTOR 05 — MISSION LOG
        ═══════════════════════════════ */}
        <SectionSeam index="S/05" label="Mission Log" />
        <section id="missions" data-section-id="missions" className="section-shell relative min-h-screen border-t border-teal/12 px-4 py-20 sm:px-5 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32">
          <div data-parallax="0.3" className="sector-index pointer-events-none absolute right-2 top-6 z-0 text-[clamp(4.5rem,20vw,14rem)] md:right-8 md:top-8">
            05
          </div>
          <div className="relative z-10 mx-auto max-w-[1400px]">

            <div data-reveal="up" className="flex flex-col gap-4 md:flex-row md:items-end md:gap-8">
              <div>
                <div className="eyebrow mb-3">{"◈ // Mission Log"}</div>
                <h2 className="font-display text-[clamp(3.4rem,8vw,6rem)] uppercase leading-[0.9] tracking-[-0.04em] text-paper">Mission Log</h2>
              </div>
              <div className="mb-4 h-px flex-1 bg-teal/25" />
            </div>

            <ProjectList items={projects} />

          </div>
        </section>

        {/* ═══════════════════════════════
            SECTOR 06 — COCKPIT LOADOUT
        ═══════════════════════════════ */}
        <SectionSeam index="S/06" label="Cockpit Loadout" />
        <section id="tools" data-section-id="tools" className="section-shell relative min-h-[70vh] border-t border-teal/12 bg-surface px-4 py-20 sm:px-5 sm:py-24 md:px-8 md:py-24 lg:px-10 lg:py-28">
          <div data-parallax="0.25" className="sector-index pointer-events-none absolute right-2 top-6 z-0 text-[clamp(4.5rem,18vw,12rem)] md:right-8 md:top-8">
            06
          </div>
          <div className="relative z-10 mx-auto max-w-[1400px]">

            <div data-reveal="up" className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="font-display text-[clamp(3.1rem,7vw,5.4rem)] uppercase leading-[0.92] tracking-[-0.04em] text-paper">
                Cockpit Loadout
              </h2>
              <div className="eyebrow">◈ Tools I live in</div>
            </div>

            <ToolsGrid items={tools} />

          </div>
        </section>

        {/* ═══════════════════════════════
            SECTOR 07 — GROUND CONTROL
        ═══════════════════════════════ */}
        <section id="contact" data-section-id="contact" className="section-shell relative min-h-dvh overflow-hidden bg-teal px-4 py-20 text-ink sm:px-5 sm:py-24 md:px-8 md:py-24 lg:px-10 lg:py-28">
          <div className="contact-overlay absolute inset-0 bg-ink" />
          <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-10rem)] max-w-[1400px] flex-col justify-between sm:min-h-[calc(100dvh-12rem)]">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-16">

              {/* Left — pitch + quick links */}
              <div>
                <div data-reveal="up" className="font-mono text-[0.76rem] uppercase tracking-[0.26em] text-ink/75">
                  {"◈ // Ground Control"}
                </div>
                <h2 data-reveal="up" className="mt-6 max-w-[10ch] font-display text-[clamp(2.8rem,11vw,8rem)] uppercase leading-[0.88] tracking-[-0.05em] sm:mt-8">
                  Ready to
                  <br />
                  Hire an
                  <br />
                  Engineer
                  <span className="blink-cursor">|</span>
                </h2>

                <p data-reveal="up" className="mt-6 max-w-[42rem] text-[1rem] leading-7 text-ink/78 sm:mt-8 sm:text-[1.05rem] sm:leading-8">
                  IT Lead running solo IT for a four-country international shipping group. Open to senior IT leadership roles — Infrastructure Lead, Head of IT, or enterprise systems architect positions — where full-stack ownership, cross-site operations, and automation-first execution are valued.
                </p>

                <div data-reveal="up" className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:gap-4">
                  <a href={cvLink} className="button-dark" {...cvProps}>{"↓ "}{cvLabel}</a>
                  <a href={contactInfo.linkedin} className="button-dark" target="_blank" rel="noreferrer">in LinkedIn</a>
                  <a href={contactInfo.github} className="button-dark" target="_blank" rel="noreferrer">{"◆ GitHub"}</a>
                </div>
              </div>

              {/* Right — reach-out form */}
              <div data-reveal="right" className="border border-ink/15 bg-ink/[0.03] p-5 sm:p-7 lg:mt-2">
                <ContactForm email={contactInfo.email} />
              </div>
            </div>

            <div data-reveal="up" className="mt-14 flex flex-col gap-4 border-t border-ink/18 pt-6 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink/65 md:mt-16 md:flex-row md:items-center md:justify-between md:text-[0.76rem] md:tracking-[0.2em]">
              <div>{"19.0°N · 73.1°E · New Panvel, Maharashtra"}</div>
              <div className="flex items-center gap-2 text-left md:text-right">
                <span>Made by Sahel with</span>
                <span className="text-amber">♥</span>
                <span>{"in India © 2026"}</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ═══════════════════════════════
          FOOTER — SIGN-OFF
      ═══════════════════════════════ */}
      <footer className="relative z-10 border-t border-teal/15 bg-ink px-4 py-10 sm:px-5 md:px-8 md:py-12 lg:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-center md:justify-between">

          <div className="flex flex-col gap-1">
            <a href="#top" className="font-display text-[1.25rem] uppercase leading-none tracking-[0.08em] text-paper transition-colors hover:text-teal">
              Sahel Zaffar
            </a>
            <span className="font-mono text-[0.56rem] uppercase tracking-[0.28em] text-teal/55">{"// Flight Deck · All Systems Nominal"}</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-paper/45">
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-teal">LinkedIn</a>
            <span className="text-paper/15">·</span>
            <a href={contactInfo.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-teal">GitHub</a>
            <span className="text-paper/15">·</span>
            <a href={`mailto:${contactInfo.email}`} className="transition-colors hover:text-teal">Email</a>
            <span className="text-paper/15">·</span>
            <a href="#top" className="transition-colors hover:text-teal">↑ Top</a>
          </div>

          <div className="flex items-center gap-2 font-mono text-[0.64rem] uppercase tracking-[0.18em] text-paper/40">
            <span>© 2026 — Crafted with</span>
            <span className="text-amber" aria-label="love">♥</span>
            <span>in India</span>
          </div>

        </div>
      </footer>
    </>
  );
}
