const languageQuestionBank = [
  { prompt: "אֵיזוֹ אוֹת פּוֹתַחַת אֶת 'בַּיִת'?", options: ["בּ", "מ", "שׁ"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה הִיא חַיָּה?", options: ["כֶּלֶב", "כִּיסֵּא", "סֵפֶר"], correct: 0 },
  { prompt: "אֵיזוֹ אוֹת סוֹגֶרֶת אֶת 'יָם'?", options: ["ם", "ן", "ת"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה מַתְחִילָה בְּ-מ?", options: ["מַיִם", "דָּג", "סוּס"], correct: 0 },
  { prompt: "אֵיזֶה זוּג הוּא חֲרוּזִים?", options: ["כַּדּוּר-סִפּוּר", "שֻׁלְחָן-חָלוֹן", "כִּסֵּא-סֵפֶר"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה נִכְתֶּבֶת נָכוֹן?", options: ["פֶּרַח", "פֶרַח", "פָּרֶח"], correct: 0 },
  { prompt: "מַה הַהֵפֶךְ שֶׁל 'גָּדוֹל'?", options: ["קָטָן", "רָחָב", "יָקָר"], correct: 0 },
  { prompt: "אֵיזוֹ אוֹת בָּאָה אַחֲרֵי נ?", options: ["ס", "מ", "ר"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה בְּרַבִּים?", options: ["יְלָדִים", "יַלְדָּה", "יֶלֶד"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה קְשׁוּרָה לְבֵית סֵפֶר?", options: ["מַחְבֶּרֶת", "גְּלִידָה", "כַּר"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה הִיא פֹּעַל?", options: ["רוֹץ", "כִּסֵּא", "צָהֹב"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה מַתְחִילָה בְּ-ל?", options: ["לֶחֶם", "דֶּלֶת", "מִטָּה"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה קְצָרָה יוֹתֵר?", options: ["דָּג", "מַחְבֶּרֶת", "מִרְפֶּסֶת"], correct: 0 },
  { prompt: "אֵיזֶה מִשְׁפָּט נָכוֹן?", options: ["אֲנִי אוֹהֵב לִקְרוֹא.", "אֲנִי אוֹהֵב לִקְרֹו.", "אֲנִי לִקְרוֹא אוֹהֵב."], correct: 0 },
  { prompt: "אֵיזוֹ אוֹת פּוֹתַחַת אֶת 'תַּפּוּחַ'?", options: ["תּ", "ד", "שׂ"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה שַׁיֶּכֶת לַבַּיִת?", options: ["מִטָּה", "אוֹטוֹבּוּס", "כַּדּוּר"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה מַתְחִילָה בְּ-שׁ?", options: ["שֶׁמֶשׁ", "חָלוֹן", "פֶּרַח"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה הִיא שֵׁם צֶבַע?", options: ["יָרֹק", "יֶלֶד", "כִּסֵּא"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה מְסַיֶּמֶת בְּ-ת?", options: ["דֶּלֶת", "סוּס", "תַּפּוּחַ"], correct: 0 },
  { prompt: "אֵיזוֹ אוֹת פּוֹתַחַת אֶת 'סֵפֶר'?", options: ["ס", "ב", "כ"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה הִיא מַאֲכָל?", options: ["לֶחֶם", "חָלוֹן", "כַּף"], correct: 0 },
  { prompt: "אֵיזֶה זוּג הוּא חֲרוּזִים?", options: ["חוֹל-כֹּל", "כִּסֵּא-כַּפִּית", "סֵפֶר-שֻׁלְחָן"], correct: 0 },
  { prompt: "אֵיזוֹ אוֹת בָּאָה אַחֲרֵי כ?", options: ["ל", "י", "מ"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה הִיא שֵׁם חֵפֶץ?", options: ["כַּדּוּר", "רוֹץ", "נָעִים"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה מַתְחִילָה בְּ-ק?", options: ["קֶסֶם", "מֶלֶךְ", "סוּס"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה בְּרַבִּים?", options: ["סְפָרִים", "סֵפֶר", "שֻׁלְחָן"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה קְשׁוּרָה לַגּוּף?", options: ["יָד", "סִיר", "כִּסֵּא"], correct: 0 },
  { prompt: "אֵיזוֹ אוֹת סוֹגֶרֶת אֶת 'דָּג'?", options: ["ג", "ד", "ב"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה הִיא פֹּעַל?", options: ["אוֹכֵל", "אוֹכֶל", "אֹכֶלֶת"], correct: 0 },
  { prompt: "אֵיזֶה מִשְׁפָּט נָכוֹן?", options: ["הַיֶּלֶד קוֹרֵא סֵפֶר.", "הַיֶּלֶד קוֹרֵה סֵפֶר.", "הַיֶּלֶד סֵפֶר קוֹרֵא."], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה מַתְחִילָה בְּ-ט?", options: ["טַוָּס", "לָוִיתָן", "זְמַן"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה קְשׁוּרָה לַכִּתָּה?", options: ["לוּחַ", "מִזְרָק", "מַגֶּבֶת"], correct: 0 },
  { prompt: "אֵיזוֹ אוֹת בָּאָה אַחֲרֵי ר?", options: ["שׁ", "ק", "ת"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה הִיא שֵׁם חַיָּה?", options: ["צָב", "צֶבַע", "צַו"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה מְסַיֶּמֶת בְּ-ם?", options: ["יָם", "יוֹם", "יָדוֹ"], correct: 0 },
  { prompt: "אֵיזוֹ אוֹת פּוֹתַחַת אֶת 'חָלוֹן'?", options: ["ח", "כ", "ה"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה מַתְאִימָה לְחוֹרֶף?", options: ["מַעִיל", "כַּפָּכִים", "מַאוֹוֵר"], correct: 0 },
  { prompt: "אֵיזֶה זוּג הוּא חֲרוּזִים?", options: ["שִׁיר-עִיר", "סֵפֶר-שֻׁלְחָן", "דֶּלֶת-חָלוֹן"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה בְּרַבִּים?", options: ["כּוֹבָעִים", "כּוֹבַע", "כֻּבָּה"], correct: 0 },
  { prompt: "אֵיזוֹ אוֹת סוֹגֶרֶת אֶת 'אוֹר'?", options: ["ר", "ו", "ן"], correct: 0 },
  { prompt: "מַה הַהֵפֶךְ שֶׁל 'קַר'?", options: ["חַם", "רָטוֹב", "יָבֵשׁ"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה הִיא מָקוֹם?", options: ["גַּן", "רוֹץ", "אָדֹם"], correct: 0 },
  { prompt: "אֵיזוֹ אוֹת בָּאָה אַחֲרֵי ד?", options: ["ה", "ו", "ג"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה מַתְחִילָה בְּ-א?", options: ["אֲרִי", "לֵב", "מֶלֶךְ"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה הִיא פֹּעַל?", options: ["קוֹפֵץ", "כִּסֵּא", "קָטָן"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה נִכְתֶּבֶת נָכוֹן?", options: ["חֲבֵר", "חָבֵרָ", "חֶבֶר"], correct: 0 },
  { prompt: "אֵיזֶה מִשְׁפָּט נָכוֹן?", options: ["הַיַּלְדָּה שָׁרָה.", "הַיַּלְדָּה שָׁרֶה.", "שָׁרָה הַיַּלְדָּה."], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה קְשׁוּרָה לַיָּם?", options: ["סִירָה", "מַחְבֶּרֶת", "מִזְרָק"], correct: 0 },
  { prompt: "אֵיזוֹ אוֹת סוֹגֶרֶת אֶת 'כַּף'?", options: ["ף", "כ", "ת"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה בְּרַבִּים?", options: ["חֲתוּלִים", "חָתוּל", "חֲתוּלָה"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה מַתְחִילָה בְּ-ג?", options: ["גִּינָה", "תָּמָר", "סוּס"], correct: 0 },
  { prompt: "אֵיזֶה זוּג הוּא חֲרוּזִים?", options: ["בַּיִת-זַיִת", "סֵפֶר-חֶדֶר", "חָלוֹן-שֻׁלְחָן"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה הִיא שֵׁם צֶבַע?", options: ["כָּתוֹם", "כַּדּוּר", "קוֹפֵץ"], correct: 0 },
  { prompt: "מַה הַהֵפֶךְ שֶׁל 'מַהֵר'?", options: ["לָאַט", "גָּבוֹהַּ", "חַזָּק"], correct: 0 },
  { prompt: "אֵיזוֹ אוֹת בָּאָה אַחֲרֵי פ?", options: ["צ", "ע", "ק"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה שַׁיֶּכֶת לַמִּטְבָּח?", options: ["כַּפִּית", "עִפָּרוֹן", "כַּדּוּר"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה נִכְתֶּבֶת נָכוֹן?", options: ["שָׁלוֹם", "שָׁלוֹמ", "שָׁלֹם"], correct: 0 },
  { prompt: "אֵיזֶה מִשְׁפָּט נָכוֹן?", options: ["אֲנַחְנוּ הוֹלְכִים לַגַּן.", "אֲנַחְנוּ הוֹלֵךְ לַגַּן.", "אֲנַחְנוּ לַגַּן הוֹלְכִים."], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה מְסַיֶּמֶת בְּ-ן?", options: ["עִפָּרוֹן", "סֵפֶר", "יָד"], correct: 0 },
  { prompt: "אֵיזוֹ אוֹת פּוֹתַחַת אֶת 'זֶרַע'?", options: ["ז", "ר", "ס"], correct: 0 },
  { prompt: "אֵיזוֹ מִילָה קְשׁוּרָה לְגִנָּה?", options: ["עֵץ", "מַחְשֵׁב", "סַפָּה"], correct: 0 }
];

const visualMathQuestions = [
  { prompt: "🍎🍎🍎 = ?", options: ["2", "3", "4"], correct: 1 },
  { prompt: "🔺🔺🔺🔺 = ?", options: ["3", "4", "5"], correct: 1 },
  { prompt: "⚽⚽⚽⚽⚽⚽ = ?", options: ["5", "6", "7"], correct: 1 },
  { prompt: "🟡🟡 + 🟡 = ?", options: ["2", "3", "4"], correct: 1 },
  { prompt: "👟👟👟👟👟 = ?", options: ["4", "5", "6"], correct: 1 },
  { prompt: "🍓🍓 + 🍓🍓 = ?", options: ["3", "4", "5"], correct: 1 },
  { prompt: "🟦🟦🟦 = ?", options: ["2", "3", "4"], correct: 1 },
  { prompt: "🍌🍌🍌🍌🍌🍌🍌 = ?", options: ["6", "7", "8"], correct: 1 },
  { prompt: "⭐ + ⭐ + ⭐ = ?", options: ["2", "3", "4"], correct: 1 },
  { prompt: "🧁🧁🧁🧁 = ?", options: ["3", "4", "5"], correct: 1 },
  { prompt: "🍒🍒 + 🍒 = ?", options: ["2", "3", "4"], correct: 1 },
  { prompt: "🧩🧩🧩🧩🧩 = ?", options: ["4", "5", "6"], correct: 1 },
  { prompt: "🔵🔵🔵🔵🔵🔵🔵🔵 = ?", options: ["7", "8", "9"], correct: 1 },
  { prompt: "🍪🍪 + 🍪🍪 + 🍪 = ?", options: ["4", "5", "6"], correct: 1 },
  { prompt: "🧸🧸🧸 = ?", options: ["2", "3", "4"], correct: 1 },
  { prompt: "🚗🚗🚗🚗🚗🚗 = ?", options: ["5", "6", "7"], correct: 1 },
  { prompt: "🟩🟩 + 🟩🟩🟩 = ?", options: ["4", "5", "6"], correct: 1 },
  { prompt: "🥕🥕🥕🥕🥕 = ?", options: ["4", "5", "6"], correct: 1 },
  { prompt: "🍍🍍 + 🍍 = ?", options: ["2", "3", "4"], correct: 1 },
  { prompt: "🎈🎈🎈🎈🎈🎈🎈🎈🎈 = ?", options: ["8", "9", "10"], correct: 1 }
];

const gamesData = {
  missingLetter: {
    title: "פָּאזֶל אוֹתִיּוֹת: בּוֹנִים מִלָּה",
    rounds: [
      { clue: "🏠", word: "בית" },
      { clue: "🐶", word: "כלב" },
      { clue: "🚪", word: "דלת" },
      { clue: "🐴", word: "סוס" },
      { clue: "☀️", word: "שמש" },
      { clue: "🍎", word: "תפוח" }
    ]
  },
  matchEmoji: {
    title: "הַתְאָמַת תְּמוּנָה לְמִלָּה",
    rounds: [
      { prompt: "🍎", options: ["תַּפּוּחַ", "אֲגָס", "עִפָּרוֹן"], correct: 0 },
      { prompt: "🐟", options: ["דָּג", "סוּס", "חָתוּל"], correct: 0 },
      { prompt: "🏠", options: ["בַּיִת", "חָלוֹן", "דֶּלֶת"], correct: 0 },
      { prompt: "📘", options: ["סֵפֶר", "מַחְבֶּרֶת", "תִּיק"], correct: 0 },
      { prompt: "🌞", options: ["שֶׁמֶשׁ", "יָם", "לַיְלָה"], correct: 0 },
      { prompt: "🧸", options: ["בֻּבָּה", "מִטָּה", "כִּסֵּא"], correct: 0 }
    ]
  },
  quickCount: {
    title: "סְפִירָה מְהִירָה",
    rounds: [
      { prompt: "🍓🍓🍓🍓 = ?", options: ["3", "4", "5"], correct: 1 },
      { prompt: "⚽⚽⚽⚽⚽ = ?", options: ["4", "5", "6"], correct: 1 },
      { prompt: "🟨🟨🟨 = ?", options: ["2", "3", "4"], correct: 1 },
      { prompt: "🐠🐠🐠🐠🐠🐠 = ?", options: ["5", "6", "7"], correct: 1 },
      { prompt: "🧁🧁 = ?", options: ["1", "2", "3"], correct: 1 },
      { prompt: "🌟🌟🌟🌟🌟🌟🌟 = ?", options: ["6", "7", "8"], correct: 1 }
    ]
  },
  oddOneOut: {
    title: "יוֹצֵא דֹּפֶן",
    rounds: [
      { prompt: "מָה יוֹצֵא דֹּפֶן? 🐶 🐱 🍎", options: ["🐶", "🐱", "🍎"], correct: 2 },
      { prompt: "מָה יוֹצֵא דֹּפֶן? 🚗 🚌 🍌", options: ["🚗", "🍌", "🚌"], correct: 1 },
      { prompt: "מָה יוֹצֵא דֹּפֶן? ✏️ 📘 ⚽", options: ["✏️", "📘", "⚽"], correct: 2 },
      { prompt: "מָה יוֹצֵא דֹּפֶן? 🌞 🌙 🐟", options: ["🌙", "🐟", "🌞"], correct: 1 },
      { prompt: "מָה יוֹצֵא דֹּפֶן? 🍞 🍎 🥕", options: ["🍞", "🍎", "🥕"], correct: 0 },
      { prompt: "מָה יוֹצֵא דֹּפֶן? 🐦 🐮 🌳", options: ["🐮", "🌳", "🐦"], correct: 1 }
    ]
  },
  patternNext: {
    title: "מָה בָּא אַחֲרֵי?",
    rounds: [
      { prompt: "1, 2, 3, ?", options: ["4", "5", "2"], correct: 0 },
      { prompt: "2, 4, 6, ?", options: ["7", "8", "10"], correct: 1 },
      { prompt: "🍎, 🍌, 🍎, 🍌, ?", options: ["🍎", "🍓", "🍌"], correct: 0 },
      { prompt: "🔵, 🔴, 🔵, 🔴, ?", options: ["🔴", "🟢", "🔵"], correct: 2 },
      { prompt: "5, 4, 3, ?", options: ["2", "1", "4"], correct: 0 },
      { prompt: "⭐, ⭐⭐, ⭐⭐⭐, ?", options: ["⭐⭐⭐⭐", "⭐⭐", "⭐⭐⭐⭐⭐"], correct: 0 }
    ]
  },
  maze: {
    title: "מָבוֹךְ: לֹחֲצִים עַל הַמַּשְׁבֶּצֶת הַבָּאָה",
    path: [
      [0, 0], [0, 1], [1, 1], [2, 1], [2, 2], [2, 3], [3, 3], [4, 3], [4, 4]
    ]
  }
};

const hebrewLetters = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ", "ק", "ר", "ש", "ת"];

function shuffleArray(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildWordRoundOptions(word) {
  const letters = Array.from(word);
  const extra = hebrewLetters.find((letter) => !letters.includes(letter)) || "מ";
  return shuffleArray([...letters, extra]);
}

function buildMathQuestion(a, b, op) {
  const answer = op === "+" ? a + b : a - b;
  const options = createNumberOptions(answer);
  return {
    prompt: `${a} ${op} ${b} = ?`,
    options: options.map(String),
    correct: options.indexOf(answer)
  };
}

function createNumberOptions(answer) {
  const min = Math.max(0, answer - 2);
  const set = new Set([answer]);
  for (let value = min; value <= answer + 2; value += 1) {
    if (set.size >= 3) break;
    if (value !== answer) set.add(value);
  }
  let candidate = answer + 3;
  while (set.size < 3) {
    set.add(candidate);
    candidate += 1;
  }
  return Array.from(set).slice(0, 3);
}

function buildMathBank() {
  const bank = [...visualMathQuestions];
  const additions = [[1, 1], [2, 2], [3, 4], [4, 4], [5, 3], [6, 3], [7, 2], [8, 2], [9, 1], [5, 5], [2, 5], [4, 5], [3, 6], [7, 3], [8, 4], [9, 2], [6, 6], [10, 2], [7, 4], [3, 7]];
  const subtractions = [[5, 2], [7, 3], [9, 4], [10, 1], [11, 1], [12, 2], [14, 4], [15, 5], [13, 3], [16, 6], [8, 3], [6, 2], [10, 3], [12, 5], [9, 3], [17, 7], [18, 8], [20, 10], [11, 4], [19, 9]];
  additions.forEach(([a, b]) => bank.push(buildMathQuestion(a, b, "+")));
  subtractions.forEach(([a, b]) => bank.push(buildMathQuestion(a, b, "-")));
  return bank;
}

function chunkQuestionsToStages(questions, trackLabel, stageSize = 6) {
  const stages = [];
  for (let i = 0; i < questions.length; i += stageSize) {
    const stageId = Math.floor(i / stageSize) + 1;
    stages.push({ id: stageId, title: `${trackLabel} ${stageId}`, questions: questions.slice(i, i + stageSize) });
  }
  return stages;
}

const mathQuestionBank = buildMathBank();

const tracks = {
  language: { label: "שָׂפָה", levelLabel: "שַׁלְבֵי שָׂפָה", mode: "quiz", stages: chunkQuestionsToStages(languageQuestionBank, "שָׂפָה") },
  math: { label: "חֶשְׁבּוֹן", levelLabel: "שַׁלְבֵי חֶשְׁבּוֹן", mode: "quiz", stages: chunkQuestionsToStages(mathQuestionBank, "חֶשְׁבּוֹן") },
  games: {
    label: "מִשְׂחָקִים",
    levelLabel: "מִשְׂחָקִים לְתִרְגּוּל",
    mode: "games",
    stages: [
      { id: 1, title: "מִשְׂחָק 1: תַּשְׁבֵּץ קָטָן", gameId: "missingLetter" },
      { id: 2, title: "מִשְׂחָק 2: הַתְאָמָה", gameId: "matchEmoji" },
      { id: 3, title: "מִשְׂחָק 3: סְפִירָה מְהִירָה", gameId: "quickCount" },
      { id: 4, title: "מִשְׂחָק 4: יוֹצֵא דֹּפֶן", gameId: "oddOneOut" },
      { id: 5, title: "מִשְׂחָק 5: מָה בָּא אַחֲרֵי", gameId: "patternNext" },
      { id: 6, title: "מִשְׂחָק 6: מָבוֹךְ", gameId: "maze" }
    ]
  }
};

const storageKey = "first-grade-progress-v5";

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
const gamesCard = document.getElementById("gamesCard");
const gamesTag = document.getElementById("gamesTag");
const gamesProgress = document.getElementById("gamesProgress");
const gamesTitle = document.getElementById("gamesTitle");
const gamesText = document.getElementById("gamesText");
const gamesArea = document.getElementById("gamesArea");
const starsCount = document.getElementById("starsCount");
const unlockedCount = document.getElementById("unlockedCount");
const correctCount = document.getElementById("correctCount");
const resetProgressBtn = document.getElementById("resetProgressBtn");
const changeTrackBtn = document.getElementById("changeTrackBtn");
const trackChooser = document.getElementById("trackChooser");
const chooseLanguageBtn = document.getElementById("chooseLanguageBtn");
const chooseMathBtn = document.getElementById("chooseMathBtn");
const chooseGamesBtn = document.getElementById("chooseGamesBtn");
const celebrationBurst = document.getElementById("celebrationBurst");
const milestoneModal = document.getElementById("milestoneModal");
const milestoneTitle = document.getElementById("milestoneTitle");
const milestoneText = document.getElementById("milestoneText");
const closeMilestoneBtn = document.getElementById("closeMilestoneBtn");

const defaultTrackProgress = { completedStages: [], completedQuestions: [], stars: 0, correctAnswers: 0 };
const defaultProgress = { selectedTrack: null, language: { ...defaultTrackProgress }, math: { ...defaultTrackProgress }, games: { ...defaultTrackProgress } };

let progress = loadProgress();
let activeStage = null;
let activeQuestionIndex = 0;
let stageCorrectThisRun = 0;
let activeGameState = null;

bindEvents();
render();
renderTrackOverlay();

function bindEvents() {
  chooseLanguageBtn.addEventListener("click", () => selectTrack("language"));
  chooseMathBtn.addEventListener("click", () => selectTrack("math"));
  chooseGamesBtn.addEventListener("click", () => selectTrack("games"));
  changeTrackBtn.addEventListener("click", openTrackChooser);
  nextBtn.classList.add("hidden");

  resetProgressBtn.addEventListener("click", () => {
    progress = cloneDefaultProgress();
    saveProgress();
    resetSessionState();
    showWelcome();
    render();
    renderTrackOverlay();
  });

  closeMilestoneBtn.addEventListener("click", () => milestoneModal.classList.remove("open"));
}

function resetSessionState() {
  activeStage = null;
  activeQuestionIndex = 0;
  stageCorrectThisRun = 0;
  activeGameState = null;
}

function showWelcome() {
  questionCard.classList.add("hidden");
  gamesCard.classList.add("hidden");
  welcomeCard.classList.remove("hidden");
}

function cloneDefaultProgress() {
  return {
    selectedTrack: null,
    language: { completedStages: [], completedQuestions: [], stars: 0, correctAnswers: 0 },
    math: { completedStages: [], completedQuestions: [], stars: 0, correctAnswers: 0 },
    games: { completedStages: [], completedQuestions: [], stars: 0, correctAnswers: 0 }
  };
}

function normalizeTrackProgress(value) {
  if (!value || typeof value !== "object") return { ...defaultTrackProgress };
  return {
    completedStages: Array.isArray(value.completedStages) ? value.completedStages.filter((id) => Number.isInteger(id) && id > 0) : [],
    completedQuestions: Array.isArray(value.completedQuestions) ? value.completedQuestions.filter((key) => typeof key === "string") : [],
    stars: Number.isFinite(value.stars) ? value.stars : 0,
    correctAnswers: Number.isFinite(value.correctAnswers) ? value.correctAnswers : 0
  };
}

function loadProgress() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return cloneDefaultProgress();
  try {
    const parsed = JSON.parse(raw);
    return {
      selectedTrack: ["language", "math", "games"].includes(parsed.selectedTrack) ? parsed.selectedTrack : null,
      language: normalizeTrackProgress(parsed.language),
      math: normalizeTrackProgress(parsed.math),
      games: normalizeTrackProgress(parsed.games)
    };
  } catch {
    return cloneDefaultProgress();
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(progress));
}

function getTrackState() {
  const key = progress.selectedTrack || "language";
  return { key, config: tracks[key], data: progress[key] };
}

function renderTrackOverlay() {
  trackChooser.classList.toggle("open", !progress.selectedTrack);
}

function openTrackChooser() {
  resetSessionState();
  showWelcome();
  trackChooser.classList.add("open");
}

function selectTrack(trackKey) {
  progress.selectedTrack = trackKey;
  saveProgress();
  resetSessionState();
  showWelcome();
  trackChooser.classList.remove("open");
  render();
}

function render() {
  renderStats();
  renderStages();
}

function renderStats() {
  const selectedTrack = getTrackState();
  starsCount.textContent = String(selectedTrack.data.stars);
  unlockedCount.textContent = String(selectedTrack.data.completedStages.length);
  correctCount.textContent = String(selectedTrack.data.correctAnswers);
}

function renderStages() {
  const selectedTrack = getTrackState();
  levelsTitle.textContent = selectedTrack.config.levelLabel;
  levelsContainer.innerHTML = "";

  selectedTrack.config.stages.forEach((stage) => {
    const isDone = selectedTrack.data.completedStages.includes(stage.id);
    const button = document.createElement("button");
    button.type = "button";
    button.className = [
      "level-btn",
      selectedTrack.key === "language" ? "level-language" : selectedTrack.key === "math" ? "level-math" : "level-games",
      isDone ? "level-done" : ""
    ].join(" ").trim();

    const stateLabel = isDone ? "הֻשְׁלַם" : "לְתִרְגּוּל";
    button.textContent = `${stage.title} • ${stateLabel}`;
    button.addEventListener("click", () => openStage(stage.id));
    levelsContainer.appendChild(button);
  });
}

function openStage(stageId) {
  const selectedTrack = getTrackState();
  const stage = selectedTrack.config.stages.find((item) => item.id === stageId);
  if (!stage) return;

  activeStage = stage;
  activeQuestionIndex = 0;
  stageCorrectThisRun = 0;

  if (selectedTrack.config.mode === "games") {
    openGameStage(stage);
    return;
  }

  welcomeCard.classList.add("hidden");
  gamesCard.classList.add("hidden");
  questionCard.classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  if (!activeStage) return;
  const selectedTrack = getTrackState();
  const isMath = selectedTrack.key === "math";
  const question = activeStage.questions[activeQuestionIndex];
  if (!question) return;

  stageTag.textContent = `${activeStage.title} (${selectedTrack.config.label})`;
  starsPreview.textContent = `שְׁאֵלָה ${activeQuestionIndex + 1}/${activeStage.questions.length}`;
  questionText.textContent = question.prompt;
  questionText.dir = isMath ? "ltr" : "rtl";
  questionText.classList.toggle("math-text", isMath);

  feedback.textContent = "";
  feedback.className = "feedback";
  answersContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const answerBtn = document.createElement("button");
    answerBtn.type = "button";
    answerBtn.className = "answer-btn";
    answerBtn.textContent = option;
    answerBtn.dir = isMath ? "ltr" : "rtl";
    answerBtn.classList.toggle("math-answer", isMath);
    answerBtn.addEventListener("click", () => handleAnswer(index));
    answersContainer.appendChild(answerBtn);
  });
}

function handleAnswer(index) {
  if (!activeStage) return;
  const selectedTrack = getTrackState();
  const question = activeStage.questions[activeQuestionIndex];
  const buttons = Array.from(document.querySelectorAll(".answer-btn"));
  buttons.forEach((btn) => {
    btn.disabled = true;
  });

  const questionKey = `${activeStage.id}-${activeQuestionIndex}`;
  const isFirstQuestionSolve = !selectedTrack.data.completedQuestions.includes(questionKey);

  if (index === question.correct) {
    feedback.textContent = "כָּל הַכָּבוֹד! מַמְשִׁיכִים...";
    feedback.classList.add("ok");
    showBurst(false);
    stageCorrectThisRun += 1;
    if (isFirstQuestionSolve) {
      selectedTrack.data.completedQuestions.push(questionKey);
      selectedTrack.data.stars += 1;
      selectedTrack.data.correctAnswers += 1;
    }
  } else {
    const correctAnswer = question.options[question.correct];
    feedback.textContent = `נִסָּיוֹן יָפֶה. הַתְּשׁוּבָה הַנְּכוֹנָה: ${correctAnswer}`;
    feedback.classList.add("no");
  }

  saveProgress();
  renderStats();
  setTimeout(goToNextQuestion, 1000);
}

function goToNextQuestion() {
  if (!activeStage) return;
  activeQuestionIndex += 1;
  if (activeQuestionIndex < activeStage.questions.length) {
    renderQuestion();
    return;
  }
  finishStage(activeStage.questions.length, stageCorrectThisRun);
}

function finishStage(total, correct) {
  if (!activeStage) return;
  const selectedTrack = getTrackState();
  const wasCompleted = selectedTrack.data.completedStages.includes(activeStage.id);

  if (!wasCompleted) {
    selectedTrack.data.completedStages.push(activeStage.id);
    selectedTrack.data.completedStages.sort((a, b) => a - b);
    selectedTrack.data.stars += 3;
  }

  const correctText = `${correct}/${total}`;

  if (selectedTrack.config.mode === "games") {
    gamesText.textContent = `הַמִּשְׂחָק הֻשְׁלַם! תּוֹצָאָה: ${correctText}`;
  } else {
    feedback.textContent = `הַשָּׁלָב הֻשְׁלַם! תּוֹצָאָה: ${correctText}`;
    feedback.className = "feedback ok";
  }

  if (activeStage.id % 2 === 0) {
    showBurst(true);
    showMilestone(selectedTrack.config.label, activeStage.id, correctText);
  } else {
    showBurst(false);
  }

  saveProgress();
  render();

  setTimeout(() => {
    resetSessionState();
    showWelcome();
  }, 1300);
}

function openGameStage(stage) {
  const gameKey = stage.gameId;
  welcomeCard.classList.add("hidden");
  questionCard.classList.add("hidden");
  gamesCard.classList.remove("hidden");

  gamesTag.textContent = `${stage.title} (מִשְׂחָק)`;
  gamesTitle.textContent = gamesData[gameKey].title;
  gamesArea.innerHTML = "";

  if (gameKey === "maze") {
    activeGameState = {
      key: gameKey,
      stageId: stage.id,
      step: 0,
      total: gamesData.maze.path.length - 1,
      correct: 0,
      decoys: buildMazeDecoys(5, 5, gamesData.maze.path.length)
    };
    renderMazeGame();
    return;
  }

  const rounds = gamesData[gameKey].rounds;
  activeGameState = {
    key: gameKey,
    stageId: stage.id,
    roundIndex: 0,
    correct: 0,
    total: rounds.length,
    builtLetters: [],
    roundOptions: []
  };
  if (gameKey === "missingLetter") {
    setWordRoundOptions();
    renderWordBuildRound();
    return;
  }
  renderChoiceRound();
}

function renderChoiceRound() {
  const game = gamesData[activeGameState.key];
  const round = game.rounds[activeGameState.roundIndex];
  const shuffledOptions = shuffleArray(
    round.options.map((option, optionIndex) => ({
      text: option,
      isCorrect: optionIndex === round.correct
    }))
  );
  gamesProgress.textContent = `סֶבֶב ${activeGameState.roundIndex + 1}/${activeGameState.total}`;
  gamesText.textContent = round.prompt;

  const optionsWrap = document.createElement("div");
  optionsWrap.className = "games-options";

  shuffledOptions.forEach((item) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = item.text;
    btn.addEventListener("click", () => {
      if (item.isCorrect) {
        activeGameState.correct += 1;
        gamesText.textContent = "כָּל הַכָּבוֹד! מַמְשִׁיכִים...";
        showBurst(false);
      } else {
        gamesText.textContent = `נִסָּיוֹן יָפֶה. הַתְּשׁוּבָה: ${round.options[round.correct]}`;
      }
      setTimeout(() => {
        goToNextGameRound();
      }, 900);
    });
    optionsWrap.appendChild(btn);
  });

  gamesArea.innerHTML = "";
  gamesArea.appendChild(optionsWrap);
}

function renderWordBuildRound() {
  const game = gamesData.missingLetter;
  const round = game.rounds[activeGameState.roundIndex];
  const wordLetters = Array.from(round.word);

  gamesProgress.textContent = `סֶבֶב ${activeGameState.roundIndex + 1}/${activeGameState.total}`;
  gamesText.textContent = `בִּנוּ אֶת הַמִּלָּה לְפִי הָרֶמֶז: ${round.clue}`;

  const slots = document.createElement("div");
  slots.className = "word-slots";

  for (let i = 0; i < wordLetters.length; i += 1) {
    const slot = document.createElement("div");
    slot.className = "word-slot";
    slot.textContent = activeGameState.builtLetters[i] || "_";
    slots.appendChild(slot);
  }

  const optionsWrap = document.createElement("div");
  optionsWrap.className = "games-options";
  const options = activeGameState.roundOptions;

  options.forEach((letter) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = letter;
    btn.addEventListener("click", () => {
      if (activeGameState.builtLetters.length >= wordLetters.length) return;
      activeGameState.builtLetters.push(letter);
      renderWordBuildRound();

      if (activeGameState.builtLetters.length === wordLetters.length) {
        const builtWord = activeGameState.builtLetters.join("");
        const isCorrect = builtWord === round.word;

        if (isCorrect) {
          activeGameState.correct += 1;
          gamesText.textContent = "כָּל הַכָּבוֹד! בָּנִיתָ מִלָּה נְכוֹנָה.";
          showBurst(false);
        } else {
          gamesText.textContent = `נִסָּיוֹן יָפֶה. הַמִּלָּה הַנְּכוֹנָה: ${round.word}`;
        }

        setTimeout(() => {
          goToNextGameRound();
        }, 900);
      }
    });
    optionsWrap.appendChild(btn);
  });

  gamesArea.innerHTML = "";
  gamesArea.appendChild(slots);
  gamesArea.appendChild(optionsWrap);
}

function goToNextGameRound() {
  activeGameState.roundIndex += 1;
  activeGameState.builtLetters = [];

  if (activeGameState.roundIndex < activeGameState.total) {
    if (activeGameState.key === "missingLetter") {
      setWordRoundOptions();
      renderWordBuildRound();
    } else {
      renderChoiceRound();
    }
    return;
  }

  const selectedTrack = getTrackState();
  selectedTrack.data.correctAnswers += activeGameState.correct;
  selectedTrack.data.stars += activeGameState.correct;
  finishStage(activeGameState.total, activeGameState.correct);
}

function renderMazeGame() {
  gamesProgress.textContent = `צַעַד ${activeGameState.step}/${activeGameState.total}`;
  gamesText.textContent = `לַחֲצוּ עַל הַמִּסְפָּר הַבָּא: ${activeGameState.step + 2}`;

  const board = document.createElement("div");
  board.className = "maze-board";

  for (let r = 0; r < 5; r += 1) {
    for (let c = 0; c < 5; c += 1) {
      const cell = document.createElement("div");
      const pathIndex = findPathIndex(r, c);
      cell.className = "maze-cell";

      if (pathIndex === -1) {
        cell.classList.add("maze-number");
        const key = `${r}-${c}`;
        cell.textContent = String(activeGameState.decoys[key]);
      } else {
        cell.classList.add("maze-number");
        cell.textContent = String(pathIndex + 1);
      }

      if (pathIndex === activeGameState.step) {
        cell.classList.add("player");
        cell.textContent = "😀";
      }

      cell.addEventListener("click", () => handleMazeStep(pathIndex));

      board.appendChild(cell);
    }
  }

  gamesArea.innerHTML = "";
  gamesArea.appendChild(board);
}

function findPathIndex(row, col) {
  return gamesData.maze.path.findIndex(([r, c]) => r === row && c === col);
}

function handleMazeStep(pathIndex) {
  if (pathIndex !== activeGameState.step + 1) {
    gamesText.textContent = "כִּמְעַט! נְנַסֶּה מַשְׁבֶּצֶת אַחֶרֶת.";
    return;
  }

  activeGameState.step = pathIndex;
  activeGameState.correct += 1;
  showBurst(false);

  if (activeGameState.step === activeGameState.total) {
    const selectedTrack = getTrackState();
    selectedTrack.data.correctAnswers += activeGameState.correct;
    selectedTrack.data.stars += 5;
    finishStage(activeGameState.total, activeGameState.correct);
    return;
  }

  renderMazeGame();
}

function setWordRoundOptions() {
  const round = gamesData.missingLetter.rounds[activeGameState.roundIndex];
  activeGameState.roundOptions = buildWordRoundOptions(round.word);
}

function buildMazeDecoys(rows, cols, maxNumber) {
  const decoys = {};
  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      const key = `${r}-${c}`;
      decoys[key] = 1 + Math.floor(Math.random() * maxNumber);
    }
  }
  return decoys;
}

function showBurst(isBig) {
  celebrationBurst.className = `celebration-burst ${isBig ? "burst-big" : "burst-small"}`;
  setTimeout(() => {
    celebrationBurst.className = "celebration-burst hidden";
  }, isBig ? 1500 : 900);
}

function showMilestone(trackLabel, stageId, correctText) {
  milestoneTitle.textContent = "הִשָּׂג גָּדוֹל!";
  milestoneText.textContent = `סִיַּמְתָּ שָׁלָב ${stageId} בְּ${trackLabel}. תּוֹצָאָה: ${correctText}.`;
  milestoneModal.classList.add("open");
  setTimeout(() => {
    milestoneModal.classList.remove("open");
  }, 1600);
}
