const paths=[
  {name:'Software development',description:'Build applications and services by designing, writing, testing, and improving code.',skills:['Programming','Problem solving','Software design'],resources:['Build a small application and document your decisions','Practice version control and code review','Study testing fundamentals']},
  {name:'Networking',description:'Connect and maintain systems, diagnose connectivity issues, and design reliable infrastructure.',skills:['Networks','Troubleshooting','Systems'],resources:['Set up a small virtual network lab','Practice routing and subnetting exercises','Document a troubleshooting walkthrough']},
  {name:'Cybersecurity',description:'Protect systems and information through risk assessment, monitoring, and secure practices.',skills:['Security','Networks','Problem solving'],resources:['Work through a legal beginner security lab','Study secure configuration basics','Create a simple threat model']},
  {name:'Data science & analytics',description:'Prepare, explore, and interpret data to answer questions and support decisions.',skills:['Data analysis','Programming','Problem solving'],resources:['Analyze an open dataset and explain your findings','Practice SQL queries and data cleaning','Build a small visual analysis']},
  {name:'Database administration',description:'Organize, protect, and maintain data systems so information stays usable and reliable.',skills:['Databases','Systems','Problem solving'],resources:['Design and query a relational database','Practice backup and recovery in a sandbox','Study data modeling fundamentals']},
  {name:'UI/UX & web development',description:'Shape usable digital experiences through research, interface design, and web implementation.',skills:['Interface design','Programming','Problem solving'],resources:['Redesign a student workflow with user feedback','Build an accessible responsive page','Practice usability testing with peers']}
];
const skillNames=['Programming','Networks','Security','Data analysis','Databases','Interface design','Problem solving','Systems','Software design','Troubleshooting'];
const interests=['Building useful applications','Solving network and system issues','Protecting digital systems','Finding patterns in data','Organizing reliable databases','Designing usable interfaces'];
const exposure=['Completed a programming project','Configured a network or server','Practiced security tasks in a lab','Analyzed a dataset','Designed or queried a database','Designed or built a web interface'];
const styles=[['When solving a new problem, I would rather…','Prototype and iterate','Investigate and diagnose'],['I prefer work that is…','Visual and user-facing','Technical and behind the scenes'],['In a project, I often enjoy…','Creating a new solution','Making an existing system dependable']];
const practiceByPath={
  'Software development':{
    'Programming':'Build a small feature in an application, add two tests, and record what you changed.',
    'Problem solving':'Find a bug in a small application, test two possible causes, and explain the fix.',
    'Software design':'Sketch a feature’s components and data flow, then implement one small part.'
  },
  'Networking':{
    'Networks':'Configure two connected subnets in a virtual lab and verify traffic between them.',
    'Troubleshooting':'Break a lab connection intentionally, trace the failure, and document the fix.',
    'Systems':'Set up a virtual server, document its network settings, and test recovery.'
  },
  'Cybersecurity':{
    'Security':'Complete a legal beginner security lab and write a mitigation for one finding.',
    'Networks':'Map traffic between two lab systems and explain one risk and a safe rule.',
    'Problem solving':'Threat-model a small student app and test one mitigation in a sandbox.'
  },
  'Data science & analytics':{
    'Data analysis':'Clean an open dataset, make one chart, and explain what it does not prove.',
    'Programming':'Use Python to clean a small CSV, write two checks, and explain one trend.',
    'Problem solving':'Frame one question for an open dataset, compare two explanations, and report the limits.'
  },
  'Database administration':{
    'Databases':'Design a three-table database, load sample data, and write two useful queries.',
    'Systems':'Back up and restore a sample database in a sandbox, then document the recovery.',
    'Problem solving':'Investigate a slow sample query, test an index, and explain the trade-off.'
  },
  'UI/UX & web development':{
    'Interface design':'Sketch two ways to complete a student task, test them with two peers, and revise the clearer one.',
    'Programming':'Build an accessible responsive form from one tested design and check keyboard use.',
    'Problem solving':'Observe two people using a page, identify a point of friction, and test one fix.'
  }
};
const storeKey='pathfinder-student-profile-v1';
const empty=()=>({skills:{},exposure:[],interest:{},style:{}});
function read(){try{const x=JSON.parse(sessionStorage.getItem(storeKey));if(!x||typeof x!=='object')return empty();return {
  skills:x.skills&&typeof x.skills==='object'&&!Array.isArray(x.skills)?x.skills:{},
  exposure:Array.isArray(x.exposure)?x.exposure.filter(i=>Number.isInteger(i)&&i>=0&&i<exposure.length):[],
  interest:x.interest&&typeof x.interest==='object'&&!Array.isArray(x.interest)?x.interest:{},
  style:x.style&&typeof x.style==='object'&&!Array.isArray(x.style)?x.style:{}
}}catch{return empty()}}
let answers=read();const save=()=>sessionStorage.setItem(storeKey,JSON.stringify(answers));
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const validRating=v=>Number.isInteger(v)&&v>=0&&v<=3;
const firstIncompleteStep=()=>!skillNames.every((_,i)=>validRating(answers.skills[i]))?0:!interests.every((_,i)=>validRating(answers.interest[i]))?2:!styles.every((_,i)=>Number.isInteger(answers.style[i])&&answers.style[i]>=0&&answers.style[i]<=1)?3:null;
const complete=()=>firstIncompleteStep()===null;
const scores=()=>paths.map((p,i)=>({...p,index:i,score:p.skills.reduce((n,s)=>n+(answers.skills[skillNames.indexOf(s)]||0),0)+(answers.exposure.includes(i)?2:0)})).sort((a,b)=>b.score-a.score||a.index-b.index);
const appPage=document.body.dataset.page;
const flowNav=document.querySelector('.flow-nav');
if(flowNav){const skillsStep=document.createElement('a');skillsStep.href='skills-assessment.html';skillsStep.textContent='Skills assessment';flowNav.children[1]?.after(skillsStep)}
if(flowNav){const steps=[...flowNav.children];const current=steps.findIndex(step=>step.classList.contains('active'));steps.forEach((step,index)=>{step.classList.toggle('completed',index<current);if(index===current)step.setAttribute('aria-current','step')})}
if(flowNav&&matchMedia('(max-width:650px)').matches)flowNav.querySelector('.active')?.scrollIntoView({block:'nearest',inline:'center'});
document.querySelector('.flow-nav .active')?.setAttribute('aria-current','step');
const navToggle=document.querySelector('.nav-toggle');
const navLinks=document.getElementById('nav-links');
const closeNav=()=>{navToggle?.setAttribute('aria-expanded','false');navLinks?.classList.remove('open')};
navToggle?.addEventListener('click',e=>{const open=e.currentTarget.getAttribute('aria-expanded')==='true';e.currentTarget.setAttribute('aria-expanded',String(!open));navLinks.classList.toggle('open',!open)});
navLinks?.addEventListener('click',e=>{if(e.target.closest('a'))closeNav()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeNav()});
function choose(name,labels,selected){return `<div class="choices ${labels.length===2?'two':''}">${labels.map((label,i)=>`<label class="choice"><input type="radio" name="${name}" value="${i}" ${selected===i?'checked':''}><span>${esc(label)}</span></label>`).join('')}</div>`}
function needsProfile(target){if(!complete()){const step=firstIncompleteStep();target.innerHTML=`<div class="notice"><p>Finish your assessment to view this page. Your answers are saved in this browser tab.</p></div><a class="button button-dark" href="assessment.html?step=${step}">Continue assessment →</a>`;return true}return false}
if(appPage==='assessment'){
  const sections=[
    {title:'Skills today',lead:'Choose your current ability in each area. Answer based on what you can do today.'},
    {title:'Prior exposure',lead:'Select experiences you have actually completed. Leave anything you have not tried unchecked.'},
    {title:'Your interests',lead:'Rate what appeals to you. These answers add context to your results but do not change the ranking.'},
    {title:'Work style',lead:'Choose what feels more natural. These answers add context to your results but do not change the ranking.'}
  ];
  let step=Math.max(0,Math.min(3,Number(new URLSearchParams(location.search).get('step'))||0));
  const root=document.getElementById('assessment-content');
  function render(focusHeading=false){document.getElementById('step-lead').textContent=sections[step].lead;document.getElementById('page-heading').textContent=sections[step].title;let fields='';
    if(step===0)fields=`<div class="scale-guide"><strong>Choose the level you can demonstrate today</strong><p><b>Not yet</b> · I have not tried it &nbsp; <b>Getting started</b> · I need guidance &nbsp; <b>Can apply</b> · I can do it independently &nbsp; <b>Confident</b> · I can explain my approach</p></div>`+skillNames.map((s,i)=>`<fieldset class="question" data-question="skill-${i}"><legend>${esc(s)}</legend>${choose('skill-'+i,['Not yet','Getting started','Can apply','Confident'],answers.skills[i])}<p class="question-error" id="skill-${i}-error" hidden>Choose one level for ${esc(s)}.</p></fieldset>`).join('');
    if(step===1)fields=`<div class="check-list">${exposure.map((s,i)=>`<label class="choice"><input type="checkbox" name="exposure" value="${i}" ${answers.exposure.includes(i)?'checked':''}><span>${esc(s)}</span></label>`).join('')}</div>`;
    if(step===2)fields=interests.map((s,i)=>`<fieldset class="question" data-question="interest-${i}"><legend>${esc(s)}</legend>${choose('interest-'+i,['Not interested','A little','Interested','Very interested'],answers.interest[i])}<p class="question-error" id="interest-${i}-error" hidden>Choose one level for ${esc(s)}.</p></fieldset>`).join('');
    if(step===3)fields=styles.map((q,i)=>`<fieldset class="question" data-question="style-${i}"><legend>${esc(q[0])}</legend>${choose('style-'+i,[q[1],q[2]],answers.style[i])}<p class="question-error" id="style-${i}-error" hidden>Choose one answer for this question.</p></fieldset>`).join('');
    root.innerHTML=`<div class="section-head assessment-section-head"><h2>Section ${step+1} of 4</h2><small>${sections[step].title}</small></div><div class="answer-status"><span id="answered-count"></span><span id="save-state" role="status">Saved in this tab</span></div><div class="answer-track" aria-hidden="true"><div id="answer-progress"></div></div><form id="assessment-form" novalidate>${fields}<p class="error" id="form-error" role="alert" hidden></p><div class="actions"><button class="button button-outline" id="back" type="button" ${step===0?'disabled':''}>← Back</button><button class="button button-dark" type="submit">${step===3?'Review answers':'Continue'} →</button></div></form>`;
    updateProgress();
    document.getElementById('assessment-form').addEventListener('change',e=>{collect();updateProgress();document.getElementById('save-state').textContent='Saved in this tab';const field=e.target.closest('.question');if(field){field.classList.remove('needs-answer');field.querySelector('.question-error').hidden=true;e.target.removeAttribute('aria-describedby')}});
    document.getElementById('back').addEventListener('click',()=>{collect();if(step>0){step--;history.replaceState(null,'','assessment.html?step='+step);render(true);scrollTo(0,0)}});
    document.getElementById('assessment-form').addEventListener('submit',e=>{e.preventDefault();collect();const missing=missingAnswers();if(missing.length){const err=document.getElementById('form-error');err.textContent=`Answer ${missing.length} remaining ${missing.length===1?'question':'questions'} before continuing.`;err.hidden=false;missing.forEach(i=>{const name=(step===0?'skill':step===2?'interest':'style')+'-'+i;const field=root.querySelector(`[data-question="${name}"]`);field.classList.add('needs-answer');field.querySelector('.question-error').hidden=false;field.querySelectorAll('input').forEach(input=>input.setAttribute('aria-describedby',name+'-error'))});root.querySelector(`[data-question="${step===0?'skill':step===2?'interest':'style'}-${missing[0]}"] input`)?.focus();return}if(step<3){step++;history.replaceState(null,'','assessment.html?step='+step);render(true);scrollTo(0,0)}else location.href='review.html'});
    if(focusHeading){const heading=document.getElementById('page-heading');heading.tabIndex=-1;heading.focus({preventScroll:true})}
  }
  function collect(){if(step===1)answers.exposure=[...document.querySelectorAll('input[name="exposure"]:checked')].map(x=>Number(x.value));else{const key=step===0?'skills':step===2?'interest':'style';const prefix=step===0?'skill':step===2?'interest':'style';document.querySelectorAll(`input[name^="${prefix}-"]:checked`).forEach(x=>{answers[key][Number(x.name.split('-')[1])]=Number(x.value)})}save()}
  function updateProgress(){const key=step===0?'skills':step===2?'interest':'style';const total=step===0?skillNames.length:step===1?exposure.length:step===2?interests.length:styles.length;const done=step===1?answers.exposure.length:Array.from({length:total},(_,i)=>answers[key][i]).filter(v=>step===3?Number.isInteger(v)&&v>=0&&v<=1:validRating(v)).length;document.getElementById('answered-count').textContent=step===1?`${done} of ${total} experiences selected (optional)`:`${done} of ${total} answered`;document.getElementById('answer-progress').style.width=`${Math.round(done/total*100)}%`}
  function missingAnswers(){if(step===1)return [];const key=step===0?'skills':step===2?'interest':'style';const count=step===0?skillNames.length:step===2?interests.length:styles.length;return Array.from({length:count},(_,i)=>i).filter(i=>step===3?!(Number.isInteger(answers[key][i])&&answers[key][i]>=0&&answers[key][i]<=1):!validRating(answers[key][i]))}
  render();
}
if(appPage==='review'){
  const root=document.getElementById('review-content');if(!needsProfile(root)){
    const levels=['Not yet','Getting started','Can apply','Confident'];const interestLevels=['Not interested','A little','Interested','Very interested'];
    root.innerHTML=`<div class="review-list"><article class="review-block"><h3>Skill proficiency</h3><dl class="skill-summary">${skillNames.map((s,i)=>`<div><dt>${esc(s)}</dt><dd>${levels[answers.skills[i]]}</dd></div>`).join('')}</dl><p><a href="assessment.html?step=0">Edit skills</a></p></article><article class="review-block"><h3>Prior exposure</h3><ul>${answers.exposure.length?answers.exposure.map(i=>`<li>${esc(exposure[i])}</li>`).join(''):'<li>No experiences selected</li>'}</ul><p><a href="assessment.html?step=1">Edit exposure</a></p></article><article class="review-block"><h3>Interests</h3><ul>${interests.map((s,i)=>`<li>${esc(s)}: ${interestLevels[answers.interest[i]]}</li>`).join('')}</ul><p><a href="assessment.html?step=2">Edit interests</a></p></article><article class="review-block"><h3>Work style</h3><ul>${styles.map((q,i)=>`<li>${esc(q[1+answers.style[i]])}</li>`).join('')}</ul><p><a href="assessment.html?step=3">Edit work style</a></p></article></div><div class="notice"><p>Skill ratings and completed experiences shape your career ranking. Interests and work style add context without changing the order.</p></div><div class="actions"><a class="button button-outline" href="assessment.html?step=3">← Back to assessment</a><a class="button button-dark" href="skills-assessment.html">Continue to skills assessment →</a></div>`;
  }
}
if(appPage==='results'){
  const root=document.getElementById('results-content');if(!needsProfile(root)){
    const top=scores().slice(0,3);
    const levels=['Not yet','Getting started','Can apply','Confident'];
    const fav=Object.entries(answers.interest).filter(([,rating])=>rating>=2).sort((a,b)=>b[1]-a[1]).slice(0,2).map(([i])=>interests[i]).join(' and ')||'No strong interests selected yet';
    const ranking=top.map((p,i)=>{
      const skillEvidence=p.skills.map(s=>`${esc(s)}: ${levels[answers.skills[skillNames.indexOf(s)]]}`).join(' · ');
      const exposureEvidence=answers.exposure.includes(p.index)?'You also selected a related completed experience.':'No matching experience was selected.';
      return `<li class="evidence-item"><span class="evidence-number">0${i+1}</span><div><div class="evidence-title"><h4>${esc(p.name)}</h4><strong>${p.score}<span> / 11</span></strong></div><p>${skillEvidence}</p><small>${exposureEvidence}</small></div></li>`;
    }).join('');
    root.innerHTML=`<div class="result-hero result-hero-compact"><small>First direction to explore</small><h2>${esc(top[0].name)}</h2><p>See how all three paths compare below. This ranking reflects your self-rated skills and completed experiences.</p></div><div class="result-grid"><article class="card results-ranking"><h3>Compare your top three</h3><p class="score-key">Scores add three related skill ratings (0–3 each) and 2 points for a matching completed experience. The maximum is 11.</p><ol class="evidence-list">${ranking}</ol></article><article class="card"><h3>Read the result</h3><p>A higher score means a stronger match to the skills and experience you reported today. It is a starting point for exploration, not a verdict on what you can learn. Equal scores follow the path list order.</p><h3 class="context-heading">Your wider context</h3><p><strong>Interests:</strong> ${esc(fav)}</p><p class="context-line"><strong>Work style:</strong> ${esc(styles.map((q,i)=>q[1+answers.style[i]]).join('; '))}</p><p class="context-line">These preferences did not change the ranking.</p></article></div><div class="notice"><p>Use these paths to guide exploration and adviser conversations. You can revisit your answers as your skills and experience grow.</p></div><div class="actions"><a class="button button-outline" href="review.html">← Review answers</a><a class="button button-dark" href="next-steps.html">Plan your next steps →</a></div>`;
    let skillAnswerCount=0;
    try{const skillRecord=JSON.parse(sessionStorage.getItem('pathfinder-research-pilot-v0-1'));skillAnswerCount=Math.min(50,Object.values(skillRecord?.answers||{}).filter(value=>Number.isInteger(value)&&value>=0&&value<4).length)}catch{}
    const skillCard=document.createElement('article');skillCard.className='card skill-evidence';
    const skillHeading=document.createElement('h3');skillHeading.textContent='Skills assessment';
    const skillText=document.createElement('p');skillText.textContent=`${skillAnswerCount} of 50 knowledge questions answered. See your knowledge counts and practical responses on the skills assessment page. This career order currently uses your profile ratings and completed experiences.`;
    const skillLink=document.createElement('a');skillLink.href='skills-assessment.html';skillLink.textContent='View skill results →';
    skillCard.append(skillHeading,skillText,skillLink);root.querySelector('.notice')?.before(skillCard);
  }
}
if(appPage==='next'){
  const root=document.getElementById('next-content');if(!needsProfile(root)){
    const top=scores().slice(0,3);let selected=0;
    function render(focusTab=false){const p=top[selected];const rating=s=>answers.skills[skillNames.indexOf(s)]||0;const focus=p.skills.slice().sort((a,b)=>rating(a)-rating(b))[0];root.innerHTML=`<p class="lede">Choose a recommended direction to see a practice task based on your current ratings.</p><div class="path-tabs" role="group" aria-label="Choose a career path">${top.map((x,i)=>`<button type="button" data-path="${i}" aria-pressed="${i===selected}" aria-controls="path-plan">${esc(x.name)}</button>`).join('')}</div><div id="path-plan" aria-live="polite" aria-atomic="true"><div class="result-hero result-hero-compact"><small>Exploration plan / ${selected+1} of 3</small><h2>${esc(p.name)}</h2><p>${esc(p.description)}</p></div><div class="result-grid"><article class="card wide"><span class="tag">First practice move · ${esc(focus)}</span><h3>${esc(practiceByPath[p.name][focus])}</h3><p>This is your lowest-rated focus skill for this path. If ratings tie, the first listed skill is shown.</p></article><article class="card"><h3>Your current ratings</h3><p>These are your self-ratings for this path’s focus skills:</p>${p.skills.map(s=>{const v=rating(s);const status=v>=3?'Confident':v>=2?'Can apply':v===1?'Getting started':'Not yet';return `<div class="rank-row"><strong>${esc(s)}</strong><span class="tag ${v<2?'gap':v===2?'partial':''}">${status}</span></div>`}).join('')}</article><article class="card"><h3>More ways to explore</h3><ol class="step-list">${p.resources.map(r=>`<li>${esc(r)}</li>`).join('')}</ol></article></div></div><div class="notice"><p>These practice ideas are starting points. Check current role requirements and discuss your plan with an adviser.</p></div><div class="actions"><a class="button button-outline" href="results.html">← Back to results</a><button class="button button-dark" id="restart" type="button">Start a new assessment →</button></div><div class="restart-confirm" id="restart-confirm" hidden><p>Starting again will clear the answers saved in this tab.</p><button class="button button-outline" id="cancel-restart" type="button">Keep my answers</button><button class="button button-dark" id="confirm-restart" type="button">Clear answers and start again</button></div>`;
      root.querySelectorAll('[data-path]').forEach(b=>b.addEventListener('click',()=>{selected=Number(b.dataset.path);render(true)}));if(focusTab)root.querySelector(`[data-path="${selected}"]`).focus({preventScroll:true});document.getElementById('restart').addEventListener('click',()=>{const confirm=document.getElementById('restart-confirm');confirm.hidden=false;document.getElementById('cancel-restart').focus()});document.getElementById('cancel-restart').addEventListener('click',()=>{document.getElementById('restart-confirm').hidden=true;document.getElementById('restart').focus()});document.getElementById('confirm-restart').addEventListener('click',()=>{sessionStorage.removeItem(storeKey);sessionStorage.removeItem('pathfinder-research-pilot-v0-1');sessionStorage.removeItem('pathfinder-skills-stage-v1');sessionStorage.removeItem('pathfinder-skills-stage-v2');location.href='assessment.html'});
    }render();
  }
}


