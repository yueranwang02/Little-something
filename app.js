// ── DATA ─────────────────────────────────────────────────────────────────────

const LANG = {
  en: {
    langBtn:'中文',
    feedbackBtn:'leave a note',
    tideBtn:'tide',
    tideTitle:'The tide remembers a little.',
    tideLast7:n=>`recent 7 days: ${n} light${n===1?'':'s'}`,
    tideMonth:n=>`this month: ${n} light${n===1?'':'s'}`,
    tideFeelings:f=>`most returned feelings: ${f||"the sea hasn't mapped you yet"}`,
    tideOldest:d=>d?`one light has been here for ${d} days`:'every light here is still new',
    tideRandom:'let an old light surface',
    tideClose:'let it sink back',
    tideEmpty:'there is no older light yet.',
    tideSurfaced:d=>`This light is from ${d} days ago.`,
    seaCondition:(old,available)=>old
      ? `The sea is dark today. One old light is still far away. ${available} place${available===1?'':'s'} can still be lit.`
      : `The sea is dark today. ${available} place${available===1?'':'s'} can still be lit. The sea is still here.`,
    ob:['There is nothing here yet.','Tap anywhere.','See what the dark asks you.'],
    obCta:'start here, or anywhere',
    firstQ:'What brought you here today?',
    emotionLabel:'how does it feel',
    placeholder:'say something, or nothing at all…',
    submitBtn:'leave this light',
    noFeelingBtn:'it feels like nothing',
    answerRequired:'write something first…',
    optionalMsg:'Do you want to stay a little longer today?',
    optionalYes:'leave one more light',
    optionalNo:'not today',
    laterBottleBtn:'put this sentence into the sea',
    laterBottleSaved:'it will drift back on another night.',
    returnedBottleTitle:d=>`This bottle is from you, ${d} days ago.`,
    returnedBottleBody:a=>`Back then, you wrote:\n\n“${a}”`,
    firstLightMsg:'The first light is here.',
    lightFeedback:['the sea remembers this.','something stayed.',"it's here now."],
    hintInitial:'tap anywhere to leave a light',
    hintOneLeft:'today, you can leave one more',
    hintDone:'no more lights today — just look around. come back tomorrow; the sea will still be here.',
    counter: n => n<=0?'tomorrow':n===1?'1 light left':`${n} lights left`,
    limitMsg: count=>`You have left ${count} light${count===1?'':'s'} today.<br><br><span style="font-size:13px;color:rgba(168,190,220,.58);letter-spacing:.1em">come back tomorrow. the sea will still be here.</span>`,
    endNight:['The sea has taken two lights today.','Come back tomorrow.'],
    bottleClose:'let it drift away',
    chooseFeeling:'choose a feeling first…',
    customFeelingPlaceholder:'or write your own feeling',
    quietFeeling:'no words',
    whispers:['the sea is still here.','you do not have to hurry.',"it's okay to just look.",'the dark is not empty.','something stays when you leave.'],
    memClose:'hide it again',
    noAnswer:'(nothing written)',
    prefTitle:'Today, what kind of question should the sea bring?',
    prefSubtitle:'Choose a few. The sea will remember lightly, and still surprise you.',
    prefStart:'let the sea ask',
    intentTitle:'Where should the sea lean today?',
    intentSubtitle:'Give today a direction.',
    intentStart:'Let the sea decide',
    tideColorTitle:'Give today a slight color.',
    tideColorNote:'',
    skipQuestion:'another part of the dark',
    prefs:{
      soft:'soft', deep:'deep', self:'about me', memory:'about the past',
      relationship:'about people', art:'film / music / books', strange:'strange', surprise:'surprise me'
    },
    intents:{
      softer:'softer', deeper:'deeper', self:'me',
      memory:'the past',
      unknown:'darkness and the unknown', connection:'someone far away',
      strange:'stranger', usual:'let the sea decide'
    },
    tideColors:{
      original:'the old sea', fog:'fog', moon:'moonlight',
      warm:'warm lamp', dream:'old dream', deep:'deep water', breath:'breath',
      none:'the dark itself can stay'
    },
  },
  zh: {
    langBtn:'EN',
    feedbackBtn:'留一句',
    tideBtn:'潮汐',
    tideTitle:'潮汐记得一点点。',
    tideLast7:n=>`最近 7 天：${n} 盏灯`,
    tideMonth:n=>`本月留下了 ${n} 盏灯`,
    tideFeelings:f=>`最常出现的感觉：${f||'海还不了解你'}`,
    tideOldest:d=>d?`有一盏灯已经在这里 ${d} 天了`:'每盏灯还都很新',
    tideRandom:'让一盏旧灯浮上来',
    tideClose:'让它沉回去',
    tideEmpty:'还没有可以浮上来的旧灯。',
    tideSurfaced:d=>`这盏灯来自 ${d} 天前。`,
    seaCondition:(old,available)=>old
      ? `今天的海很暗。有一盏旧灯还在远处。今天可以点亮 ${available} 处。`
      : `今天的海很暗。今天可以点亮 ${available} 处。海还在。`,
    ob:['这里现在什么都没有。','你可以在任意地方点一下。','看看黑暗会问你什么。'],
    obCta:'从这里开始，或者从任何地方',
    firstQ:'今天是什么把你带到了这里？',
    emotionLabel:'感觉像是',
    placeholder:'说点什么，或者什么都不说……',
    submitBtn:'留下这盏灯',
    noFeelingBtn:'好像没什么感觉',
    answerRequired:'先写下一点什么……',
    optionalMsg:'今天还想多留一会儿吗？',
    optionalYes:'再留一盏灯',
    optionalNo:'今天到这里',
    laterBottleBtn:'把这句话放进海里',
    laterBottleSaved:'它会在另一个夜晚漂回来。',
    returnedBottleTitle:d=>`这只瓶子来自 ${d} 天前的你。`,
    returnedBottleBody:a=>`那时候你写下了：\n\n“${a}”`,
    firstLightMsg:'第一盏灯留下了。',
    lightFeedback:['海记住了这个。','有什么留了下来。','它在这里了。'],
    hintInitial:'在任意地方点一下，留下一盏灯',
    hintOneLeft:'今天，你还可以再留下一盏灯',
    hintDone:'今天不能再点亮了——可以只是看看。明天再来，海还在。',
    counter: n => n<=0?'明天再来':`今天还剩 ${n} 盏`,
    limitMsg: count=>`你今天已经留下了 ${count} 盏灯。<br><br><span style="font-size:13px;color:rgba(168,190,220,.58);letter-spacing:.1em">明天再来，海还在。</span>`,
    endNight:['今天的海已经收下两盏灯。','明天再来吧。'],
    bottleClose:'让它漂走',
    chooseFeeling:'先选一种感觉……',
    customFeelingPlaceholder:'或者写一个自己的感觉',
    quietFeeling:'不说话',
    whispers:['海还在这里。','不用急。','可以只是看着。','黑暗不是空的。','你离开了，有什么留了下来。'],
    memClose:'藏回去',
    noAnswer:'（什么都没写）',
    prefTitle:'今天，想让海问你哪一类问题？',
    prefSubtitle:'可以选几个。海会轻轻记住，但仍然保留一点意外。',
    prefStart:'让海发问',
    intentTitle:'今天想让海靠近哪里？',
    intentSubtitle:'只影响今天。明天的潮汐会重新改变。',
    intentStart:'让海自己决定',
    tideColorTitle:'给今天留一点底色',
    tideColorNote:'',
    skipQuestion:'换一片黑暗',
    prefs:{
      soft:'温柔一点', deep:'深一点', self:'关于自己', memory:'关于过去',
      relationship:'关于关系', strange:'奇怪一点', surprise:'随便来'
    },
    intents:{
      softer:'轻一点', deeper:'深一点', self:'我自己',
      memory:'过去', relationship:'某个人', 
      unknown:'黑暗和未知', connection:'远方的人',
      strange:'奇怪一点', usual:'让海自己决定'
    },
    tideColors:{
      original:'原来的海', fog:'雾', moon:'月光',
      warm:'暖灯', dream:'旧梦', deep:'深水', breath:'呼吸',
      none:'黑暗本身也可以留下来'
    },
  },
};

