// Translation dictionary
const translations = {
  en: {
    title: "Word Builder",
    subtitle: "Learn phonics one word at a time",
    wordOfDay: "⭐ Word of the Day",
    letterExplorer: "Letters, Sounds, and Examples",
    letterDesc: "Click on any letter to learn a word that starts with it",
    wordFamilies: "Word Families",
    familiesDesc: "Explore words that rhyme and share the same pattern",
    buildYourWords: "Build Your Words",
    buildDesc: "Enter letters and watch your words come to life",
    placeholder: "Enter letters (e.g. a d s)",
    buildBtn: "Build Words",
    word: "Word",
    hearIt: "Hear It",
    close: "Close"
  },
  dari: {
    title: "سازنده کلمات",
    subtitle: "صدا شناسی را یک کلمه در یک بار یاد بگیرید",
    wordOfDay: "⭐ کلمه روز",
    letterExplorer: "حروف، صدا ها و مثال ها",
    letterDesc: "برای یادگیری کلمه‌ای که با آن شروع می‌شود، روی هر حرف کلیک کنید",
    wordFamilies: "خانواده‌های کلمات",
    familiesDesc: "کلمات همخوان و دارای الگوی یکسان را کاوش کنید",
    buildYourWords: "کلمات خود را بسازید",
    buildDesc: "حروف را وارد کنید و تماشا کنید تا کلمات شما زنده شوند",
    placeholder: "حروف را وارد کنید (مثلاً: الف د س)",
    buildBtn: "کلمات را بسازید",
    word: "کلمه",
    hearIt: "آن را بشنوید",
    close: "بستن"
  },
  pashto: {
    title: "کلمې جوړونکی",
    subtitle: "صوتونه په یو وخت کې یاد کړئ",
    wordOfDay: "⭐ د ورځې کلمه",
    letterExplorer: "حروف، صدا ، او مثالونه",
    letterDesc: "هر حرف کلیک کړئ تر څو د هغې سره سم کلمه یاد کړئ",
    wordFamilies: "د کلمو کورنۍ",
    familiesDesc: "هغه کلمې کاونده د یکسان نمونو سره",
    buildYourWords: "خپل کلمې جوړ کړئ",
    buildDesc: "حروف داخل کړئ او خپل کلمې ژوندی کول وګورئ",
    placeholder: "حروف داخل کړئ (د بېلګې په توګه: الف د س)",
    buildBtn: "کلمې جوړ کړئ",
    word: "کلمه",
    hearIt: "دا اوریا کړئ",
    close: "بندول",
    wordOfDay: "⭐ د ورځې کلمه"
  }
};

let currentLanguage = 'en';

 // Data structure for letters and corresponding words
 const lettersData = [
        { letter: "A", word: "apple" },
        { letter: "B", word: "bag" },
        { letter: "C", word: "cup" },
        { letter: "D", word: "dog" },
        { letter: "E", word: "elbow" },
        { letter: "F", word: "fan" },
        { letter: "G", word: "gate" },
        { letter: "H", word: "hat" },
        { letter: "I", word: "inch" },
        { letter: "J", word: "jacket" },
        { letter: "K", word: "kid" },
        { letter: "L", word: "lip" },
        { letter: "M", word: "man" },
        { letter: "N", word: "net" },
        { letter: "O", word: "on" },
        { letter: "P", word: "pencil" },
        { letter: "Q", word: "queen" },
        { letter: "R", word: "rug" },
        { letter: "S", word: "sun" },
        { letter: "T", word: "tree" },
        { letter: "U", word: "umbrella" },
        { letter: "V", word: "van" },
        { letter: "W", word: "woman" },
        { letter: "X", word: "exit" },
        { letter: "Y", word: "yak" },
        { letter: "Z", word: "zipper" }  
    ]

