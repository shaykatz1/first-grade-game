const languageLevels = [
  { id: 1, title: "שָׂפָה 1", prompt: "אֵיזוֹ אוֹת פּוֹתַחַת אֶת 'בַּיִת'?", options: ["בּ", "מ", "שׁ"], correct: 0 },
  { id: 2, title: "שָׂפָה 2", prompt: "אֵיזוֹ מִילָה הִיא חַיָּה?", options: ["כֶּלֶב", "כִּיסֵּא", "סֵפֶר"], correct: 0 },
  { id: 3, title: "שָׂפָה 3", prompt: "אֵיזוֹ אוֹת סוֹגֶרֶת אֶת 'יָם'?", options: ["ם", "ן", "ת"], correct: 0 },
  { id: 4, title: "שָׂפָה 4", prompt: "אֵיזוֹ מִילָה מַתְחִילָה בְּ-מ?", options: ["מַיִם", "דָּג", "סוּס"], correct: 0 },
  { id: 5, title: "שָׂפָה 5", prompt: "אֵיזֶה זוּג חָרִיזִים?", options: ["כַּדּוּר-סִפּוּר", "שֻׁלְחָן-חָלוֹן", "כִּסֵּא-סֵפֶר"], correct: 0 },
  { id: 6, title: "שָׂפָה 6", prompt: "אֵיזוֹ מִילָה נִכְתֶּבֶת נָכוֹן?", options: ["פֶּרַח", "פָּרַח", "פֶרַח"], correct: 0 },
  { id: 7, title: "שָׂפָה 7", prompt: "מַה הַהֵפֶךְ שֶׁל 'גָּדוֹל'?", options: ["קָטָן", "רָחָב", "כָּבֵד"], correct: 0 },
  { id: 8, title: "שָׂפָה 8", prompt: "אֵיזוֹ אוֹת בָּאָה אַחֲרֵי נ?", options: ["ס", "מ", "ר"], correct: 0 },
  { id: 9, title: "שָׂפָה 9", prompt: "אֵיזוֹ מִילָה בְּרַבִּים?", options: ["יְלָדִים", "יֶלֶד", "יַלְדָּה"], correct: 0 },
  { id: 10, title: "שָׂפָה 10", prompt: "אֵיזוֹ מִילָה קְשׁוּרָה לְבֵית סֵפֶר?", options: ["מַחְבֶּרֶת", "גְּלִידָה", "כַּפִּית"], correct: 0 },
  { id: 11, title: "שָׂפָה 11", prompt: "אֵיזוֹ מִילָה הִיא פֹּעַל?", options: ["רוֹץ", "כִּסֵּא", "חָכָם"], correct: 0 },
  { id: 12, title: "שָׂפָה 12", prompt: "אֵיזוֹ מִילָה מַתְחִילָה בְּ-ל?", options: ["לֶחֶם", "דֶּלֶת", "מִטָּה"], correct: 0 },
  { id: 13, title: "שָׂפָה 13", prompt: "אֵיזוֹ מִילָה קְצָרָה יוֹתֵר?", options: ["דָּג", "מַחְבֶּרֶת", "מִטְבָּח"], correct: 0 },
  { id: 14, title: "שָׂפָה 14", prompt: "אֵיזֶה מִשְׁפָּט נָכוֹן?", options: ["אֲנִי אוֹהֵב לִקְרוֹא.", "אֲנִי אוֹהֵב לִקְרֹו.", "אֲנִי לִקְרוֹא אוֹהֵב."], correct: 0 },
  { id: 15, title: "שָׂפָה 15", prompt: "אֵיזוֹ אוֹת פּוֹתַחַת אֶת 'תַּפּוּחַ'?", options: ["תּ", "ד", "שׂ"], correct: 0 },
  { id: 16, title: "שָׂפָה 16", prompt: "אֵיזוֹ מִילָה שַׁיֶּכֶת לַבַּיִת?", options: ["מִטָּה", "אוֹטוֹבּוּס", "תַּרְנְגוֹל"], correct: 0 },
  { id: 17, title: "שָׂפָה 17", prompt: "אֵיזוֹ מִילָה מַתְחִילָה בְּ-שׁ?", options: ["שֶׁמֶשׁ", "חָלוֹן", "פֶּרַח"], correct: 0 },
  { id: 18, title: "שָׂפָה 18", prompt: "אֵיזוֹ מִילָה הִיא שֵׁם צֶבַע?", options: ["יָרֹק", "יֶלֶד", "כִּסֵּא"], correct: 0 },
  { id: 19, title: "שָׂפָה 19", prompt: "אֵיזוֹ מִילָה מְסַיֶּמֶת בְּ-ת?", options: ["דֶּלֶת", "סוּס", "תַּפּוּחַ"], correct: 0 },
  { id: 20, title: "שָׂפָה 20", prompt: "אֵיזוֹ אוֹת פּוֹתַחַת אֶת 'סֵפֶר'?", options: ["ס", "ב", "כ"], correct: 0 },
  { id: 21, title: "שָׂפָה 21", prompt: "אֵיזוֹ מִילָה הִיא מַאֲכָל?", options: ["לֶחֶם", "חָלוֹן", "עֵפֶר"], correct: 0 },
  { id: 22, title: "שָׂפָה 22", prompt: "אֵיזֶה זוּג חָרִיזִים?", options: ["חוֹל-כֹּל", "כִּסֵּא-כַּפִּית", "סֵפֶר-שֻׁלְחָן"], correct: 0 },
  { id: 23, title: "שָׂפָה 23", prompt: "אֵיזוֹ אוֹת בָּאָה אַחֲרֵי כ?", options: ["ל", "י", "מ"], correct: 0 },
  { id: 24, title: "שָׂפָה 24", prompt: "אֵיזוֹ מִילָה הִיא שֵׁם חֵפֶץ?", options: ["כַּדּוּר", "רוֹץ", "גָּדוֹל"], correct: 0 },
  { id: 25, title: "שָׂפָה 25", prompt: "אֵיזוֹ מִילָה מַתְחִילָה בְּ-ק?", options: ["קֶסֶם", "מֶלֶךְ", "סוּס"], correct: 0 },
  { id: 26, title: "שָׂפָה 26", prompt: "אֵיזוֹ מִילָה בְּרַבִּים?", options: ["סְפָרִים", "סֵפֶר", "יֶלֶד"], correct: 0 },
  { id: 27, title: "שָׂפָה 27", prompt: "אֵיזוֹ מִילָה קְשׁוּרָה לַגּוּף?", options: ["יָד", "סִיר", "כִּיסֵּא"], correct: 0 },
  { id: 28, title: "שָׂפָה 28", prompt: "אֵיזוֹ אוֹת סוֹגֶרֶת אֶת 'דָּג'?", options: ["ג", "ד", "ב"], correct: 0 },
  { id: 29, title: "שָׂפָה 29", prompt: "אֵיזוֹ מִילָה הִיא פֹּעַל?", options: ["אוֹכֵל", "אוֹכֶל", "אֹכֶלֶת"], correct: 0 },
  { id: 30, title: "שָׂפָה 30", prompt: "אֵיזֶה מִשְׁפָּט נָכוֹן?", options: ["הַיֶּלֶד קוֹרֵא סֵפֶר.", "הַיֶּלֶד קוֹרֵה סֵפֶר.", "הַיֶּלֶד סֵפֶר קוֹרֵא."], correct: 0 },
  { id: 31, title: "שָׂפָה 31", prompt: "אֵיזוֹ מִילָה מַתְחִילָה בְּ-ט?", options: ["טַוָּס", "לָוִיתָן", "זְמַן"], correct: 0 },
  { id: 32, title: "שָׂפָה 32", prompt: "אֵיזוֹ מִילָה קְשׁוּרָה לַכִּתָּה?", options: ["לוּחַ", "מִזְרָק", "מַגֶּבֶת"], correct: 0 },
  { id: 33, title: "שָׂפָה 33", prompt: "אֵיזוֹ אוֹת בָּאָה אַחֲרֵי ר?", options: ["שׁ", "ק", "ת"], correct: 0 },
  { id: 34, title: "שָׂפָה 34", prompt: "אֵיזוֹ מִילָה הִיא שֵׁם חַיָּה?", options: ["צָב", "צַב", "צֶבַע"], correct: 0 },
  { id: 35, title: "שָׂפָה 35", prompt: "אֵיזוֹ מִילָה מְסַיֶּמֶת בְּ-ם?", options: ["יָם", "יוֹם", "יָדוֹ"], correct: 0 }
];