const EMOTIONS = [
  {id:'light',    en:'light',    zh:'明亮', symbols:['✦','✧','⋆','✺'],  color:'#f0e6b0',rgb:'240,230,176'},
  {id:'dark',     en:'dark',     zh:'黑暗', symbols:['◈','◆','◐','●'],  color:'#a07cc0',rgb:'160,124,192'},
  {id:'nostalgic',en:'nostalgic',zh:'怀旧', symbols:['◎','◌','⌾','◍'],  color:'#c4875a',rgb:'196,135,90' },
  {id:'funny',    en:'funny',    zh:'好笑', symbols:['✿','☻','❋','♢'],  color:'#e8c84a',rgb:'232,200,74' },
  {id:'calm',     en:'calm',     zh:'平静', symbols:['○','◯','☾','〜'], color:'#6ab5c8',rgb:'106,181,200'},
  {id:'confused', en:'confused', zh:'困惑', symbols:['⁂','※','⁎','⌁'],  color:'#c87ab5',rgb:'200,122,181'},
  {id:'hopeful',  en:'hopeful',  zh:'希望', symbols:['↑','↟','✶','❇'],  color:'#6ec99a',rgb:'110,201,154'},
  {id:'unclear',  en:'unclear',  zh:'说不清', symbols:['∴','∵','⋯','⌁'],  color:'#9fb1c8',rgb:'159,177,200'},
  {id:'custom',   en:'custom',   zh:'自定义', symbols:['≋','◌','◦','∿'],  color:'#8aa8b8',rgb:'138,168,184'},
];

const PREF_OPTIONS = [
  {id:'soft',category:'daily',depth:2},
  {id:'deep',category:'unknown',depth:4},
  {id:'self',category:'self',depth:3},
  {id:'memory',category:'memory',depth:3},
  {id:'relationship',category:'relationship',depth:4},
  {id:'art',category:'art',depth:2},
  {id:'strange',category:'strange',depth:2},
  {id:'surprise',category:null,depth:null}
];

const DAILY_INTENT_OPTIONS = [
  {id:'softer',categories:['daily','self','city'],maxDepth:2},
  {id:'deeper',categories:['self','relationship','memory','unknown'],minDepth:3,maxDepth:5},
  {id:'self',categories:['self','daily'],minDepth:1,maxDepth:4},
  {id:'memory',categories:['memory','city','relationship'],minDepth:2,maxDepth:4},
  {id:'relationship',categories:['relationship','self','memory'],minDepth:2,maxDepth:4},
  {id:'unknown',categories:['unknown','strange','future','self'],minDepth:2,maxDepth:4},
  {id:'connection',categories:['connection','relationship','city'],minDepth:2,maxDepth:4},
  {id:'strange',categories:['strange','future','daily'],minDepth:1,maxDepth:3},
  {id:'usual',categories:null}
];

const TIDE_COLORS = [
  {id:'original',rgb:'94,142,188',color:'#5e8ebc'},
  {id:'fog',rgb:'148,166,182',color:'#94a6b6'},
  {id:'moon',rgb:'202,214,224',color:'#cad6e0'},
  {id:'warm',rgb:'196,150,82',color:'#c49652'},
  {id:'dream',rgb:'176,96,128',color:'#b06080'},
  {id:'deep',rgb:'34,72,128',color:'#224880'},
  {id:'breath',rgb:'76,132,104',color:'#4c8468'},
  {id:'none',rgb:'4,5,10',color:'#05060a'}
];

const ADJACENT_CATEGORIES = {
  daily:['self','city','memory'],
  self:['daily','memory','future','relationship'],
  memory:['relationship','city','self','art'],
  relationship:['memory','self','connection','city'],
  art:['memory','city','self','connection'],
  strange:['future','unknown','art','daily'],
  future:['self','strange','unknown','city'],
  city:['memory','relationship','daily','art'],
  unknown:['future','strange','self','connection'],
  connection:['relationship','city','art','unknown']
};

const SK = {lights:'nightsea_lights',date:'nightsea_date',count:'nightsea_today',lang:'nightsea_lang',visited:'nightsea_visited',firstQ:'nightsea_firstq',profile:'nightsea_profile',dailyIntent:'nightsea_daily_intent',customFeelings:'nightsea_custom_feelings',futureBottles:'nightsea_future_bottles'};
const DAILY_DEFAULT = 1, DAILY_LIMIT = 2, QUESTION_COOLDOWN_DAYS = 30;
const FEEDBACK_URL = 'https://tally.so/r/0Qb2gB';

if(new URLSearchParams(location.search).has('reset')){
  [SK.lights,SK.date,SK.count,SK.visited,SK.firstQ,SK.profile,SK.dailyIntent,SK.customFeelings,SK.futureBottles].forEach(k=>localStorage.removeItem(k));
  window.history.replaceState({},document.title,location.pathname);
}

let lights=[], todayCount=0, currentLang='en';
let pendingX=0, pendingY=0, selectedEmo=null, selectedFeelingLabel='', currentQ='', currentQMeta=null;
let selectedTideColor=null, selectedIntentId=null;
let isFirstVisit=false, onboardingDone=false;
let userProfile=null, dailyIntent=null;
let customFeelings=[];
let futureBottles=[], activeMemoryLight=null, optionalSecondOpen=false, optionalSecondDeclined=false;

function todayStr(){
  const d=new Date();
  const m=String(d.getMonth()+1).padStart(2,'0');
  const day=String(d.getDate()).padStart(2,'0');
  return `${d.getFullYear()}-${m}-${day}`;
}

function monthStr(date=todayStr()){
  return date.slice(0,7);
}

function loadState(){
  try{ lights=JSON.parse(localStorage.getItem(SK.lights))||[]; }catch{ lights=[]; }
  try{ userProfile=JSON.parse(localStorage.getItem(SK.profile))||null; }catch{ userProfile=null; }
  try{ dailyIntent=JSON.parse(localStorage.getItem(SK.dailyIntent))||null; }catch{ dailyIntent=null; }
  try{ customFeelings=JSON.parse(localStorage.getItem(SK.customFeelings))||[]; }catch{ customFeelings=[]; }
  try{ futureBottles=JSON.parse(localStorage.getItem(SK.futureBottles))||[]; }catch{ futureBottles=[]; }
  if(!Array.isArray(customFeelings)) customFeelings=[];
  if(!Array.isArray(futureBottles)) futureBottles=[];
  if(dailyIntent?.date!==todayStr()) dailyIntent=null;
  if(userProfile){
    userProfile.scores={...defaultScores(),...(userProfile.scores||{})};
    userProfile.categories=userProfile.categories||['self','daily','memory'];
    userProfile.preferredDepth=userProfile.preferredDepth||3;
    userProfile.seenQuestionIds=userProfile.seenQuestionIds||[];
    userProfile.questionHistory=userProfile.questionHistory||{};
  }
  const d=localStorage.getItem(SK.date);
  if(d===todayStr()){ todayCount=parseInt(localStorage.getItem(SK.count)||'0',10); }
  else{ todayCount=0; localStorage.setItem(SK.date,todayStr()); localStorage.setItem(SK.count,'0'); }
  const sl=localStorage.getItem(SK.lang);
  currentLang=sl||(navigator.language.startsWith('zh')?'zh':'en');
  isFirstVisit=!localStorage.getItem(SK.visited)&&lights.length===0;
}