// Action Verbs for Word of the Day
const actionVerbs = [
  { verb: "read", dari: "خواندن", pashto: "لوستل" },
  { verb: "write", dari: "نوشتن", pashto: "لیکل" },
  { verb: "trace", dari: "پیروی کردن", pashto: "تعقیب کول" },
  { verb: "copy", dari: "کپی کردن", pashto: "نقل کول" },
  { verb: "draw", dari: "کشیدن", pashto: "تصویر کول" },
  { verb: "jump", dari: "پریدن", pashto: "تلانګې کول" },
  { verb: "run", dari: "دویدن", pashto: "ګریز کول" },
  { verb: "walk", dari: "راه رفتن", pashto: "ګردیدل" },
  { verb: "sit", dari: "نشستن", pashto: "کیناستل" },
  { verb: "stand", dari: "ایستادن", pashto: "پاڅېدل" },
  { verb: "clap", dari: "تصفیق کردن", pashto: "تالیف کول" },
  { verb: "sing", dari: "آواز خواندن", pashto: "آهنګ وایل" },
  { verb: "dance", dari: "رقص کردن", pashto: "ړقص کول" },
  { verb: "paint", dari: "نقاشی کردن", pashto: "رنګول" },
  { verb: "count", dari: "شمارش کردن", pashto: "شمیرل" },
  { verb: "listen", dari: "گوش دادن", pashto: "اوریدل" },
  { verb: "speak", dari: "صحبت کردن", pashto: "خبرې کول" },
  { verb: "play", dari: "بازی کردن", pashto: "لوبه کول" },
  { verb: "learn", dari: "یادگیری کردن", pashto: "زده کول" },
  { verb: "share", dari: "اشتراک کردن", pashto: "ویشل" }
];

// Get Word of the Day function
function getWordOfDay() {
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
  const index = dayOfYear % actionVerbs.length;
  return actionVerbs[index];
}

// Get DOM elements
const lettersContainer = document.getElementById("lettersContainer");
const output = document.getElementById("output");
const familiesContainer = document.getElementById("familiesContainer");
const letterModal = document.getElementById("letterModal");
const closeModal = document.getElementById("closeModal");
const modalOverlay = document.querySelector(".modal-overlay");
const modalLetter = document.getElementById("modalLetter");
const modalWord = document.getElementById("modalWord");
const modalImage = document.getElementById("modalImage");
const speakBtn = document.getElementById("speakBtn");

// Word Families Data - 3 to 4 letter words only
const wordFamilies = [
  { ending: "at", words: ["bat", "cat", "fat", "hat", "mat", "pat", "rat", "sat", "vat", "tat", "chat", "flat", "that", "what", "brat", "gnat", "scat", "stat"] },
  { ending: "an", words: ["ban", "can", "fan", "man", "pan", "ran", "tan", "van", "clan", "plan", "scan", "span"] },
  { ending: "it", words: ["bit", "fit", "hit", "kit", "lit", "pit", "sit", "wit", "nit", "grit", "quit", "skit"] },
  { ending: "et", words: ["bet", "get", "jet", "let", "met", "net", "pet", "set", "vet", "wet", "yet"] },
  { ending: "ig", words: ["big", "dig", "fig", "gig", "jig", "pig", "rig", "wig", "twig"] },
  { ending: "ot", words: ["bot", "cot", "dot", "got", "hot", "jot", "lot", "not", "pot", "rot", "shot", "spot", "plot", "slot"] },
  { ending: "un", words: ["bun", "fun", "gun", "nun", "pun", "run", "sun", "stun"] },
  { ending: "ed", words: ["bed", "fed", "led", "red", "ted", "wed", "shed", "sled", "fled"] },
  { ending: "en", words: ["ben", "den", "hen", "ken", "men", "pen", "ten", "yen", "zen", "when", "then"] },
  { ending: "in", words: ["bin", "din", "fin", "gin", "kin", "pin", "sin", "tin", "win", "chin", "skin", "spin"] },
  { ending: "og", words: ["bog", "cog", "dog", "fog", "hog", "jog", "log", "frog"] },
  { ending: "ack", words: ["back", "hack", "jack", "lack", "pack", "rack", "sack", "tack"] },
  { ending: "ick", words: ["kick", "lick", "nick", "pick", "sick", "tick", "wick"] },
  { ending: "uck", words: ["buck", "duck", "luck", "muck", "puck", "suck", "tuck"] },
  { ending: "and", words: ["band", "hand", "land", "sand"] },
  { ending: "end", words: ["bend", "fend", "lend", "mend", "rend", "send", "tend"] },
  { ending: "ung", words: ["bung", "dung", "hung", "lung", "rung", "sung"] },
  { ending: "ing", words: ["king", "ping", "ring", "sing", "ting", "wing"] },
  { ending: "ank", words: ["bank", "dank", "hank", "rank", "tank", "yank"] },
  { ending: "ell", words: ["bell", "cell", "dell", "fell", "hell", "jell", "sell", "tell", "well", "yell"] },
  { ending: "all", words: ["ball", "call", "fall", "gall", "hall", "mall", "tall", "wall"] },
];

