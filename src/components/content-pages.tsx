import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CloudSun,
  Droplets,
  Handshake,
  Leaf,
  LineChart,
  ShieldCheck,
  Sprout,
  Sun,
  Users,
  Wheat,
  Lightbulb,
  Network,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { CTA, Eyebrow, PageHero, PlaceholderTag, SectionTitle } from "./site-sections";
import hero from "../assets/irrigation-hero.jpg";
import training from "../assets/farmer-training.jpg";
import solar from "../assets/solar-irrigation.jpg";
import collaboration from "../assets/farm-collaboration.jpg";

export const images = { hero, training, solar, collaboration };
const work = [
  {
    icon: BookOpen,
    title: "Farmer Education & Capacity Building",
    text: "Practical training in irrigation techniques, water management and climate-smart agriculture.",
  },
  {
    icon: Droplets,
    title: "Irrigation Adoption & Technology Access",
    text: "Connecting farmers with appropriate drip systems, solar pumps and informed technology choices.",
  },
  {
    icon: Handshake,
    title: "Partnerships & Advocacy",
    text: "Bringing institutions and communities together to advance irrigation-led agricultural transformation.",
  },
  {
    icon: LineChart,
    title: "Monitoring, Learning & Impact",
    text: "Tracking outcomes, learning with farmers and continuously strengthening programs.",
  },
];
const impacts = [
  "Irrigation technology adoption",
  "Stable crop yields",
  "Reliable farm incomes",
  "Climate resilience",
  "Stronger farming communities",
];
const stakeholders = [
  "Smallholder farmers",
  "Commercial farmers",
  "Farmer groups & cooperatives",
  "Government agencies",
  "NGOs & development partners",
  "Private irrigation companies",
  "Agribusiness organizations",
];
type IconText = [LucideIcon, string];
type IconTextText = [LucideIcon, string, string];