function saveState(){
  try{
    localStorage.setItem(SK.lights,JSON.stringify(lights));
    localStorage.setItem(SK.date,todayStr());
    localStorage.setItem(SK.count,String(todayCount));
  }catch{}
}

function defaultScores(){
  return {daily:1,self:1,memory:1,relationship:1,art:1,strange:1,future:1,city:1,unknown:1,connection:1};
}

function saveProfile(){
  if(userProfile) localStorage.setItem(SK.profile,JSON.stringify(userProfile));
}

function saveDailyIntent(){
  if(dailyIntent) localStorage.setItem(SK.dailyIntent,JSON.stringify(dailyIntent));
}

function saveCustomFeeling(word){
  const clean=(word||'').trim().slice(0,12);
  if(!clean) return;
  customFeelings=[clean,...customFeelings.filter(item=>item!==clean)].slice(0,3);
  localStorage.setItem(SK.customFeelings,JSON.stringify(customFeelings));
}

function saveFutureBottles(){
  localStorage.setItem(SK.futureBottles,JSON.stringify(futureBottles));
}

function createProfileFromPrefs(selected){
  const scores=defaultScores();
  const categories=[];
  let depthTotal=0, depthCount=0;
  let surprise=selected.includes('surprise')||selected.length===0;

  selected.forEach(id=>{
    const pref=PREF_OPTIONS.find(p=>p.id===id);
    if(!pref) return;
    if(pref.category){
      scores[pref.category]=(scores[pref.category]||0)+3;
      if(!categories.includes(pref.category)) categories.push(pref.category);
    }
    if(pref.depth){ depthTotal+=pref.depth; depthCount++; }
  });

  userProfile={
    categories:categories.length?categories:['self','daily','memory'],
    preferredDepth:depthCount?Math.round(depthTotal/depthCount):3,
    surprise,
    scores,
    seenQuestionIds:[],
    questionHistory:{}
  };
  saveProfile();
  dailyIntent={date:todayStr(),mode:'first',categories:null,useProfile:true};
  saveDailyIntent();
}

// ── LANGUAGE ──────────────────────────────────────────────────────────────────

function t(key,...args){
  const val=LANG[currentLang][key];
  return typeof val==='function'?val(...args):val;
}

function applyLanguage(){
  document.documentElement.lang=currentLang;
  const ob=t('ob');
  document.getElementById('ob-l1').textContent=ob[0];
  document.getElementById('ob-l2').textContent=ob[1];
  document.getElementById('ob-l3').textContent=ob[2];
  document.getElementById('ob-cta').textContent=t('obCta');
  document.getElementById('lang-btn').textContent=t('langBtn');
  document.getElementById('feedback-btn').textContent=t('feedbackBtn');
  document.getElementById('tide-btn').textContent=t('tideBtn');
  document.getElementById('answer-input').placeholder=t('placeholder');
  document.getElementById('custom-feeling-input').placeholder=t('customFeelingPlaceholder');
  document.getElementById('emotion-label').textContent=t('emotionLabel');
  document.getElementById('submit-btn').textContent=t('submitBtn');
  document.getElementById('no-feeling-btn').textContent=t('noFeelingBtn');
  document.getElementById('mem-close-btn').textContent=t('memClose');
  document.getElementById('mem-bottle-btn').textContent=t('laterBottleBtn');
  document.getElementById('bottle-close-btn').textContent=t('bottleClose');
  document.getElementById('optional-msg').textContent=t('optionalMsg');
  document.getElementById('optional-yes-btn').textContent=t('optionalYes');
  document.getElementById('optional-no-btn').textContent=t('optionalNo');
  document.getElementById('tide-title').textContent=t('tideTitle');
  document.getElementById('tide-random-btn').textContent=t('tideRandom');
  document.getElementById('tide-close-btn').textContent=t('tideClose');
  document.getElementById('pref-title').textContent=t('prefTitle');
  document.getElementById('pref-subtitle').textContent=t('prefSubtitle');
  document.getElementById('pref-start-btn').textContent=t('prefStart');
  document.getElementById('intent-title').textContent=t('intentTitle');
  document.getElementById('intent-subtitle').textContent=t('intentSubtitle');
  document.getElementById('intent-start-btn').textContent=t('intentStart');
  document.getElementById('skip-question-btn').textContent=t('skipQuestion');
  buildPreferenceGrid();
  buildDailyIntentGrid();
  buildEmotionGrid();
  updateCounter();
  updateHint();
}

document.getElementById('lang-btn').addEventListener('click',()=>{
  currentLang=currentLang==='en'?'zh':'en';
  localStorage.setItem(SK.lang,currentLang);
  applyLanguage();
});

document.getElementById('feedback-btn').addEventListener('click',e=>{
  e.stopPropagation();
  window.open(FEEDBACK_URL,'_blank','noopener,noreferrer');
});

document.getElementById('custom-feeling-input').addEventListener('input',e=>{
  const word=e.target.value.trim();
  if(!word){
    selectedEmo=null;
    selectedFeelingLabel='';
    return;
  }
  document.querySelectorAll('.emotion-tag').forEach(b=>b.classList.remove('active'));
  selectedEmo='custom';
  selectedFeelingLabel=word;
});

// ── ONBOARDING ────────────────────────────────────────────────────────────────

function startOnboarding(){
  ['ob-l1','ob-l2','ob-l3'].forEach((id,i)=>{
    setTimeout(()=>document.getElementById(id).classList.add('show'), 900+i*1000);
  });
  setTimeout(()=>document.getElementById('ob-breathe').classList.add('show'), 4200);
}

function dismissOnboarding(x,y){
  if(onboardingDone) return;
  onboardingDone=true;
  const ob=document.getElementById('onboarding');
  ob.classList.add('dismissed');
  localStorage.setItem(SK.visited,'1');
  setTimeout(()=>{
    ob.style.display='none';
    if(x!==null) openModal(x,y);
  },600);
}

document.getElementById('onboarding').addEventListener('click',e=>{
  if(!onboardingDone){
    const rect=document.getElementById('canvas').getBoundingClientRect();
    dismissOnboarding((e.clientX-rect.left)/rect.width,(e.clientY-rect.top)/rect.height);
  }
});

// ── STARS ─────────────────────────────────────────────────────────────────────

function createStars(){
  const c=document.getElementById('canvas');
  for(let i=0;i<55;i++){
    const s=document.createElement('div');
    const sz=Math.random()*1.4+0.5, op=Math.random()*.22+.05;
    s.style.cssText=`position:absolute;left:${Math.random()*100}%;top:${Math.random()*72}%;
      width:${sz}px;height:${sz}px;border-radius:50%;
      background:rgba(200,215,240,${op});--so:${op};
      animation:starTwinkle ${Math.random()*5+4}s ${Math.random()*9}s ease-in-out infinite;
      pointer-events:none;z-index:1;`;
    c.appendChild(s);
  }
}

// ── LIGHTS ────────────────────────────────────────────────────────────────────

