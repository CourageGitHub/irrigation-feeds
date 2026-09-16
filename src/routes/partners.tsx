import { createFileRoute } from "@tanstack/react-router";
import { PartnersPage } from "../components/content-pages";
export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners | Irrigation Feeds" },
      {
        name: "description",
        content:
          "Explore how Irrigation Feeds collaborates with farmers, government, NGOs and responsible businesses.",
      },
      { property: "og:title", content: "Partners | Irrigation Feeds" },
      {
        property: "og:description",
        content: "Partnerships connecting farmer priorities with knowledge and technology.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PartnersPage,
});
