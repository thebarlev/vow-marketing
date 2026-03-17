import { extendTailwindMerge } from "tailwind-merge"

/**
 * Extended twMerge that recognizes our typography tokens (text-h2, text-h3).
 * Without this, tailwind-merge treats them as conflicting with text-left/text-center
 * and drops the font-size token.
 */
export const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": ["text-h2", "text-h3"],
    },
  },
})