const mathLevels = [
  { id: 1, title: "חֶשְׁבּוֹן 1", prompt: "1 + 1 = ?", options: ["1", "2", "3"], correct: 1 },
  { id: 2, title: "חֶשְׁבּוֹן 2", prompt: "🍎🍎🍎 = ?", options: ["2", "3", "4"], correct: 1 },
  { id: 3, title: "חֶשְׁבּוֹן 3", prompt: "5 - 2 = ?", options: ["2", "3", "4"], correct: 1 },
  { id: 4, title: "חֶשְׁבּוֹן 4", prompt: "אֵיזֶה גָּדוֹל יוֹתֵר?", options: ["7", "4", "3"], correct: 0 },
  { id: 5, title: "חֶשְׁבּוֹן 5", prompt: "3 + 4 = ?", options: ["6", "7", "8"], correct: 1 },
  { id: 6, title: "חֶשְׁבּוֹן 6", prompt: "10 - 1 = ?", options: ["8", "9", "10"], correct: 1 },
  { id: 7, title: "חֶשְׁבּוֹן 7", prompt: "2, 4, 6, ...", options: ["7", "8", "9"], correct: 1 },
  { id: 8, title: "חֶשְׁבּוֹן 8", prompt: "2 + 2 + 2 = ?", options: ["4", "5", "6"], correct: 2 },
  { id: 9, title: "חֶשְׁבּוֹן 9", prompt: "🔺🔺🔺🔺 = ?", options: ["3", "4", "5"], correct: 1 },
  { id: 10, title: "חֶשְׁבּוֹן 10", prompt: "9 - 4 = ?", options: ["4", "5", "6"], correct: 1 },
  { id: 11, title: "חֶשְׁבּוֹן 11", prompt: "6 + 3 = ?", options: ["8", "9", "10"], correct: 1 },
  { id: 12, title: "חֶשְׁבּוֹן 12", prompt: "8 + 2 = ?", options: ["9", "10", "11"], correct: 1 },
  { id: 13, title: "חֶשְׁבּוֹן 13", prompt: "🟡🟡 + 🟡 = ?", options: ["2", "3", "4"], correct: 1 },
  { id: 14, title: "חֶשְׁבּוֹן 14", prompt: "7 - 3 = ?", options: ["3", "4", "5"], correct: 1 },
  { id: 15, title: "חֶשְׁבּוֹן 15", prompt: "אֵיזֶה קָטָן יוֹתֵר?", options: ["2", "5", "9"], correct: 0 },
  { id: 16, title: "חֶשְׁבּוֹן 16", prompt: "4 + 4 = ?", options: ["7", "8", "9"], correct: 1 },
  { id: 17, title: "חֶשְׁבּוֹן 17", prompt: "👟👟👟👟👟 = ?", options: ["4", "5", "6"], correct: 1 },
  { id: 18, title: "חֶשְׁבּוֹן 18", prompt: "12 - 2 = ?", options: ["9", "10", "11"], correct: 1 },
  { id: 19, title: "חֶשְׁבּוֹן 19", prompt: "5 + 5 = ?", options: ["9", "10", "11"], correct: 1 },
  { id: 20, title: "חֶשְׁבּוֹן 20", prompt: "3 + 6 = ?", options: ["8", "9", "10"], correct: 1 },
  { id: 21, title: "חֶשְׁבּוֹן 21", prompt: "⚽⚽⚽⚽⚽⚽ = ?", options: ["5", "6", "7"], correct: 1 },
  { id: 22, title: "חֶשְׁבּוֹן 22", prompt: "11 - 1 = ?", options: ["9", "10", "11"], correct: 1 },
  { id: 23, title: "חֶשְׁבּוֹן 23", prompt: "2 + 5 = ?", options: ["6", "7", "8"], correct: 1 },
  { id: 24, title: "חֶשְׁבּוֹן 24", prompt: "אֵיזֶה גָּדוֹל יוֹתֵר?", options: ["12", "9", "6"], correct: 0 },
  { id: 25, title: "חֶשְׁבּוֹן 25", prompt: "14 - 4 = ?", options: ["9", "10", "11"], correct: 1 },
  { id: 26, title: "חֶשְׁבּוֹן 26", prompt: "🍓🍓 + 🍓🍓 = ?", options: ["3", "4", "5"], correct: 1 },
  { id: 27, title: "חֶשְׁבּוֹן 27", prompt: "7 + 2 = ?", options: ["8", "9", "10"], correct: 1 },
  { id: 28, title: "חֶשְׁבּוֹן 28", prompt: "15 - 5 = ?", options: ["9", "10", "11"], correct: 1 },
  { id: 29, title: "חֶשְׁבּוֹן 29", prompt: "🟦🟦🟦 = ?", options: ["2", "3", "4"], correct: 1 },
  { id: 30, title: "חֶשְׁבּוֹן 30", prompt: "8 + 4 = ?", options: ["11", "12", "13"], correct: 1 },
  { id: 31, title: "חֶשְׁבּוֹן 31", prompt: "13 - 3 = ?", options: ["9", "10", "11"], correct: 1 },
  { id: 32, title: "חֶשְׁבּוֹן 32", prompt: "4 + 5 = ?", options: ["8", "9", "10"], correct: 1 },
  { id: 33, title: "חֶשְׁבּוֹן 33", prompt: "אֵיזֶה קָטָן יוֹתֵר?", options: ["6", "8", "10"], correct: 0 },
  { id: 34, title: "חֶשְׁבּוֹן 34", prompt: "16 - 6 = ?", options: ["9", "10", "11"], correct: 1 },
  { id: 35, title: "חֶשְׁבּוֹן 35", prompt: "9 + 1 = ?", options: ["9", "10", "11"], correct: 1 }
];