export function HomePage() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-76px)] max-h-[860px] overflow-hidden bg-deep">
        <img
          src={hero}
          width={1600}
          height={1000}
          alt="Ghanaian farmer tending vegetables supplied by drip irrigation"
          className="absolute inset-0 image-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep/95 via-deep/65 to-transparent" />
        <div className="section-shell relative flex min-h-[calc(100vh-76px)] max-h-[860px] items-center py-20">
          <div className="max-w-3xl page-enter">
            <p className="mb-5 text-sm font-extrabold uppercase text-gold">
              Agriculture · Water · Resilience
            </p>
            <h1 className="text-[clamp(2.25rem,6vw,4.5rem)] font-extrabold leading-[1.06] text-primary-foreground">
              Maximizing Agriculture Through Irrigation
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/85 md:text-xl">
              Building climate-resilient farming communities through sustainable irrigation,
              practical knowledge and access to appropriate agricultural technologies.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gold text-deep hover:bg-gold/90">
                <Link to="/what-we-do">
                  Explore Our Work <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link to="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
        <a
          href="#introduction"
          aria-label="Scroll to introduction"
          className="absolute bottom-5 left-1/2 grid size-10 -translate-x-1/2 place-items-center rounded-full border border-primary-foreground/40 text-primary-foreground"
          style={{ animation: "scroll-cue 2s ease-in-out infinite" }}
        >
          <ArrowRight className="rotate-90" />
        </a>
      </section>
      <section
        id="introduction"
        className="section-shell grid gap-10 py-20 md:grid-cols-2 md:items-center lg:py-28"
      >
        <img
          src={training}
          loading="lazy"
          width={1400}
          height={1000}
          alt="Farmers learning together in an irrigated field"
          className="aspect-[4/3] rounded-xl object-cover"
        />
        <div>
          <Eyebrow>Who we are</Eyebrow>
          <SectionTitle title="Empowering Farmers Through Irrigation" />
          <p className="mt-5 text-muted-foreground">
            Irrigation Feeds is a farmer-centered agricultural and climate resilience nonprofit. We
            work alongside farmers and institutions to turn reliable access to water, practical
            knowledge and appropriate technology into stronger harvests and more resilient
            communities.
          </p>
          <Button asChild variant="outline" size="lg" className="mt-7">
            <Link to="/about">
              Learn More About Us <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
      <section className="bg-water-soft">
        <div className="section-shell py-20 lg:py-28">
          <SectionTitle
            eyebrow="The case for action"
            title="Why Irrigation Matters"
            text="Climate pressure creates a difficult cycle. Practical irrigation helps farmers replace uncertainty with opportunity."
            center
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Unpredictable weather patterns",
              "Prolonged dry spells and droughts",
              "Low productivity",
              "Unstable farm incomes",
            ].map((x, i) => (
              <div key={x} className="rounded-xl border border-water/20 bg-surface p-6">
                <span className="text-xs font-extrabold text-water">0{i + 1} · CHALLENGE</span>
                <h3 className="mt-3 text-lg font-bold">{x}</h3>
              </div>
            ))}
          </div>
          <div className="my-8 flex items-center gap-4 text-water">
            <span className="h-px flex-1 bg-water/25" />
            <Droplets />
            <span className="text-xs font-bold uppercase">Water changes the story</span>
            <span className="h-px flex-1 bg-water/25" />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Year-round farming",
              "Stable crop yields",
              "Improved food security",
              "Greater climate resilience",
            ].map((x) => (
              <div key={x} className="rounded-xl bg-primary p-6 text-primary-foreground">
                <Sprout />
                <h3 className="mt-4 text-lg font-bold">{x}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-shell py-20 lg:py-28">
        <SectionTitle
          eyebrow="Our programs"
          title="What We Do"
          text="We combine practical education, appropriate technology and strong partnerships around farmer priorities."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {work.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="grid size-11 place-items-center rounded-lg bg-muted text-primary">
                <Icon />
              </div>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{text}</p>
              <Link
                to="/what-we-do"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary"
              >
                Learn More <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <ImpactBand />
      <Projects />
      <PartnerGrid />
      <CTA title="Be Part of the Irrigation Movement" />
      <NewsCards />
    </>
  );
}

export function AboutPage() {
  const values = [
    [Users, "Farmer-centeredness"],
    [Leaf, "Sustainability"],
    [Handshake, "Collaboration"],
    [Lightbulb, "Innovation"],
    [BookOpen, "Knowledge sharing"],
    [LineChart, "Impact"],
  ] as IconText[];
  return (
    <>
      <PageHero
        title="About Irrigation Feeds"
        subtitle="Building climate-resilient farming communities through irrigation."
        image={collaboration}
      />
      <section className="section-shell grid gap-10 py-20 md:grid-cols-2 md:items-center">
        <div>
          <Eyebrow>Who we are</Eyebrow>
          <SectionTitle title="Agriculture thrives when farmers can rely on water" />
          <p className="mt-5 text-muted-foreground">
            Irrigation Feeds is a Ghanaian, farmer-centered nonprofit promoting irrigation as a
            practical response to low agricultural productivity, climate variability and food
            insecurity. We work across communities and sectors so farmers gain the knowledge,
            connections and technologies needed to produce with greater confidence.
          </p>
        </div>
        <img
          src={hero}
          loading="lazy"
          alt="Farmer inspecting an irrigated vegetable crop"
          className="aspect-[4/3] rounded-xl object-cover"
        />
      </section>
      <VisionMission />
      <section className="section-shell py-20">
        <SectionTitle eyebrow="How we work" title="Our Approach" center />
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {(
            [
              [BookOpen, "Educate", "Provide practical knowledge and training."],
              [Lightbulb, "Empower", "Help farmers make informed irrigation decisions."],
              [Network, "Connect", "Facilitate technology access and partnerships."],
              [LineChart, "Impact", "Promote lasting agricultural outcomes."],
            ] as IconTextText[]
          ).map(([Icon, title, text], i) => (
            <div key={title as string} className="border-t-4 border-primary bg-surface p-6">
              <span className="text-xs font-bold text-gold">0{i + 1}</span>
              <Icon className="mt-5 text-primary" />
              <h3 className="mt-4 text-xl font-extrabold">{title as string}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text as string}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="relative min-h-[380px] overflow-hidden">
        <img
          src={solar}
          loading="lazy"
          alt="Solar-powered irrigation supporting a Ghanaian farm"
          className="absolute inset-0 image-cover"
        />
        <div className="absolute inset-0 bg-deep/75" />
        <div className="section-shell relative flex min-h-[380px] items-center justify-center text-center">
          <h2 className="max-w-4xl text-4xl font-extrabold text-primary-foreground md:text-6xl">
            Maximizing Agriculture Through Irrigation
          </h2>
        </div>
      </section>
      <section className="section-shell py-20">
        <SectionTitle
          eyebrow="Proposed values"
          title="The principles shaping our work"
          text="These values are presented as organizational design content for review and confirmation."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(([Icon, title]) => (
            <div
              className="flex items-center gap-4 rounded-xl border border-border bg-surface p-5"
              key={title}
            >
              <Icon className="text-primary" />
              <h3 className="font-bold">{title}</h3>
            </div>
          ))}
        </div>
      </section>
      <PartnerGrid />
      <CTA title="Work With Irrigation Feeds" />
    </>
  );
}

export function WhyPage() {
  return (
    <>
      <PageHero
        title="Why Irrigation Matters"
        subtitle="Building resilience in agriculture through reliable access to water."
        image={solar}
      />
      <section className="section-shell py-20">
        <SectionTitle
          eyebrow="The challenge"
          title="When rainfall becomes less reliable, farming becomes more vulnerable"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {(
            [
              [CloudSun, "Unpredictable Weather"],
              [Sun, "Prolonged Dry Spells & Drought"],
              [Wheat, "Low Productivity"],
              [LineChart, "Unstable Farm Incomes"],
            ] as [LucideIcon, string][]
          ).map(([Icon, t]) => (
            <div key={t as string} className="rounded-xl border border-border bg-surface p-6">
              <Icon className="text-earth" />
              <h3 className="mt-5 text-xl font-bold">{t as string}</h3>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="section-shell">
          <SectionTitle
            eyebrow="The opportunity"
            title="Irrigation Creates Opportunity"
            text="Reliable water can help farmers plan beyond the rainy season and build more stable livelihoods."
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl bg-primary-foreground/20 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Year-round farming",
              "Increased and stable crop yields",
              "Improved food security and nutrition",
              "Greater resilience to climate variability",
            ].map((x) => (
              <div key={x} className="bg-primary p-6">
                <ShieldCheck className="text-gold" />
                <h3 className="mt-4 text-xl font-bold">{x}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-shell py-20">
        <SectionTitle eyebrow="Appropriate technology" title="Irrigation Technologies" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            [
              hero,
              "Drip irrigation",
              "Delivers water closer to plant roots and supports thoughtful water management.",
            ],
            [
              solar,
              "Solar-powered pumps",
              "Offers a practical renewable-energy pathway for moving water to productive fields.",
            ],
            [
              collaboration,
              "Efficient water management",
              "Combines technology, planning and farmer knowledge for responsible use.",
            ],
          ].map(([img, t, d]) => (
            <article className="overflow-hidden rounded-xl bg-surface shadow-md" key={t}>
              <img src={img} loading="lazy" alt={t} className="aspect-[4/3] w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Editorial
        image={training}
        eyebrow="Farmer-centered approach"
        title="Infrastructure works best when knowledge grows with it"
        text="Our focus extends beyond equipment. Irrigation Feeds brings together education, advocacy, adoption support and long-term learning so farmers can choose, use and sustain the right solutions."
      />
      <CTA
        title="Help Build More Resilient Farming Communities"
        primary="Explore Our Work"
        to="/what-we-do"
      />
    </>
  );
}

export function WorkPage() {
  return (
    <>
      <PageHero
        title="What We Do"
        subtitle="Practical action, knowledge and partnerships for climate-resilient agriculture."
        image={training}
      />
      <div className="section-shell py-20">
        <div className="space-y-20">
          {work.map((item, i) => (
            <Editorial
              key={item.title}
              image={[training, solar, collaboration, hero][i] ?? training}
              eyebrow={`0${i + 1} · Program area`}
              title={item.title}
              text={
                [
                  "Training on irrigation techniques, water management and climate-smart agriculture through community trainings, demonstrations and farmer field days.",
                  "Connecting farmers to affordable and appropriate technologies such as drip systems and solar-powered pumps through partnerships and group-purchasing models.",
                  "Collaboration with government institutions, NGOs, development partners and private companies to promote irrigation as a strategy for agricultural transformation.",
                  "Tracking results, learning from experiences and continuously improving programs to support lasting impact.",
                ][i] ?? "Program details will be published after verification."
              }
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </div>
      <CTA title="Together, We Can Maximize Agriculture Through Irrigation." />
    </>
  );
}

export function ImpactPage() {
  return (
    <>
      <PageHero
        title="Our Impact"
        subtitle="Supporting farmers and communities toward more productive and climate-resilient agriculture."
        image={hero}
      />
      <ImpactBand />
      <Projects detailed />
      <section className="bg-water-soft">
        <div className="section-shell grid gap-10 py-20 md:grid-cols-2 md:items-center">
          <img
            src={training}
            loading="lazy"
            alt="Farmers sharing knowledge during a field session"
            className="aspect-[4/3] rounded-xl object-cover"
          />
          <div>
            <PlaceholderTag />
            <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">
              A farmer’s experience belongs at the center of the story
            </h2>
            <blockquote className="mt-5 border-l-4 border-water pl-5 text-lg italic text-muted-foreground">
              “Future real farmer testimonial will be added here with informed consent.”
            </blockquote>
            <p className="mt-3 text-xs font-bold uppercase text-water">Testimonial placeholder</p>
          </div>
        </div>
      </section>
      <section className="section-shell py-20">
        <SectionTitle
          eyebrow="Partnership impact"
          title="Transformation takes a connected ecosystem"
          text="Farmers lead the change. Government, nonprofits, development partners and responsible private companies help knowledge, policy and technology move further."
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {stakeholders.slice(0, 6).map((x) => (
            <span
              key={x}
              className="rounded-full border border-primary/25 bg-surface px-5 py-3 text-sm font-bold text-primary"
            >
              {x}
            </span>
          ))}
        </div>
      </section>
      <CTA title="Partner With Irrigation Feeds" primary="Start a Conversation" to="/contact" />
    </>
  );
}

export function PartnersPage() {
  return (
    <>
      <PageHero
        title="Who We Work With"
        subtitle="Partnerships that connect farmer priorities with knowledge, policy and appropriate technology."
        image={collaboration}
      />
      <PartnerGrid />
      <section className="bg-water-soft">
        <div className="section-shell py-20">
          <SectionTitle
            eyebrow="How collaboration works"
            title="From shared priorities to practical action"
            center
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {(
              [
                [Users, "Listen", "Begin with farmer and community priorities."],
                [Handshake, "Co-design", "Shape useful programs with the right partners."],
                [Sprout, "Learn & grow", "Review outcomes and strengthen what works."],
              ] as IconTextText[]
            ).map(([Icon, t, d]) => (
              <div className="rounded-xl bg-surface p-7 text-center" key={t as string}>
                <Icon className="mx-auto text-primary" />
                <h3 className="mt-4 text-xl font-bold">{t as string}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Bring Your Expertise to the Table" primary="Partner With Us" to="/get-involved" />
    </>
  );
}

function Editorial({
  image,
  eyebrow,
  title,
  text,
  reverse = false,
}: {
  image: string;
  eyebrow: string;
  title: string;
  text: string;
  reverse?: boolean;
}) {
  return (
    <section
      className={`grid gap-9 md:grid-cols-2 md:items-center ${reverse ? "md:[&>div]:order-first md:[&>img]:order-last" : ""}`}
    >
      <img
        src={image}
        loading="lazy"
        alt={title}
        className="aspect-[4/3] rounded-xl object-cover"
      />
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="text-3xl font-extrabold md:text-4xl">{title}</h2>
        <p className="mt-5 leading-7 text-muted-foreground">{text}</p>
        <Button asChild variant="outline" className="mt-6">
          <Link to="/contact">
            Learn More <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
function VisionMission() {
  return (
    <section className="bg-muted">
      <div className="section-shell grid gap-5 py-20 md:grid-cols-2">
        <div className="rounded-xl bg-primary p-8 text-primary-foreground">
          <Eyebrow>Vision</Eyebrow>
          <p className="text-xl font-bold leading-8">
            To build climate-resilient farming communities in Ghana where smallholder farmers
            achieve sustained productivity, stable incomes, and food security through effective
            irrigation adoption.
          </p>
        </div>
        <div className="rounded-xl bg-water p-8 text-primary-foreground">
          <Eyebrow>Mission</Eyebrow>
          <p className="text-xl font-bold leading-8">
            To educate, empower, and support smallholder farmers to adopt sustainable irrigation
            practices by providing practical knowledge, facilitating access to appropriate
            technologies, and strengthening partnerships that promote climate-resilient agriculture.
          </p>
        </div>
      </div>
    </section>
  );
}
function ImpactBand() {
  return (
    <section className="bg-deep">
      <div className="section-shell py-16">
        <SectionTitle
          eyebrow="Our impact"
          title="Change that farmers can feel"
          text="We focus on practical outcomes rather than unsupported numbers."
        />
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-5">
          {impacts.map((x, i) => (
            <div key={x} className="bg-deep p-5 text-primary-foreground">
              <span className="text-2xl font-extrabold text-gold">0{i + 1}</span>
              <h3 className="mt-3 font-bold">{x}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Projects({ detailed = false }: { detailed?: boolean }) {
  const p = [
    [solar, "Solar Irrigation Access", "Location to be confirmed"],
    [training, "Farmer Field Learning", "Location to be confirmed"],
    [collaboration, "Resilient Farm Partnerships", "Location to be confirmed"],
  ];
  return (
    <section className="section-shell py-20">
      <SectionTitle
        eyebrow="Featured initiatives"
        title={detailed ? "Project Stories" : "Projects in Focus"}
        text="The entries below demonstrate the intended storytelling format and await verified project information."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {p.map(([img, t, l]) => (
          <article key={t} className="overflow-hidden rounded-xl border border-border bg-surface">
            <img
              src={img}
              loading="lazy"
              alt="Sample agricultural project"
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="p-6">
              <PlaceholderTag />
              <p className="mt-4 text-xs font-bold uppercase text-water">{l}</p>
              <h3 className="mt-2 text-xl font-bold">{t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {detailed
                  ? "Challenge, approach, activities and outcomes will be documented here once verified project details are supplied."
                  : "A placeholder project summary showing how irrigation, training and collaboration can be presented."}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                View Project <ArrowRight className="size-4" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
function PartnerGrid() {
  return (
    <section className="bg-muted">
      <div className="section-shell py-20">
        <SectionTitle
          eyebrow="Who we work with"
          title="Progress grows through partnership"
          center
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stakeholders.map((x) => (
            <div
              key={x}
              className="flex min-h-28 items-center gap-4 rounded-xl border border-border bg-surface p-5"
            >
              <HeartHandshake className="shrink-0 text-primary" />
              <h3 className="font-bold">{x}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function NewsCards() {
  return (
    <section className="section-shell py-20">
      <div className="flex items-end justify-between gap-5">
        <SectionTitle eyebrow="Latest news" title="Field Notes & Updates" />
        <Button asChild variant="outline" className="hidden sm:inline-flex">
          <Link to="/news">All News</Link>
        </Button>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          [training, "Knowledge", "Farmer learning that travels beyond the field day"],
          [solar, "Technology", "Choosing appropriate irrigation technology"],
          [collaboration, "Partnerships", "Why agricultural transformation is a shared effort"],
        ].map(([img, c, t], i) => (
          <article key={t} className="overflow-hidden rounded-xl border border-border bg-surface">
            <img
              src={img}
              loading="lazy"
              alt="Sample news story"
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="p-6">
              <PlaceholderTag />
              <p className="mt-4 text-xs font-bold uppercase text-water">
                {c} · Date to be confirmed
              </p>
              <h3 className="mt-2 text-xl font-bold">{t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Sample editorial excerpt awaiting verified program reporting and publication
                details.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                Read Article <ArrowRight className="size-4" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export { NewsCards };
