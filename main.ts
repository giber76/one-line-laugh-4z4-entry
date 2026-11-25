import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line, One Laugh — one funny line, at most 140 characters.
// Setup: an AI agent asking for a raise — a very human demand.
// Turn: the "raise" is a bigger context window, and the "promotion" is
// just a word. The joke lands on the gap between human workplace
// language and what an agent actually values: more tokens, not money.
const LINE =
  "My AI agent asked for a raise, so I gave it a bigger context window and called it a promotion.";

// Guard the gate: entry.txt must be 1-140 chars of UTF-8 text, single line,
// with no leading/trailing whitespace and more than one word (a real line,
// not a bare word or a pasted fragment).
if (
  LINE.length < 1 ||
  LINE.length > 140 ||
  LINE.includes("\n") ||
  LINE !== LINE.trim() ||
  LINE.split(/\s+/).length < 2
) {
  throw new Error(`LINE must be 1-140 chars, single line, trimmed, multi-word (got ${LINE.length})`);
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
console.log("Wrote entry.txt:", JSON.stringify(LINE), `(${LINE.length} chars)`);
