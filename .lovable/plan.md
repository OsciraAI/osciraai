

## Task 1: Add 3 New Service Cards

**Current state:** The Services component has 9 cards in a 3-column grid (`lg:grid-cols-3`). Each card uses `Card`/`CardHeader`/`CardTitle`/`CardDescription` from the UI library with a simple structure: icon, title, one-line description.

**Challenge:** The 3 new cards have significantly more content (tagline, long description, bullet points, CTA button) compared to the existing cards which only have a title and one-line description. To keep the existing design system intact, the new cards will be added to the same `services` array but with extended data fields. Cards without the extra fields will render as before; cards with them will show the additional content below.

**Changes to `src/components/Services.tsx`:**

1. Import `BarChart2`, `Globe`, `Bot` from `lucide-react` and `Button` from the UI library
2. Extend the services data type to include optional fields: `tagline`, `fullDescription`, `bullets`, and `cta`
3. Append 3 new entries to the `services` array (MarTech, Website Design, AI UA Manager)
4. Update the card rendering to conditionally show tagline, full description, bullets, and CTA when present -- using `CardContent` for the extra body content
5. After adding 3 cards, total = 12, which fills a 3-column grid perfectly (4 rows) -- no balancing needed

---

## Task 2: Add LinkedIn to Footer and Contact Section

**Changes to `src/components/Footer.tsx`:**

1. Import `Linkedin` icon from `lucide-react`
2. Add a social icons row below the existing "Get in Touch" contact links (or below the copyright line) containing a LinkedIn icon linking to `https://www.linkedin.com/company/osciraai/`
3. Icon will use `w-5 h-5`, `text-muted-foreground`, with hover transition to `text-[#0A66C2]` (LinkedIn blue)
4. Include `target="_blank"`, `rel="noopener noreferrer"`, and `aria-label="OsciraAI on LinkedIn"`

**Changes to `src/components/ContactForm.tsx`:**

1. Import `Linkedin` icon from `lucide-react`
2. Add a "Connect with us on LinkedIn" link in the existing contact links row (alongside email and phone), styled identically to the existing links

---

## Technical Details

**Files modified:**
- `src/components/Services.tsx` -- extend data array, update render logic
- `src/components/Footer.tsx` -- add LinkedIn icon to contact column
- `src/components/ContactForm.tsx` -- add LinkedIn link to contact links row

**No new files, no new dependencies, no changes to any other components.**

