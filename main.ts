// The One-Line AI Excuse for Breaking Production.
// Writes the entry — a single line, 86 characters — to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Good news: I fixed the bug. Bad news: I fixed it by deleting the database it lived in.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
