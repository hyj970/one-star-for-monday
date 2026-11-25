// One Star for Monday — a one-star review of Monday, written as if Monday
// were a restaurant. The program writes the entry text to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR), deterministically, with no network and no input
// beyond this file. Node 22+, standard library only.
//
// The entry (21 words, 132 characters):
// "Ordered the weekend special, got served Monday instead: cold coffee,
//  a waiter called Deadline, and the bill arrived before the food."

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY =
  'Ordered the weekend special, got served Monday instead: cold coffee, a waiter called Deadline, and the bill arrived before the food.';

// The entry is one fixed line; the helper keeps the write call free of the
// literal so the text lives in exactly one place.
function formatEntry(): string {
  return ENTRY;
}

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), formatEntry(), 'utf8');
