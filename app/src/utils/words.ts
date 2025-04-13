
export const WORD_LIST = [
    "adore", "brave", "chill", "doubt", "eager", "fancy", "glide", "hover", "ideal", "jolly",
    "kneel", "latch", "mirth", "nudge", "orbit", "plush", "quilt", "risky", "spine", "throb",
    "unify", "vivid", "whirl", "xenon", "yield", "zesty", "amber", "brisk", "charm", "dizzy",
    "elbow", "frost", "grasp", "hatch", "inbox", "jewel", "knead", "lunar", "mover", "nifty",
    "oasis", "punch", "quack", "raven", "shiny", "tiger", "urban", "vapor", "witty", "xerox",
    "youth", "zonal", "apple", "baker", "candy", "dream", "eagle", "flame", "grape", "haste",
    "input", "joust", "karma", "lemon", "mango", "noble", "ocean", "piano", "query", "raven",
    "scale", "table", "umbra", "valid", "waltz", "xerox", "yacht", "zebra", "react", "swift",
    "coder", "clone", "debug", "light", "might", "night", "right", "sight", "tight", "world",
    "hello", "board", "point", "audio", "raise", "noise", "chart", "chase", "cheap", "check",
    "chest", "chief", "child", "china", "chose", "civil", "claim", "class", "clean", "clear",
    "click", "clock", "close", "coach", "coast", "could", "count", "court", "cover", "craft",
    "crash", "cream", "crime", "cross", "crowd", "crown", "curve", "cycle", "daily", "dance",
    "death", "depth", "doing", "doubt", "dozen", "draft", "drama", "drawn", "drink", "drive",
    "earth", "enemy", "entry", "equal", "error", "event", "every", "exact", "exist", "extra",
    "faith", "false", "fault", "fiber", "field", "fifth", "fifty", "fight", "final", "first",
    "fixed", "flash", "fleet", "floor", "fluid", "focus", "force", "forth", "forty", "forum",
    "found", "frame", "frank", "fraud", "fresh", "front", "fruit", "fully", "funny", "giant",
    "given", "glass", "globe", "going", "grace", "grade", "grand", "grant", "grass", "great",
    "green", "gross", "group", "grown", "guard", "guess", "guest", "guide", "happy", "harry",
    "heart", "heavy", "hence", "henry", "horse", "hotel", "house", "human", "ideal", "image",
    "index", "inner", "issue", "japan", "joint", "jones", "judge", "known", "label", "large",
    "laser", "later", "laugh", "layer", "learn", "leave", "legal", "level", "lewis", "limit",
    "local", "logic", "loose", "lower", "lucky", "lunch", "lying", "magic", "major", "maker",
    "march", "maria", "match", "maybe", "mayor", "meant", "media", "metal", "minor", "minus",
    "mixed", "model", "money", "month", "moral", "motor", "mount", "mouse", "mouth", "movie",
    "music", "needs", "never", "newly", "north", "noted", "novel", "nurse", "occur", "offer",
    "often", "order", "other", "ought", "owner", "panel", "paper", "party", "peace", "peter",
    "phase", "phone", "photo", "piece", "pilot", "pitch", "place", "plain", "plane", "plant",
    "plate", "plaza", "poker", "pound", "power", "press", "price", "pride", "prime", "print",
    "prior", "prize", "proof", "proud", "prove", "queen", "quick", "quiet", "quite", "radio",
    "range", "rapid", "ratio", "reach", "ready", "refer", "reply", "river", "robin", "roger",
    "roman", "rough", "round", "route", "royal", "rural", "saint", "salad", "sarah", "sauce",
    "scope", "score", "seize", "sense", "serve", "seven", "shall", "shape", "share", "sharp",
    "sheet", "shelf", "shell", "shift", "shirt", "shock", "shoot", "short", "shown", "since",
    "sixth", "sixty", "abide", "bliss", "crisp", "dwell", "eject", "flint", "glide", "hover",
    "ivory", "jumpy", "kneel", "latch", "mirth", "nudge", "orbit", "plush", "quilt", "risky",
    "spine", "throb", "unify", "vivid", "whirl", "xenon", "yield", "zesty", "amber", "brisk",
    "charm", "dizzy", "elbow", "frost", "grasp", "hatch", "inbox", "jolly", "knock", "lunar",
    "mango", "nifty", "oasis", "punch", "quack", "raven", "shiny", "tiger", "urban", "vapor",
    "witty", "xerox", "youth", "zebra", "angel", "bloom", "clerk", "drape", "eagle", "flair",
    "glory", "honey", "input", "jewel", "knead", "lodge", "mover", "noble", "ocean", "piano",
    "quill", "rider", "siren", "torch", "ultra", "vocal", "waltz", "xylos", "yacht", "zonal",
    "acorn", "blaze", "crane", "daisy", "easel", "fable", "glint", "hiker", "ivory", "joust",
    "karma", "latch", "mirth", "nudge", "oasis", "prawn", "quilt", "risky", "spine", "throb",
    "unite", "vivid", "whale", "xenon", "yield", "zesty", "amber", "brisk", "charm", "dizzy",
    "elbow", "frost", "grasp", "hatch", "inbox", "jolly", "knock", "lunar", "mango", "nifty",
    "oasis", "punch", "quack", "raven", "shiny", "tiger", "urban", "vapor", "witty", "xerox",
    "youth", "zebra", "angel", "bloom", "clerk", "drape", "eagle", "flair", "glory", "honey",
    "input", "jewel", "knead", "lodge", "mover", "noble", "ocean", "piano", "quill", "rider",
    "siren", "torch", "ultra", "vocal", "waltz", "xylos", "yacht", "zonal",
];

export const VALID_GUESSES = [...WORD_LIST];
export const SOLUTIONS = [...WORD_LIST];

export const WORD_LENGTH = 5;
export const MAX_GUESSES = 6;

export function getRandomSolution() {
    const randomIndex = Math.floor(Math.random() * SOLUTIONS.length);
    
    if (!SOLUTIONS || !SOLUTIONS.length) {
        // console.error("Solutions array is empty.");
        throw new Error("No solutions available.");
    }

    const randomWord = SOLUTIONS[randomIndex].toUpperCase();
    // console.log(`Random word selected: ${randomWord}`);
    return randomWord;
}

export function isValidGuess(word: string) {
    if (word.length !== WORD_LENGTH) return false;
    
}