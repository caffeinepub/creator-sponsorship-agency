import {
  AlertCircle,
  BadgeCheck,
  CheckCircle,
  DollarSign,
  Handshake,
  Menu,
  Mic2,
  Search,
  TrendingUp,
  Users,
  Wallet,
  X,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const BOOKING_URL = "https://cal.com/darpan-olymp-cal/15min";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
];

const PROBLEMS = [
  {
    icon: TrendingUp,
    title: "Getting Views But Not Getting Paid",
    desc: "You're putting in the work, growing your audience, but that effort isn't translating into revenue. Your content deserves to be monetized.",
  },
  {
    icon: AlertCircle,
    title: "Brands Aren't Reaching Out Consistently",
    desc: "Waiting for brands to find you is a losing game. Sporadic outreach means inconsistent income -- a feast-or-famine cycle that's hard to plan around.",
  },
  {
    icon: DollarSign,
    title: "Leaving Money on the Table Every Month",
    desc: "Without a dedicated sponsorship strategy, you're missing deals that should be yours. Every month without a sponsor is revenue you'll never recover.",
  },
];

const SOLUTIONS = [
  {
    icon: Search,
    title: "Brand Matching",
    bullets: [
      "We identify brands aligned with your niche",
      "Vetted SaaS, AI, and consumer brands",
      "Deals that resonate with your audience",
    ],
  },
  {
    icon: Handshake,
    title: "Full-Service Outreach",
    bullets: [
      "We handle all cold outreach and follow-ups",
      "Professional pitch decks and rate cards",
      "Negotiation handled entirely by us",
    ],
  },
  {
    icon: Wallet,
    title: "You Just Approve & Get Paid",
    bullets: [
      "Review deals on your terms",
      "Zero admin overhead for you",
      "Consistent monthly sponsorship pipeline",
    ],
  },
];

const METRICS = [
  { label: "$127K+ Deals Closed", icon: DollarSign },
  { label: "47 Creator Partnerships", icon: Users },
  { label: "SaaS & AI Brands", icon: Zap },
  { label: "98% Deal Approval Rate", icon: BadgeCheck },
];

const STEPS = [
  {
    step: "01",
    icon: Search,
    title: "We Audit Your Channel",
    desc: "We analyze your content, audience, and niche to build the perfect brand pitch profile.",
  },
  {
    step: "02",
    icon: Mic2,
    title: "We Reach Out to Brands",
    desc: "Our team contacts vetted brands with a compelling pitch tailored to your channel.",
  },
  {
    step: "03",
    icon: Handshake,
    title: "We Close Deals for You",
    desc: "We negotiate rates, terms, and deliverables -- you only review and approve.",
  },
  {
    step: "04",
    icon: Wallet,
    title: "You Get Paid",
    desc: "Deals go live, you create your sponsored content, and the money hits your account.",
  },
];