// Speech Synthesis setup
const synth = window.speechSynthesis;
let currentUtterance = null;

// Function to speak text
function speak(text) {
  // Cancel any ongoing speech
  synth.cancel();

  currentUtterance = new SpeechSynthesisUtterance(text);
  currentUtterance.rate = 0.9;
  currentUtterance.pitch = 1.2;
  currentUtterance.volume = 1;
  currentUtterance.lang = 'en-US';

  // Add visual feedback
  speakBtn.classList.add("playing");

  currentUtterance.onend = () => {
    speakBtn.classList.remove("playing");
  };

  currentUtterance.onerror = () => {
    speakBtn.classList.remove("playing");
  };

  synth.speak(currentUtterance);
}

// Speak button click handler
speakBtn.addEventListener("click", () => {
  const letterText = modalLetter.textContent;
  const wordText = modalWord.textContent;
  const fullText = `${letterText} is for ${wordText}`;
  speak(fullText);
});

// Function to open modal with letter info
function openLetterModal(item) {
  modalLetter.textContent = item.letter;
  modalWord.textContent = item.word;
  modalImage.src = ""; // Clear previous image
  modalImage.classList.remove("loaded");

  letterModal.classList.add("active");
  letterModal.style.display = "flex";
  document.body.style.overflow = "hidden"; // Prevent scrolling

  // Auto-speak the letter and word
  setTimeout(() => {
    const letterText = item.letter;
    const wordText = item.word;
    const fullText = `${letterText} is for ${wordText}`;
    speak(fullText);
  }, 300);
}

// Function to close modal
function closeLetterModal() {
  letterModal.classList.remove("active");
  setTimeout(() => {
    letterModal.style.display = "none";
  }, 300);
  document.body.style.overflow = "auto"; // Re-enable scrolling
}

// Close modal when clicking close button or overlay
closeModal.addEventListener("click", closeLetterModal);
modalOverlay.addEventListener("click", closeLetterModal);

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && letterModal.classList.contains("active")) {
    closeLetterModal();
  }
});

// Display letters on the page
function renderLetters() {
  lettersData.forEach((item) => {
    const letterEl = document.createElement("p");
    letterEl.textContent = item.letter;

    letterEl.addEventListener("click", () => {
      openLetterModal(item);
    });

    lettersContainer.appendChild(letterEl);
  });
}

renderLetters();

// Handle word building logic
function buildWords() {
  const inputValue = document.getElementById("lettersInput").value.trim().toLowerCase();
  
  if (!inputValue) {
    output.innerHTML = `<span style="color: #ff6b6b;">🤔 Please enter some letters first!</span>`;
    return;
  }
  
  // Split input into individual letters
  const inputLetters = inputValue.split(/[\s,]+/).filter(letter => letter.length === 1);
  
  if (inputLetters.length === 0) {
    output.innerHTML = `<span style="color: #ff6b6b;">❌ Please enter valid letters (a-z)</span>`;
    return;
  }
  
  // Get all unique combinations of 3 letters (CVC words)
  const generatedWords = generateWords(inputLetters);
  
  if (generatedWords.length === 0) {
    output.innerHTML = `<span style="color: #ff9500;">⭐ No common words found with these letters.<br/>Try letters like: c, a, t or d, o, g</span>`;
    return;
  }
  
  // Display results
  const wordsList = generatedWords.map(w => `<strong>${w}</strong>`).join(", ");
  output.innerHTML = `
    <div style="text-align: center;">
      <div style="font-size: 1.1rem; margin-bottom: 12px; color: #666;">
        📝 Words you can make:
      </div>
      <div style="font-size: 1.3rem; color: var(--primary); line-height: 1.8;">
        ${wordsList}
      </div>
    </div>
  `;
}

