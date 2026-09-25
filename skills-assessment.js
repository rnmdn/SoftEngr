// Generated from the versioned question banks and research-pilot.js.
// Draft, low-stakes pilot items. Keys are zero-based and visible in this static module.
// Do not use these items for secure testing or validated skill scores.
const quizVersion = 'skill_quiz_pilot_v0_1';
const items = [
  ['Q01','programming','F','What does a variable store in a program?',['A value that can be used later','A network address','A database table','A screen layout'],0],
  ['Q02','programming','F','Which structure repeats an action while a condition remains true?',['A loop','A comment','A constant','A file'],0],
  ['Q03','programming','A','A function returns x + 2. What does it return when x is 3?',['3','5','6','32'],1],
  ['Q04','programming','A','A test expects 4 but receives 5. What does this result establish?',['The tested behavior differs from the expectation','All code is incorrect','The test cannot be rerun','The program has a security flaw'],0],
  ['Q05','programming','D','A list has three entries at indexes 0, 1, and 2. Code tries to read index 3. What is the most direct fix?',['Read index 2 when the last entry is needed','Add a comment','Rename the list','Repeat the same read'],0],

  ['Q06','networks','F','What identifies a device interface on an IP network?',['An IP address','A file extension','A table name','A browser tab'],0],
  ['Q07','networks','F','What is DNS mainly used for?',['Resolving names to network addresses','Encrypting a disk','Joining database tables','Compiling code'],0],
  ['Q08','networks','A','Two devices use 192.168.1.10/24 and 192.168.1.20/24 on the same LAN. What can they normally do without a router?',['Communicate on that LAN','Reach every internet site','Use different subnet masks automatically','Ignore link connectivity'],0],
  ['Q09','networks','A','A device can ping its router but cannot resolve example.com. Which service should be checked first?',['DNS','Printer spooler','Database backup','Source control'],0],
  ['Q10','networks','D','One laptop loses Wi-Fi while nearby laptops remain connected. What is the best first check?',['Check that laptop’s Wi-Fi state and local connection','Replace the building router immediately','Reconfigure every switch','Disable the firewall for all users'],0],

  ['Q11','security','F','Authentication answers which question?',['Who is requesting access?','What files are backed up?','How fast is the network?','Which chart is best?'],0],
  ['Q12','security','F','What does least privilege mean?',['Give only access needed for a task','Give all users administrator access','Share one account across a team','Remove all logs'],0],
  ['Q13','security','A','An account has many failed logins followed by one successful login from a new location. What is a reasonable first interpretation?',['The event needs investigation','The account is certainly compromised','The event is certainly harmless','Logs should be deleted'],0],
  ['Q14','security','A','A colleague asks for your password to complete their task. What should you do?',['Decline and use an approved access request','Send the password privately','Post it in the team chat','Disable account monitoring'],0],
  ['Q15','security','D','A suspicious endpoint alert appears. Which response best preserves evidence while following procedure?',['Record details and escalate under the incident playbook','Delete the alert and wait','Publicly post the logs','Immediately wipe the device without authorization'],0],

  ['Q16','data_analysis','F','What is a missing value in a dataset?',['A field without an observed value','A guaranteed zero','A duplicate column','A chart title'],0],
  ['Q17','data_analysis','F','For values 2, 4, and 6, what is the mean?',['3','4','5','6'],1],
  ['Q18','data_analysis','A','Monthly users rise from 100 to 120. What is the percentage increase relative to 100?',['10%','20%','25%','120%'],1],
  ['Q19','data_analysis','A','A chart shows sales rose in June. Can it alone prove a new website caused the rise?',['No, other factors could explain it','Yes, timing proves cause','Yes, all charts prove cause','No, charts cannot show change'],0],
  ['Q20','data_analysis','D','A dataset contains duplicate orders. What should happen before counting unique orders?',['Identify duplicates using a reliable order ID','Add all rows without checking','Delete every repeated customer','Use only the first ten rows'],0],

  ['Q21','databases','F','What is a primary key used for?',['Uniquely identifying a table row','Encrypting every column','Drawing a chart','Starting a server'],0],
  ['Q22','databases','F','What does a foreign key usually represent?',['A reference to a row in another table','A network gateway','A backup file','A user password'],0],
  ['Q23','databases','A',"A query uses WHERE status = 'active'. Which rows should it return?",['Only rows whose status is active','Every row in the table','Only rows with missing status','Only duplicate rows'],0],
  ['Q24','databases','A','Each student can enroll in many courses, and each course has many students. What table is usually needed?',['An enrollment table linking student and course IDs','A single course-name field in student','A password table','No relationship table'],0],
  ['Q25','databases','D','A report counts the same order twice after joining orders to order_items. What is the likely reason?',['One order has multiple matching item rows','The database has no tables','The query ran too slowly','The order ID is encrypted'],0],

  ['Q26','interface_design','F','Why should a form field have a visible label?',['People can understand what to enter','It automatically stores answers','It makes the database faster','It replaces error messages'],0],
  ['Q27','interface_design','F','What is a usability test mainly used to observe?',['How people complete tasks with an interface','Server CPU temperature','Network packet loss','Code compilation speed'],0],
  ['Q28','interface_design','A','Two users cannot find the Submit button because it appears only after horizontal scrolling. Which change directly addresses the evidence?',['Keep the action visible within the layout','Increase database storage','Rename the API endpoint','Add more decorative images'],0],
  ['Q29','interface_design','A','A form shows “Error” after submission. Which message is more useful?',['“Enter a valid email address in Email.”','“Error.”','“Something happened.”','No message'],0],
  ['Q30','interface_design','D','A redesign looks cleaner, but users now take longer to finish a task. What should the team do next?',['Observe where users slow down and test a revision','Keep it because it looks cleaner','Hide completion time','Remove all labels'],0],

  ['Q31','problem_solving','F','What is a hypothesis in troubleshooting?',['A testable possible explanation','A guaranteed answer','A final report','A random change'],0],
  ['Q32','problem_solving','F','Why reproduce a reported problem?',['To observe conditions and check a proposed cause','To prove the user is wrong','To avoid recording evidence','To replace all system parts'],0],
  ['Q33','problem_solving','A','An app fails only after a new configuration is enabled. Which clue is most relevant?',['The configuration change and failure timing','The app logo color','The developer’s favorite tool','A different app’s version'],0],
  ['Q34','problem_solving','A','Two possible causes are a bad network route and a stopped app service. Which check best separates them?',['Test route reachability and service status separately','Restart everything at once','Change both settings together','Ask another user to guess'],0],
  ['Q35','problem_solving','D','A proposed fix does not change the symptom. What is the best next step?',['Revisit the hypothesis and collect new evidence','Declare success','Apply the same fix repeatedly','Delete the incident notes'],0],

  ['Q36','systems','F','What is an operating system service?',['A background process that provides a function','A printed report','A network cable','A spreadsheet cell'],0],
  ['Q37','systems','F','What do file permissions control?',['Who may read, change, or execute a file','How many files exist','The screen resolution','The network provider'],0],
  ['Q38','systems','A','A server shows disk use at 99%. Which symptom is plausible?',['New writes may fail','All network routes change','Every password expires','The CPU becomes a database'],0],
  ['Q39','systems','A','Before changing a production service setting, what is a safe preparation step?',['Record the current setting and rollback plan','Delete the logs','Share administrator credentials','Disable backups'],0],
  ['Q40','systems','D','A web service stops after a restart; the host responds to ping. What should be checked next?',['Service status and logs','Monitor brightness','Database table colors','Printer paper'],0],

  ['Q41','software_design','F','What does separation of concerns aim to do?',['Keep different responsibilities in appropriate components','Put all logic in one function','Avoid tests','Make every file identical'],0],
  ['Q42','software_design','F','What is an interface between components?',['An agreed way they exchange data or behavior','Only a visual screen','A backup schedule','A network address'],0],
  ['Q43','software_design','A','A checkout page formats prices and also calculates tax rules. Where should reusable tax calculation usually live?',['In a separate business-logic component','Only in the button color rule','In every page as copied code','In an image asset'],0],
  ['Q44','software_design','A','A form sends data to an API, which stores it in a database. Which sequence matches the data flow?',['Form, API, database','Database, form, API','API, database, form before input','Form, database, no API'],0],
  ['Q45','software_design','D','The same validation rule is copied across three pages and changes often. What is the most maintainable small change?',['Move the shared rule into one reusable function','Copy it to more pages','Delete validation','Change only one copy'],0],

  ['Q46','troubleshooting','F','Why record the exact error message?',['It provides a clue that can be checked','It guarantees the cause','It replaces a test','It increases bandwidth'],0],
  ['Q47','troubleshooting','F','What does a reproducible failure mean?',['The same steps can trigger it again','The problem is solved','Only one user can report it','Logs are unnecessary'],0],
  ['Q48','troubleshooting','A','A service error starts at 10:02, two minutes after a deployment. What should the investigator inspect first?',['Deployment changes and related logs','Yesterday’s weather','User profile photos','Unrelated printer settings'],0],
  ['Q49','troubleshooting','A','A site fails for one user but works for others. Which first test helps narrow scope?',['Try another browser or device for that user','Replace the database server','Delete every user account','Assume the site works for everyone'],0],
  ['Q50','troubleshooting','D','A fix appears to restore service. What best verifies resolution?',['Repeat the failing steps and monitor for recurrence','Close the incident without checking','Delete the original report','Change another setting'],0]
].map(([id, skill, level, stem, options, key], index) => {
  const offset = index % 4;
  return { id, skill, level, stem,
    options: [...options.slice(offset), ...options.slice(0, offset)],
    key: (key - offset + 4) % 4 };
});

