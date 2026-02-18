const languageLevels = [
  { id: 1, title: "שָׂפָה 1", prompt: "אֵיזוֹ אוֹת פּוֹתַחַת אֶת 'בַּיִת'?", options: ["בּ", "מ", "שׁ"], correct: 0 },
  { id: 2, title: "שָׂפָה 2", prompt: "אֵיזוֹ מִילָה הִיא חַיָּה?", options: ["כֶּלֶב", "כִּיסֵּא", "סֵפֶר"], correct: 0 },
  { id: 3, title: "שָׂפָה 3", prompt: "אֵיזוֹ אוֹת סוֹגֶרֶת אֶת 'יָם'?", options: ["ם", "ן", "ת"], correct: 0 },
  { id: 4, title: "שָׂפָה 4", prompt: "אֵיזוֹ מִילָה מַתְחִילָה בְּ-מ?", options: ["מַיִם", "דָּג", "סוּס"], correct: 0 },
  { id: 5, title: "שָׂפָה 5", prompt: "אֵיזֶה זוּג חָרִיזִים?", options: ["כַּדּוּר-סִפּוּר", "שֻׁלְחָן-חָלוֹן", "כִּסֵּא-סֵפֶר"], correct: 0 },
  { id: 6, title: "שָׂפָה 6", prompt: "אֵיזוֹ מִילָה נִכְתֶּבֶת נָכוֹן?", options: ["פֶּרַח", "פֶּרָחָ", "פָּרֶח"], correct: 0 },
  { id: 7, title: "שָׂפָה 7", prompt: "מַה הַהֵפֶךְ שֶׁל 'גָּדוֹל'?", options: ["קָטָן", "רָחָב", "יָקָר"], correct: 0 },
  { id: 8, title: "שָׂפָה 8", prompt: "אֵיזוֹ אוֹת בָּאָה אַחֲרֵי נ?", options: ["ס", "מ", "ר"], correct: 0 },
  { id: 9, title: "שָׂפָה 9", prompt: "אֵיזוֹ מִילָה בְּרַבִּים?", options: ["יְלָדִים", "יֶלֶד", "יַלְדָּה"], correct: 0 },
  { id: 10, title: "שָׂפָה 10", prompt: "אֵיזוֹ מִילָה קְשׁוּרָה לְבֵית סֵפֶר?", options: ["מַחְבֶּרֶת", "גְּלִידָה", "מִזְרָק"], correct: 0 },
  { id: 11, title: "שָׂפָה 11", prompt: "אֵיזוֹ מִילָה הִיא פֹּעַל?", options: ["רָץ", "שֻׁלְחָן", "כָּחֹל"], correct: 0 },
  { id: 12, title: "שָׂפָה 12", prompt: "אֵיזוֹ מִילָה מַתְחִילָה בְּ-ל?", options: ["לֶחֶם", "דֶּלֶת", "מִטָּה"], correct: 0 },
  { id: 13, title: "שָׂפָה 13", prompt: "אֵיזוֹ מִילָה קְטַנָּה יוֹתֵר?", options: ["דָּג", "מַחְבֶּרֶת", "מִטְבָּח"], correct: 0 },
  { id: 14, title: "שָׂפָה 14", prompt: "אֵיזֶה מִשְׁפָּט נָכוֹן?", options: ["אֲנִי אוֹהֵב לִקְרוֹא.", "אֲנִי אוֹהֵב לִקְרֹו.", "אֲנִי לִקְרוֹא אוֹהֵב."], correct: 0 },
  { id: 15, title: "שָׂפָה 15", prompt: "אֵיזוֹ אוֹת פּוֹתַחַת אֶת 'תַּפּוּחַ'?", options: ["תּ", "ד", "שׂ"], correct: 0 },
  { id: 16, title: "שָׂפָה 16", prompt: "אֵיזוֹ מִילָה שַׁיֶּכֶת לַבַּיִת?", options: ["מִטָּה", "אוֹטוֹבּוּס", "נַעַל"], correct: 0 },
  { id: 17, title: "שָׂפָה 17", prompt: "אֵיזוֹ מִילָה בָּהּ 2 הֲבָרוֹת?", options: ["כֶּלֶב", "מַחְשֵׁב", "אֲנִי"], correct: 0 },
  { id: 18, title: "שָׂפָה 18", prompt: "אֵיזוֹ מִילָה מַתְחִילָה בְּ-שׁ?", options: ["שֶׁמֶשׁ", "חָלוֹן", "פֶּרַח"], correct: 0 },
  { id: 19, title: "שָׂפָה 19", prompt: "אֵיזוֹ מִילָה הִיא שֵׁם צֶבַע?", options: ["יָרֹק", "יֶלֶד", "כִּסֵּא"], correct: 0 },
  { id: 20, title: "שָׂפָה 20", prompt: "אֵיזוֹ מִילָה מְסַיֶּמֶת בְּ-ת?", options: ["דֶּלֶת", "סוּס", "תַּפּוּחַ"], correct: 0 }
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
  { id: 20, title: "חֶשְׁבּוֹן 20", prompt: "3 + 6 = ?", options: ["8", "9", "10"], correct: 1 }
];