function BlueButton({
  children,
  className = "",
  href,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  href?: string;
}) {
  const cls = `inline-flex items-center justify-center px-6 py-3 rounded-full bg-gold text-white font-semibold text-sm uppercase tracking-widest transition-all duration-200 hover:bg-gold-hover hover:shadow-gold active:scale-95 ${className}`;
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3 font-sans">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-normal leading-tight font-display">
      {children}
    </h2>
  );
}

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, delay, ease: "easeOut" as const },
  };
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-card shadow-card border-b border-border"
            : "bg-card/90 backdrop-blur-sm"
        }`}
        style={{ height: "68px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3"
            data-ocid="nav.link"
          >
            <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center shadow-gold">
              <Mic2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-bold tracking-wide text-foreground font-display">
              1PCfirmsponsors
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <BlueButton href={BOOKING_URL} data-ocid="nav.primary_button">
              Book a Free Call
            </BlueButton>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen((v) => !v)}
            data-ocid="nav.toggle"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-card border-t border-border px-4 pb-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground tracking-wide"
                onClick={() => setMenuOpen(false)}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <BlueButton
              href={BOOKING_URL}
              className="mt-3 w-full"
              data-ocid="nav.primary_button"
            >
              Book a Free Call
            </BlueButton>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative pt-[68px] min-h-screen flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.08 0.02 255) 0%, oklch(0.12 0.025 255) 50%, oklch(0.15 0.03 260) 100%)",
        }}
      >
        {/* Hero background image */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-bg.dim_1200x700.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.12,
          }}
        />

        {/* Blue glow */}
        <div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.2 250 / 0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 grid md:grid-cols-2 gap-12 items-center w-full relative z-10">
          {/* Left */}
          <motion.div {...fadeUp(0)}>
            <Eyebrow>Creator Monetization Agency</Eyebrow>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-normal text-foreground mb-6 font-display">
              We Help Creators Land{" "}
              <span className="text-gold">High-Paying Sponsorships</span> --
              Consistently
            </h1>
            <p className="text-base text-muted-foreground mb-8 max-w-md leading-relaxed font-light">
              We handle outreach, brand deals, and negotiations -- so you can
              focus on creating content.
            </p>
            <BlueButton
              href={BOOKING_URL}
              className="text-base px-8 py-4"
              data-ocid="hero.primary_button"
            >
              Book a Free Call
            </BlueButton>
          </motion.div>

          {/* Right -- Image + Stats card */}
          <motion.div
            {...fadeUp(0.2)}
            className="flex justify-center md:justify-end relative"
          >
            {/* Creator studio image */}
            <div className="relative w-full max-w-sm">
              <img
                src="/assets/generated/creator-studio.dim_800x500.jpg"
                alt="Creator studio"
                className="w-full rounded-2xl object-cover shadow-card"
                style={{ height: "260px" }}
              />
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 40%, oklch(0.08 0.02 255 / 0.85) 100%)",
                }}
              />
              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="space-y-2">
                  {[
                    {
                      label: "Total Deals Closed",
                      value: "$127K",
                      icon: DollarSign,
                    },
                    { label: "Creator Partnerships", value: "47", icon: Users },
                    {
                      label: "Deal Approval Rate",
                      value: "98%",
                      icon: BadgeCheck,
                    },
                  ].map(({ label, value, icon: Icon }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 px-3 py-2 rounded-xl border border-border/60"
                      style={{ background: "oklch(0.14 0.022 255 / 0.9)" }}
                    >
                      <div className="w-7 h-7 rounded-lg bg-gold/15 border border-gold/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-gold" />
                      </div>
                      <p className="text-xs text-muted-foreground flex-1">
                        {label}
                      </p>
                      <p className="text-sm font-bold text-foreground font-display">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="solutions" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <Eyebrow>The Problem</Eyebrow>
            <SectionTitle>Still Posting Without Sponsors?</SectionTitle>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto font-light">
              You're doing everything right -- but the monetization isn't
              following. Here's why.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {PROBLEMS.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                {...fadeUp(0.1 * i)}
                className="rounded-2xl border border-border p-6 shadow-card hover:border-gold/40 transition-colors group"
                style={{ background: "oklch(0.16 0.022 255)" }}
                data-ocid={`problem.card.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-3 font-display">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section
        className="py-24"
        style={{ background: "oklch(0.14 0.025 255)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <Eyebrow>The Solution</Eyebrow>
            <SectionTitle>
              We Turn Your Content Into Sponsorship Revenue
            </SectionTitle>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto font-light">
              A done-for-you sponsorship machine that runs while you create.
            </p>
          </motion.div>

          {/* Deal handshake image */}
          <motion.div {...fadeUp(0.05)} className="mb-12">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/assets/generated/deal-handshake.dim_800x500.jpg"
                alt="Closing a sponsorship deal"
                className="w-full object-cover"
                style={{ height: "280px" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, oklch(0.08 0.02 255 / 0.75) 0%, transparent 50%, oklch(0.08 0.02 255 / 0.75) 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-2 font-sans">
                    Done For You
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-white font-display">
                    We Close the Deals. You Cash the Checks.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {SOLUTIONS.map(({ icon: Icon, title, bullets }, i) => (
              <motion.div
                key={title}
                {...fadeUp(0.1 * i)}
                className="rounded-2xl border border-border p-6 shadow-card hover:border-gold/40 transition-colors group"
                style={{ background: "oklch(0.16 0.022 255)" }}
                data-ocid={`solution.card.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-4 font-display">
                  {title}
                </h3>
                <ul className="space-y-2">
                  {bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                      <span className="font-light">{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF / RESULTS */}
      <section id="results" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <Eyebrow>Proof</Eyebrow>
            <SectionTitle>Real Results</SectionTitle>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto font-light">
              Numbers don't lie. Here's what we've delivered for creators just
              like you.
            </p>
          </motion.div>

          {/* Metric chips */}
          <motion.div
            {...fadeUp(0.1)}
            className="flex flex-wrap justify-center gap-4"
          >
            {METRICS.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-gold/30 bg-gold/5"
                data-ocid="results.card"
              >
                <Icon className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium text-foreground tracking-wide">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        className="py-24"
        style={{ background: "oklch(0.14 0.025 255)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <Eyebrow>Process</Eyebrow>
            <SectionTitle>How It Works</SectionTitle>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto font-light">
              Four simple steps from zero to consistent sponsorship income.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map(({ step, icon: Icon, title, desc }, i) => (
              <motion.div
                key={step}
                {...fadeUp(0.1 * i)}
                className="relative rounded-2xl border border-border p-6 shadow-card"
                style={{ background: "oklch(0.16 0.022 255)" }}
                data-ocid={`steps.card.${i + 1}`}
              >
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 right-0 w-6 h-px bg-border translate-x-full" />
                )}
                <div className="text-3xl font-bold text-gold/20 mb-3 font-display">
                  {step}
                </div>
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2 font-display">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <Eyebrow>Pricing</Eyebrow>
            <SectionTitle>Simple, Performance-Based Pricing</SectionTitle>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-light">
              We only make money when you do.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="max-w-lg mx-auto">
            <div
              className="rounded-2xl border border-gold/30 p-8 shadow-card text-center"
              style={{
                background:
                  "linear-gradient(145deg, oklch(0.16 0.022 255) 0%, oklch(0.14 0.025 255) 100%)",
              }}
              data-ocid="pricing.card"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-display">
                Performance Commission
              </h3>
              <p className="text-muted-foreground text-sm mb-8 font-light">
                Aligned incentives -- we win when you win.
              </p>

              <div className="space-y-4 mb-8 text-left">
                {[
                  "We take a % of the deals we close for you",
                  "Zero upfront cost to get started",
                  "Optional small onboarding fee to set up systems",
                  "Dedicated account manager for your channel",
                  "Full transparency on every deal and commission",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground font-light">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <BlueButton
                href={BOOKING_URL}
                className="w-full justify-center text-sm px-8 py-4"
                data-ocid="pricing.primary_button"
              >
                Book a Free Call
              </BlueButton>
              <p className="text-xs text-muted-foreground mt-3 font-light">
                No commitment required · Cancel anytime
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="py-28 text-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.10 0.022 255) 0%, oklch(0.14 0.030 260) 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.65 0.2 250 / 0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp(0)}>
            <Eyebrow>Get Started</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-normal text-foreground mb-6 font-display">
              Ready to Get Paid
              <br />
              for Your Content?
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed font-light">
              Join dozens of creators who are landing consistent sponsorships
              without lifting a finger on the business side.
            </p>
            <BlueButton
              href={BOOKING_URL}
              className="text-base px-10 py-4"
              data-ocid="cta.primary_button"
            >
              Book Your Free Strategy Call
            </BlueButton>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-card border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                <Mic2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold tracking-wide text-foreground font-display">
                1PCfirmsponsors
              </span>
            </div>

            {/* Nav */}
            <nav className="flex flex-wrap justify-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide"
                  data-ocid="footer.link"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Copyright */}
            <p className="text-xs text-muted-foreground">
              © {currentYear} 1PCfirmsponsors
            </p>
          </div>

          {/* Caffeine attribution */}
          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">
              © {currentYear}. Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