const tracks = {
  language: {
    label: "שָׂפָה",
    levelLabel: "שַׁלְבֵי שָׂפָה",
    levels: languageLevels
  },
  math: {
    label: "חֶשְׁבּוֹן",
    levelLabel: "שַׁלְבֵי חֶשְׁבּוֹן",
    levels: mathLevels
  }
};

const storageKey = "first-grade-progress-v3";

const levelsTitle = document.getElementById("levelsTitle");
const levelsContainer = document.getElementById("levelsContainer");
const welcomeCard = document.getElementById("welcomeCard");
const questionCard = document.getElementById("questionCard");
const stageTag = document.getElementById("stageTag");
const starsPreview = document.getElementById("starsPreview");
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answersContainer");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const starsCount = document.getElementById("starsCount");
const unlockedCount = document.getElementById("unlockedCount");
const correctCount = document.getElementById("correctCount");
const resetProgressBtn = document.getElementById("resetProgressBtn");
const changeTrackBtn = document.getElementById("changeTrackBtn");
const trackChooser = document.getElementById("trackChooser");
const chooseLanguageBtn = document.getElementById("chooseLanguageBtn");
const chooseMathBtn = document.getElementById("chooseMathBtn");
const celebrationBurst = document.getElementById("celebrationBurst");
const milestoneModal = document.getElementById("milestoneModal");
const milestoneTitle = document.getElementById("milestoneTitle");
const milestoneText = document.getElementById("milestoneText");
const closeMilestoneBtn = document.getElementById("closeMilestoneBtn");

