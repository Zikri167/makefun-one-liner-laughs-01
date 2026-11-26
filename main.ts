// One-Liner Laughs — v1
// A single original one-line joke, written to /output/entry.txt.
const fs = require("node:fs");
const path = require("node:path");

const JOKE =
  "My smart fridge judges my 2 a.m. snacks, so now I eat standing in the dark like a raccoon with Wi-Fi.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(path.join("/output", "entry.txt"), JOKE, "utf8");