function lightSize(ans){
  const l=(ans||'').length;
  if(l===0)   return{fs:'17px',rw:'28px',rh:'28px'};
  if(l<30)    return{fs:'21px',rw:'38px',rh:'38px'};
  if(l<100)   return{fs:'25px',rw:'48px',rh:'48px'};
  return             {fs:'29px',rw:'58px',rh:'58px'};
}

function answerShape(ans){
  const l=(ans||'').length;
  if(l===0) return 'empty';
  if(l<30) return 'short';
  if(l>120) return 'long';
  return 'medium';
}

function lightAge(light){
  const days=daysBetween(light.date||todayStr(),todayStr());
  if(days===0) return 'fresh';
  if(days<7) return 'settling';
  if(days<30) return 'old';
  return 'ancient';
}

function renderLight(light,animate){
  const em=EMOTIONS.find(e=>e.id===(light.visualType||light.emotion))||EMOTIONS[4];
  const sym=light.symbol||em.symbols[0];
  const sz=lightSize(light.answer);
  const visual=light.visualType||light.emotion||'calm';
  const glowColor=light.tideColor||em.color;
  const el=document.createElement('div');
  el.className=`light light-${visual} ${answerShape(light.answer)} ${lightAge(light)}`+(animate?'':' no-anim');
  el.style.left=(light.x*100)+'%';
  el.style.top=(light.y*100)+'%';
  el.style.setProperty('--gc',glowColor);
  el.dataset.id=light.id;
  el.innerHTML=`<div class="light-ring" style="width:${sz.rw};height:${sz.rh};--gc:${glowColor};animation-delay:${Math.random()*4}s"></div>
<span class="light-symbol" style="font-size:${sz.fs};color:${glowColor};--gc:${glowColor}">${sym}</span>`;
  el.addEventListener('click',e=>{e.stopPropagation();openMemory(light);});
  document.getElementById('canvas').appendChild(el);
}

function renderAllLights(){ lights.forEach(l=>renderLight(l,false)); }

// ── RIPPLE ────────────────────────────────────────────────────────────────────

function spawnRipple(cx,cy){
  const c=document.getElementById('canvas'), r=c.getBoundingClientRect();
  const d=document.createElement('div');
  d.className='ripple';
  d.style.left=(cx-r.left)+'px'; d.style.top=(cy-r.top)+'px';
  c.appendChild(d);
  d.addEventListener('animationend',()=>d.remove());
}

let pointerRAF=0, pendingPointer=null;
function updateSeaPointer(clientX,clientY){
  pendingPointer={x:clientX,y:clientY};
  if(pointerRAF) return;
  pointerRAF=requestAnimationFrame(()=>{
    const c=document.getElementById('canvas');
    c.style.setProperty('--mx',(pendingPointer.x/window.innerWidth*100)+'%');
    c.style.setProperty('--my',(pendingPointer.y/window.innerHeight*100)+'%');
    pointerRAF=0;
  });
}

['pointermove','pointerdown'].forEach(ev=>{
  document.getElementById('canvas').addEventListener(ev,e=>updateSeaPointer(e.clientX,e.clientY),{passive:true});
});

// ── IDLE WHISPER ──────────────────────────────────────────────────────────────

let idleTimer,wTimer;
function resetIdle(){ clearTimeout(idleTimer); hideWhisper(); idleTimer=setTimeout(showWhisper,8000); }
function showWhisper(){
  const ws=t('whispers'), w=document.getElementById('whisper');
  w.textContent=ws[Math.floor(Math.random()*ws.length)];
  w.classList.add('show');
  wTimer=setTimeout(hideWhisper,4500);
}
function hideWhisper(){ clearTimeout(wTimer); document.getElementById('whisper').classList.remove('show'); }
['click','touchstart','mousemove'].forEach(ev=>document.addEventListener(ev,resetIdle,{passive:true}));

// ── EMOTION GRID ──────────────────────────────────────────────────────────────

function buildEmotionGrid(){
  const grid=document.getElementById('emotion-grid');
  grid.innerHTML='';
  EMOTIONS.filter(em=>em.id!=='custom').forEach(em=>{
    const btn=document.createElement('button');
    btn.className='emotion-tag';
    btn.dataset.id=em.id;
    btn.textContent=em[currentLang];
    btn.style.setProperty('--tc',em.color);
    btn.style.setProperty('--tr',em.rgb);
    if(selectedEmo===em.id) btn.classList.add('active');
    btn.addEventListener('click',()=>{
      if(selectedEmo===em.id){
        btn.classList.remove('active');
        selectedEmo=null;
        selectedFeelingLabel='';
        document.getElementById('custom-feeling-input').value='';
        return;
      }
      document.querySelectorAll('.emotion-tag').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      selectedEmo=em.id;
      selectedFeelingLabel=em[currentLang];
      document.getElementById('custom-feeling-input').value='';
    });
    grid.appendChild(btn);
  });
  customFeelings.forEach(word=>{
    const em=EMOTIONS.find(e=>e.id==='custom');
    const btn=document.createElement('button');
    btn.className='emotion-tag';
    btn.dataset.id='custom';
    btn.textContent=word;
    btn.style.setProperty('--tc',em.color);
    btn.style.setProperty('--tr',em.rgb);
    if(selectedEmo==='custom'&&selectedFeelingLabel===word) btn.classList.add('active');
    btn.addEventListener('click',()=>{
      if(selectedEmo==='custom'&&selectedFeelingLabel===word){
        btn.classList.remove('active');
        selectedEmo=null;
        selectedFeelingLabel='';
        document.getElementById('custom-feeling-input').value='';
        return;
      }
      document.querySelectorAll('.emotion-tag').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      selectedEmo='custom';
      selectedFeelingLabel=word;
      document.getElementById('custom-feeling-input').value=word;
    });
    grid.appendChild(btn);
  });
}

function buildPreferenceGrid(){
  const grid=document.getElementById('pref-grid');
  grid.innerHTML='';
  const labels=t('prefs');

  PREF_OPTIONS.forEach(pref=>{
    const btn=document.createElement('button');
    btn.className='pref-chip';
    btn.type='button';
    btn.dataset.id=pref.id;
    if(pref.depth) btn.dataset.depth=String(pref.depth);
    btn.textContent=labels[pref.id];
    btn.addEventListener('click',()=>{
      if(pref.id==='surprise'){
        document.querySelectorAll('.pref-chip').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        return;
      }
      document.querySelector('.pref-chip[data-id="surprise"]')?.classList.remove('active');
      btn.classList.toggle('active');
    });
    grid.appendChild(btn);
  });
}

function buildDailyIntentGrid(){
  const grid=document.getElementById('intent-grid');
  grid.innerHTML='';
  const labels=t('intents');
  selectedTideColor=null;
  selectedIntentId=null;
  hideTideColors();

  DAILY_INTENT_OPTIONS.forEach(intent=>{
    const btn=document.createElement('button');
    btn.className='pref-chip';
    btn.type='button';
    btn.dataset.id=intent.id;
    btn.textContent=labels[intent.id];
    btn.addEventListener('click',()=>{
      selectedIntentId=intent.id;
      document.querySelectorAll('#intent-grid .pref-chip').forEach(b=>b.classList.toggle('active',b===btn));
      showTideColors();
    });
    grid.appendChild(btn);
  });

  buildTideColorGrid();
}

function hideTideColors(){
  document.getElementById('tide-color-title').classList.remove('visible');
  document.getElementById('tide-color-grid').classList.remove('visible');
  document.getElementById('tide-color-note').classList.remove('visible');
}