const defaultProgress = {
  selectedTrack: null,
  language: { unlockedLevel: 1, completed: [], stars: 0, correctAnswers: 0 },
  math: { unlockedLevel: 1, completed: [], stars: 0, correctAnswers: 0 }
};

let progress = loadProgress();
let activeLevel = null;

bindEvents();
render();
renderTrackOverlay();

function bindEvents() {
  chooseLanguageBtn.addEventListener("click", () => selectTrack("language"));
  chooseMathBtn.addEventListener("click", () => selectTrack("math"));
  changeTrackBtn.addEventListener("click", () => openTrackChooser());

  nextBtn.addEventListener("click", () => {
    if (!activeLevel) return;

    const selectedTrack = getTrackState();
    const nextId = activeLevel.id + 1;
    if (nextId <= selectedTrack.data.unlockedLevel && nextId <= selectedTrack.config.levels.length) {
      openLevel(nextId);
      return;
    }

    activeLevel = null;
    welcomeCard.classList.remove("hidden");
    questionCard.classList.add("hidden");
  });

  resetProgressBtn.addEventListener("click", () => {
    progress = cloneDefaultProgress();
    saveProgress();
    activeLevel = null;
    questionCard.classList.add("hidden");
    welcomeCard.classList.remove("hidden");
    render();
    renderTrackOverlay();
  });

  closeMilestoneBtn.addEventListener("click", () => {
    milestoneModal.classList.remove("open");
  });
}

