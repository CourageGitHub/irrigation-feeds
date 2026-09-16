import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { HandHeart, Users, Handshake, type LucideIcon } from "lucide-react";
import { PageHero, SectionTitle } from "../components/site-sections";
import { images } from "../components/content-pages";
import { FormPanel } from "../components/forms";
export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved | Irrigation Feeds" },
      {
        name: "description",
        content: "Support irrigation adoption, volunteer or partner with Irrigation Feeds.",
      },
      { property: "og:title", content: "Get Involved | Irrigation Feeds" },
      {
        property: "og:description",
        content: "Join the movement for resilient farming communities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GetInvolved,
});
function GetInvolved() {
  const [tab, setTab] = useState<"volunteer" | "partner">("volunteer");
  return (
    <>
      <PageHero
        title="Get Involved"
        subtitle="Bring your time, expertise or partnership to the irrigation movement."
        image={images.collaboration}
      />
      <section className="section-shell py-20">
        <SectionTitle eyebrow="Ways to participate" title="Choose how you want to help" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {(
            [
              [
                HandHeart,
                "Support Irrigation Adoption",
                "Contribute expertise, resources or visibility to help appropriate irrigation reach farming communities.",
              ],
              [
                Users,
                "Volunteer",
                "Share relevant skills through field activities, communications, learning or organizational support.",
              ],
              [
                Handshake,
                "Partner With Us",
                "Collaborate on programs, technology access, policy engagement or farmer-centered research.",
              ],
            ] as [LucideIcon, string, string][]
          ).map(([Icon, t, d]) => (
            <div className="rounded-xl border border-border bg-surface p-7" key={t as string}>
              <Icon className="text-primary" />
              <h2 className="mt-5 text-xl font-bold">{t as string}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{d as string}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-muted">
        <div className="section-shell py-20">
          <div className="mb-8 flex gap-2">
            <button
              onClick={() => setTab("volunteer")}
              className={`rounded-lg px-5 py-3 text-sm font-bold ${tab === "volunteer" ? "bg-primary text-primary-foreground" : "bg-surface text-foreground"}`}
            >
              Volunteer
            </button>
            <button
              onClick={() => setTab("partner")}
              className={`rounded-lg px-5 py-3 text-sm font-bold ${tab === "partner" ? "bg-primary text-primary-foreground" : "bg-surface text-foreground"}`}
            >
              Partner With Us
            </button>
          </div>
          <FormPanel type={tab} />
        </div>
      </section>
    </>
  );
}
