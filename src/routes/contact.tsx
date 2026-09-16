import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, type LucideIcon } from "lucide-react";
import { PageHero } from "../components/site-sections";
import { images } from "../components/content-pages";
import { FormPanel } from "../components/forms";
export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Irrigation Feeds" },
      {
        name: "description",
        content:
          "Contact Irrigation Feeds about programs, partnerships, media or general inquiries.",
      },
      { property: "og:title", content: "Contact Irrigation Feeds" },
      {
        property: "og:description",
        content: "Start a conversation about irrigation and resilient agriculture.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});
function Contact() {
  return (
    <>
      <PageHero
        title="Let’s Start a Conversation"
        subtitle="Connect with us about farmers, programs, partnership opportunities or shared learning."
        image={images.hero}
      />
      <section className="section-shell grid gap-12 py-20 lg:grid-cols-[.75fr_1.25fr]">
        <div>
          <h2 className="text-3xl font-extrabold">Contact Irrigation Feeds</h2>
          <p className="mt-4 text-muted-foreground">
            We welcome inquiries from farmers, communities, public institutions, nonprofits,
            development partners and responsible agricultural businesses.
          </p>
          <div className="mt-8 space-y-4">
            {(
              [
                [MapPin, "Location", "Ghana — detailed office address to be confirmed"],
                [Mail, "Email", "Official email address to be confirmed"],
                [MessageCircle, "Response", "Use the inquiry form and the team will follow up"],
              ] as [LucideIcon, string, string][]
            ).map(([Icon, t, d]) => (
              <div className="flex gap-4" key={t as string}>
                <Icon className="mt-1 shrink-0 text-primary" />
                <div>
                  <h3 className="font-bold">{t as string}</h3>
                  <p className="text-sm text-muted-foreground">{d as string}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <FormPanel type="contact" />
      </section>
    </>
  );
}