function showTideColors(){
  document.getElementById('tide-color-title').classList.add('visible');
  document.getElementById('tide-color-grid').classList.add('visible');
  document.getElementById('tide-color-note').classList.remove('visible');
}

function buildTideColorGrid(){
  document.getElementById('tide-color-title').textContent=t('tideColorTitle');
  document.getElementById('tide-color-note').textContent=t('tideColorNote');
  const grid=document.getElementById('tide-color-grid');
  const labels=t('tideColors');
  grid.innerHTML='';
  TIDE_COLORS.forEach(color=>{
    const btn=document.createElement('button');
    btn.className='tide-color-choice';
    btn.type='button';
    btn.dataset.id=color.id;
    btn.textContent=labels[color.id];
    btn.title=labels[color.id];
    btn.setAttribute('aria-label',labels[color.id]);
    btn.style.setProperty('--cr',color.rgb);
    btn.addEventListener('click',()=>{
      selectedTideColor=color.id;
      createDailyIntent(selectedIntentId||'usual',selectedTideColor);
      showQuestion();
    });
    grid.appendChild(btn);
  });
}

function tideColorById(id){
  return TIDE_COLORS.find(color=>color.id===id)||null;
}

function applyTideColor(id){
  const color=tideColorById(id);
  const panel=document.getElementById('modal');
  panel.style.setProperty('--tide-rgb',color?.rgb||'82,128,170');
  panel.style.setProperty('--tide-alpha',color?'.3':'.035');
  panel.style.setProperty('--tide-border',color?'.48':'.12');
  panel.style.setProperty('--tide-wash',color?'.075':'.02');
}

function createDailyIntent(id,colorId=null){
  const intent=DAILY_INTENT_OPTIONS.find(item=>item.id===id)||{id:'usual',categories:null};
  const color=tideColorById(colorId);
  dailyIntent={
    date:todayStr(),
    mode:intent.id,
    categories:intent.categories,
    minDepth:intent.minDepth,
    maxDepth:intent.maxDepth,
    surprise:!!intent.surprise,
    useProfile:intent.id==='usual',
    colorId:color?.id||null,
    color:color?.color||null,
    colorRgb:color?.rgb||null
  };
  saveDailyIntent();
  applyTideColor(dailyIntent.colorId);
}

function weightedPick(items){
  const total=items.reduce((sum,item)=>sum+Math.max(0.1,item.weight||1),0);
  let roll=Math.random()*total;
  for(const item of items){
    roll-=Math.max(0.1,item.weight||1);
    if(roll<=0) return item.value;
  }
  return items[items.length-1]?.value;
}

function topProfileCategories(){
  return Object.entries(userProfile?.scores||defaultScores())
    .sort((a,b)=>b[1]-a[1])
    .slice(0,4)
    .map(([cat])=>cat);
}

function allowedNicheCats(){
  return new Set([...(userProfile?.categories||[]),...topProfileCategories(),...(dailyIntent?.categories||[])]);
}

function canUseQuestion(q,cats=allowedNicheCats()){
  return !q.niche||q.category.some(cat=>cats.has(cat));
}

function depthFits(q,intent=dailyIntent){
  if(!intent) return true;
  if(intent.minDepth&&q.depth<intent.minDepth) return false;
  if(intent.maxDepth&&q.depth>intent.maxDepth) return false;
  return true;
}

function daysBetween(a,b){
  const start=new Date(a+'T00:00:00');
  const end=new Date(b+'T00:00:00');
  return Math.floor((end-start)/86400000);
}

function pickQuestion(){
  if(!userProfile) createProfileFromPrefs([]);
  const today=todayStr();
  const history=userProfile.questionHistory||{};
  const coolingIds=Object.entries(history)
    .filter(([,date])=>daysBetween(date,today)<QUESTION_COOLDOWN_DAYS)
    .map(([id])=>id);
  const seen=new Set(coolingIds);
  const universal=QUESTION_BANK.filter(q=>!q.niche);
  const highCats=topProfileCategories();
  const adjacent=[...new Set(highCats.flatMap(cat=>ADJACENT_CATEGORIES[cat]||[]))];
  const nicheCats=allowedNicheCats();
  const mode=Math.random();
  let candidates;

  if(dailyIntent?.surprise){
    candidates=universal;
  }else if(dailyIntent?.categories&&mode<0.6){
    candidates=QUESTION_BANK.filter(q=>q.category.some(cat=>dailyIntent.categories.includes(cat))&&depthFits(q)&&canUseQuestion(q,nicheCats));
  }else if(mode<0.85){
    candidates=QUESTION_BANK.filter(q=>q.category.some(cat=>highCats.includes(cat))&&canUseQuestion(q,nicheCats));
  }else{
    candidates=QUESTION_BANK.filter(q=>q.category.some(cat=>adjacent.includes(cat))&&!q.niche);
  }

  candidates=candidates.filter(q=>!seen.has(q.id));
  if(candidates.length===0) candidates=QUESTION_BANK.filter(q=>canUseQuestion(q,nicheCats)&&depthFits(q));
  if(candidates.length===0) candidates=universal;

  const preferredDepth=userProfile.preferredDepth||3;
  const q=weightedPick(candidates.map(q=>({
    value:q,
    weight:1/(1+Math.abs(q.depth-preferredDepth))
  })))||QUESTION_BANK[0];

  currentQMeta=q;
  currentQMeta.wasAskedBefore=!!history[q.id];
  const previous=lights.slice().reverse().find(light=>light.questionId===q.id&&light.answer);
  currentQMeta.previousAnswer=previous?.answer||'';
  history[q.id]=today;
  userProfile.questionHistory=history;
  userProfile.seenQuestionIds=[...(userProfile.seenQuestionIds||[]),q.id].slice(-24);
  saveProfile();
  return q;
}

function showQuestion(){
  const firstQDone=localStorage.getItem(SK.firstQ);
  if(!userProfile) createProfileFromPrefs([]);
  currentQMeta=(!firstQDone&&lights.length===0)?null:pickQuestion();
  currentQ=currentQMeta?currentQMeta[currentLang]:t('firstQ');
  document.getElementById('question-text').textContent='\u201c'+currentQ+'\u201d';
  const repeatNote=document.getElementById('repeat-note');
  const previousAnswer=document.getElementById('previous-answer');
  if(currentQMeta?.wasAskedBefore){
    repeatNote.textContent=currentLang==='zh'?'这片海以前也问过这个问题。':'the sea has asked this before.';
    repeatNote.classList.add('visible');
    if(currentQMeta.previousAnswer){
      previousAnswer.textContent=currentLang==='zh'?`上一次你写下：${currentQMeta.previousAnswer}`:`last time, you wrote: ${currentQMeta.previousAnswer}`;
      previousAnswer.classList.add('visible');
    }else{
      previousAnswer.classList.remove('visible');
      previousAnswer.textContent='';
    }
  }else{
    repeatNote.classList.remove('visible');
    previousAnswer.classList.remove('visible');
    repeatNote.textContent='';
    previousAnswer.textContent='';
  }
  document.getElementById('answer-input').value='';
  document.getElementById('custom-feeling-input').value='';
  document.getElementById('answer-input').style.display='block';
  document.getElementById('submit-btn').style.display='block';
  document.getElementById('skip-question-btn').style.display=currentQMeta?'block':'none';
  selectedEmo=null; selectedFeelingLabel=''; buildEmotionGrid();
  document.getElementById('pref-intro').classList.remove('visible');
  document.getElementById('intent-intro').classList.remove('visible');
  document.getElementById('question-inner').style.display='block';
}

