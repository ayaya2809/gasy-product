import type { OrvalConfig } from "orval";

const config: OrvalConfig = {
  users: {
    input: "./swagger.yaml",
    output: {
      mode: "tags-split",
      target: "./lib/generated/index.ts",
      schemas: "./lib/generated/schemas",
      client: "react-query",
      override: {
        mutator: {
          path: "./lib/fetcher.ts",
          name: "customFetcher",
        },
      },
    },
  },
};

export default config;
