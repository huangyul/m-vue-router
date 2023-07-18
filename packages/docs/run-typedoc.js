const { createTypeDocApp } = require("./typedoc-markdown");
const path = require("path");

createTypeDocApp({
  name: "API documentation",
  tsconfig: path.resolve(__dirname, "./typedoc.tsconfig.json"),
  githubPages: false,
  plugin: ["typedoc-plugin-markdown"],
  disableSources: true,
  entryPoints: [path.resolve(__dirname, "../router/src/index.ts")],
}).build();
