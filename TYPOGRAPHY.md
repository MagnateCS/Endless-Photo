# Typography reference

This is the shared typography contract for every page and component. The user-approved values below must stay consistent across the entire site.

Use the `type-*` classes in `assets/css/typography.css`. Mobile is below 768px; desktop is 768px and above. Sizes are fixed at each breakpoint, not fluid. Canela uses the loaded `Canela Text Trial` family; Neue Haas Grotesk uses `Neue Haas Grotesk Display Pro`.

| Usage | Class | Font | Desktop | Mobile | Weight | Line height | Letter spacing |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Hero Heading (H1) | `type-hero` | Canela | 72px | 42px | 400 | 1.1 | -0.03em |
| Page Heading (H1) | `type-page` | Canela | 60px | 38px | 400 | 1.15 | -0.03em |
| Section Heading (H2) | `type-section` | Canela | 48px | 32px | 400 | 1.2 | -0.03em |
| Subsection Heading (H3) | `type-subsection` | Canela | 36px | 26px | 400 | 1.25 | -0.02em |
| Card Heading (H4) | `type-card` | Canela | 28px | 23px | 400 | 1.3 | -0.02em |
| Experience Titles | `type-experience` | Canela | 32px | 26px | 400 | 1.2 | -0.015em |
| Large Introduction | `type-intro` | Neue Haas Grotesk | 22px | 19px | 400 | 1.5 | 0em |
| Body Text | `type-body` | Neue Haas Grotesk | 16px | 16px | 400 | 1.65 | 0em |
| Small Body Text | `type-small` | Neue Haas Grotesk | 14px | 14px | 400 | 1.5 | 0em |
| Navigation | `type-nav` | Neue Haas Grotesk | 14px | 15px | 500 | 1.4 | 0.04em |
| Buttons | `type-button` | Neue Haas Grotesk | 14px | 14px | 500 | 1.2 | 0.08em |
| Pricing (Primary) | `type-price` | Neue Haas Grotesk | 30px | 26px | 500 | 1.2 | -0.02em |
| Pricing Description | `type-price-description` | Neue Haas Grotesk | 14px | 14px | 400 | 1.5 | 0em |
| Form Labels | `type-label` | Neue Haas Grotesk | 14px | 14px | 500 | 1.4 | 0em |
| Eyebrow / Overline | `type-eyebrow` | Neue Haas Grotesk | 12px | 12px | 500 | 1.4 | 0.12em |
| Captions / Metadata | `type-caption` | Neue Haas Grotesk | 13px | 13px | 400 | 1.5 | 0em |
| Announcement Bar (Phase 2) | `type-announcement` | Neue Haas Grotesk | 12px | 12px | 700 | 1.4 | 0.12em |
| Footer Text | `type-footer` | Neue Haas Grotesk | 14px | 14px | 400 | 1.5 | 0em |

## Rules for future changes

- Use one semantic typography class per text element, selected by its purpose. Keep heading levels meaningful; an experience title may use `type-experience` on an H3.
- Do not add Tailwind size, font family, weight, line-height, or letter-spacing utilities alongside a typography class, including responsive overrides. Layout, color, alignment, and text-transform utilities are allowed.
- Make any approved scale change in the shared stylesheet and update this table together; never change a single page in isolation.
- Body text inherits the shared body defaults; use explicit classes for introductions, small copy, buttons, navigation, labels, captions, and footer text.
- Use `type-price` for actual primary rates and `type-price-description` for pricing explanations. Do not add prices solely to demonstrate the scale.
- Check the homepage, interior pages, package grid, contact forms, header, and footer at mobile and desktop widths after typography changes. Run the production build.

The Phase 2 announcement uses a dedicated bold (700) role as explicitly requested by the user. This exception does not change any other typography role.