const tracks = {
  language: {
    label: "שָׂפָה",
    levelLabel: "שַׁלְבֵי שָׂפָה",
    levels: languageLevels,
    buttonId: "trackLanguageBtn"
  },
  math: {
    label: "חֶשְׁבּוֹן",
    levelLabel: "שַׁלְבֵי חֶשְׁבּוֹן",
    levels: mathLevels,
    buttonId: "trackMathBtn"
  }
};

const storageKey = "first-grade-progress-v2";

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
const trackLanguageBtn = document.getElementById("trackLanguageBtn");
const trackMathBtn = document.getElementById("trackMathBtn");

const defaultProgress = {
  activeTrack: "language",
  language: { unlockedLevel: 1, completed: [], stars: 0, correctAnswers: 0 },
  math: { unlockedLevel: 1, completed: [], stars: 0, correctAnswers: 0 }
};

let progress = loadProgress();
let activeLevel = null;

bindEvents();
render();

function bindEvents() {
  trackLanguageBtn.addEventListener("click", () => switchTrack("language"));
  trackMathBtn.addEventListener("click", () => switchTrack("math"));

  nextBtn.addEventListener("click", () => {
    if (!activeLevel) return;

    const selectedTrack = getTrackState();
    const nextId = activeLevel.id + 1;
    const hasNextUnlocked = nextId <= selectedTrack.data.unlockedLevel;
    const hasNextLevel = nextId <= selectedTrack.config.levels.length;

    if (hasNextUnlocked && hasNextLevel) {
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
    welcomeCard.classList.remove("hidden");
    questionCard.classList.add("hidden");
    render();
  });
}

function cloneDefaultProgress() {
  return {
    activeTrack: defaultProgress.activeTrack,
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
  const safeTrack = parsed.activeTrack === "math" ? "math" : "language";

  return {
    activeTrack: safeTrack,
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
  const key = progress.activeTrack;
  return {
    key,
    config: tracks[key],
    data: progress[key]
  };
}

function switchTrack(trackKey) {
  if (!tracks[trackKey]) return;
  progress.activeTrack = trackKey;
  activeLevel = null;
  saveProgress();

  welcomeCard.classList.remove("hidden");
  questionCard.classList.add("hidden");
  render();
}

function render() {
  renderTrackButtons();
  renderStats();
  renderLevels();
}

function renderTrackButtons() {
  const isLanguage = progress.activeTrack === "language";
  trackLanguageBtn.classList.toggle("active", isLanguage);
  trackMathBtn.classList.toggle("active", !isLanguage);
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

  if (index === activeLevel.correct) {
    feedback.textContent = "כָּל הַכָּבוֹד! תְּשׁוּבָה נְכוֹנָה!";
    feedback.classList.add("ok");

    if (!selectedTrack.data.completed.includes(activeLevel.id)) {
      selectedTrack.data.completed.push(activeLevel.id);
      selectedTrack.data.stars += 1;
      selectedTrack.data.correctAnswers += 1;
    }

    if (selectedTrack.data.unlockedLevel <= activeLevel.id && selectedTrack.data.unlockedLevel < selectedTrack.config.levels.length) {
      selectedTrack.data.unlockedLevel = activeLevel.id + 1;
    }

    saveProgress();
    render();
    nextBtn.classList.remove("hidden");
    return;
  }

  feedback.textContent = "נִסָּיוֹן יָפֶה, נְנַסֶּה שׁוּב.";
  feedback.classList.add("no");

  setTimeout(() => {
    if (activeLevel) openLevel(activeLevel.id);
  }, 900);
}
