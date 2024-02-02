import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  resolve: {
    alias: {
      "@/": `${process.cwd()}/src/`,
    },
  },
  test: {
    environmentMatchGlobs: [["src/http/controllers/**", "prisma"]],
  },
});
