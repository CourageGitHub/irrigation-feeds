import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowRight, Facebook, Linkedin, Instagram } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Brand } from "./brand";
import { Button } from "./ui/button";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Why Irrigation", "/why-irrigation"],
  ["What We Do", "/what-we-do"],
  ["Our Impact", "/impact"],
  ["Partners", "/partners"],
  ["Get Involved", "/get-involved"],
  ["News", "/news"],
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  if (path.startsWith("/admin")) return <>{children}</>;
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="section-shell grid h-[76px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:h-[84px] lg:grid-cols-[auto_minmax(0,1fr)_auto]">
          <Link to="/" aria-label="Irrigation Feeds home">
            <Brand />
          </Link>
          <nav
            className="hidden items-center justify-center gap-5 lg:flex"
            aria-label="Primary navigation"
          >
            {nav.map(([label, to]) => (
              <Link
                key={to}
                to={to}
                className="text-[13px] font-semibold text-muted-foreground transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {label}
              </Link>
            ))}
          </nav>
          <Button asChild className="hidden lg:inline-flex">
            <Link to="/contact">
              Contact Us <ArrowRight />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        {open && (
          <nav
            className="border-t border-border bg-background px-5 py-5 lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="grid gap-1">
              {nav.map(([label, to]) => (
                <Link
                  key={to}
                  to={to}
                  className="rounded-lg px-3 py-3 text-sm font-semibold hover:bg-muted"
                  activeProps={{ className: "bg-muted text-primary" }}
                >
                  {label}
                </Link>
              ))}
              <Button asChild className="mt-3">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="bg-deep text-primary-foreground">
        <div className="section-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="[&_strong]:text-primary-foreground [&_small]:text-secondary">
              <Brand />
            </div>
            <p className="mt-5 max-w-sm text-sm text-primary-foreground/75">
              A farmer-centered agricultural and climate resilience nonprofit advancing practical,
              sustainable irrigation.
            </p>
            <p className="mt-4 text-sm font-bold text-gold">
              “Maximizing Agriculture Through Irrigation”
            </p>
          </div>
          <FooterLinks
            title="Quick Links"
            links={[
              ["About", "/about"],
              ["Our Impact", "/impact"],
              ["News", "/news"],
              ["Contact", "/contact"],
            ]}
          />
          <FooterLinks
            title="What We Do"
            links={[
              ["Farmer Education", "/what-we-do"],
              ["Technology Access", "/what-we-do"],
              ["Advocacy", "/what-we-do"],
              ["Monitoring", "/what-we-do"],
            ]}
          />
          <div>
            <h3 className="font-bold">Get Involved</h3>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Support irrigation adoption, volunteer your expertise or explore a partnership.
            </p>
            <div className="mt-5 flex gap-2">
              {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media placeholder"
                  className="grid size-9 place-items-center rounded-full border border-primary-foreground/25 hover:border-gold"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/15">
          <div className="section-shell flex flex-col gap-2 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:justify-between">
            <span>© 2026 Irrigation Feeds. All rights reserved.</span>
            <span>Ghana · Contact details available on request</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: readonly (readonly [string, string])[];
}) {
  return (
    <div>
      <h3 className="font-bold">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link to={to} className="hover:text-gold">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
