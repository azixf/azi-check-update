import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  clean: true,
  splitting: false,
  sourcemap: true,
  dts: true,
  format: ["esm"],
});