// Generate words from input letters
function generateWords(letters) {
  // Comprehensive word list for phonics learning (3, 4, and 5-letter words)
  const commonWords = [
    // 3-letter words
    "ace", "act", "add", "age", "aid", "aim", "air", "all", "and", "ant", "any", "ape", "arc", "are", "ark", "arm", "art", "ash", "ask", "ate",
    "bad", "bag", "ban", "bar", "bat", "bay", "bed", "bee", "bet", "bid", "big", "bin", "bit", "boa", "bog", "bow", "box", "boy", "bud", "bug", "bus", "but", "buy",
    "cab", "can", "cap", "car", "cat", "cot", "cow", "cry", "cub", "cup", "cut",
    "dab", "dad", "dam", "day", "den", "did", "die", "dig", "dim", "dip", "dog", "dot", "dry", "dug",
    "ear", "eat", "egg", "end", "eye",
    "fan", "far", "fat", "fed", "fee", "few", "fig", "fin", "fit", "fix", "fly", "fog", "for", "fox", "fun", "fur",
    "gap", "gas", "gay", "get", "god", "got", "gum", "gun", "gut", "guy",
    "had", "ham", "has", "hat", "hay", "hem", "hen", "her", "hid", "him", "hip", "his", "hit", "hog", "hop", "hot", "how", "hub", "hug", "hum", "hut",
    "ice", "ill", "ink", "inn", "ion", "ire", "its",
    "jab", "jam", "jar", "jay", "jet", "jig", "job", "jog", "joy", "jug",
    "key", "kid", "kin",
    "lab", "lad", "lag", "lap", "law", "lay", "led", "leg", "let", "lid", "lie", "lip", "lit", "log", "lot", "low",
    "mad", "man", "map", "mat", "may", "men", "met", "mix", "mob", "mom", "mop", "mud", "mug",
    "nap", "net", "new", "nod", "nor", "not", "now", "nut",
    "oak", "oat", "odd", "off", "oil", "old", "one", "our", "out", "owe", "owl", "own",
    "pad", "pal", "pan", "pat", "paw", "pay", "peg", "pen", "pet", "pig", "pin", "pit", "pot", "put",
    "rad", "ran", "rat", "raw", "ray", "red", "rev", "rib", "rid", "rig", "rim", "rob", "rod", "rot", "row", "rub", "rug", "run", "rut",
    "sad", "sat", "saw", "say", "sea", "set", "she", "sit", "six", "sky", "sly", "sob", "son", "sun",
    "tab", "tag", "tan", "tap", "tar", "tax", "tea", "ten", "the", "tie", "tin", "tip", "toe", "ton", "too", "top", "toy", "try", "tub", "tug", "two",
    "use",
    "van", "vat", "via", "vie",
    "wad", "wag", "war", "was", "wax", "way", "web", "wed", "wet", "who", "why", "wig", "win", "wit", "won",
    "yak", "yes", "yet", "you",
    "zoo", "zip",
    
    // 4-letter words
    "able", "acid", "aged", "aide", "area", "army",
    "baby", "back", "bake", "ball", "band", "bare", "bark", "base", "bear", "beat", "bird", "bite", "blow", "blue", "boat", "body", "bone", "book", "born", "bowl",
    "cage", "cake", "came", "camp", "card", "care", "case", "cave", "code", "cold", "come", "cone", "cool", "core",
    "dare", "dark", "date", "dead", "dear", "demo", "desk", "dial", "dice", "died", "dire", "dirt", "dive", "dock", "dome", "done", "door",
    "each", "earn", "ease", "easy", "edge",
    "face", "fact", "fair", "fall", "farm", "fast", "fear", "feel", "feet", "fell", "felt", "file", "fill", "film", "find", "fine", "fire", "firm", "fish", "five", "flag", "flat", "flow", "folk", "food", "fool", "foot", "fork", "form", "fort", "four", "free", "from", "fuel", "full",
    "game", "gate", "gave", "gear", "gift", "girl", "give", "glad", "goal", "goat", "gold", "gone", "good", "gray", "grew", "grey", "grip", "grow",
    "hair", "half", "hall", "hand", "hang", "hard", "hare", "hate", "have", "head", "hear", "heat", "held", "help", "here", "hero", "hide", "high", "hill", "hint", "hire", "hold", "hole", "home", "hook", "horn", "hose", "hour", "huge", "hung",
    "idea", "idle",
    "jade", "jail", "joke", "jump",
    "keep", "kept", "kick", "kill", "kind", "king", "knew",
    "lack", "lady", "laid", "lake", "land", "lane", "late", "lead", "leaf", "lean", "left", "lend", "life", "lift", "like", "line", "link", "live", "load", "loaf", "lock", "long", "look", "lord", "lose", "loss", "loud", "love", "luck",
    "made", "mail", "main", "make", "male", "mark", "mask", "mass", "mate", "math", "maze", "mean", "meat", "meet", "menu", "mess", "mice", "mile", "milk", "mind", "mine", "miss", "mode", "mood", "moon", "more", "most", "move", "much", "must",
    "name", "near", "neat", "neck", "need", "nest", "next", "nice", "nine", "node", "none", "noon", "nose", "note",
    "pace", "pack", "page", "pain", "pair", "pale", "palm", "park", "part", "pass", "past", "path", "peak", "pear", "peel", "peer", "pink", "plan", "play", "poet", "pole", "pond", "pool", "poor", "pork", "port", "pray", "prey", "pull", "pure",
    "race", "rack", "rage", "raid", "rail", "rain", "rake", "rang", "rank", "rare", "rate", "read", "real", "reap", "rear", "rice", "rich", "ride", "ring", "rise", "risk", "road", "roam", "roar", "robe", "rock", "role", "roll", "roof", "room", "rope", "rose", "rule", "rush",
    "safe", "sage", "said", "sail", "sake", "sale", "salt", "same", "sand", "save", "seal", "seam", "seat", "seed", "seem", "sell", "send", "sent", "ship", "shop", "shot", "show", "shut", "sick", "side", "sign", "silk", "sing", "sink", "site", "size", "skin", "slip", "slow", "snap", "snow", "soap", "sock", "soft", "soil", "sold", "sole", "some", "song", "soon", "sort", "soul", "spot", "star", "stay", "stem", "step", "stop", "such", "suit", "sure", "swim",
    "take", "tale", "talk", "tall", "tank", "tape", "task", "team", "tear", "tell", "tend", "tent", "term", "test", "than", "that", "them", "then", "they", "thin", "this", "thus", "tide", "tied", "tile", "time", "tire", "toad", "told", "tone", "took", "tool", "town", "trap", "tray", "tree", "trek", "trip", "true", "tube", "tune", "turn", "twin", "type",
    "unit", "used",
    "vain", "vale", "veil", "vein", "verb", "very", "vice", "view", "vine",
    "wade", "wage", "wait", "wake", "walk", "wall", "want", "warm", "warn", "wash", "wave", "weak", "wear", "week", "well", "went", "were", "west", "what", "when", "wide", "wife", "wild", "will", "wind", "wine", "wing", "wire", "wise", "wish", "with", "wolf", "wood", "wool", "word", "wore", "work", "worn",
    "yell", "your",
    
    // 5-letter words
    "about", "abuse", "admit", "adopt", "adult", "after", "again", "agree", "ahead", "alarm", "alien", "alike", "alive", "allow", "alone", "along", "amber", "amuse", "angel", "anger", "angry", "aside", "audio",
    "beach", "beard", "beast", "began", "begin", "being", "below", "bench", "billy", "birth", "black", "blade", "blame", "blank", "blind", "block", "blood", "board", "boost", "booth", "brain", "brake", "brand", "brave", "bread", "break", "breed", "brick", "bride", "bring", "broad", "broke", "brown", "build",
    "cable", "camel", "canal", "candy", "canoe", "can't", "cargo", "catch", "cause", "chain", "chair", "chalk", "champ", "chart", "chase", "cheap", "cheat", "check", "cheek", "cheer", "chest", "chief", "child", "chill", "china", "chose", "chunk", "claim", "class", "clean", "clear", "click", "cliff", "climb", "close", "cloth", "cloud", "coach", "coast", "could", "count", "court", "cover", "crack", "craft", "crane", "crash", "crazy", "cream", "creek", "crime", "crisp", "cross", "crowd", "crown", "curve", "cycle",
    "daily", "dairy", "dance", "dealt", "death", "debut", "depth", "devil", "diary", "diner", "dirty", "dodge", "doing", "doubt", "dough", "draft", "drain", "drama", "drank", "dread", "dream", "dress", "dried", "drier", "drill", "drink", "drive", "drown", "dwell",
    "eager", "eagle", "early", "earth", "eight", "elbow", "elder", "empty", "enemy", "enjoy", "enter", "entry", "equal", "erase", "error", "ethic", "event", "every", "exact", "exist", "extra",
    "fable", "faced", "faded", "faith", "false", "fancy", "fatal", "fault", "favor", "feast", "fence", "fiber", "field", "fiery", "fifth", "fifty", "fight", "filed", "final", "finch", "fined", "fired", "first", "fixed", "flame", "flank", "flash", "fleet", "flesh", "flick", "flier", "flight", "fling", "float", "flood", "floor", "flour", "flown", "fluid", "flute", "focal", "focus", "foggy", "force", "forge", "forth", "forty", "forum", "found", "frame", "frank", "fraud", "freak", "freed", "fresh", "fried", "frock", "front", "frost", "frown", "froze", "fruit", "fully", "funny", "furry",
    "gaily", "gamer", "gauge", "giant", "giddy", "glass", "glaze", "gleam", "glide", "glint", "globe", "gloom", "glory", "glove", "grace", "grade", "grain", "grand", "grant", "grape", "graph", "grasp", "grass", "grate", "grave", "graze", "great", "greed", "green", "greet", "grief", "grill", "grime", "grind", "groan", "groom", "grope", "gross", "group", "grove", "grown", "guard", "guess", "guest", "guide", "guild", "guilt", "guise",
    "habit", "happy", "harsh", "haste", "hasty", "hatch", "haunt", "haven", "havoc", "hazel", "head", "heard", "heart", "heath", "heavy", "hedge", "hefty", "height", "heirs", "hello", "helps", "hence", "herbs", "herds", "heron", "hinge", "hints", "hippo", "hired", "hitch", "hoard", "hobby", "hoist", "holds", "holes", "holly", "homes", "honey", "honor", "hoods", "hooks", "hoops", "hoped", "horde", "horns", "horse", "hoses", "hotel", "hound", "hours", "house", "hovel", "hover", "howls", "human", "humid", "humor", "hunks", "hunts", "hurls", "hurry", "hurts", "husks",
    "ideal", "ideas", "image", "imply", "index", "inner", "input", "irons", "irony", "issue",
    "jeans", "jelly", "jetty", "jewel", "jiffy", "joked", "joker", "jokes", "jolly", "joust", "judge", "juice", "juicy", "jumbo", "jumps", "jumpy", "junco", "junky",
    "kayak", "keeps", "ketch", "kicks", "killed", "killer", "kinds", "kings", "kinks", "kites", "kitty", "knead", "kneel", "knelt", "knife", "knock", "knots", "known", "knows",
    "label", "labor", "laced", "laden", "ladle", "lakes", "lamps", "lands", "lanes", "lapse", "larch", "lards", "large", "larks", "laser", "lasso", "latch", "latex", "later", "lathe", "laugh", "lawns", "layer", "lazar", "lazed", "lazy", "leads", "leafy", "leaks", "leaky", "leans", "leant", "leaps", "leapt", "learn", "lease", "leash", "least", "leave", "ledge", "leeks", "leers", "legal", "lemon", "lemur", "lends", "lense", "lent", "level", "lever", "lewis", "libel", "lice", "licks", "lifts", "light", "liked", "liken", "likes", "lilac", "limbs", "limes", "limit", "lined", "linen", "liner", "lines", "lingo", "links", "lions", "lipid", "liquid", "lists", "lithe", "litter", "lived", "lively", "liver", "lives", "livid", "loads", "loafs", "loams", "loamy", "loans", "loath", "loath", "lobby", "lobed", "lobes", "local", "locks", "locus", "lofts", "lofty", "logan", "logic", "loins", "loner", "longs", "looks", "looms", "loons", "loops", "loose", "loped", "lopes", "lords", "lores", "loser", "loses", "lossy", "lotus", "louds", "lough", "louis", "louse", "lousy", "louts", "loved", "lover", "loves", "lower", "lowly", "loyal", "lowed", "lucid", "lucky", "lucre", "lumps", "lumpy", "lunar", "lunch", "lunge", "lungs", "lurks", "lusty", "lutes", "lying", "lymph", "lynch", "lyre", "lyric",
    "macho", "macro", "madam", "madly", "magic", "magma", "mails", "maims", "mains", "major", "maker", "makes", "males", "malts", "mamma", "mammy", "mango", "manly", "manor", "maple", "march", "mares", "marge", "marks", "marsh", "mason", "masts", "match", "mated", "mates", "maths", "matey", "matte", "mauls", "maxim", "maybe", "mayor", "mazed", "mazes", "meads", "meals", "mealy", "meant", "meats", "meaty", "medal", "media", "medic", "meets", "melds", "melon", "melts", "memos", "mends", "menus", "mercy", "merge", "merit", "merry", "mesas", "meshy", "messy", "metal", "meter", "metro", "micro", "midst", "might", "milks", "milky", "mills", "mimed", "mimes", "mimic", "mince", "minds", "mined", "miner", "mines", "minty", "minus", "mired", "mires", "mirth", "misty", "mites", "mixed", "mixer", "mixes", "moans", "moats", "mocks", "model", "modem", "modes", "mogul", "moist", "molar", "molds", "moldy", "moles", "molts", "mommy", "momma", "mondo", "money", "monks", "month", "mooch", "moods", "moody", "moofs", "mooks", "moola", "moons", "moony", "moors", "moose", "moped", "mopes", "moral", "morph", "morph", "morse", "mossy", "mostly", "motel", "moths", "motif", "motor", "motto", "mould", "moult", "mound", "mound", "mount", "mourn", "mouse", "mousy", "mouth", "moved", "mover", "moves", "movie", "mowed", "mower", "mucus", "muddy", "mufti", "muggy", "mulch", "mummy", "mumps", "munch", "mural", "murky", "musks", "musty", "muted", "mutes", "myths"
  ];
  
  // Count available letters
  const letterCounts = {};
  letters.forEach(letter => {
    letterCounts[letter] = (letterCounts[letter] || 0) + 1;
  });
  
  // Filter words that can be made from the input letters (no repeated letters beyond what's available)
  const availableWords = commonWords.filter(word => {
    const wordLetters = word.split("");
    const wordCounts = {};
    
    // Count letters in the word
    wordLetters.forEach(letter => {
      wordCounts[letter] = (wordCounts[letter] || 0) + 1;
    });
    
    // Check if we have enough of each letter
    return Object.keys(wordCounts).every(letter => 
      letterCounts[letter] && letterCounts[letter] >= wordCounts[letter]
    );
  });
  
  // Return unique words, sorted by length first (3-letter, 4-letter, 5-letter, etc.), then alphabetically
  const uniqueWords = [...new Set(availableWords)];
  return uniqueWords.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length; // Sort by length first
    }
    return a.localeCompare(b); // Then alphabetically within same length
  });
}