function cloneDefaultProgress() {
  return {
    selectedTrack: defaultProgress.selectedTrack,
    language: { ...defaultProgress.language, completed: [...defaultProgress.language.completed] },
    math: { ...defaultProgress.math, completed: [...defaultProgress.math.completed] }
  };
}

function loadProgress() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return cloneDefaultProgress();

  try {
    const parsed = JSON.parse(raw);
    return normalizeProgress(parsed);
  } catch {
    return cloneDefaultProgress();
  }
}

function normalizeProgress(parsed) {
  return {
    selectedTrack: parsed.selectedTrack === "language" || parsed.selectedTrack === "math" ? parsed.selectedTrack : null,
    language: normalizeTrackProgress(parsed.language),
    math: normalizeTrackProgress(parsed.math)
  };
}

function normalizeTrackProgress(value) {
  const fallback = { unlockedLevel: 1, completed: [], stars: 0, correctAnswers: 0 };
  if (!value || typeof value !== "object") return { ...fallback };

  return {
    unlockedLevel: Number.isInteger(value.unlockedLevel) && value.unlockedLevel > 0 ? value.unlockedLevel : 1,
    completed: Array.isArray(value.completed) ? value.completed.filter((id) => Number.isInteger(id) && id > 0) : [],
    stars: Number.isFinite(value.stars) ? value.stars : 0,
    correctAnswers: Number.isFinite(value.correctAnswers) ? value.correctAnswers : 0
  };
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(progress));
}

function getTrackState() {
  const key = progress.selectedTrack || "language";
  return {
    key,
    config: tracks[key],
    data: progress[key]
  };
}

function openTrackChooser() {
  trackChooser.classList.add("open");
  activeLevel = null;
  questionCard.classList.add("hidden");
  welcomeCard.classList.remove("hidden");
}

function selectTrack(trackKey) {
  progress.selectedTrack = trackKey;
  saveProgress();
  trackChooser.classList.remove("open");
  activeLevel = null;
  questionCard.classList.add("hidden");
  welcomeCard.classList.remove("hidden");
  render();
}

function renderTrackOverlay() {
  trackChooser.classList.toggle("open", !progress.selectedTrack);
}

function render() {
  renderStats();
  renderLevels();
}

function renderStats() {
  const selectedTrack = getTrackState();
  const maxLevel = selectedTrack.config.levels.length;
  starsCount.textContent = String(selectedTrack.data.stars);
  unlockedCount.textContent = String(Math.min(selectedTrack.data.unlockedLevel, maxLevel));
  correctCount.textContent = String(selectedTrack.data.correctAnswers);
}

