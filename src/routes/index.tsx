import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "../components/content-pages";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Irrigation Feeds | Agriculture Through Irrigation" },
      {
        name: "description",
        content:
          "Building climate-resilient farming communities through sustainable irrigation, practical knowledge and appropriate agricultural technology.",
      },
      { property: "og:title", content: "Irrigation Feeds | Agriculture Through Irrigation" },
      {
        property: "og:description",
        content: "Building climate-resilient farming communities through sustainable irrigation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
