const levels = [
  { id: 1, track: "language", title: "שפה 1", prompt: "איזו אות פותחת את המילה 'בית'?", options: ["ב", "כ", "ז"], correct: 0 },
  { id: 2, track: "math", title: "חשבון 1", prompt: "כמה זה 1 + 1?", options: ["1", "2", "3"], correct: 1 },
  { id: 3, track: "language", title: "שפה 2", prompt: "איזו מילה היא שם של חיה?", options: ["כלב", "כיסא", "בית"], correct: 0 },
  { id: 4, track: "math", title: "חשבון 2", prompt: "כמה תפוחים יש: 🍎🍎🍎 ?", options: ["2", "3", "4"], correct: 1 },
  { id: 5, track: "language", title: "שפה 3", prompt: "איזו אות סוגרת את המילה 'ים'?", options: ["מ", "ש", "ק"], correct: 0 },
  { id: 6, track: "math", title: "חשבון 3", prompt: "כמה זה 5 - 2?", options: ["2", "3", "4"], correct: 1 },
  { id: 7, track: "language", title: "שפה 4", prompt: "מה החרוז של 'חתול'?", options: ["כדור", "שולחן", "עציץ"], correct: 0 },
  { id: 8, track: "math", title: "חשבון 4", prompt: "איזה מספר גדול יותר?", options: ["7", "4", "3"], correct: 0 },
  { id: 9, track: "language", title: "שפה 5", prompt: "איזו מילה כתובה נכון?", options: ["פרח", "פרכ", "פרט"], correct: 0 },
  { id: 10, track: "math", title: "חשבון 5", prompt: "כמה זה 3 + 4?", options: ["6", "7", "8"], correct: 1 },
  { id: 11, track: "language", title: "שפה 6", prompt: "איזו מילה מתחילה באות מ׳?", options: ["מים", "שמש", "דג"], correct: 0 },
  { id: 12, track: "math", title: "חשבון 6", prompt: "כמה זה 10 - 1?", options: ["8", "9", "10"], correct: 1 },
  { id: 13, track: "language", title: "שפה 7", prompt: "בחרו מילה ברבים:", options: ["ילדים", "ילד", "ספר"], correct: 0 },
  { id: 14, track: "math", title: "חשבון 7", prompt: "מה המספר הבא: 2, 4, 6, ...", options: ["7", "8", "9"], correct: 1 },
  { id: 15, track: "language", title: "שפה 8", prompt: "איזה משפט נכון?", options: ["אני אוהב לקרוא.", "אני אוהב לקרו.", "אני אוהב קריאה אני."], correct: 0 },
  { id: 16, track: "math", title: "חשבון 8", prompt: "כמה זה 2 + 2 + 2?", options: ["4", "5", "6"], correct: 2 },
  { id: 17, track: "language", title: "שפה 9", prompt: "איזו מילה קשורה לבית ספר?", options: ["מחברת", "כדורגל", "גלידה"], correct: 0 },
  { id: 18, track: "math", title: "חשבון 9", prompt: "כמה משולשים יש? 🔺🔺🔺🔺", options: ["3", "4", "5"], correct: 1 },
  { id: 19, track: "language", title: "שפה 10", prompt: "מה היפך המילה 'גדול'?", options: ["קטן", "רחב", "גבוה"], correct: 0 },
  { id: 20, track: "math", title: "חשבון 10", prompt: "כמה זה 9 - 4?", options: ["4", "5", "6"], correct: 1 },
  { id: 21, track: "language", title: "שפה 11", prompt: "איזו אות באה אחרי נ׳ בא-ב?", options: ["ס", "מ", "ר"], correct: 0 },
  { id: 22, track: "math", title: "חשבון 11", prompt: "כמה זה 6 + 3?", options: ["8", "9", "10"], correct: 1 },
  { id: 23, track: "language", title: "שפה 12", prompt: "איזה מהבאים הוא פועל?", options: ["רץ", "כיסא", "צהוב"], correct: 0 },
  { id: 24, track: "math", title: "חשבון 12", prompt: "כמה זה 8 + 2?", options: ["9", "10", "11"], correct: 1 }
];