const buildBtn = document.getElementById("buildBtn");
const lettersInput = document.getElementById("lettersInput");

if (buildBtn) {
  buildBtn.addEventListener("click", buildWords);
}

// Allow Enter key to build words
if (lettersInput) {
  lettersInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      buildWords();
    }
  });
}

// Render Word Families
function renderWordFamilies() {
  familiesContainer.innerHTML = '';
  
  wordFamilies.forEach((family, index) => {
    const familyEl = document.createElement("div");
    familyEl.className = "word-family";
    familyEl.textContent = family.ending;
    familyEl.dataset.familyId = index;
    
    // Create word list popup
    const wordList = document.createElement("div");
    wordList.className = "word-family-list";
    wordList.dataset.familyId = index;
    
    const title = document.createElement("p");
    title.textContent = `Words ending in "-${family.ending}"`;
    wordList.appendChild(title);
    
    // Create grid container for words
    const wordsContainer = document.createElement("div");
    wordsContainer.className = "word-family-words";
    
    family.words.forEach((word) => {
      const wordEl = document.createElement("div");
      wordEl.className = "word-family-word";
      wordEl.textContent = word;
      
      // Click handler for words
      wordEl.addEventListener("click", (e) => {
        e.stopPropagation();
        synth.cancel();
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.rate = 0.9;
        utterance.pitch = 1.2;
        utterance.lang = 'en-US';
        synth.speak(utterance);
      }, false);
      
      wordsContainer.appendChild(wordEl);
    });
    
    wordList.appendChild(wordsContainer);
    
    // Click handler for card
    familyEl.addEventListener("click", (e) => {
      e.stopPropagation();
      
      // Close all popups
      document.querySelectorAll(".word-family-list.active").forEach((list) => {
        list.classList.remove("active");
      });
      
      // Open this one
      wordList.classList.add("active");
    }, false);
    
    familiesContainer.appendChild(familyEl);
    familiesContainer.appendChild(wordList);
  });
}

