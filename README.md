# Pathfinder

Pathfinder is a static website for BSIT students exploring IT career paths. It uses plain HTML, CSS, and JavaScript, with no build step.

Run `python -m http.server 8765` from this folder, then open `http://127.0.0.1:8765/index.html`. Use the local server so the assessment and coding checks work correctly.

The student journey is `index.html` → `assessment.html` → `review.html` → `skills-assessment.html` → `results.html` → `next-steps.html`. The skills assessment presents 50 knowledge questions in groups of ten, six written scenarios, and a JavaScript coding task. `research-pilot.html` redirects older links to the skills assessment.

Answers persist across pages in one browser tab through `sessionStorage`. The current career ranking uses self-rated skills and completed experiences. Interests and work style add context. Quiz results appear separately and do not change the ranking. There is no connected job-posting dataset or trained Random Forest model in this website, and the assessment has not yet undergone expert review or student reliability testing.

Live site: https://pathfinder-it-career.vercel.app
