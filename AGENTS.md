# Pathfinder project instructions

## Project

Pathfinder is a five-page, static frontend for BSIT students exploring IT career paths. It uses plain HTML, CSS, and JavaScript; there is no build step or package manager. Read `README.md` for the current flow and implementation limits.

## Files and flow

- `index.html`: landing page structure and copy.
- `landing.css` and `landing.js`: landing page styles, navigation, reveal effects, and click-origin transition into the assessment.
- `assessment.html` → `review.html` → `results.html` → `next-steps.html`: student journey.
- `student.css`: shared styling for the four student pages.
- `student.js`: assessment questions, browser-tab state, local ranking, results, and next-step content.
- `architecture-framework*`: research architecture diagram artifacts; change these only for diagram-related work.

## Implementation guidance

- Keep navigation, terminology, colors, spacing, typography, and responsive behavior consistent across all five pages. Reuse the existing CSS variables and components before adding new styles.
- Keep the experience usable with a keyboard and screen reader. Use semantic elements, labels, visible focus states, and meaningful status or error messages. Support reduced-motion preferences for new animations.
- Preserve the landing page's assessment transition behavior unless a task specifically changes it. All links to `assessment.html` on the landing page use this transition.
- Assessment answers are stored under `pathfinder-student-profile-v1` in `sessionStorage`, so they persist across pages in one browser tab. Preserve compatible saved answers when changing the form or data shape, or provide a migration.
- The current ranking is calculated locally in `student.js` from self-rated skills and completed experiences. Interests and work style are context only. There is no connected job-posting dataset or trained Random Forest model yet. Do not describe the current ranking as a model prediction. If recommendation logic changes, update the UI explanation and `README.md` to match the actual implementation.
- Write user-facing copy as finished product UI; do not add a prominent “About this prototype” or demo disclaimer.
- Escape any user-controlled text before inserting it with `innerHTML`.

## Running and checking changes

- Serve the folder with a local static server, for example `python -m http.server 8765`, and open `http://127.0.0.1:8765/index.html`.
- After changing the student journey, click through all four stages, including Back/edit paths, incomplete-assessment handling, and restart. Check both desktop and mobile widths.
- After changing motion, check ordinary navigation and the reduced-motion setting. There is no automated test suite in this folder; report what you checked.
