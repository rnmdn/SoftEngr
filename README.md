# Pathfinder UI

Open this folder in VS Code and run it with a local static server (for example, the Live Server extension), then open `index.html`.

The student flow is:

1. `index.html` — landing page
2. `assessment.html` — four assessment sections
3. `review.html` — review and edit responses
4. `results.html` — top-three paths with the skill ratings behind each direction
5. `next-steps.html` — a practice task for the student's lowest-rated focus skill, plus more ideas

All pages are plain HTML, CSS, and JavaScript. The landing page uses `landing.css` and `landing.js`; the student pages share `student.css` and `student.js`. Responses are stored in the current browser tab with `sessionStorage` so they survive navigation between pages. Closing the tab clears them.

The current standalone frontend calculates a local ranking from skill ratings and completed experiences. It does **not** yet call a job-posting dataset or trained Random Forest model. Connect the recommendation service before presenting the ranking as a model prediction. Interests and work style appear as context and do not change the ranking.