const storageKey = "first-grade-progress-v1";

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

const defaultProgress = {
  unlockedLevel: 2,
  completed: [],
  stars: 0,
  correctAnswers: 0
};

let progress = loadProgress();
let activeLevel = null;

render();

function loadProgress() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return { ...defaultProgress };

  try {
    const parsed = JSON.parse(raw);
    return {
      unlockedLevel: parsed.unlockedLevel || defaultProgress.unlockedLevel,
      completed: Array.isArray(parsed.completed) ? parsed.completed : [],
      stars: Number.isFinite(parsed.stars) ? parsed.stars : 0,
      correctAnswers: Number.isFinite(parsed.correctAnswers) ? parsed.correctAnswers : 0
    };
  } catch {
    return { ...defaultProgress };
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(progress));
}

function render() {
  renderStats();
  renderLevels();
}

function renderStats() {
  starsCount.textContent = String(progress.stars);
  unlockedCount.textContent = String(Math.min(progress.unlockedLevel, levels.length));
  correctCount.textContent = String(progress.correctAnswers);
}

function renderLevels() {
  levelsContainer.innerHTML = "";

  levels.forEach((level) => {
    const isUnlocked = level.id <= progress.unlockedLevel;
    const isDone = progress.completed.includes(level.id);

    const button = document.createElement("button");
    button.type = "button";
    button.className = [
      "level-btn",
      level.track === "language" ? "level-language" : "level-math",
      isUnlocked ? "" : "level-locked",
      isDone ? "level-done" : ""
    ].join(" ").trim();

    const trackLabel = level.track === "language" ? "שפה" : "חשבון";
    const stateLabel = !isUnlocked ? "נעול" : isDone ? "הושלם" : "פתוח";
    button.textContent = `${level.title} • ${trackLabel} • ${stateLabel}`;
    button.disabled = !isUnlocked;

    button.addEventListener("click", () => openLevel(level.id));
    levelsContainer.appendChild(button);
  });
}

function openLevel(levelId) {
  const level = levels.find((item) => item.id === levelId);
  if (!level) return;

  activeLevel = level;
  welcomeCard.classList.add("hidden");
  questionCard.classList.remove("hidden");
  feedback.textContent = "";
  feedback.className = "feedback";
  nextBtn.classList.add("hidden");

  stageTag.textContent = `${level.title} (${level.track === "language" ? "שפה" : "חשבון"})`;
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

  const buttons = Array.from(document.querySelectorAll(".answer-btn"));
  buttons.forEach((btn) => {
    btn.disabled = true;
  });

  if (index === activeLevel.correct) {
    feedback.textContent = "כל הכבוד! תשובה נכונה!";
    feedback.classList.add("ok");

    if (!progress.completed.includes(activeLevel.id)) {
      progress.completed.push(activeLevel.id);
      progress.stars += 1;
      progress.correctAnswers += 1;
    }

    if (progress.unlockedLevel <= activeLevel.id && progress.unlockedLevel < levels.length) {
      progress.unlockedLevel = activeLevel.id + 1;
    }

    saveProgress();
    render();
    nextBtn.classList.remove("hidden");
  } else {
    feedback.textContent = "ניסיון יפה, בואו ננסה שוב בשלב הזה.";
    feedback.classList.add("no");
    setTimeout(() => openLevel(activeLevel.id), 900);
  }
}

nextBtn.addEventListener("click", () => {
  if (!activeLevel) return;
  const nextId = activeLevel.id + 1;

  if (nextId <= progress.unlockedLevel && nextId <= levels.length) {
    openLevel(nextId);
  } else {
    welcomeCard.classList.remove("hidden");
    questionCard.classList.add("hidden");
    activeLevel = null;
  }
});

resetProgressBtn.addEventListener("click", () => {
  progress = { ...defaultProgress };
  saveProgress();
  activeLevel = null;
  welcomeCard.classList.remove("hidden");
  questionCard.classList.add("hidden");
  render();
});
