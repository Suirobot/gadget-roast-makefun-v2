// One-Line Roast: The Gadget You Use Every Day — entrypoint.
// Writes one original line (at most 200 characters) roasting a gadget
// used every day, to /output/entry.txt for the house judge.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

// The brief wants one person's specific gripe with a concrete detail
// about how the thing actually behaves — not the stock battery or
// update complaints. The smartwatch is the target: it monitors its
// owner around the clock, then clocks out before he does.
const LEDGER = "My smartwatch counts my steps, scores my sleep and judges my heart rate, ";
const STING = "then dies at 6 p.m. sharp, like it works office hours and I don't.";
const LINE = LEDGER + STING;

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
