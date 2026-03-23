import {
  AlertCircle,
  BadgeCheck,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  Handshake,
  Menu,
  Mic2,
  Quote,
  Search,
  Star,
  TrendingUp,
  Users,
  Wallet,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

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

const REVIEWS = [
  {
    name: "James K",
    role: "YouTube Creator",
    meta: "420K subscribers",
    text: "They landed me a $4,500 deal within 3 weeks. Zero effort on my end -- they handled everything from the first email to signing the contract.",
    rating: 5,
    initials: "JK",
    color: "oklch(0.55 0.18 250)",
  },
  {
    name: "Sofia R",
    role: "Tech Content Creator",
    meta: "Multi-platform",
    text: "I had no idea how to approach brands. These guys sent proposals, negotiated, and closed two deals in month one. Genuinely life-changing for my channel.",
    rating: 5,
    initials: "SR",
    color: "oklch(0.60 0.16 210)",
  },
  {
    name: "Marcus T",
    role: "Lifestyle Creator",
    meta: "180K subscribers",
    text: "The process was smooth from start to finish. They matched me with brands my audience actually cares about. My first deal came in at $2,800.",
    rating: 5,
    initials: "MT",
    color: "oklch(0.58 0.17 270)",
  },
  {
    name: "Lena W",
    role: "Finance Creator",
    meta: "Growing channel",
    text: "Went from 0 sponsors to 3 active brand deals in 60 days. The team is professional, fast, and genuinely invested in your growth.",
    rating: 5,
    initials: "LW",
    color: "oklch(0.55 0.15 230)",
  },
  {
    name: "Ryan D",
    role: "Gaming Creator",
    meta: "95K subscribers",
    text: "Tried reaching out to brands myself for months with zero replies. 1PC closed my first deal in under 2 weeks. Wish I'd found them sooner.",
    rating: 5,
    initials: "RD",
    color: "oklch(0.60 0.18 265)",
  },
];

// Jan 2026 daily conversion data (realistic 15-27% range)
const CONVERSION_DATA = [
  { day: 1, label: "Jan 1", dayName: "Thursday", rate: 16.42 },
  { day: 2, label: "Jan 2", dayName: "Friday", rate: 17.81 },
  { day: 3, label: "Jan 3", dayName: "Saturday", rate: 15.93 },
  { day: 4, label: "Jan 4", dayName: "Sunday", rate: 15.22 },
  { day: 5, label: "Jan 5", dayName: "Monday", rate: 18.65 },
  { day: 6, label: "Jan 6", dayName: "Tuesday", rate: 19.34 },
  { day: 7, label: "Jan 7", dayName: "Wednesday", rate: 18.11 },
  { day: 8, label: "Jan 8", dayName: "Thursday", rate: 17.56 },
  { day: 9, label: "Jan 9", dayName: "Friday", rate: 20.12 },
  { day: 10, label: "Jan 10", dayName: "Saturday", rate: 16.88 },
  { day: 11, label: "Jan 11", dayName: "Sunday", rate: 15.74 },
  { day: 12, label: "Jan 12", dayName: "Monday", rate: 21.03 },
  { day: 13, label: "Jan 13", dayName: "Tuesday", rate: 26.47 },
  { day: 14, label: "Jan 14", dayName: "Wednesday", rate: 22.19 },
  { day: 15, label: "Jan 15", dayName: "Thursday", rate: 19.88 },
  { day: 16, label: "Jan 16", dayName: "Friday", rate: 21.45 },
  { day: 17, label: "Jan 17", dayName: "Saturday", rate: 17.32 },
  { day: 18, label: "Jan 18", dayName: "Sunday", rate: 16.05 },
  { day: 19, label: "Jan 19", dayName: "Monday", rate: 20.77 },
  { day: 20, label: "Jan 20", dayName: "Tuesday", rate: 19.63 },
  { day: 21, label: "Jan 21", dayName: "Wednesday", rate: 18.94 },
  { day: 22, label: "Jan 22", dayName: "Thursday", rate: 20.38 },
  { day: 23, label: "Jan 23", dayName: "Friday", rate: 25.61 },
  { day: 24, label: "Jan 24", dayName: "Saturday", rate: 23.14 },
  { day: 25, label: "Jan 25", dayName: "Sunday", rate: 17.88 },
  { day: 26, label: "Jan 26", dayName: "Monday", rate: 21.92 },
  { day: 27, label: "Jan 27", dayName: "Tuesday", rate: 20.55 },
  { day: 28, label: "Jan 28", dayName: "Wednesday", rate: 19.27 },
  { day: 29, label: "Jan 29", dayName: "Thursday", rate: 18.43 },
  { day: 30, label: "Jan 30", dayName: "Friday", rate: 22.73 },
  { day: 31, label: "Jan 31", dayName: "Saturday", rate: 20.18 },
];

const FILTER_PILLS = [
  { label: "Jan 01 2026 -- Jan 31 2026" },
  { label: "Brand: All" },
  { label: "Currency: GBP Sterling" },
  { label: "Show: None" },
];

function BrandConversionSnapshot() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const chartRef = useRef<HTMLDivElement>(null);

  const maxRate = Math.max(...CONVERSION_DATA.map((d) => d.rate));
  const minRate = 13; // visual floor
  const range = maxRate - minRate;

  const getBarHeight = (rate: number) => {
    return Math.max(4, ((rate - minRate) / range) * 100);
  };

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.14 0.025 255)" }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.65 0.2 250 / 0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <Eyebrow>Brand Performance</Eyebrow>
          <SectionTitle>
            Conversion Snapshot (Impact, as of Jan 2026)
          </SectionTitle>

          {/* Key metric bullet */}
          <div className="mt-5 inline-flex items-start gap-2 max-w-xl mx-auto">
            <span
              className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: "oklch(0.65 0.2 250)" }}
            />
            <p className="text-sm text-muted-foreground font-light text-left leading-relaxed">
              <span className="font-bold text-foreground">
                14.92% / 15.33% / 15.61%
              </span>{" "}
              average conversion rate across all brands (last 30 / 60 / 90 days)
            </p>
          </div>
        </motion.div>

        {/* Chart card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
        >
          <div
            className="rounded-2xl border border-border overflow-hidden"
            style={{ background: "oklch(0.16 0.022 255)" }}
            data-ocid="brand_conversion.card"
          >
            {/* Card header */}
            <div className="px-6 pt-5 pb-4 border-b border-border/60">
              <p className="text-sm font-semibold text-foreground font-display mb-3">
                Daily Conversion Rate -- January 2026
              </p>
              {/* Filter pills */}
              <div className="flex flex-wrap gap-2">
                {FILTER_PILLS.map((pill) => (
                  <span
                    key={pill.label}
                    className="px-3 py-1 rounded-full text-xs font-medium border border-border/80 text-muted-foreground"
                    style={{ background: "oklch(0.18 0.02 255)" }}
                  >
                    {pill.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Chart area */}
            <div className="px-6 pb-6 pt-5">
              <div className="flex gap-1">
                {/* Y-axis labels */}
                <div
                  className="flex flex-col justify-between text-right pr-2 pb-6"
                  style={{ width: "44px", minWidth: "44px" }}
                >
                  {[28, 24, 20, 16].map((pct) => (
                    <span key={pct} className="text-xs text-muted-foreground">
                      {pct}%
                    </span>
                  ))}
                </div>

                {/* Bars + X-axis */}
                <div className="flex-1 min-w-0">
                  <div
                    ref={chartRef}
                    className="relative flex items-end gap-[2px]"
                    style={{ height: "160px" }}
                  >
                    {CONVERSION_DATA.map((d, i) => {
                      const heightPct = getBarHeight(d.rate);
                      const isHovered = hoveredIdx === i;
                      const isSpike = d.day === 13 || d.day === 23;
                      return (
                        <div
                          key={d.day}
                          className="flex-1 flex flex-col justify-end relative cursor-pointer group"
                          style={{ height: "100%" }}
                          onMouseEnter={(e) => {
                            setHoveredIdx(i);
                            const rect =
                              e.currentTarget.getBoundingClientRect();
                            const parentRect =
                              chartRef.current?.getBoundingClientRect();
                            if (parentRect) {
                              setTooltipPos({
                                x: rect.left - parentRect.left + rect.width / 2,
                                y: rect.top - parentRect.top - 8,
                              });
                            }
                          }}
                          onMouseLeave={() => setHoveredIdx(null)}
                          data-ocid={`brand_conversion.item.${i + 1}`}
                        >
                          <div
                            className="w-full rounded-t-sm transition-all duration-150"
                            style={{
                              height: `${heightPct}%`,
                              background: isHovered
                                ? "oklch(0.78 0.18 250)"
                                : isSpike
                                  ? "oklch(0.72 0.2 250)"
                                  : "oklch(0.55 0.18 250)",
                              minHeight: "4px",
                            }}
                          />
                        </div>
                      );
                    })}

                    {/* Tooltip */}
                    {hoveredIdx !== null && (
                      <div
                        className="absolute z-20 pointer-events-none"
                        style={{
                          left: tooltipPos.x,
                          top: tooltipPos.y,
                          transform: "translate(-50%, -100%)",
                        }}
                      >
                        <div
                          className="px-3 py-2 rounded-lg border border-border shadow-lg text-xs whitespace-nowrap"
                          style={{ background: "oklch(0.20 0.025 255)" }}
                        >
                          <p className="text-muted-foreground mb-0.5">
                            {CONVERSION_DATA[hoveredIdx].dayName},{" "}
                            {CONVERSION_DATA[hoveredIdx].label} 2026
                          </p>
                          <p className="font-semibold text-foreground">
                            Conversion Rate:{" "}
                            <span style={{ color: "oklch(0.75 0.2 250)" }}>
                              {CONVERSION_DATA[hoveredIdx].rate.toFixed(2)}%
                            </span>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* X-axis */}
                  <div className="flex justify-between mt-1.5 px-0">
                    <span className="text-xs text-muted-foreground">Jan 1</span>
                    <span className="text-xs text-muted-foreground">
                      Jan 15
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Jan 31
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LogoGlow() {
  return (
    <span
      aria-hidden="true"
      className="logo-glow"
      style={{
        position: "absolute",
        inset: "-8px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, oklch(0.65 0.2 250 / 0.7) 0%, oklch(0.65 0.2 250 / 0.2) 50%, transparent 75%)",
        filter: "blur(8px)",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

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

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].slice(0, count).map((n) => (
        <Star key={n} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const touchStartX = useRef<number | null>(null);
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    const update = () => setPerPage(window.innerWidth < 768 ? 1 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const total = REVIEWS.length;
  const maxIndex = total - perPage;

  const prev = () => {
    if (current === 0) return;
    setDirection(-1);
    setCurrent((c) => Math.max(0, c - 1));
  };

  const next = () => {
    if (current >= maxIndex) return;
    setDirection(1);
    setCurrent((c) => Math.min(maxIndex, c + 1));
  };

  const visible = REVIEWS.slice(current, current + perPage);

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.14 0.025 255)" }}
    >
      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.65 0.2 250 / 0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <Eyebrow>Creator Stories</Eyebrow>
          <SectionTitle>What Our Creators Say</SectionTitle>

          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-2 mt-5">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star
                  key={n}
                  className="w-5 h-5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-foreground font-bold text-lg font-display">
              4.9
            </span>
            <span className="text-muted-foreground text-sm font-light">
              from 200+ creators
            </span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={`${current}-${perPage}`}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid gap-5"
                style={{
                  gridTemplateColumns: `repeat(${perPage}, minmax(0, 1fr))`,
                }}
                onTouchStart={(e) => {
                  touchStartX.current = e.touches[0].clientX;
                }}
                onTouchEnd={(e) => {
                  if (touchStartX.current === null) return;
                  const delta =
                    touchStartX.current - e.changedTouches[0].clientX;
                  if (delta > 50) next();
                  else if (delta < -50) prev();
                  touchStartX.current = null;
                }}
              >
                {visible.map((review, i) => (
                  <motion.div
                    key={review.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="rounded-2xl border border-border p-6 flex flex-col gap-4 relative group hover:border-gold/30 transition-colors"
                    style={{ background: "oklch(0.16 0.022 255)" }}
                    data-ocid={`reviews.item.${current + i + 1}`}
                  >
                    {/* Quote icon */}
                    <Quote
                      className="w-6 h-6 text-gold/30 absolute top-5 right-5"
                      aria-hidden="true"
                    />

                    {/* Stars */}
                    <StarRating count={review.rating} />

                    {/* Review text */}
                    <p className="text-sm text-muted-foreground leading-relaxed font-light flex-1">
                      &ldquo;{review.text}&rdquo;
                    </p>

                    {/* Reviewer */}
                    <div className="flex items-center gap-3 pt-2 border-t border-border/60">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                        style={{ background: review.color }}
                      >
                        {review.initials}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground font-display">
                          {review.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {review.role}{" "}
                          <span className="text-gold/70">· {review.meta}</span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prev}
              disabled={current === 0}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-gold/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ background: "oklch(0.16 0.022 255)" }}
              data-ocid="reviews.pagination_prev"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-1.5">
              {Array.from({ length: maxIndex + 1 }, (_, idx) => idx).map(
                (i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    className="w-1.5 rounded-full transition-all duration-300"
                    style={{
                      height: "6px",
                      background:
                        i === current
                          ? "oklch(0.65 0.2 250)"
                          : "oklch(0.35 0.02 255)",
                      width: i === current ? "20px" : "6px",
                    }}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ),
              )}
            </div>

            <button
              type="button"
              onClick={next}
              disabled={current >= maxIndex}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-gold/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ background: "oklch(0.16 0.022 255)" }}
              data-ocid="reviews.pagination_next"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
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
            <span
              className="relative flex items-center justify-center"
              style={{ width: "36px", height: "36px" }}
            >
              <LogoGlow />
              <img
                src="/assets/uploads/1-HD-1.png"
                alt="1PCfirmsponsors logo"
                className="h-9 w-9 object-contain relative z-10"
              />
            </span>
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

      {/* BRAND CONVERSION SNAPSHOT */}
      <BrandConversionSnapshot />

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

      {/* REVIEWS */}
      <ReviewsSection />

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
              <span
                className="relative flex items-center justify-center"
                style={{ width: "32px", height: "32px" }}
              >
                <LogoGlow />
                <img
                  src="/assets/uploads/1-HD-1.png"
                  alt="1PCfirmsponsors logo"
                  className="h-8 w-8 object-contain relative z-10"
                />
              </span>
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
