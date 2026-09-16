import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "../components/content-pages";
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Irrigation Feeds" },
      {
        name: "description",
        content:
          "Meet the farmer-centered nonprofit building climate-resilient farming communities through irrigation in Ghana.",
      },
      { property: "og:title", content: "About Irrigation Feeds" },
      { property: "og:description", content: "Our vision, mission, approach and values." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});