// Draft prompts. Instructor-reviewed scoring anchors still required.
const practicalVersion = 'practical_pilot_v0_1';
const tasks = [
  { id: 'P1', title: 'Software development', prompt: 'A function meant to return the larger of two numbers returns the smaller one when a = 8 and b = 3. Its logic is: if (a > b) return b; otherwise return a. Describe the defect, a correction, and one test you would run.' },
  { id: 'P2', title: 'Networking', prompt: 'A laptop has IP 192.168.10.25/24 and gateway 192.168.10.1. It can ping 192.168.10.1 but cannot open example.com. A second laptop on the same Wi-Fi can open it. Give one likely cause, a check that could confirm it, and a correction if confirmed.' },
  { id: 'P3', title: 'Cybersecurity', prompt: 'A sample alert shows ten failed sign-ins for one account, then a successful sign-in from a new location. You do not know whether the user is traveling. Explain what you would check, what evidence you would preserve, and when you would escalate. Do not assume compromise is certain.' },
  { id: 'P4', title: 'Data analytics', prompt: 'A club reports 80 sign-ups in June and 100 in July, then says its new poster caused a 25% increase. Calculate the percentage change and explain one reason the cause claim needs more evidence.' },
  { id: 'P5', title: 'Database administration', prompt: 'A report joins Orders(order_id, customer_id) with OrderItems(item_id, order_id). Order 42 has three items and appears three times. Explain why, describe a safe way to count orders, and name one check before changing a production query.' },
  { id: 'P6', title: 'UI/UX and web development', prompt: 'Two students using a mobile application form missed the Submit button because it was off-screen to the right. Describe a layout change, one accessibility check, and a quick test with users to see whether the change helps.' }
];