function renderLevels() {
  const selectedTrack = getTrackState();
  levelsTitle.textContent = selectedTrack.config.levelLabel;
  levelsContainer.innerHTML = "";

  selectedTrack.config.levels.forEach((level) => {
    const isUnlocked = level.id <= selectedTrack.data.unlockedLevel;
    const isDone = selectedTrack.data.completed.includes(level.id);

    const button = document.createElement("button");
    button.type = "button";
    button.className = [
      "level-btn",
      selectedTrack.key === "language" ? "level-language" : "level-math",
      isUnlocked ? "" : "level-locked",
      isDone ? "level-done" : ""
    ].join(" ").trim();

    const stateLabel = !isUnlocked ? "נָעוּל" : isDone ? "הֻשְׁלַם" : "פָּתוּחַ";
    button.textContent = `${level.title} • ${stateLabel}`;
    button.disabled = !isUnlocked;
    button.addEventListener("click", () => openLevel(level.id));
    levelsContainer.appendChild(button);
  });
}

function openLevel(levelId) {
  const selectedTrack = getTrackState();
  const level = selectedTrack.config.levels.find((item) => item.id === levelId);
  if (!level) return;

  activeLevel = level;
  welcomeCard.classList.add("hidden");
  questionCard.classList.remove("hidden");
  feedback.textContent = "";
  feedback.className = "feedback";
  nextBtn.classList.add("hidden");

  stageTag.textContent = `${level.title} (${selectedTrack.config.label})`;
  starsPreview.textContent = "⭐ +1";
  questionText.textContent = level.prompt;

  answersContainer.innerHTML = "";

  level.options.forEach((option, index) => {
    const answerBtn = document.createElement("button");
    answerBtn.type = "button";
    answerBtn.className = "answer-btn";
    answerBtn.textContent = option;
    answerBtn.addEventListener("click", () => checkAnswer(index));
    answersContainer.appendChild(answerBtn);
  });
}

function checkAnswer(index) {
  if (!activeLevel) return;

  const selectedTrack = getTrackState();
  const buttons = Array.from(document.querySelectorAll(".answer-btn"));
  buttons.forEach((btn) => {
    btn.disabled = true;
  });

  const correctAnswer = activeLevel.options[activeLevel.correct];

  if (index === activeLevel.correct) {
    const firstCompletion = !selectedTrack.data.completed.includes(activeLevel.id);

    feedback.textContent = "כָּל הַכָּבוֹד! תְּשׁוּבָה נְכוֹנָה!";
    feedback.classList.add("ok");
    showBurst(false);

    if (firstCompletion) {
      selectedTrack.data.completed.push(activeLevel.id);
      selectedTrack.data.stars += 1;
      selectedTrack.data.correctAnswers += 1;

      if (selectedTrack.data.unlockedLevel <= activeLevel.id && selectedTrack.data.unlockedLevel < selectedTrack.config.levels.length) {
        selectedTrack.data.unlockedLevel = activeLevel.id + 1;
      }

      if (activeLevel.id % 5 === 0) {
        showBurst(true);
        showMilestone(selectedTrack.config.label, activeLevel.id);
      }
    }

    saveProgress();
    render();
    nextBtn.classList.remove("hidden");
    return;
  }

  feedback.textContent = `נִסָּיוֹן יָפֶה. הַתְּשׁוּבָה הַנְּכוֹנָה הִיא: ${correctAnswer}`;
  feedback.classList.add("no");

  setTimeout(() => {
    buttons.forEach((btn) => {
      btn.disabled = false;
    });
  }, 700);
}

function showBurst(isBig) {
  celebrationBurst.className = `celebration-burst ${isBig ? "burst-big" : "burst-small"}`;
  setTimeout(() => {
    celebrationBurst.className = "celebration-burst hidden";
  }, isBig ? 1500 : 900);
}

function showMilestone(trackLabel, levelId) {
  milestoneTitle.textContent = "הִשָּׂג גָּדוֹל!";
  milestoneText.textContent = `סִיַּמְתָּ ${levelId} שְׁלָבִים בְּ${trackLabel}. מַמָּשׁ אַלּוּף!`;
  milestoneModal.classList.add("open");
}
