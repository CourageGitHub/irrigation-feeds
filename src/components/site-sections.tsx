import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase text-primary before:h-px before:w-7 before:bg-gold">
      {children}
    </p>
  );
}
export function SectionTitle({
  eyebrow,
  title,
  text,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-4xl lg:text-[44px]">
        {title}
      </h2>
      {text && <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">{text}</p>}
    </div>
  );
}
export function PageHero({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative min-h-[420px] overflow-hidden bg-deep">
      <img
        src={image}
        alt="Irrigated agriculture in Ghana"
        className="absolute inset-0 image-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/80 to-transparent" />
      <div className="section-shell relative flex min-h-[420px] items-end pb-16 pt-28">
        <div className="max-w-3xl page-enter">
          <Eyebrow>Irrigation Feeds</Eyebrow>
          <h1 className="text-4xl font-extrabold leading-[1.08] text-primary-foreground md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/85 md:text-xl">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
export function CTA({
  title,
  text = "Support irrigation adoption and help build resilient farming communities.",
  primary = "Get Involved",
  to = "/get-involved",
}: {
  title: string;
  text?: string;
  primary?: string;
  to?: string;
}) {
  return (
    <section className="bg-primary">
      <div className="section-shell grid gap-7 py-12 md:grid-cols-[1fr_auto] md:items-center md:py-16">
        <div>
          <h2 className="text-3xl font-extrabold text-primary-foreground md:text-4xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-primary-foreground/80">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-gold text-deep hover:bg-gold/90">
            <Link to={to}>
              {primary}
              <ArrowRight />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
export function PlaceholderTag() {
  return (
    <span className="inline-flex rounded-full bg-accent px-2.5 py-1 text-[10px] font-extrabold uppercase text-accent-foreground">
      Sample content
    </span>
  );
}
