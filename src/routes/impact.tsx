import { createFileRoute } from "@tanstack/react-router";
import { ImpactPage } from "../components/content-pages";
export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact | Irrigation Feeds" },
      {
        name: "description",
        content:
          "See the qualitative impact areas and project storytelling approach of Irrigation Feeds.",
      },
      { property: "og:title", content: "Our Impact | Irrigation Feeds" },
      {
        property: "og:description",
        content: "Supporting productive and climate-resilient agriculture.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ImpactPage,
});