function updateProfileAfterAnswer(light){
  if(!userProfile||!currentQMeta||light.quiet) return;
  const length=(light.answer||'').length;
  const emotionWeight=['dark','nostalgic','confused','hopeful'].includes(light.emotion)?0.35:0.15;
  const answerWeight=length>120?0.7:length>40?0.35:length>0?0.12:0;
  const delta=emotionWeight+answerWeight;

  currentQMeta.category.forEach(cat=>{
    userProfile.scores[cat]=(userProfile.scores[cat]||0)+delta;
  });
  userProfile.preferredDepth=Math.round((userProfile.preferredDepth*4+currentQMeta.depth)/5);
  saveProfile();
}

// ── MODAL ─────────────────────────────────────────────────────────────────────

function openModal(x,y){
  pendingX=x; pendingY=y;
  applyTideColor(dailyIntent?.colorId||null);
  const inner=document.getElementById('modal-inner');
  const limitInner=document.getElementById('limit-inner');
  const optionalInner=document.getElementById('optional-inner');
  if(todayCount>=DAILY_LIMIT){
    document.getElementById('limit-msg').innerHTML=t('limitMsg',todayCount);
    inner.style.display='none'; optionalInner.style.display='none'; limitInner.style.display='block';
  } else if(todayCount>=DAILY_DEFAULT&&optionalSecondDeclined){
    document.getElementById('limit-msg').innerHTML=t('limitMsg',todayCount);
    inner.style.display='none'; optionalInner.style.display='none'; limitInner.style.display='block';
  } else if(todayCount>=DAILY_DEFAULT&&!optionalSecondOpen){
    inner.style.display='none'; limitInner.style.display='none'; optionalInner.style.display='block';
  } else {
    inner.style.display='block'; limitInner.style.display='none'; optionalInner.style.display='none';
    if(!userProfile) createProfileFromPrefs([]);
    if(localStorage.getItem(SK.firstQ)&&!dailyIntent){
      applyTideColor(null);
      document.getElementById('pref-intro').classList.remove('visible');
      document.getElementById('intent-intro').classList.add('visible');
      document.getElementById('question-inner').style.display='none';
      buildDailyIntentGrid();
    }else{
      showQuestion();
    }
  }
  document.getElementById('overlay').classList.add('visible');
}

function closeModal(){ document.getElementById('overlay').classList.remove('visible'); }
document.getElementById('close-btn').addEventListener('click',closeModal);
document.getElementById('overlay').addEventListener('click',e=>{if(e.target===document.getElementById('overlay'))closeModal();});
document.getElementById('pref-start-btn').addEventListener('click',()=>{
  const selected=[...document.querySelectorAll('#pref-grid .pref-chip.active')].map(btn=>btn.dataset.id);
  createProfileFromPrefs(selected);
  showQuestion();
});
document.getElementById('intent-start-btn').addEventListener('click',()=>{
  const selected=document.querySelector('#intent-grid .pref-chip.active')?.dataset.id||'usual';
  createDailyIntent(selected);
  showQuestion();
});
document.getElementById('optional-yes-btn').addEventListener('click',()=>{
  optionalSecondOpen=true;
  showQuestion();
  document.getElementById('optional-inner').style.display='none';
  document.getElementById('modal-inner').style.display='block';
});
document.getElementById('optional-no-btn').addEventListener('click',()=>{
  optionalSecondOpen=false;
  optionalSecondDeclined=true;
  updateHint();
  closeModal();
  setTimeout(showEndOfNight,420);
});
document.getElementById('skip-question-btn').addEventListener('click',()=>{
  showQuestion();
});

// ── SUBMIT ────────────────────────────────────────────────────────────────────

function finishLight(light,isFirst){
  lights.push(light); todayCount++;
  updateProfileAfterAnswer(light);
  optionalSecondOpen=false;
  saveState(); localStorage.setItem(SK.firstQ,'1');
  const overlay=document.getElementById('overlay');
  const panel=document.getElementById('modal');
  panel.classList.add('sinking');
  setTimeout(()=>{
    renderLight(light,true);
    panel.classList.remove('sinking');
    closeModal(); checkBottle(); updateCounter(); updateHint();
    setTimeout(()=>showToast(isFirst?t('firstLightMsg'):pickFb()),500);
    if(todayCount>=DAILY_LIMIT) setTimeout(showEndOfNight,1300);
  },420);
}

function chosenFeeling(){
  const customWord=document.getElementById('custom-feeling-input').value.trim();
  if(customWord){
    saveCustomFeeling(customWord);
    return {visualType:'custom',feelingLabel:customWord};
  }
  const visualType=selectedEmo==='custom'?'custom':selectedEmo;
  const feelingLabel=selectedEmo==='custom'?(customWord||selectedFeelingLabel):selectedFeelingLabel;
  if(!visualType||!feelingLabel) return null;
  if(selectedEmo==='custom') saveCustomFeeling(feelingLabel);
  return {visualType,feelingLabel};
}

function makeLight({answer='',quiet=false,noFeeling=false}={}){
  const chosen=chosenFeeling();
  const visualType=noFeeling?'unclear':(chosen?.visualType||'unclear');
  const em=EMOTIONS.find(e=>e.id===visualType)||EMOTIONS.find(e=>e.id==='unclear');
  const feelingLabel=noFeeling?t('noFeelingBtn'):(chosen?.feelingLabel||(quiet?t('quietFeeling'):t('noFeelingBtn')));
  return {
    id:Date.now(), x:pendingX, y:pendingY,
    emotion:visualType,
    visualType,
    feeling:feelingLabel,
    answer,
    question:currentQ,
    questionId:currentQMeta?.id||'first',
    questionCategories:currentQMeta?.category||['self'],
    questionDepth:currentQMeta?.depth||3,
    symbol:em.symbols[Math.floor(Math.random()*em.symbols.length)],
    date:todayStr(),
    tideColorId:dailyIntent?.colorId||null,
    tideColor:dailyIntent?.color||null,
    tideColorRgb:dailyIntent?.colorRgb||null,
    quiet,
    noFeeling
  };
}

document.getElementById('submit-btn').addEventListener('click',()=>{
  const answer=document.getElementById('answer-input').value.trim();
  const chosen=chosenFeeling();
  if(!answer&&!chosen){showToast(currentLang==='zh'?'写一点，或选一种感觉……':'write something, or choose a feeling…');return;}
  const light={
    ...makeLight({answer}),
    quiet:false
  };
  const isFirst=lights.length===0;
  finishLight(light,isFirst);
});

document.getElementById('no-feeling-btn').addEventListener('click',()=>{
  const answer=document.getElementById('answer-input').value.trim();
  const chosen=chosenFeeling();
  if(chosen){
    const light=makeLight({answer,quiet:true});
    finishLight(light,lights.length===0);
    return;
  }
  const em=EMOTIONS.find(e=>e.id==='unclear');
  const light={
    id:Date.now(), x:pendingX, y:pendingY,
    emotion:'unclear',
    visualType:'unclear',
    feeling:t('noFeelingBtn'),
    answer,
    question:currentQ,
    questionId:currentQMeta?.id||'first',
    questionCategories:currentQMeta?.category||['self'],
    questionDepth:currentQMeta?.depth||3,
    symbol:em.symbols[Math.floor(Math.random()*em.symbols.length)],
    date:todayStr(),
    tideColorId:dailyIntent?.colorId||null,
    tideColor:dailyIntent?.color||null,
    tideColorRgb:dailyIntent?.colorRgb||null,
    quiet:true,
    noFeeling:true
  };
  finishLight(light,lights.length===0);
});