const key = 'pathfinder-research-pilot-v0-1';
const codingVersion = 'javascript_larger_v0_1';
const starterCode = `function larger(a, b) {
  // Return the larger number.

}`;
let saved;
try { saved = JSON.parse(sessionStorage.getItem(key)); } catch { /* Fresh pilot. */ }
const state = saved && saved.quizVersion === quizVersion ? saved : {
  participantCode: crypto.randomUUID(), quizVersion, practicalVersion,
  startedAt: new Date().toISOString(), answers: {}, practical: {}, unclear: '', feedback: ''
};
state.coding ??= { version: codingVersion, code: starterCode, runs: 0 };
const quiz = document.getElementById('quiz');
const tasksRoot = document.getElementById('tasks');
const evidenceSummary = document.getElementById('evidence-summary');
const practiceFeedback = document.getElementById('practice-feedback');
const domainNames = {
  programming: 'Programming', networks: 'Networking', security: 'Cybersecurity',
  data_analysis: 'Data analysis', databases: 'Databases', interface_design: 'Interface design',
  problem_solving: 'Problem solving', systems: 'Systems', software_design: 'Software design',
  troubleshooting: 'Troubleshooting'
};
const save = () => sessionStorage.setItem(key, JSON.stringify(state));
function completion() {
  return {
    quizAnswered: items.filter(item => Number.isInteger(state.answers[item.id])).length,
    practicalCompleted: tasks.filter(task => (state.practical[task.id] ?? '').trim()).map(task => task.id),
    codingEdited: state.coding.code.trim() !== starterCode.trim(),
    codingRuns: state.coding.runs
  };
}
function updateEvidence() {
  const { quizAnswered, practicalCompleted, codingEdited, codingRuns } = completion();
  const entries = [
    `Knowledge questions: ${quizAnswered} of ${items.length} answered`,
    `Practical scenarios: ${practicalCompleted.length} of ${tasks.length} written${practicalCompleted.length ? ` (${practicalCompleted.join(', ')})` : ''}`,
    `Coding task: ${codingEdited ? 'code entered' : 'starter code only'}; ${codingRuns} ${codingRuns === 1 ? 'run' : 'runs'}${state.coding.lastRun ? `; latest run: ${state.coding.lastRun.status}` : ''}`,
    `Feedback: ${state.unclear.trim() || state.feedback.trim() ? 'added' : 'none added'}`
  ];
  evidenceSummary.replaceChildren(...entries.map(entry => {
    const li = document.createElement('li');
    li.textContent = entry;
    return li;
  }));
  if (!practiceFeedback.hidden) updatePracticeFeedback();
}
function updatePracticeFeedback() {
  const answered = items.filter(item => Number.isInteger(state.answers[item.id]));
  const correct = answered.filter(item => state.answers[item.id] === item.key).length;
  document.getElementById('feedback-overview').textContent =
    `${correct} correct out of ${answered.length} answered knowledge questions. ${items.length - answered.length} skipped. This count describes your answers to the current questions.`;
  const domainList = document.getElementById('domain-feedback');
  domainList.replaceChildren(...Object.entries(domainNames).map(([id, name]) => {
    const domainItems = items.filter(item => item.skill === id);
    const domainAnswered = domainItems.filter(item => Number.isInteger(state.answers[item.id]));
    const domainCorrect = domainAnswered.filter(item => state.answers[item.id] === item.key).length;
    const li = document.createElement('li');
    const heading = document.createElement('strong');
    heading.textContent = name;
    const count = document.createElement('span');
    count.textContent = `${domainCorrect} correct of ${domainAnswered.length} answered (${domainItems.length} questions)`;
    li.append(heading, count);
    return li;
  }));
  const written = completion().practicalCompleted;
  document.getElementById('written-feedback').textContent =
    `Written scenarios: ${written.length} of ${tasks.length} submitted. These need a human reviewer before they can receive a score.`;
  document.getElementById('coding-feedback').textContent =
    `Coding task: ${state.coding.lastRun?.status ?? 'no sample check result yet'}. Sample checks show whether this function produced the expected outputs.`;
}
const shuffle = (values, seed) => [...values].sort((a, b) => {
  const hash = value => [...`${seed}:${value}`].reduce((n, char) => (n * 31 + char.charCodeAt(0)) >>> 0, 0);
  return hash(a) - hash(b);
});