// Initialize word families
renderWordFamilies();

// Click outside to close
document.addEventListener("click", () => {
  document.querySelectorAll(".word-family-list.active").forEach((list) => {
    list.classList.remove("active");
  });
}, false);

// // Language switching functionality
// function updateLanguage(lang) {
//   currentLanguage = lang;
  
//   // Update header
//   document.querySelector('.title').textContent = translations[lang].title;
//   document.querySelector('.subtitle').textContent = translations[lang].subtitle;
  
//   // Update section titles and descriptions
//   const sections = document.querySelectorAll('.section');
//   const titles = ['wordOfDay', 'letterExplorer', 'wordFamilies', 'buildYourWords'];
//   const descs = [null, 'letterDesc', 'familiesDesc', 'buildDesc'];
  
//   sections.forEach((section, index) => {
//     const title = section.querySelector('.section-title');
//     const desc = section.querySelector('.section-description');
//     if (title) title.textContent = translations[lang][titles[index]];
//     if (desc && descs[index]) desc.textContent = translations[lang][descs[index]];
//   });
  
//   // Update input placeholder
//   const input = document.getElementById('lettersInput');
//   if (input) input.placeholder = translations[lang].placeholder;
  
//   // Update button
//   const buildBtn = document.getElementById('buildBtn');
//   if (buildBtn) buildBtn.textContent = translations[lang].buildBtn;
  