function pickFb(){ const fb=t('lightFeedback'); return fb[Math.floor(Math.random()*fb.length)]; }

// ── CANVAS TAP ────────────────────────────────────────────────────────────────

document.getElementById('canvas').addEventListener('click',e=>{
  if(e.target.closest('.light')||e.target.closest('#bottle')) return;
  if(!onboardingDone&&isFirstVisit) return;
  spawnRipple(e.clientX,e.clientY);
  const r=document.getElementById('canvas').getBoundingClientRect();
  openModal((e.clientX-r.left)/r.width,(e.clientY-r.top)/r.height);
});

// ── MEMORY ────────────────────────────────────────────────────────────────────

function openMemory(light){
  activeMemoryLight=light;
  const em=EMOTIONS.find(e=>e.id===(light.visualType||light.emotion))||EMOTIONS[4];
  const d=new Date(typeof light.date==='string'&&light.date.length===10?light.date+'T12:00:00':light.id);
  const fmt=new Intl.DateTimeFormat(currentLang==='zh'?'zh-CN':'en-US',{month:'long',day:'numeric',year:'numeric'}).format(d);
  const age=daysBetween(light.date||todayStr(),todayStr());
  document.getElementById('mem-date').textContent=age>0?`${t('tideSurfaced',age)} · ${fmt}`:fmt;
  document.getElementById('mem-question').textContent=light.question?'\u201c'+light.question+'\u201d':'—';
  const ma=document.getElementById('mem-answer');
  if(light.answer){ ma.textContent=light.answer; ma.classList.remove('empty'); }
  else { ma.textContent=t('noAnswer'); ma.classList.add('empty'); }
  const tag=document.getElementById('mem-emotion-tag');
  tag.textContent=light.feeling||em[currentLang];
  tag.style.color=em.color; tag.style.borderColor=em.color+'55';
  tag.style.background='rgba('+em.rgb+',.1)';
  document.getElementById('mem-bottle-btn').style.display=light.answer&&!light.bottledAt?'block':'none';
  document.getElementById('mem-overlay').classList.add('visible');
}
function closeMemory(){ document.getElementById('mem-overlay').classList.remove('visible'); activeMemoryLight=null; }
document.getElementById('mem-x').addEventListener('click',closeMemory);
document.getElementById('mem-close-btn').addEventListener('click',closeMemory);
document.getElementById('mem-overlay').addEventListener('click',e=>{if(e.target===document.getElementById('mem-overlay'))closeMemory();});
document.getElementById('mem-bottle-btn').addEventListener('click',()=>{
  if(!activeMemoryLight?.answer) return;
  const choices=[7,30,Math.floor(Math.random()*24)+14];
  const days=choices[Math.floor(Math.random()*choices.length)];
  const due=new Date();
  due.setDate(due.getDate()+days);
  const dueDate=`${due.getFullYear()}-${String(due.getMonth()+1).padStart(2,'0')}-${String(due.getDate()).padStart(2,'0')}`;
  futureBottles.push({
    id:'fb_'+Date.now(),
    createdDate:todayStr(),
    dueDate,
    answer:activeMemoryLight.answer,
    question:activeMemoryLight.question,
    feeling:activeMemoryLight.feeling
  });
  activeMemoryLight.bottledAt=todayStr();
  saveState();
  saveFutureBottles();
  checkBottle();
  showToast(t('laterBottleSaved'));
  closeMemory();
});

function topFeelings(items){
  const counts={};
  items.forEach(light=>{
    if(light.feeling) counts[light.feeling]=(counts[light.feeling]||0)+1;
  });
  return Object.entries(counts)
    .sort((a,b)=>b[1]-a[1])
    .slice(0,3)
    .map(([feeling])=>feeling)
    .join(' / ');
}

function renderTideStats(){
  const today=todayStr();
  const seven=lights.filter(light=>light.date&&daysBetween(light.date,today)<7).length;
  const monthly=lights.filter(light=>light.date&&monthStr(light.date)===monthStr()).length;
  const oldest=lights.length?Math.max(...lights.map(light=>light.date?daysBetween(light.date,today):0)):0;
  const stats=[
    t('tideLast7',seven),
    t('tideMonth',monthly),
    t('tideFeelings',topFeelings(lights)),
    t('tideOldest',oldest)
  ];
  document.getElementById('tide-stats').innerHTML=stats.map(line=>`<span>${line}</span>`).join('');
}

function openTide(){
  renderTideStats();
  document.getElementById('tide-overlay').classList.add('visible');
}

function closeTide(){
  document.getElementById('tide-overlay').classList.remove('visible');
}

function surfaceRandomOldLight(){
  const oldLights=lights.filter(light=>light.date&&daysBetween(light.date,todayStr())>0);
  if(oldLights.length===0){
    showToast(t('tideEmpty'));
    return;
  }
  closeTide();
  const light=oldLights[Math.floor(Math.random()*oldLights.length)];
  openMemory(light);
}

document.getElementById('tide-btn').addEventListener('click',e=>{e.stopPropagation();openTide();});
document.getElementById('tide-x').addEventListener('click',closeTide);
document.getElementById('tide-close-btn').addEventListener('click',closeTide);
document.getElementById('tide-random-btn').addEventListener('click',surfaceRandomOldLight);
document.getElementById('tide-overlay').addEventListener('click',e=>{if(e.target===document.getElementById('tide-overlay'))closeTide();});

// ── BOTTLE ────────────────────────────────────────────────────────────────────

function checkBottle(){
  const hasDue=futureBottles.some(b=>b.dueDate<=todayStr());
  const bottle=document.getElementById('bottle');
  if(hasDue) bottle.classList.add('visible');
  else bottle.classList.remove('visible');
}
document.getElementById('bottle').addEventListener('click',()=>{
  const dueIndex=futureBottles.findIndex(b=>b.dueDate<=todayStr());
  if(dueIndex>-1){
    const bottle=futureBottles.splice(dueIndex,1)[0];
    saveFutureBottles();
    const days=Math.max(1,daysBetween(bottle.createdDate,todayStr()));
    document.getElementById('bottle-message').textContent=t('returnedBottleBody',bottle.answer);
    document.getElementById('bottle-source').textContent=t('returnedBottleTitle',days);
    document.getElementById('bottle-overlay').classList.add('visible');
    return;
  }
  const p=BOTTLE_MSGS[Math.floor(Math.random()*BOTTLE_MSGS.length)];
  document.getElementById('bottle-message').textContent='\u201c'+p.text+'\u201d';
  document.getElementById('bottle-source').textContent=p.src;
  document.getElementById('bottle-overlay').classList.add('visible');
});
document.getElementById('bottle-close-btn').addEventListener('click',()=>document.getElementById('bottle-overlay').classList.remove('visible'));
document.getElementById('bottle-overlay').addEventListener('click',e=>{if(e.target===document.getElementById('bottle-overlay'))document.getElementById('bottle-overlay').classList.remove('visible');});

// ── COUNTER + HINT ────────────────────────────────────────────────────────────