let currentSkill;
for (const item of items) {
  if (item.skill !== currentSkill) {
    currentSkill = item.skill;
    const heading = document.createElement('h3');
    heading.id = `skill-${currentSkill}`;
    heading.className = 'skill-group-heading';
    heading.textContent = domainNames[currentSkill];
    quiz.append(heading);
  }
  const fieldset = document.createElement('fieldset');
  const legend = document.createElement('legend');
  legend.textContent = `${item.id} · ${item.stem}`;
  fieldset.append(legend);
  const choices = document.createElement('div');
  choices.className = 'quiz-options';
  for (const optionIndex of shuffle([0, 1, 2, 3], `${state.participantCode}:${item.id}`)) {
    const label = document.createElement('label');
    label.className = 'option';
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = item.id;
    input.value = String(optionIndex);
    input.checked = state.answers[item.id] === optionIndex;
    input.addEventListener('change', () => { state.answers[item.id] = optionIndex; save(); updateProgress(); updateEvidence(); });
    const span = document.createElement('span');
    span.textContent = item.options[optionIndex];
    label.append(input, span);
    choices.append(label);
  }
  fieldset.append(choices);
  quiz.append(fieldset);
}

for (const task of tasks) {
  const section = document.createElement('section');
  const heading = document.createElement('h3');
  heading.textContent = `${task.id} · ${task.title}`;
  const prompt = document.createElement('p');
  prompt.textContent = task.prompt;
  const label = document.createElement('label');
  label.textContent = `Your response to ${task.id}`;
  label.htmlFor = task.id;
  const textarea = document.createElement('textarea');
  textarea.id = task.id;
  textarea.value = state.practical[task.id] ?? '';
  textarea.addEventListener('input', () => { state.practical[task.id] = textarea.value; save(); updateEvidence(); });
  section.append(heading, prompt, label, textarea);
  tasksRoot.append(section);
}