//   // Update language buttons
//   document.querySelectorAll('.lang-btn').forEach(btn => {
//     btn.classList.remove('active');
//   });
//   document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
  
//   // Update modal labels
//   const wordLabel = document.querySelector('.modal-word-section h3');
//   if (wordLabel) wordLabel.textContent = translations[lang].word;
  
//   const speakBtn = document.getElementById('speakBtn');
//   if (speakBtn) speakBtn.innerHTML = `<span class="speak-icon">🔊</span> ${translations[lang].hearIt}`;
  
//   const closeBtn = document.querySelector('.btn.btn-secondary');
//   if (closeBtn) closeBtn.textContent = translations[lang].close;
  
//   // Update HTML lang attribute
//   document.documentElement.lang = lang;
// }

// // Language button click handlers
// document.querySelectorAll('.lang-btn').forEach(btn => {
//   btn.addEventListener('click', () => {
//     const lang = btn.dataset.lang;
//     updateLanguage(lang);
//   });
// });

// // Initialize Word of the Day
// function initializeWordOfDay() {
//   const wordOfDay = { verb: "read", dari: "خواندن", pashto: "لوستل" };
//   const verbElement = document.getElementById('wordOfDayVerb');
//   const defElement = document.getElementById('wordOfDayDef');
//   const speakBtn = document.getElementById('wordOfDaySpeakBtn');
  
//   if (verbElement) verbElement.textContent = wordOfDay.verb;
//   if (defElement) defElement.innerHTML = `<div style="margin: 8px 0;"><strong>دری:</strong> ${wordOfDay.dari}</div><div><strong>پشتو:</strong> ${wordOfDay.pashto}</div>`;
  
//   if (speakBtn) {
//     speakBtn.addEventListener('click', () => {
//       synth.cancel();
//       const utterance = new SpeechSynthesisUtterance(wordOfDay.verb);
//       utterance.rate = 0.9;
//       utterance.pitch = 1.2;
//       utterance.lang = 'en-US';
//       synth.speak(utterance);
//     });
//   }
// }

// // Call initialization on page load
// window.addEventListener('DOMContentLoaded', initializeWordOfDay);
