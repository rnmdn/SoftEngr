(() => {
const menu = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
const journeySteps = [...document.querySelector('.flow-nav').children];
const currentJourneyStep = journeySteps.findIndex(step => step.classList.contains('active'));
journeySteps.forEach((step, index) => {
  step.classList.toggle('completed', index < currentJourneyStep);
  step.setAttribute('aria-label', `Step ${index + 1} of ${journeySteps.length}: ${step.textContent.trim()}${index < currentJourneyStep ? ', completed' : index === currentJourneyStep ? ', current' : ''}`);
});
if (matchMedia('(max-width:650px)').matches) document.querySelector('.flow-nav .active')?.scrollIntoView({ block: 'nearest', inline: 'center' });
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  links.classList.toggle('open', open);
});

const form = document.getElementById('pilot-form');
const [quizSection, tasksSection, codingSection] = form.querySelectorAll(':scope > section');
const quiz = document.getElementById('quiz');
const skillHeadings = [...quiz.querySelectorAll('.skill-group-heading')];
const questions = [...quiz.querySelectorAll('fieldset')];
const scenarios = [...document.querySelectorAll('#tasks > section')];
const pager = document.getElementById('assessment-pager');
const back = document.getElementById('stage-back');
const next = document.getElementById('stage-next');
const stageLabel = document.getElementById('stage-label');
const stageFill = document.getElementById('stage-fill');
const pageHeading = document.getElementById('page-heading');
const feedbackPanel = document.getElementById('practice-feedback');
const reviewParts = [...form.children].filter(element => ![quizSection, tasksSection, codingSection, pager, feedbackPanel].includes(element));
const questionsPerStage = 10;
const stages = [
  ...[0, 1, 2, 3, 4].map(index => ({ kind: 'quiz', title: `${skillHeadings[index * 2].textContent} and ${skillHeadings[index * 2 + 1].textContent}`, index })),
  ...[0, 1, 2].map(index => ({ kind: 'scenarios', title: ['Practical scenarios: development and networking', 'Practical scenarios: security and data', 'Practical scenarios: databases and interface design'][index], index })),
  { kind: 'coding', title: 'JavaScript coding task' },
  { kind: 'review', title: 'Review your work' }
];
const stageKey = 'pathfinder-skills-stage-v2';
const storedStage = Number(sessionStorage.getItem(stageKey));
let currentStage = Number.isInteger(storedStage) && storedStage >= 0 && storedStage < stages.length ? storedStage : 0;

function showStage(index, moveFocus = false) {
  currentStage = index;
  sessionStorage.setItem(stageKey, String(index));
  const stage = stages[index];
  quizSection.hidden = stage.kind !== 'quiz';
  tasksSection.hidden = stage.kind !== 'scenarios';
  codingSection.hidden = stage.kind !== 'coding';
  reviewParts.forEach(part => { part.hidden = stage.kind !== 'review'; });
  feedbackPanel.hidden = stage.kind !== 'review' || feedbackPanel.dataset.opened !== 'true';
  skillHeadings.forEach((heading, skillIndex) => { heading.hidden = stage.kind !== 'quiz' || Math.floor(skillIndex / 2) !== stage.index; });
  questions.forEach((question, questionIndex) => { question.hidden = stage.kind !== 'quiz' || Math.floor(questionIndex / questionsPerStage) !== stage.index; });
  scenarios.forEach((scenario, scenarioIndex) => { scenario.hidden = stage.kind !== 'scenarios' || Math.floor(scenarioIndex / 2) !== stage.index; });
  if (stage.kind === 'quiz') updateQuizProgress();
  stageLabel.textContent = stage.title;
  stageFill.style.transform = `scaleX(${(index + 1) / stages.length})`;
  back.hidden = index === 0;
  next.hidden = index === stages.length - 1;
  next.textContent = index === stages.length - 2 ? 'Review your work →' : 'Continue →';
  if (stage.kind === 'review') form.append(pager);
  else (stage.kind === 'quiz' ? quizSection : stage.kind === 'scenarios' ? tasksSection : codingSection).after(pager);
  if (moveFocus) {
    pageHeading.scrollIntoView({ block: 'start', behavior: 'auto' });
    pageHeading.focus({ preventScroll: true });
  }
}

function updateQuizProgress() {
  const start = currentStage * questionsPerStage;
  const answered = questions.slice(start, start + questionsPerStage).filter(question => question.querySelector('input:checked')).length;
  document.getElementById('quiz-progress').textContent = `${answered} of ${questionsPerStage} questions answered on this screen`;
}

pageHeading.tabIndex = -1;
quiz.addEventListener('change', updateQuizProgress);
back.addEventListener('click', () => showStage(currentStage - 1, true));
next.addEventListener('click', () => showStage(currentStage + 1, true));
showStage(currentStage);
})();
