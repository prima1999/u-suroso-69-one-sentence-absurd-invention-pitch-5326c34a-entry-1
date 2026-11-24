import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
// A thirsty plant pot that sneaks to the tap for a drink and waddles home.
const first = "I made a plant pot that drags itself to the tap for a drink whenever ";
const second = "you forget to water it, then waddles back to the ";
const third = "windowsill before you notice it moved.";
const line = first + second + third;
// The grader sets MAKEFUN_OUTPUT_DIR; default to /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, { encoding: "utf8" });