const editor = document.getElementById('code-editor');
const runButton = document.getElementById('run-code');
const resetButton = document.getElementById('reset-code');
const codeStatus = document.getElementById('code-status');
const codeOutput = document.getElementById('code-output');
editor.value = state.coding.code;
editor.addEventListener('input', () => { state.coding.code = editor.value; delete state.coding.lastRun; save(); updateEvidence(); });
resetButton.addEventListener('click', () => {
  editor.value = starterCode;
  state.coding.code = starterCode;
  delete state.coding.lastRun;
  save();
  updateEvidence();
  codeStatus.textContent = 'Starter code restored.';
  codeOutput.textContent = 'Run your code to see sample results.';
  editor.focus();
});
runButton.addEventListener('click', () => {
  const codeAtRun = editor.value;
  state.coding.code = codeAtRun;
  state.coding.runs += 1;
  save();
  updateEvidence();
  runButton.disabled = true;
  resetButton.disabled = true;
  editor.disabled = true;
  codeStatus.textContent = 'Running sample checks…';
  codeOutput.textContent = '';
  const token = crypto.randomUUID();
  const frame = document.createElement('iframe');
  frame.sandbox = 'allow-scripts';
  frame.src = 'research-code-runner.html';
  frame.hidden = true;
  frame.title = 'Isolated code runner';
  const finish = () => { clearTimeout(timeout); window.removeEventListener('message', receive); frame.remove(); runButton.disabled = false; resetButton.disabled = false; editor.disabled = false; };
  const timeout = setTimeout(() => {
    finish();
    codeStatus.textContent = 'Run stopped after 5 seconds. Check for a loop that does not end.';
    state.coding.lastRun = { status: 'timed out', at: new Date().toISOString() };
    save(); updateEvidence();
  }, 5000);
  const receive = ({ source, data }) => {
    if (source !== frame.contentWindow || data?.type !== 'result' || data.token !== token) return;
    finish();
    if (data.error) {
      codeStatus.textContent = 'Code could not run.';
      codeOutput.textContent = data.error;
      state.coding.lastRun = { status: 'error', at: new Date().toISOString() };
      save(); updateEvidence();
      return;
    }
    const passed = data.results.filter(result => result.passed).length;
    codeStatus.textContent = `${passed} of ${data.results.length} sample checks passed.`;
    state.coding.lastRun = { status: `${passed} of ${data.results.length} sample checks passed`, at: new Date().toISOString() };
    save(); updateEvidence();
    codeOutput.textContent = data.results.map(result =>
      `${result.passed ? 'PASS' : 'TRY AGAIN'}  larger(${result.input.join(', ')}) → ${result.error ?? result.actual}; expected ${result.expected}`
    ).join('\n');
  };
  window.addEventListener('message', receive);
  frame.addEventListener('load', () => frame.contentWindow.postMessage({ type: 'run', token, code: codeAtRun }, '*'));
  document.body.append(frame);
});

for (const id of ['unclear', 'feedback']) {
  const field = document.getElementById(id);
  field.value = state[id] ?? '';
  field.addEventListener('input', () => { state[id] = field.value; save(); updateEvidence(); });
}
function updateProgress() {
  document.getElementById('quiz-progress').textContent = `${Object.keys(state.answers).length} of ${items.length} questions answered`;
}
updateProgress();
updateEvidence();
save();
document.getElementById('view-feedback').addEventListener('click', () => {
  practiceFeedback.dataset.opened = 'true';
  practiceFeedback.hidden = false;
  updatePracticeFeedback();
  practiceFeedback.focus();
  practiceFeedback.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
});
document.getElementById('download').addEventListener('click', () => {
  const output = {
    ...state, completion: completion(), exportedAt: new Date().toISOString(),
    elapsedMinutes: Math.round((Date.now() - Date.parse(state.startedAt)) / 60000)
  };
  const url = URL.createObjectURL(new Blob([JSON.stringify(output, null, 2)], { type: 'application/json' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = `pathfinder-skills-${state.participantCode}.json`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
