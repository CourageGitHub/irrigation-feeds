import { createFileRoute } from "@tanstack/react-router";
import { NewsCards, images } from "../components/content-pages";
import { PageHero } from "../components/site-sections";
export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Field Notes | Irrigation Feeds" },
      {
        name: "description",
        content: "Sample editorial stories and future updates from Irrigation Feeds.",
      },
      { property: "og:title", content: "News & Field Notes | Irrigation Feeds" },
      {
        property: "og:description",
        content: "Stories about irrigation, farmer knowledge and agricultural resilience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHero
        title="News & Field Notes"
        subtitle="Stories, learning and updates from the movement for resilient agriculture."
        image={images.training}
      />
      <NewsCards />
    </>
  ),
});
