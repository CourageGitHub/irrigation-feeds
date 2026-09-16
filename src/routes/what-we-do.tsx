import { createFileRoute } from "@tanstack/react-router";
import { WorkPage } from "../components/content-pages";
export const Route = createFileRoute("/what-we-do")({
  head: () => ({
    meta: [
      { title: "What We Do | Irrigation Feeds" },
      {
        name: "description",
        content:
          "Practical farmer education, technology access, partnerships and learning for resilient agriculture.",
      },
      { property: "og:title", content: "What We Do | Irrigation Feeds" },
      {
        property: "og:description",
        content: "Practical action, knowledge and partnerships for climate-resilient agriculture.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});
