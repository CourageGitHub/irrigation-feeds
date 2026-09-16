import { createFileRoute } from "@tanstack/react-router";
import { WhyPage } from "../components/content-pages";
export const Route = createFileRoute("/why-irrigation")({
  head: () => ({
    meta: [
      { title: "Why Irrigation Matters | Irrigation Feeds" },
      {
        name: "description",
        content:
          "Learn how reliable access to water supports year-round farming, food security and climate resilience.",
      },
      { property: "og:title", content: "Why Irrigation Matters" },
      {
        property: "og:description",
        content: "Building resilience in agriculture through reliable access to water.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhyPage,
});