function updateCounter(){
  const remaining=optionalSecondDeclined?0:Math.max(0,DAILY_LIMIT-todayCount);
  document.getElementById('day-counter').textContent=t('counter',remaining);
}
function updateHint(){
  const h=document.getElementById('hint');
  const rem=Math.max(0,DAILY_LIMIT-todayCount);
  if(rem===DAILY_LIMIT){ h.textContent=t('hintInitial'); h.classList.remove('hidden'); }
  else if(rem===1&&!optionalSecondDeclined){ h.textContent=t('hintOneLeft'); h.classList.remove('hidden'); }
  else if(rem===1&&optionalSecondDeclined){ h.textContent=t('hintDone'); h.classList.remove('hidden'); }
  else if(rem===0){ h.textContent=t('hintDone'); h.classList.remove('hidden'); }
}

// ── END OF NIGHT ──────────────────────────────────────────────────────────────

function unique(items){
  return [...new Set(items.filter(Boolean))];
}

function topCategoriesFor(lightsForToday){
  const counts={};
  lightsForToday.forEach(light=>{
    (light.questionCategories||[]).forEach(cat=>{
      counts[cat]=(counts[cat]||0)+1;
    });
  });
  if(dailyIntent?.mode==='unknown') counts.unknown=(counts.unknown||0)+1;
  return Object.entries(counts)
    .sort((a,b)=>b[1]-a[1])
    .slice(0,3)
    .map(([cat])=>CATEGORY_LABELS[currentLang][cat]||cat);
}

function closingLineFor(lightsForToday,cats,avgDepth,totalAnswerLength){
  const rawCats=cats;
  const hasUnknown=rawCats.some(cat=>['unknown','strange'].includes(cat));
  const hasRelationship=rawCats.includes('relationship');
  if(totalAnswerLength<20) return currentLang==='zh'?'没说太多也没关系，这盏灯已经在这里了。':'Not much had to be said. The light is still here.';
  if(totalAnswerLength>220) return currentLang==='zh'?'这盏灯停留得久了一点。':'This light stayed a little longer.';
  if(hasUnknown&&avgDepth>=3) return currentLang==='zh'?'黑暗不用一次看完。':'The dark does not have to be seen all at once.';
  if(hasRelationship) return currentLang==='zh'?'有些回声，不只属于你一个人。':'Some echoes do not belong to you alone.';
  if(avgDepth<=2) return currentLang==='zh'?'今天已经够了，轻一点也很好。':'This is enough for today. Soft counts, too.';
  return currentLang==='zh'?'明天也许可以去另一片黑暗。':'Tomorrow can belong to another part of the dark.';
}

function nightSummary(){
  const todays=lights.filter(light=>light.date===todayStr()).slice(-DAILY_LIMIT);
  if(todays.length===0) return t('endNight');

  const feelings=unique(todays.map(light=>light.feeling)).slice(0,3);
  const rawCats=unique(todays.flatMap(light=>light.questionCategories||[]));
  if(dailyIntent?.mode==='unknown') rawCats.push('unknown');
  const cats=topCategoriesFor(todays);
  const avgDepth=todays.reduce((sum,light)=>sum+(light.questionDepth||3),0)/todays.length;
  const totalAnswerLength=todays.reduce((sum,light)=>sum+(light.answer||'').length,0);
  const line3=closingLineFor(todays,rawCats,avgDepth,totalAnswerLength);

  if(currentLang==='zh'){
    return [
      `今天的海留下了：${feelings.join('、') || '说不清'}。`,
      `它更靠近：${cats.join(' / ') || '自己'}。`,
      line3
    ];
  }
  return [
    `Today left: ${feelings.join(', ') || 'something unclear'}.`,
    `It drifted toward: ${cats.join(' / ') || 'self'}.`,
    line3
  ];
}

function showEndOfNight(){
  const msgs=nightSummary();
  document.getElementById('ne-l1').textContent=msgs[0];
  document.getElementById('ne-l2').textContent=msgs[1];
  document.getElementById('ne-l3').textContent=msgs[2]||'';
  const en=document.getElementById('night-end');
  en.style.setProperty('--end-rgb',dailyIntent?.colorRgb||'180,200,230');
  en.classList.add('show');
  setTimeout(()=>en.classList.remove('show'),6200);
}

// ── TOAST ─────────────────────────────────────────────────────────────────────

let toastTmo;
function showToast(msg){
  const el=document.getElementById('toast');
  el.textContent=msg; el.classList.add('show');
  clearTimeout(toastTmo); toastTmo=setTimeout(()=>el.classList.remove('show'),2700);
}

function showSeaCondition(){
  const hasOld=lights.some(light=>light.date&&daysBetween(light.date,todayStr())>0);
  const available=Math.max(0,DAILY_LIMIT-todayCount);
  const h=document.getElementById('hint');
  h.textContent=t('seaCondition',hasOld,available);
  h.classList.remove('hidden');
}

// ── DEV PANEL ─────────────────────────────────────────────────────────────────

let devTaps=0, devTimer;
document.getElementById('title').addEventListener('click',()=>{
  devTaps++; clearTimeout(devTimer);
  document.getElementById('title').classList.add('dev-glow');
  devTimer=setTimeout(()=>{devTaps=0;document.getElementById('title').classList.remove('dev-glow');},2800);
  if(devTaps>=5){
    devTaps=0; clearTimeout(devTimer);
    document.getElementById('title').classList.remove('dev-glow');
    document.getElementById('dev-panel').classList.toggle('open');
  }
});
document.getElementById('dev-close').addEventListener('click',()=>document.getElementById('dev-panel').classList.remove('open'));
document.getElementById('dev-reset').addEventListener('click',()=>{
  [SK.lights,SK.date,SK.count,SK.visited,SK.firstQ,SK.profile,SK.dailyIntent,SK.customFeelings,SK.futureBottles].forEach(k=>localStorage.removeItem(k));
  location.reload();
});
document.getElementById('dev-resetday').addEventListener('click',()=>{
  todayCount=0; localStorage.setItem(SK.count,'0'); localStorage.setItem(SK.date,todayStr());
  localStorage.removeItem(SK.dailyIntent); dailyIntent=null; optionalSecondOpen=false; optionalSecondDeclined=false;
  updateCounter(); updateHint();
  document.getElementById('dev-panel').classList.remove('open');
  showToast("today's count reset.");
});
document.getElementById('dev-add6').addEventListener('click',()=>{
  for(let i=0;i<6;i++){
    const em=EMOTIONS[i%EMOTIONS.length];
    const l={id:Date.now()+i,x:.12+Math.random()*.76,y:.18+Math.random()*.64,
      emotion:em.id,answer:'',question:'',
      visualType:em.id,feeling:em[currentLang],
      symbol:em.symbols[Math.floor(Math.random()*em.symbols.length)],date:todayStr()};
    lights.push(l); renderLight(l,false);
  }
  saveState(); checkBottle();
  document.getElementById('dev-panel').classList.remove('open');
  showToast('6 lights added.');
});
document.getElementById('dev-bottle').addEventListener('click',()=>{
  document.getElementById('dev-panel').classList.remove('open');
  const dueDate=todayStr();
  futureBottles.push({
    id:'fb_dev_'+Date.now(),
    createdDate:todayStr(),
    dueDate,
    answer:currentLang==='zh'?'这是一个从今天漂回来的测试瓶。':'This is a test bottle drifting back today.',
    question:'',
    feeling:''
  });
  saveFutureBottles();
  checkBottle();
  showToast('test bottle is ready.');
});

// ── INIT ──────────────────────────────────────────────────────────────────────

loadState();
applyLanguage();
createStars();
renderAllLights();
updateCounter();
updateHint();
checkBottle();
resetIdle();
showSeaCondition();

if(isFirstVisit){
  startOnboarding();
}else{
  document.getElementById('onboarding').style.display='none';
  onboardingDone=true;
}