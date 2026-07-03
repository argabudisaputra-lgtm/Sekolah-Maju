const screens = {
  home: document.querySelector("#homeScreen"),
  mathCategory: document.querySelector("#mathCategoryScreen"),
  generalCategory: document.querySelector("#generalCategoryScreen"),
  languageCategory: document.querySelector("#languageCategoryScreen"),
  javaneseCategory: document.querySelector("#javaneseCategoryScreen"),
  islamCategory: document.querySelector("#islamCategoryScreen"),
  level: document.querySelector("#levelScreen"),
  religion: document.querySelector("#religionScreen"),
  game: document.querySelector("#gameScreen"),
  result: document.querySelector("#resultScreen")
};

const els = {
  backBtn: document.querySelector("#backBtn"),
  userToggleBtn: document.querySelector("#userToggleBtn"),
  userBadge: document.querySelector("#userBadge"),
  accessDialog: document.querySelector("#accessDialog"),
  accessTabs: document.querySelectorAll("[data-access-tab]"),
  accessPanels: document.querySelectorAll("[data-access-panel]"),
  currentUserName: document.querySelector("#currentUserName"),
  loginUserSelect: document.querySelector("#loginUserSelect"),
  loginPasswordRow: document.querySelector("#loginPasswordRow"),
  loginPasswordInput: document.querySelector("#loginPasswordInput"),
  accessMessage: document.querySelector("#accessMessage"),
  loginBtn: document.querySelector("#loginBtn"),
  logoutBtn: document.querySelector("#logoutBtn"),
  userList: document.querySelector("#userList"),
  addUserBox: document.querySelector("#addUserBox"),
  newUserName: document.querySelector("#newUserName"),
  newUserPassword: document.querySelector("#newUserPassword"),
  newUserAccess: document.querySelector("#newUserAccess"),
  newUserLimitType: document.querySelector("#newUserLimitType"),
  newUserLimitCount: document.querySelector("#newUserLimitCount"),
  newUserLimitCountRow: document.querySelector("#newUserLimitCountRow"),
  addUserBtn: document.querySelector("#addUserBtn"),
  adminWaLink: document.querySelector("#adminWaLink"),
  adminEmailLink: document.querySelector("#adminEmailLink"),
  contactEditBox: document.querySelector("#contactEditBox"),
  adminWaInput: document.querySelector("#adminWaInput"),
  adminEmailInput: document.querySelector("#adminEmailInput"),
  saveContactBtn: document.querySelector("#saveContactBtn"),
  settingsBtn: document.querySelector("#settingsBtn"),
  settingsDialog: document.querySelector("#settingsDialog"),
  languageButtons: document.querySelectorAll("[data-language-choice]"),
  subjectGrid: document.querySelector("#subjectGrid"),
  mathCategoryGrid: document.querySelector("#mathCategoryGrid"),
  generalCategoryGrid: document.querySelector("#generalCategoryGrid"),
  languageCategoryGrid: document.querySelector("#languageCategoryGrid"),
  javaneseCategoryGrid: document.querySelector("#javaneseCategoryGrid"),
  islamCategoryGrid: document.querySelector("#islamCategoryGrid"),
  levelGrid: document.querySelector("#levelGrid"),
  selectedSubjectLabel: document.querySelector("#selectedSubjectLabel"),
  gameSubject: document.querySelector("#gameSubject"),
  gameLevel: document.querySelector("#gameLevel"),
  questionCount: document.querySelector("#questionCount"),
  scoreCount: document.querySelector("#scoreCount"),
  progressBar: document.querySelector("#progressBar"),
  visualStage: document.querySelector("#visualStage"),
  questionText: document.querySelector("#questionText"),
  answerGrid: document.querySelector("#answerGrid"),
  feedbackText: document.querySelector("#feedbackText"),
  resultTitle: document.querySelector("#resultTitle"),
  resultText: document.querySelector("#resultText"),
  nextLevelBtn: document.querySelector("#nextLevelBtn"),
  replayBtn: document.querySelector("#replayBtn"),
  homeBtn: document.querySelector("#homeBtn")
};

const state = {
  language: localStorage.getItem("sekolahku-language") || "id",
  subject: "math",
  mathCategory: "counting",
  generalCategory: "astronomy",
  languageCategory: "spelling",
  javaneseCategory: "speech",
  islamCategory: "reading",
  religion: null,
  level: 1,
  questionIndex: 0,
  score: 0,
  questions: [],
  history: ["home"],
  users: [],
  currentUser: null,
  adminContact: { wa: "", email: "" },
  locked: false
};

const copy = {
  id: {
    tagline: "Belajar sambil bermain",
    heroEyebrow: "Toddler & Kindergarten",
    heroTitle: "Petualangan belajar warna-warni",
    heroText: "Pilih pelajaran, selesaikan 10 soal, lalu naik ke level berikutnya.",
    chooseLevel: "Pilih Level",
    math: "Matematika",
    chooseMathCategory: "Pilih Kategori",
    general: "Umum",
    chooseGeneralCategory: "Pilih Kategori Umum",
    language: "Bahasa",
    chooseLanguageCategory: "Pilih Kategori",
    javanese: "Bahasa Jawa",
    chooseJavaneseCategory: "Pilih Kategori",
    islam: "Islam",
    chooseIslamCategory: "Pilih Kategori Islam",
    tenQuestions: "10 soal tiap level",
    religion: "Agama",
    chooseReligion: "Pilih Materi Agama",
    islamHint: "Nabi, malaikat, hijaiyah, iqro",
    christianHint: "Cerita Alkitab & sekolah minggu",
    finished: "Selesai",
    nextLevel: "Level Berikutnya",
    playAgain: "Main Lagi",
    home: "Beranda",
    settings: "Pengaturan",
    languageSetting: "Bahasa kuis",
    accessEyebrow: "Akses User",
    accessTitle: "Manajemen User",
    accessLoginTab: "Masuk",
    accessUserTab: "User",
    accessContactTab: "Kontak Admin",
    currentUserLabel: "User aktif",
    chooseUserLabel: "Pilih user",
    passwordLabel: "Password",
    loginAction: "Masuk",
    logoutAction: "Log out",
    guestInfo: "User tamu bisa melihat menu, tetapi tidak bisa mengerjakan tes.",
    addUserTitle: "Tambah User Baru",
    newUserNameLabel: "Nama user",
    newUserPasswordLabel: "Password",
    newUserAccessLabel: "Akses",
    fullAccessOption: "Bisa mengerjakan tes",
    guestAccessOption: "Tamu lihat menu saja",
    newUserLimitLabel: "Masa akses",
    limitPermanentOption: "Permanen",
    limitDailyOption: "Harian",
    limitMonthlyOption: "Bulanan",
    newUserLimitCountLabel: "Jumlah",
    addUserAction: "Tambah User",
    contactHelp: "Jika butuh akses, hubungi admin lewat WA atau email di bawah ini.",
    contactEditTitle: "Isi Kontak Admin",
    waLabel: "Nomor WA",
    emailLabel: "Email",
    saveContactAction: "Simpan Kontak",
    accessDenied: "User tamu hanya bisa melihat menu. Silakan login atau hubungi admin.",
    loginSuccess: "Berhasil masuk. Selamat belajar!",
    loginWrong: "Password belum tepat.",
    logoutSuccess: "Sudah log out. Sekarang masuk sebagai tamu.",
    userAdded: "User baru berhasil ditambahkan.",
    accessPermanent: "Permanen",
    accessExpired: "Masa akses habis",
    accessUntil: "Aktif sampai",
    contactSaved: "Kontak admin berhasil disimpan.",
    level: "Level",
    question: "Soal",
    score: "Skor",
    correct: "Benar! Kamu keren.",
    wrong: "Belum tepat. Jawabannya:",
    resultGreat: "Hebat!",
    resultGood: "Bagus sekali!",
    resultTry: "Ayo coba lagi!",
    resultText: "Skor kamu {score} dari 10.",
    nextLocked: "Ulangi untuk menguatkan belajar",
    patternQuestion: "Bentuk apa yang melengkapi pola?",
    countingQuestion: "Ada berapa benda di layar?",
    moreGroupQuestion: "Mana kelompok yang lebih banyak?",
    spellingQuestion: "Pilih ejaan yang benar.",
    matchingQuestion: "Pilih pasangan yang cocok.",
    shadowQuestion: "Pilih hewan yang cocok dengan bayangannya.",
    colorQuestion: "Pilih warna yang sama.",
    shapeObjectQuestion: "Pilih benda yang cocok dengan bentuk ini.",
    habitQuestion: "Pilih benda yang cocok dengan kegiatan ini.",
    animalMazeQuestion: "Pilih kaki hewan yang cocok.",
    codeQuestion: "Kode",
    shapeNames: {
      star: "Bintang",
      circle: "Lingkaran",
      triangle: "Segitiga",
      square: "Persegi",
      pentagon: "Segi lima",
      hexagon: "Segi enam"
    },
    mathCategories: {
      pattern: ["Pola", "Lengkapi urutan bentuk dan warna."],
      counting: ["Berhitung", "Hitung benda, tambah, kurang, dan bandingkan."]
    },
    generalCategories: {
      astronomy: ["Astronomi", "Planet, bulan, matahari, bintang, dan benda langit."],
      manners: ["Tata Krama", "Sopan santun di rumah, sekolah, dan tempat umum."],
      flags: ["Nama-nama Bendera Negara", "Kenali bendera negara dari gambarnya."],
      capitals: ["Ibu Kota Negara", "Pilih ibu kota negara yang tepat."]
    },
    languageCategories: {
      spelling: ["Ejaan", "Pilih penulisan kata yang benar."],
      translate: ["Terjemahan", "Pilih arti kata yang tepat."]
    },
    javaneseCategories: {
      speech: ["Krama Inggil, Krama, Ngoko", "Pilih ragam bahasa Jawa yang tepat."],
      script: ["Aksara Jawa", "Kenali huruf aksara Jawa."]
    },
    islamCategories: {
      reading: ["Baca Iqro 1 hingga Al Qur'an", "Latihan huruf hijaiyah, tanda baca, iqro, dan bacaan dasar."],
      knowledge: ["Pengetahuan Umum Islam", "Rukun Islam, Rukun Iman, malaikat, nabi, dan dasar Islam."]
    },
    subjects: {
      math: ["Matematika", "Pilih pola bentuk atau berhitung dengan gambar lucu."],
      matching: ["Mencocokkan", "Cocokkan bentuk, warna, bayangan, kegiatan, dan benda."],
      religion: ["Agama", "Islam dan Kristen untuk toddler dan kindergarten."],
      general: ["Umum", "Hewan, planet, langit, alam, dan benda sekitar."],
      language: ["Bahasa", "Latihan ejaan dan arti kata."],
      javanese: ["Bahasa Jawa", "Tulodho, aksara Jawa, krama, krama inggil, dan ngoko."]
    }
  },
  en: {
    tagline: "Learn through play",
    heroEyebrow: "Toddler & Kindergarten",
    heroTitle: "A colorful learning adventure",
    heroText: "Pick a subject, answer 10 questions, then climb to the next level.",
    chooseLevel: "Choose Level",
    math: "Math",
    chooseMathCategory: "Choose Category",
    general: "General",
    chooseGeneralCategory: "Choose General Category",
    language: "Language",
    chooseLanguageCategory: "Choose Category",
    javanese: "Javanese",
    chooseJavaneseCategory: "Choose Category",
    islam: "Islam",
    chooseIslamCategory: "Choose Islam Category",
    tenQuestions: "10 questions per level",
    religion: "Religion",
    chooseReligion: "Choose Religion Lesson",
    islamHint: "Prophets, angels, hijaiyah, iqro",
    christianHint: "Bible stories & Sunday school",
    finished: "Finished",
    nextLevel: "Next Level",
    playAgain: "Play Again",
    home: "Home",
    settings: "Settings",
    languageSetting: "Quiz language",
    accessEyebrow: "User Access",
    accessTitle: "User Management",
    accessLoginTab: "Login",
    accessUserTab: "Users",
    accessContactTab: "Admin Contact",
    currentUserLabel: "Active user",
    chooseUserLabel: "Choose user",
    passwordLabel: "Password",
    loginAction: "Login",
    logoutAction: "Log out",
    guestInfo: "Guest users can see all menus, but cannot take tests.",
    addUserTitle: "Add New User",
    newUserNameLabel: "User name",
    newUserPasswordLabel: "Password",
    newUserAccessLabel: "Access",
    fullAccessOption: "Can take tests",
    guestAccessOption: "Guest only sees menus",
    newUserLimitLabel: "Access time",
    limitPermanentOption: "Permanent",
    limitDailyOption: "Daily",
    limitMonthlyOption: "Monthly",
    newUserLimitCountLabel: "Amount",
    addUserAction: "Add User",
    contactHelp: "Need access? Contact admin by WhatsApp or email below.",
    contactEditTitle: "Fill Admin Contact",
    waLabel: "WA number",
    emailLabel: "Email",
    saveContactAction: "Save Contact",
    accessDenied: "Guest users can only see menus. Please login or contact admin.",
    loginSuccess: "Login successful. Have fun learning!",
    loginWrong: "The password is not correct yet.",
    logoutSuccess: "Logged out. You are now using guest mode.",
    userAdded: "New user added.",
    accessPermanent: "Permanent",
    accessExpired: "Access time is over",
    accessUntil: "Active until",
    contactSaved: "Admin contact saved.",
    level: "Level",
    question: "Question",
    score: "Score",
    correct: "Correct! Great job.",
    wrong: "Not quite. The answer is:",
    resultGreat: "Amazing!",
    resultGood: "Well done!",
    resultTry: "Let's try again!",
    resultText: "Your score is {score} out of 10.",
    nextLocked: "Replay this level to practice",
    patternQuestion: "Which shape completes the pattern?",
    countingQuestion: "How many objects are on the screen?",
    moreGroupQuestion: "Which group has more?",
    spellingQuestion: "Choose the correct spelling.",
    matchingQuestion: "Choose the matching pair.",
    shadowQuestion: "Choose the animal that matches the shadow.",
    colorQuestion: "Choose the same color.",
    shapeObjectQuestion: "Choose the object that matches this shape.",
    habitQuestion: "Choose the object that matches this activity.",
    animalMazeQuestion: "Choose the matching animal feet.",
    codeQuestion: "Code",
    shapeNames: {
      star: "Star",
      circle: "Circle",
      triangle: "Triangle",
      square: "Square",
      pentagon: "Pentagon",
      hexagon: "Hexagon"
    },
    mathCategories: {
      pattern: ["Pattern", "Complete the shape and color sequence."],
      counting: ["Counting", "Count objects, add, subtract, and compare."]
    },
    generalCategories: {
      astronomy: ["Astronomy", "Planets, moon, sun, stars, and sky objects."],
      manners: ["Manners", "Good behavior at home, school, and public places."],
      flags: ["Country Flags", "Recognize country flags from the picture."],
      capitals: ["Capital Cities", "Choose the correct capital city."]
    },
    languageCategories: {
      spelling: ["Spelling", "Choose the correct word spelling."],
      translate: ["Translation", "Choose the correct word meaning."]
    },
    javaneseCategories: {
      speech: ["Krama Inggil, Krama, Ngoko", "Choose the correct Javanese speech level."],
      script: ["Javanese Script", "Recognize Javanese script letters."]
    },
    islamCategories: {
      reading: ["Read Iqro to Qur'an", "Practice hijaiyah letters, marks, iqro, and basic reading."],
      knowledge: ["Islamic General Knowledge", "Pillars of Islam, pillars of faith, angels, prophets, and basics."]
    },
    subjects: {
      math: ["Math", "Choose shape patterns or counting with cute pictures."],
      matching: ["Matching", "Match shapes, colors, shadows, activities, and objects."],
      religion: ["Religion", "Islam and Christianity for toddler and kindergarten."],
      general: ["General", "Animals, planets, sky objects, nature, and everyday things."],
      language: ["Language", "Practice choosing the correct spelling."],
      javanese: ["Javanese", "Examples, Javanese script, krama, krama inggil, and ngoko."]
    }
  }
};

const subjectIcons = {
  math: '<img src="Matematika.png" alt="">',
  matching: '<img src="Pencocokan.png" alt="">',
  religion: '<img src="Agama.png" alt="">',
  general: '<img src="Pengetahuan%20Umum.png" alt="">',
  language: '<img src="Bahasa.png" alt="">',
  javanese: '<img src="Bahasa%20Jawa.png" alt="">'
};

const palettes = ["#ff6fae", "#ff9f43", "#6bd66f", "#22c6b7", "#4b8dff", "#7c5cff"];
const mathItems = ["🍎", "🍌", "🍓", "⭐", "🧸", "🚗", "🎈", "🌼"];
const mathCategoryIcons = {
  pattern: '<img src="Pola%20Matematika.png" alt="">',
  counting: '<img src="Berhitung.png" alt="">'
};
const languageCategoryIcons = {
  spelling: '<img src="Ejaan.png" alt="">',
  translate: '<img src="Translate.png" alt="">'
};
const javaneseCategoryIcons = {
  speech: '<img src="Krama%20Inggil.png" alt="">',
  script: '<img src="Aksara%20Jawa.png" alt="">'
};
const islamCategoryIcons = {
  reading: '<img src="Iqro.png" alt="">',
  knowledge: '<img src="Pengetahuan%20Umum%20Islam.png" alt="">'
};
const generalCategoryIcons = {
  astronomy: '<img src="Astronomi.png" alt="">',
  manners: '<img src="Tata%20Krama.png" alt="">',
  flags: '<img src="Nama%20Bendera.png" alt="">',
  capitals: '<img src="Ibukota%20Negara.png" alt="">'
};
const patternShapes = ["star", "circle", "triangle", "square", "pentagon", "hexagon"];
const patternColors = ["yellow", "blue", "pink", "green", "orange", "purple"];
const generalItems = ["🐘", "🐢", "🦋", "🌙", "☀️", "🪐", "🌋", "🌊", "🌳", "☁️"];
const matchLabelId = {
  Apple: "Apel",
  Ant: "Semut",
  Bat: "Kelelawar",
  Bee: "Lebah",
  Bell: "Lonceng",
  Blue: "Biru",
  Book: "Buku",
  Cake: "Kue",
  Camel: "Unta",
  Chick: "Anak ayam",
  Comb: "Sisir",
  Cookie: "Kue kering",
  Cow: "Sapi",
  Cracker: "Biskuit",
  Door: "Pintu",
  Donut: "Donat",
  Egg: "Telur",
  Elephant: "Gajah",
  Fish: "Ikan",
  Green: "Hijau",
  Hat: "Topi",
  Lion: "Singa",
  Moon: "Bulan",
  Orange: "Oranye",
  Pencil: "Pensil",
  Pig: "Babi",
  Pizza: "Piza",
  Purple: "Ungu",
  Rabbit: "Kelinci",
  Rain: "Hujan",
  Red: "Merah",
  "Rice ball": "Nasi kepal",
  Sandwich: "Roti lapis",
  Shampoo: "Sampo",
  Snake: "Ular",
  Soap: "Sabun",
  Spoon: "Sendok",
  Star: "Bintang",
  Toothpaste: "Pasta gigi",
  Towel: "Handuk",
  Tree: "Pohon",
  Watermelon: "Semangka",
  Wheel: "Roda",
  Yellow: "Kuning",
  Zebra: "Zebra"
};

const matchingPools = {
  shapeObject: [
    { shape: "triangle", color: "pink", answer: ["🍕", "Pizza"], wrong: [["🚪", "Door"], ["🍪", "Cookie"], ["🧼", "Soap"], ["🛞", "Wheel"]] },
    { shape: "circle", color: "blue", answer: ["🛞", "Wheel"], wrong: [["🍕", "Pizza"], ["🚪", "Door"], ["🧇", "Cracker"], ["📘", "Book"]] },
    { shape: "square", color: "green", answer: ["🧼", "Soap"], wrong: [["🍉", "Watermelon"], ["🥪", "Sandwich"], ["🛞", "Wheel"], ["🍕", "Pizza"]] },
    { shape: "rectangle", color: "yellow", answer: ["🚪", "Door"], wrong: [["🍪", "Cookie"], ["🍕", "Pizza"], ["🍳", "Egg"], ["🧼", "Soap"]] },
    { shape: "circle", color: "orange", answer: ["🍪", "Cookie"], wrong: [["🚪", "Door"], ["🥪", "Sandwich"], ["📘", "Book"], ["🍕", "Pizza"]] },
    { shape: "triangle", color: "green", answer: ["🍉", "Watermelon"], wrong: [["🧇", "Cracker"], ["🧼", "Soap"], ["🛞", "Wheel"], ["🚪", "Door"]] }
  ],
  shadow: [
    { icon: "🐘", label: "Elephant", wrong: [["🐄", "Cow"], ["🦁", "Lion"], ["🐜", "Ant"], ["🐝", "Bee"]] },
    { icon: "🐄", label: "Cow", wrong: [["🐘", "Elephant"], ["🐍", "Snake"], ["🐫", "Camel"], ["🦁", "Lion"]] },
    { icon: "🦁", label: "Lion", wrong: [["🐄", "Cow"], ["🐝", "Bee"], ["🐍", "Snake"], ["🐘", "Elephant"]] },
    { icon: "🐫", label: "Camel", wrong: [["🐜", "Ant"], ["🦁", "Lion"], ["🐄", "Cow"], ["🐝", "Bee"]] },
    { icon: "🐝", label: "Bee", wrong: [["🐍", "Snake"], ["🐘", "Elephant"], ["🐜", "Ant"], ["🐫", "Camel"]] },
    { icon: "🐜", label: "Ant", wrong: [["🐝", "Bee"], ["🦁", "Lion"], ["🐄", "Cow"], ["🐍", "Snake"]] },
    { icon: "🐍", label: "Snake", wrong: [["🐜", "Ant"], ["🐘", "Elephant"], ["🐫", "Camel"], ["🐝", "Bee"]] }
  ],
  color: [
    { color: "green", label: "Green" },
    { color: "red", label: "Red" },
    { color: "yellow", label: "Yellow" },
    { color: "orange", label: "Orange" },
    { color: "blue", label: "Blue" },
    { color: "purple", label: "Purple" }
  ],
  habit: [
    { activity: "🪥", answer: ["🦷", "Toothpaste"], wrong: [["🧼", "Soap"], ["🧴", "Shampoo"], ["🪮", "Comb"], ["🧺", "Towel"]] },
    { activity: "🧒", answer: ["🧼", "Soap"], wrong: [["🦷", "Toothpaste"], ["🪮", "Comb"], ["🧴", "Shampoo"], ["📘", "Book"]] },
    { activity: "🛁", answer: ["🧺", "Towel"], wrong: [["🪮", "Comb"], ["🦷", "Toothpaste"], ["✏️", "Pencil"], ["🍎", "Apple"]] },
    { activity: "💇", answer: ["🪮", "Comb"], wrong: [["🧼", "Soap"], ["🧺", "Towel"], ["🦷", "Toothpaste"], ["🥄", "Spoon"]] },
    { activity: "🧖", answer: ["🧴", "Shampoo"], wrong: [["🚪", "Door"], ["📘", "Book"], ["🪮", "Comb"], ["🍪", "Cookie"]] }
  ],
  sortShape: [
    { shape: "square", color: "yellow", answer: ["🧇", "Cracker"], wrong: [["🍩", "Donut"], ["🍕", "Pizza"], ["🥚", "Egg"], ["🍰", "Cake"]] },
    { shape: "circle", color: "yellow", answer: ["🍩", "Donut"], wrong: [["🥪", "Sandwich"], ["📘", "Book"], ["🍕", "Pizza"], ["🧇", "Cracker"]] },
    { shape: "triangle", color: "yellow", answer: ["🍙", "Rice ball"], wrong: [["🍪", "Cookie"], ["🧇", "Cracker"], ["🚪", "Door"], ["🍰", "Cake"]] }
  ],
  animalMaze: [
    { head: "🦓", feet: "🦓", label: "Zebra", wrong: [["🦁", "Lion"], ["🐰", "Rabbit"], ["🐥", "Chick"], ["🐘", "Elephant"]] },
    { head: "🦁", feet: "🐾", label: "Lion", wrong: [["🐇", "Rabbit"], ["🐥", "Chick"], ["🦓", "Zebra"], ["🐘", "Elephant"]] },
    { head: "🐰", feet: "🐇", label: "Rabbit", wrong: [["🐾", "Lion"], ["🐥", "Chick"], ["🦓", "Zebra"], ["🐘", "Elephant"]] },
    { head: "🐥", feet: "🐥", label: "Chick", wrong: [["🐇", "Rabbit"], ["🐾", "Lion"], ["🦓", "Zebra"], ["🐘", "Elephant"]] }
  ],
  code: {
    legend: [
      ["A", "green"], ["I", "yellow"], ["O", "pink"], ["F", "sky"], ["G", "purple"],
      ["H", "orange"], ["P", "blue"], ["R", "magenta"], ["S", "lime"], ["T", "gray"],
      ["B", "red"], ["K", "teal"], ["M", "brown"], ["N", "mint"], ["L", "lavender"], ["E", "coral"]
    ],
    words: ["STAR", "FISH", "HAT", "PIG", "ANT", "BAT", "BELL", "MOON", "BOOK", "RAIN", "TREE", "KITE"]
  }
};

const data = {
  islamReading: [
    ["Siapa nabi terakhir dalam Islam?", "Who is the final prophet in Islam?", ["Nabi Muhammad", "Nabi Musa", "Nabi Isa", "Nabi Nuh"], ["Prophet Muhammad", "Prophet Musa", "Prophet Isa", "Prophet Nuh"], 0, "☪"],
    ["Huruf hijaiyah pertama adalah...", "The first hijaiyah letter is...", ["ا", "ب", "ت", "ث"], ["ا", "ب", "ت", "ث"], 0, "ا"],
    ["Malaikat yang menyampaikan wahyu adalah...", "The angel who delivered revelation is...", ["Jibril", "Mikail", "Israfil", "Ridwan"], ["Jibril", "Mikail", "Israfil", "Ridwan"], 0, "✨"],
    ["Kitab suci umat Islam adalah...", "The holy book of Muslims is...", ["Al-Qur'an", "Injil", "Taurat", "Zabur"], ["Qur'an", "Gospel", "Torah", "Psalms"], 0, "📖"],
    ["Sebelum makan kita membaca...", "Before eating we say...", ["Bismillah", "Selamat malam", "Terima kasih", "Sampai jumpa"], ["Bismillah", "Good night", "Thank you", "Goodbye"], 0, "🍽️"],
    ["Arah salat disebut...", "The prayer direction is called...", ["Kiblat", "Halaman", "Jalan", "Pasar"], ["Qibla", "Yard", "Road", "Market"], 0, "🕋"],
    ["ا dibaca...", "ا is read as...", ["Alif", "Ba", "Ta", "Jim"], ["Alif", "Ba", "Ta", "Jim"], 0, "ا"],
    ["ب dibaca...", "ب is read as...", ["Ba", "Alif", "Dal", "Sin"], ["Ba", "Alif", "Dal", "Sin"], 0, "ب"],
    ["Jumlah rukun Islam ada...", "There are how many pillars of Islam?", ["5", "2", "7", "9"], ["5", "2", "7", "9"], 0, "5"],
    ["Ucapan salam Islam adalah...", "The Islamic greeting is...", ["Assalamu'alaikum", "Halo saja", "Selamat tidur", "Ayo pergi"], ["Assalamu'alaikum", "Just hello", "Good sleep", "Let's go"], 0, "🤝"]
  ],
  christian: [
    ["Hari Natal memperingati kelahiran...", "Christmas celebrates the birth of...", ["Yesus", "Musa", "Daud", "Yunus"], ["Jesus", "Moses", "David", "Jonah"], 0, "✝"],
    ["Kitab suci umat Kristen adalah...", "The holy book of Christians is...", ["Alkitab", "Kamus", "Atlas", "Majalah"], ["Bible", "Dictionary", "Atlas", "Magazine"], 0, "📖"],
    ["Siapa yang membangun bahtera besar?", "Who built the big ark?", ["Nuh", "Petrus", "Paulus", "Yakub"], ["Noah", "Peter", "Paul", "Jacob"], 0, "⛵"],
    ["Daud mengalahkan...", "David defeated...", ["Goliat", "Firaun", "Herodes", "Pilatus"], ["Goliath", "Pharaoh", "Herod", "Pilate"], 0, "🪨"],
    ["Kita berdoa kepada...", "We pray to...", ["Tuhan", "Mainan", "Bulan", "Sepatu"], ["God", "Toys", "Moon", "Shoes"], 0, "🙏"],
    ["Yesus lahir di...", "Jesus was born in...", ["Betlehem", "Roma", "Babel", "Niniwe"], ["Bethlehem", "Rome", "Babel", "Nineveh"], 0, "⭐"],
    ["Murid-murid Yesus disebut...", "Jesus' students are called...", ["Murid", "Pilot", "Dokter", "Nelayan saja"], ["Disciples", "Pilots", "Doctors", "Only fishers"], 0, "👣"],
    ["Sekolah minggu biasanya belajar tentang...", "Sunday school usually learns about...", ["Firman Tuhan", "Balapan", "Memasak saja", "Belanja"], ["God's word", "Racing", "Only cooking", "Shopping"], 0, "🏫"],
    ["Paskah mengingat Yesus...", "Easter remembers Jesus...", ["Bangkit", "Tidur", "Bersembunyi", "Berjalan-jalan"], ["Came back to life", "Slept", "Hid", "Took a walk"], 0, "🌅"],
    ["Kasih berarti kita mau...", "Love means we want to...", ["Menolong", "Mendorong", "Mengejek", "Merebut"], ["Help", "Push", "Mock", "Grab"], 0, "❤"]
  ],
  general: [
    [["Hewan yang punya belalai adalah...", "Which animal has a trunk?"], ["Gajah", "Kucing", "Ayam", "Ikan"], ["Elephant", "Cat", "Chicken", "Fish"], "🐘"],
    [["Planet merah adalah...", "The red planet is..."], ["Mars", "Venus", "Bumi", "Neptunus"], ["Mars", "Venus", "Earth", "Neptune"], "🔴"],
    [["Benda langit yang bersinar siang hari adalah...", "The sky object shining during the day is..."], ["Matahari", "Bulan", "Kometa", "Awan"], ["Sun", "Moon", "Comet", "Cloud"], "☀️"],
    [["Hewan yang bisa terbang adalah...", "Which animal can fly?"], ["Burung", "Sapi", "Kambing", "Kelinci"], ["Bird", "Cow", "Goat", "Rabbit"], "🐦"],
    [["Air laut rasanya...", "Sea water tastes..."], ["Asin", "Manis", "Pahit", "Pedas"], ["Salty", "Sweet", "Bitter", "Spicy"], "🌊"],
    [["Gunung mengeluarkan lava disebut...", "A mountain that can release lava is a..."], ["Gunung berapi", "Bukit pasir", "Danau", "Pulau"], ["Volcano", "Sand hill", "Lake", "Island"], "🌋"],
    [["Planet tempat kita tinggal adalah...", "The planet we live on is..."], ["Bumi", "Saturnus", "Jupiter", "Merkurius"], ["Earth", "Saturn", "Jupiter", "Mercury"], "🌎"],
    [["Bulan terlihat jelas pada...", "The moon is easier to see at..."], ["Malam", "Siang", "Pagi di kelas", "Saat hujan deras"], ["Night", "Day", "Morning in class", "Heavy rain"], "🌙"],
    [["Tumbuhan besar berkayu disebut...", "A large woody plant is a..."], ["Pohon", "Rumput", "Jamur", "Batu"], ["Tree", "Grass", "Mushroom", "Rock"], "🌳"],
    [["Awan berada di...", "Clouds are in the..."], ["Langit", "Lemari", "Piring", "Sepatu"], ["Sky", "Cupboard", "Plate", "Shoe"], "☁️"]
  ],
  language: [
    ["🍎", ["Apel", "Aple", "Appel", "Apil"], ["Apple", "Aple", "Appel", "Apel"]],
    ["📚", ["Buku", "Bku", "Booku", "Bokuh"], ["Book", "Bok", "Boook", "Buk"]],
    ["🐱", ["Kucing", "Kuceng", "Kucingg", "Kuching"], ["Cat", "Kat", "Catt", "Cet"]],
    ["☀️", ["Matahari", "Matahri", "Mataharri", "Metahari"], ["Sun", "Sunn", "San", "Son"]],
    ["💧", ["Air", "Ari", "Ayir", "Aer"], ["Water", "Watter", "Woter", "Watir"]],
    ["🏠", ["Rumah", "Ruma", "Rummah", "Rhumah"], ["House", "Hous", "Houze", "Hause"]],
    ["🔴", ["Merah", "Mera", "Merrah", "Mairah"], ["Red", "Redd", "Rad", "Reed"]],
    ["🏫", ["Sekolah", "Skolah", "Sekola", "Sekollah"], ["School", "Shool", "Scool", "Schoole"]],
    ["🤝", ["Teman", "Tman", "Temann", "Tieman"], ["Friend", "Frend", "Freind", "Friand"]],
    ["⭐", ["Bintang", "Bitang", "Bintangg", "Bingtang"], ["Star", "Starr", "Ster", "Staar"]]
  ],
  languageTranslate: [
    [["Bahasa Inggris dari apel adalah...", "Indonesian for apple is..."], ["Apple", "Ball", "Cat", "Door"], ["Apel", "Bola", "Kucing", "Pintu"], "🍎"],
    [["Bahasa Inggris dari buku adalah...", "Indonesian for book is..."], ["Book", "Bird", "Bag", "Bed"], ["Buku", "Burung", "Tas", "Kasur"], "📚"],
    [["Bahasa Inggris dari kucing adalah...", "Indonesian for cat is..."], ["Cat", "Cow", "Car", "Cake"], ["Kucing", "Sapi", "Mobil", "Kue"], "🐱"],
    [["Bahasa Inggris dari matahari adalah...", "Indonesian for sun is..."], ["Sun", "Moon", "Star", "Sky"], ["Matahari", "Bulan", "Bintang", "Langit"], "☀️"],
    [["Bahasa Inggris dari air adalah...", "Indonesian for water is..."], ["Water", "Window", "Wind", "Wood"], ["Air", "Jendela", "Angin", "Kayu"], "💧"],
    [["Bahasa Inggris dari rumah adalah...", "Indonesian for house is..."], ["House", "Horse", "Hat", "Hand"], ["Rumah", "Kuda", "Topi", "Tangan"], "🏠"],
    [["Bahasa Inggris dari merah adalah...", "Indonesian for red is..."], ["Red", "Blue", "Green", "Yellow"], ["Merah", "Biru", "Hijau", "Kuning"], "🔴"],
    [["Bahasa Inggris dari sekolah adalah...", "Indonesian for school is..."], ["School", "Shop", "Ship", "Shoe"], ["Sekolah", "Toko", "Kapal", "Sepatu"], "🏫"],
    [["Bahasa Inggris dari teman adalah...", "Indonesian for friend is..."], ["Friend", "Family", "Flower", "Food"], ["Teman", "Keluarga", "Bunga", "Makanan"], "🤝"],
    [["Bahasa Inggris dari bintang adalah...", "Indonesian for star is..."], ["Star", "Stone", "Story", "Street"], ["Bintang", "Batu", "Cerita", "Jalan"], "⭐"]
  ],
  javanese: [
    ["Tulodho tegese...", ["Contoh", "Lari", "Tidur", "Makan"], "📘"],
    ["Ngoko dari 'mangan' dalam Bahasa Indonesia adalah...", ["Makan", "Minum", "Pergi", "Datang"], "🍚"],
    ["Krama dari 'mangan' adalah...", ["Nedha", "Turu", "Mlaku", "Dolanan"], "🍽️"],
    ["Krama inggil dari 'makan' adalah...", ["Dhahar", "Nedha", "Mlayu", "Tuku"], "🍛"],
    ["Aksara Jawa 'ꦲ' dibaca...", ["Ha", "Na", "Ca", "Ra"], "ꦲ"],
    ["Aksara Jawa 'ꦤ' dibaca...", ["Na", "Da", "Ta", "Sa"], "ꦤ"],
    ["Aksara Jawa 'ꦕ' dibaca...", ["Ca", "Ka", "La", "Pa"], "ꦕ"],
    ["Ngoko dari 'tidur' adalah...", ["Turu", "Tilem", "Sare", "Lenggah"], "🛏️"],
    ["Krama dari 'aku' adalah...", ["Kula", "Kowe", "Dheweke", "Iki"], "🙋"],
    ["Krama inggil untuk 'bapak/ibu makan' memakai kata...", ["Dhahar", "Mangan", "Turu", "Mlaku"], "👨‍👩‍👧"]
  ],
  javaneseSpeech: [
    [["Ngoko dari 'makan' adalah...", "The ngoko word for 'eat' is..."], ["Mangan", "Nedha", "Dhahar", "Sare"], "🍚"],
    [["Krama dari 'makan' adalah...", "The krama word for 'eat' is..."], ["Nedha", "Mangan", "Dhahar", "Turu"], "🍽️"],
    [["Krama inggil dari 'makan' adalah...", "The krama inggil word for 'eat' is..."], ["Dhahar", "Nedha", "Mangan", "Mlaku"], "🍛"],
    [["Ngoko dari 'tidur' adalah...", "The ngoko word for 'sleep' is..."], ["Turu", "Tilem", "Sare", "Lenggah"], "🛏️"],
    [["Krama dari 'tidur' adalah...", "The krama word for 'sleep' is..."], ["Tilem", "Turu", "Sare", "Mangan"], "🌙"],
    [["Krama inggil dari 'tidur' adalah...", "The krama inggil word for 'sleep' is..."], ["Sare", "Tilem", "Turu", "Nedha"], "💤"],
    [["Krama dari 'aku' adalah...", "The krama word for 'I' is..."], ["Kula", "Aku", "Kowe", "Dheweke"], "🙋"],
    [["Ngoko dari 'kamu' adalah...", "The ngoko word for 'you' is..."], ["Kowe", "Panjenengan", "Sampeyan", "Kula"], "👉"],
    [["Krama dari 'pergi' adalah...", "The krama word for 'go' is..."], ["Kesah", "Lunga", "Tindak", "Mangan"], "🚶"],
    [["Krama inggil dari 'pergi' adalah...", "The krama inggil word for 'go' is..."], ["Tindak", "Kesah", "Lunga", "Turu"], "👣"]
  ],
  javaneseScript: [
    [["Aksara Jawa 'ꦲ' dibaca...", "The Javanese letter 'ꦲ' is read as..."], ["Ha", "Na", "Ca", "Ra"], "ꦲ"],
    [["Aksara Jawa 'ꦤ' dibaca...", "The Javanese letter 'ꦤ' is read as..."], ["Na", "Da", "Ta", "Sa"], "ꦤ"],
    [["Aksara Jawa 'ꦕ' dibaca...", "The Javanese letter 'ꦕ' is read as..."], ["Ca", "Ka", "La", "Pa"], "ꦕ"],
    [["Aksara Jawa 'ꦫ' dibaca...", "The Javanese letter 'ꦫ' is read as..."], ["Ra", "Ha", "Ga", "Ya"], "ꦫ"],
    [["Aksara Jawa 'ꦏ' dibaca...", "The Javanese letter 'ꦏ' is read as..."], ["Ka", "Na", "Ba", "Tha"], "ꦏ"],
    [["Aksara Jawa 'ꦢ' dibaca...", "The Javanese letter 'ꦢ' is read as..."], ["Da", "Sa", "Pa", "Ja"], "ꦢ"],
    [["Aksara Jawa 'ꦠ' dibaca...", "The Javanese letter 'ꦠ' is read as..."], ["Ta", "Ma", "Nga", "Wa"], "ꦠ"],
    [["Aksara Jawa 'ꦱ' dibaca...", "The Javanese letter 'ꦱ' is read as..."], ["Sa", "La", "Dha", "Nya"], "ꦱ"],
    [["Aksara Jawa 'ꦮ' dibaca...", "The Javanese letter 'ꦮ' is read as..."], ["Wa", "Ya", "Ra", "Ha"], "ꦮ"],
    [["Aksara Jawa 'ꦭ' dibaca...", "The Javanese letter 'ꦭ' is read as..."], ["La", "Pa", "Fa", "Za"], "ꦭ"]
  ]
};

const generalQuestionPools = {
  astronomy: [
    [["Planet merah adalah...", "The red planet is..."], ["Mars", "Venus", "Bumi", "Neptunus"], ["Mars", "Venus", "Earth", "Neptune"], "🔴"],
    [["Benda langit yang bersinar siang hari adalah...", "The sky object shining during the day is..."], ["Matahari", "Bulan", "Kometa", "Awan"], ["Sun", "Moon", "Comet", "Cloud"], "☀️"],
    [["Planet tempat kita tinggal adalah...", "The planet we live on is..."], ["Bumi", "Saturnus", "Jupiter", "Merkurius"], ["Earth", "Saturn", "Jupiter", "Mercury"], "🌎"],
    [["Bulan terlihat jelas pada...", "The moon is easier to see at..."], ["Malam", "Siang", "Pagi di kelas", "Saat hujan deras"], ["Night", "Day", "Morning in class", "Heavy rain"], "🌙"],
    [["Benda langit yang berekor disebut...", "A sky object with a tail is called..."], ["Komet", "Awan", "Pelangi", "Gunung"], ["Comet", "Cloud", "Rainbow", "Mountain"], "☄️"],
    [["Planet terbesar di tata surya adalah...", "The largest planet in the solar system is..."], ["Jupiter", "Mars", "Bumi", "Merkurius"], ["Jupiter", "Mars", "Earth", "Mercury"], "🪐"],
    [["Planet yang punya cincin terkenal adalah...", "The planet famous for its rings is..."], ["Saturnus", "Venus", "Mars", "Bumi"], ["Saturn", "Venus", "Mars", "Earth"], "🪐"],
    [["Kumpulan banyak bintang disebut...", "A group of many stars is called..."], ["Galaksi", "Pulau", "Laut", "Hutan"], ["Galaxy", "Island", "Sea", "Forest"], "🌌"],
    [["Bumi mengelilingi...", "Earth goes around the..."], ["Matahari", "Bulan", "Awan", "Gunung"], ["Sun", "Moon", "Cloud", "Mountain"], "☀️"],
    [["Astronaut pergi ke luar angkasa memakai...", "An astronaut goes to space using a..."], ["Roket", "Sepeda", "Perahu", "Kereta"], ["Rocket", "Bicycle", "Boat", "Train"], "🚀"],
    [["Bintang tampak banyak pada waktu...", "Stars are easier to see at..."], ["Malam", "Siang", "Sore hujan", "Pagi berkabut"], ["Night", "Day", "Rainy afternoon", "Foggy morning"], "⭐"],
    [["Planet terdekat dari Matahari adalah...", "The closest planet to the Sun is..."], ["Merkurius", "Neptunus", "Saturnus", "Bumi"], ["Mercury", "Neptune", "Saturn", "Earth"], "☀️"]
  ],
  manners: [
    [["Saat bertemu guru, kita sebaiknya...", "When meeting a teacher, we should..."], ["Menyapa dengan sopan", "Berteriak", "Mendorong teman", "Berlari pergi"], ["Greet politely", "Shout", "Push a friend", "Run away"], "🤝"],
    [["Jika mendapat bantuan, kita mengucapkan...", "When someone helps us, we say..."], ["Terima kasih", "Pergi sana", "Tidak mau", "Cepat"], ["Thank you", "Go away", "I do not want it", "Hurry"], "🙏"],
    [["Jika melakukan salah, kita mengucapkan...", "When we make a mistake, we say..."], ["Maaf", "Hebat", "Ayo lari", "Diam"], ["Sorry", "Great", "Let's run", "Be quiet"], "🙂"],
    [["Sebelum meminjam barang teman, kita harus...", "Before borrowing a friend's item, we should..."], ["Meminta izin", "Mengambil diam-diam", "Menyembunyikan", "Membuang"], ["Ask permission", "Take it secretly", "Hide it", "Throw it away"], "✋"],
    [["Saat orang lain berbicara, kita sebaiknya...", "When someone else is speaking, we should..."], ["Mendengarkan", "Memotong terus", "Menutup telinga", "Menertawakan"], ["Listen", "Keep interrupting", "Cover our ears", "Laugh at them"], "👂"],
    [["Sampah sebaiknya dibuang ke...", "Trash should be put in the..."], ["Tempat sampah", "Lantai", "Meja", "Tas teman"], ["Trash bin", "Floor", "Table", "Friend's bag"], "🗑️"],
    [["Saat antre, kita harus...", "When standing in line, we should..."], ["Menunggu giliran", "Menyerobot", "Mendorong", "Berteriak"], ["Wait our turn", "Cut the line", "Push", "Shout"], "🚶"],
    [["Berbicara kepada orang tua harus dengan suara...", "We should speak to elders in a..."], ["Sopan", "Kasar", "Membentak", "Mengejek"], ["Polite voice", "Rude voice", "Yelling voice", "Mocking voice"], "🗣️"],
    [["Mainan setelah dipakai sebaiknya...", "After using toys, we should..."], ["Dirapikan", "Ditinggal berantakan", "Dilempar", "Disembunyikan"], ["Put them away", "Leave them messy", "Throw them", "Hide them"], "🧸"],
    [["Saat teman sedih, kita sebaiknya...", "When a friend is sad, we should..."], ["Menghibur", "Mengejek", "Meninggalkan", "Merebut mainan"], ["Comfort them", "Mock them", "Leave them", "Grab their toy"], "❤️"],
    [["Sebelum masuk kamar orang lain, kita sebaiknya...", "Before entering someone's room, we should..."], ["Mengetuk pintu", "Menerobos", "Berteriak", "Mengintip"], ["Knock", "Rush in", "Shout", "Peek"], "🚪"],
    [["Saat makan bersama, kita sebaiknya...", "When eating together, we should..."], ["Duduk rapi", "Bermain makanan", "Berlari", "Melempar sendok"], ["Sit nicely", "Play with food", "Run around", "Throw a spoon"], "🍽️"]
  ],
  flags: [
    [["Bendera negara manakah ini?", "Which country's flag is this?"], ["Indonesia", "Jepang", "Singapura", "Polandia"], ["Indonesia", "Japan", "Singapore", "Poland"], "🇮🇩"],
    [["Bendera negara manakah ini?", "Which country's flag is this?"], ["Jepang", "Indonesia", "Korea Selatan", "Thailand"], ["Japan", "Indonesia", "South Korea", "Thailand"], "🇯🇵"],
    [["Bendera negara manakah ini?", "Which country's flag is this?"], ["Amerika Serikat", "Australia", "Inggris", "Kanada"], ["United States", "Australia", "United Kingdom", "Canada"], "🇺🇸"],
    [["Bendera negara manakah ini?", "Which country's flag is this?"], ["Inggris", "Amerika Serikat", "Prancis", "Jerman"], ["United Kingdom", "United States", "France", "Germany"], "🇬🇧"],
    [["Bendera negara manakah ini?", "Which country's flag is this?"], ["Prancis", "Belanda", "Rusia", "Italia"], ["France", "Netherlands", "Russia", "Italy"], "🇫🇷"],
    [["Bendera negara manakah ini?", "Which country's flag is this?"], ["Jerman", "Belgia", "Spanyol", "Prancis"], ["Germany", "Belgium", "Spain", "France"], "🇩🇪"],
    [["Bendera negara manakah ini?", "Which country's flag is this?"], ["Italia", "Meksiko", "Irlandia", "India"], ["Italy", "Mexico", "Ireland", "India"], "🇮🇹"],
    [["Bendera negara manakah ini?", "Which country's flag is this?"], ["Malaysia", "Singapura", "Thailand", "Filipina"], ["Malaysia", "Singapore", "Thailand", "Philippines"], "🇲🇾"],
    [["Bendera negara manakah ini?", "Which country's flag is this?"], ["Singapura", "Indonesia", "Malaysia", "Vietnam"], ["Singapore", "Indonesia", "Malaysia", "Vietnam"], "🇸🇬"],
    [["Bendera negara manakah ini?", "Which country's flag is this?"], ["Australia", "Inggris", "Selandia Baru", "Kanada"], ["Australia", "United Kingdom", "New Zealand", "Canada"], "🇦🇺"],
    [["Bendera negara manakah ini?", "Which country's flag is this?"], ["Kanada", "Amerika Serikat", "Swiss", "Denmark"], ["Canada", "United States", "Switzerland", "Denmark"], "🇨🇦"],
    [["Bendera negara manakah ini?", "Which country's flag is this?"], ["India", "Italia", "Irlandia", "Meksiko"], ["India", "Italy", "Ireland", "Mexico"], "🇮🇳"]
  ],
  capitals: [
    [["Ibu kota Indonesia adalah...", "The capital of Indonesia is..."], ["Jakarta", "Bandung", "Surabaya", "Medan"], ["Jakarta", "Bandung", "Surabaya", "Medan"], "🇮🇩"],
    [["Ibu kota Jepang adalah...", "The capital of Japan is..."], ["Tokyo", "Osaka", "Kyoto", "Seoul"], ["Tokyo", "Osaka", "Kyoto", "Seoul"], "🇯🇵"],
    [["Ibu kota Amerika Serikat adalah...", "The capital of the United States is..."], ["Washington, D.C.", "New York", "Los Angeles", "Boston"], ["Washington, D.C.", "New York", "Los Angeles", "Boston"], "🇺🇸"],
    [["Ibu kota Inggris adalah...", "The capital of the United Kingdom is..."], ["London", "Paris", "Berlin", "Dublin"], ["London", "Paris", "Berlin", "Dublin"], "🇬🇧"],
    [["Ibu kota Prancis adalah...", "The capital of France is..."], ["Paris", "Lyon", "Marseille", "Nice"], ["Paris", "Lyon", "Marseille", "Nice"], "🇫🇷"],
    [["Ibu kota Jerman adalah...", "The capital of Germany is..."], ["Berlin", "Munich", "Hamburg", "Bonn"], ["Berlin", "Munich", "Hamburg", "Bonn"], "🇩🇪"],
    [["Ibu kota Italia adalah...", "The capital of Italy is..."], ["Roma", "Milan", "Venice", "Naples"], ["Rome", "Milan", "Venice", "Naples"], "🇮🇹"],
    [["Ibu kota Malaysia adalah...", "The capital of Malaysia is..."], ["Kuala Lumpur", "Johor Bahru", "Penang", "Malaka"], ["Kuala Lumpur", "Johor Bahru", "Penang", "Malacca"], "🇲🇾"],
    [["Ibu kota Singapura adalah...", "The capital of Singapore is..."], ["Singapura", "Kuala Lumpur", "Bangkok", "Manila"], ["Singapore", "Kuala Lumpur", "Bangkok", "Manila"], "🇸🇬"],
    [["Ibu kota Australia adalah...", "The capital of Australia is..."], ["Canberra", "Sydney", "Melbourne", "Perth"], ["Canberra", "Sydney", "Melbourne", "Perth"], "🇦🇺"],
    [["Ibu kota Kanada adalah...", "The capital of Canada is..."], ["Ottawa", "Toronto", "Vancouver", "Montreal"], ["Ottawa", "Toronto", "Vancouver", "Montreal"], "🇨🇦"],
    [["Ibu kota India adalah...", "The capital of India is..."], ["New Delhi", "Mumbai", "Kolkata", "Chennai"], ["New Delhi", "Mumbai", "Kolkata", "Chennai"], "🇮🇳"]
  ]
};

const flagFiles = [
  "Afganistan (Afghanistan).png",
  "Afrika Selatan (South Africa).png",
  "Albania.png",
  "Aljazair (Algeria).png",
  "Amerika Serikat (United States).png",
  "Andora (Andorra).png",
  "Angola.png",
  "Anguilla.png",
  "Antarktika (Antarctica).png",
  "Antigua dan Barbuda (Antigua and Barbuda).png",
  "Arab Saudi (Saudi Arabia).png",
  "Argentina.png",
  "Armenia.png",
  "Aruba.png",
  "Australia.png",
  "Austria.png",
  "Azerbaijan.png",
  "Bahama (Bahamas).png",
  "Bahrain.png",
  "Bangladesh.png",
  "Barbados.png",
  "Belanda (Netherlands).png",
  "Belarus.png",
  "Belgia (Belgium).png",
  "Belize.png",
  "Benin.png",
  "Bermuda.png",
  "Bhutan.png",
  "Bolivia.png",
  "Bonaire.png",
  "Bosnia dan Herzegovina (Bosnia and Herzegovina).png",
  "Botswana.png",
  "Brazil.png",
  "Britania Raya (United Kingdom).png",
  "Brunei Darussalam.png",
  "Bulgaria.png",
  "Burkina Faso.png",
  "Burundi.png",
  "Ceko (Czech).png",
  "Chilie.png",
  "Cina (China).png",
  "Denmark.png",
  "Dominika (Dominica).png",
  "Ekuador (Ecuador).png",
  "El Salvador.png",
  "Eritrea.png",
  "Estonia.png",
  "Eswatini.png",
  "Etiopia (Ethiopia).png",
  "Fiji.png",
  "Filipina (Philippines).png",
  "Finlandia (Finland).png",
  "Gabon.png",
  "Gambia.png",
  "Georgia.png",
  "Ghana.png",
  "Gibraltar.png",
  "Greenland.png",
  "Grenada.png",
  "Guatemala.png",
  "Guinea.png",
  "Guyana.png",
  "Haiti.png",
  "Honduras.png",
  "Hongkong.png",
  "Hungaria (Hungary).png",
  "India.png",
  "Indonesia.png",
  "Inggris (England).png",
  "Irak (Iraq).png",
  "Iran.png",
  "Irlandia (Ireland).png",
  "Israel.png",
  "Jepang (Japan).png",
  "Jerman (Germany).png",
  "Kamboja (Cambodia).png",
  "Kanada (Canada).png",
  "Korea Selatan (South Korea).png",
  "Malaysia.png",
  "Mesir (Egypt).png",
  "Prancis (France).png",
  "Rusia.png",
  "Singapura (Singapore).png",
  "Spanyol (Spains).png",
  "Thailand.png",
  "Turkey.png",
  "Vietnam.png",
  "Yunani (Greece).png"
];

const flagQuestions = flagFiles.map(parseFlagFile);
const capitalQuestions = [
  { id: "Indonesia", en: "Indonesia", file: "Indonesia.png", capitalId: "Jakarta", capitalEn: "Jakarta" },
  { id: "Jepang", en: "Japan", file: "Jepang (Japan).png", capitalId: "Tokyo", capitalEn: "Tokyo" },
  { id: "Amerika Serikat", en: "United States", file: "Amerika Serikat (United States).png", capitalId: "Washington, D.C.", capitalEn: "Washington, D.C." },
  { id: "Britania Raya", en: "United Kingdom", file: "Britania Raya (United Kingdom).png", capitalId: "London", capitalEn: "London" },
  { id: "Prancis", en: "France", file: "Prancis (France).png", capitalId: "Paris", capitalEn: "Paris" },
  { id: "Jerman", en: "Germany", file: "Jerman (Germany).png", capitalId: "Berlin", capitalEn: "Berlin" },
  { id: "Malaysia", en: "Malaysia", file: "Malaysia.png", capitalId: "Kuala Lumpur", capitalEn: "Kuala Lumpur" },
  { id: "Singapura", en: "Singapore", file: "Singapura (Singapore).png", capitalId: "Singapura", capitalEn: "Singapore" },
  { id: "Australia", en: "Australia", file: "Australia.png", capitalId: "Canberra", capitalEn: "Canberra" },
  { id: "Kanada", en: "Canada", file: "Kanada (Canada).png", capitalId: "Ottawa", capitalEn: "Ottawa" },
  { id: "India", en: "India", file: "India.png", capitalId: "New Delhi", capitalEn: "New Delhi" },
  { id: "Belanda", en: "Netherlands", file: "Belanda (Netherlands).png", capitalId: "Amsterdam", capitalEn: "Amsterdam" },
  { id: "Arab Saudi", en: "Saudi Arabia", file: "Arab Saudi (Saudi Arabia).png", capitalId: "Riyadh", capitalEn: "Riyadh" },
  { id: "Brazil", en: "Brazil", file: "Brazil.png", capitalId: "Brasilia", capitalEn: "Brasilia" },
  { id: "Cina", en: "China", file: "Cina (China).png", capitalId: "Beijing", capitalEn: "Beijing" },
  { id: "Filipina", en: "Philippines", file: "Filipina (Philippines).png", capitalId: "Manila", capitalEn: "Manila" },
  { id: "Korea Selatan", en: "South Korea", file: "Korea Selatan (South Korea).png", capitalId: "Seoul", capitalEn: "Seoul" },
  { id: "Mesir", en: "Egypt", file: "Mesir (Egypt).png", capitalId: "Kairo", capitalEn: "Cairo" },
  { id: "Thailand", en: "Thailand", file: "Thailand.png", capitalId: "Bangkok", capitalEn: "Bangkok" },
  { id: "Vietnam", en: "Vietnam", file: "Vietnam.png", capitalId: "Hanoi", capitalEn: "Hanoi" },
  { id: "Spanyol", en: "Spain", file: "Spanyol (Spains).png", capitalId: "Madrid", capitalEn: "Madrid" },
  { id: "Rusia", en: "Russia", file: "Rusia.png", capitalId: "Moskow", capitalEn: "Moscow" },
  { id: "Turkey", en: "Turkey", file: "Turkey.png", capitalId: "Ankara", capitalEn: "Ankara" },
  { id: "Yunani", en: "Greece", file: "Yunani (Greece).png", capitalId: "Athena", capitalEn: "Athens" }
];

const islamReadingQuestions = [
  ["Huruf hijaiyah pertama adalah...", "The first hijaiyah letter is...", ["ا", "ب", "ت", "ث"], ["ا", "ب", "ت", "ث"], 0],
  ["ا dibaca...", "ا is read as...", ["Alif", "Ba", "Ta", "Jim"], ["Alif", "Ba", "Ta", "Jim"], 0],
  ["ب dibaca...", "ب is read as...", ["Ba", "Alif", "Dal", "Sin"], ["Ba", "Alif", "Dal", "Sin"], 0],
  ["ت dibaca...", "ت is read as...", ["Ta", "Ba", "Tsa", "Ha"], ["Ta", "Ba", "Tsa", "Ha"], 0],
  ["ث dibaca...", "ث is read as...", ["Tsa", "Ta", "Jim", "Kho"], ["Tsa", "Ta", "Jim", "Kho"], 0],
  ["ج dibaca...", "ج is read as...", ["Jim", "Ha", "Kho", "Dal"], ["Jim", "Ha", "Kho", "Dal"], 0],
  ["ح dibaca...", "ح is read as...", ["Ha", "Jim", "Kho", "Dal"], ["Ha", "Jim", "Kho", "Dal"], 0],
  ["خ dibaca...", "خ is read as...", ["Kho", "Ha", "Dal", "Ra"], ["Kho", "Ha", "Dal", "Ra"], 0],
  ["Tanda baca 'َ' disebut...", "The mark 'َ' is called...", ["Fathah", "Kasrah", "Dammah", "Sukun"], ["Fathah", "Kasrah", "Dammah", "Sukun"], 0],
  ["Tanda baca 'ِ' disebut...", "The mark 'ِ' is called...", ["Kasrah", "Fathah", "Dammah", "Sukun"], ["Kasrah", "Fathah", "Dammah", "Sukun"], 0],
  ["Tanda baca 'ُ' disebut...", "The mark 'ُ' is called...", ["Dammah", "Fathah", "Kasrah", "Sukun"], ["Dammah", "Fathah", "Kasrah", "Sukun"], 0],
  ["Iqro dimulai dari mengenal...", "Iqro starts by recognizing...", ["Huruf hijaiyah", "Nama planet", "Angka romawi", "Nada musik"], ["Hijaiyah letters", "Planet names", "Roman numbers", "Music notes"], 0],
  ["Kitab suci yang dibaca umat Islam adalah...", "The holy book read by Muslims is...", ["Al-Qur'an", "Kamus", "Atlas", "Majalah"], ["Qur'an", "Dictionary", "Atlas", "Magazine"], 0]
];

const islamKnowledgeQuestions = [
  ["Siapa nabi terakhir dalam Islam?", "Who is the final prophet in Islam?", ["Nabi Muhammad", "Nabi Musa", "Nabi Isa", "Nabi Nuh"], ["Prophet Muhammad", "Prophet Musa", "Prophet Isa", "Prophet Nuh"], 0],
  ["Malaikat yang menyampaikan wahyu adalah...", "The angel who delivered revelation is...", ["Jibril", "Mikail", "Israfil", "Ridwan"], ["Jibril", "Mikail", "Israfil", "Ridwan"], 0],
  ["Kitab suci umat Islam adalah...", "The holy book of Muslims is...", ["Al-Qur'an", "Injil", "Taurat", "Zabur"], ["Qur'an", "Gospel", "Torah", "Psalms"], 0],
  ["Sebelum makan kita membaca...", "Before eating we say...", ["Bismillah", "Selamat malam", "Terima kasih", "Sampai jumpa"], ["Bismillah", "Good night", "Thank you", "Goodbye"], 0],
  ["Arah salat disebut...", "The prayer direction is called...", ["Kiblat", "Halaman", "Jalan", "Pasar"], ["Qibla", "Yard", "Road", "Market"], 0],
  ["Jumlah rukun Islam ada...", "There are how many pillars of Islam?", ["5", "2", "7", "9"], ["5", "2", "7", "9"], 0],
  ["Jumlah rukun Iman ada...", "There are how many pillars of faith?", ["6", "5", "4", "7"], ["6", "5", "4", "7"], 0],
  ["Rukun Islam pertama adalah...", "The first pillar of Islam is...", ["Syahadat", "Puasa", "Zakat", "Haji"], ["Shahada", "Fasting", "Zakat", "Hajj"], 0],
  ["Puasa wajib dilakukan pada bulan...", "Obligatory fasting is done in the month of...", ["Ramadan", "Syawal", "Rajab", "Safar"], ["Ramadan", "Shawwal", "Rajab", "Safar"], 0],
  ["Malaikat pencatat amal baik adalah...", "The angel who records good deeds is...", ["Raqib", "Atid", "Jibril", "Israfil"], ["Raqib", "Atid", "Jibril", "Israfil"], 0],
  ["Malaikat pencatat amal buruk adalah...", "The angel who records bad deeds is...", ["Atid", "Raqib", "Mikail", "Ridwan"], ["Atid", "Raqib", "Mikail", "Ridwan"], 0],
  ["Nabi yang membuat bahtera adalah...", "The prophet who built the ark is...", ["Nuh", "Musa", "Ibrahim", "Yusuf"], ["Nuh", "Musa", "Ibrahim", "Yusuf"], 0],
  ["Nabi yang menerima Taurat adalah...", "The prophet who received the Torah is...", ["Musa", "Isa", "Muhammad", "Nuh"], ["Musa", "Isa", "Muhammad", "Nuh"], 0],
  ["Nabi yang menerima Injil adalah...", "The prophet who received the Gospel is...", ["Isa", "Musa", "Ibrahim", "Yunus"], ["Isa", "Musa", "Ibrahim", "Yunus"], 0],
  ["Ucapan salam Islam adalah...", "The Islamic greeting is...", ["Assalamu'alaikum", "Halo saja", "Selamat tidur", "Ayo pergi"], ["Assalamu'alaikum", "Just hello", "Good sleep", "Let's go"], 0]
];

function parseFlagFile(file) {
  const name = file.replace(/\.[^.]+$/, "");
  const match = name.match(/^(.*?)\s*\((.*?)\)\s*$/);
  const id = (match ? match[1] : name).trim();
  const en = (match ? match[2] : id).trim();
  return { id, en, file };
}

function t(key) {
  return copy[state.language][key] || copy.id[key] || key;
}

function defaultUsers() {
  return [
    { name: "Arga", password: "171289", role: "superadmin", canTest: true, builtIn: true, expiresAt: null },
    { name: "Temanku", password: "", role: "guest", canTest: false, builtIn: true, expiresAt: null }
  ];
}

function loadAccessData() {
  const savedUsers = JSON.parse(localStorage.getItem("sekolahku-users") || "null");
  const users = Array.isArray(savedUsers) && savedUsers.length ? savedUsers : defaultUsers();
  defaultUsers().forEach(baseUser => {
    if (!users.some(user => user.name === baseUser.name)) users.unshift(baseUser);
  });
  state.users = users.map(normalizeUser);
  state.adminContact = JSON.parse(localStorage.getItem("sekolahku-admin-contact") || "null") || { wa: "", email: "" };
  const savedName = localStorage.getItem("sekolahku-current-user") || "Temanku";
  state.currentUser = state.users.find(user => user.name === savedName) || state.users.find(user => user.name === "Temanku") || state.users[0];
  saveUsers();
}

function normalizeUser(user) {
  return {
    name: user.name,
    password: user.password || "",
    role: user.role || "guest",
    canTest: Boolean(user.canTest),
    builtIn: Boolean(user.builtIn),
    expiresAt: user.expiresAt || null
  };
}

function saveUsers() {
  localStorage.setItem("sekolahku-users", JSON.stringify(state.users));
}

function saveCurrentUser() {
  localStorage.setItem("sekolahku-current-user", state.currentUser.name);
}

function isSuperadmin() {
  return state.currentUser && state.currentUser.role === "superadmin";
}

function canTakeTest() {
  return Boolean(state.currentUser && state.currentUser.canTest && !isAccessExpired(state.currentUser));
}

function isAccessExpired(user) {
  return Boolean(user && user.expiresAt && Date.now() > new Date(user.expiresAt).getTime());
}

function formatAccessTime(user) {
  if (isAccessExpired(user)) return t("accessExpired");
  if (!user.expiresAt) return t("accessPermanent");
  return `${t("accessUntil")} ${new Date(user.expiresAt).toLocaleDateString(state.language === "id" ? "id-ID" : "en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  })}`;
}

function createAccessExpiry() {
  const type = els.newUserLimitType.value;
  if (type === "permanent") return null;
  const amount = Math.max(1, Number.parseInt(els.newUserLimitCount.value, 10) || 1);
  const expires = new Date();
  if (type === "months") {
    expires.setMonth(expires.getMonth() + amount);
  } else {
    expires.setDate(expires.getDate() + amount);
  }
  expires.setHours(23, 59, 59, 999);
  return expires.toISOString();
}

function updateAccessLimitVisibility() {
  const permanent = els.newUserLimitType.value === "permanent";
  els.newUserLimitCountRow.classList.toggle("hidden-panel", permanent);
}

function renderAccessPanel(message = "") {
  els.userBadge.textContent = state.currentUser ? state.currentUser.name : "Temanku";
  els.currentUserName.textContent = state.currentUser ? state.currentUser.name : "Temanku";
  els.accessMessage.textContent = message;

  els.loginUserSelect.innerHTML = "";
  state.users.forEach(user => {
    const option = document.createElement("option");
    option.value = user.name;
    option.textContent = user.password ? user.name : `${user.name} (${state.language === "id" ? "tanpa password" : "no password"})`;
    option.selected = state.currentUser && user.name === state.currentUser.name;
    els.loginUserSelect.appendChild(option);
  });
  updatePasswordVisibility();

  els.userList.innerHTML = "";
  state.users.forEach(user => {
    const item = document.createElement("div");
    item.className = "user-list-item";
    const accessText = user.canTest
      ? (state.language === "id" ? "Bisa mengerjakan tes" : "Can take tests")
      : (state.language === "id" ? "Lihat menu saja" : "Menus only");
    item.classList.toggle("expired", isAccessExpired(user));
    item.innerHTML = `<strong>${user.name}</strong><small>${user.role === "superadmin" ? "Superadmin" : "Tamu"} · ${accessText} · ${formatAccessTime(user)}</small>`;
    els.userList.appendChild(item);
  });

  const admin = isSuperadmin();
  els.addUserBox.classList.toggle("hidden-panel", !admin);
  els.contactEditBox.classList.toggle("hidden-panel", !admin);
  els.accessTabs.forEach(tab => {
    if (tab.dataset.accessTab !== "users") return;
    tab.classList.toggle("hidden-panel", !admin);
    tab.disabled = !admin;
  });
  if (!admin && document.querySelector('[data-access-panel="users"]')?.classList.contains("active")) {
    showAccessTab("login");
  }
  els.adminWaInput.value = state.adminContact.wa || "";
  els.adminEmailInput.value = state.adminContact.email || "";
  updateAccessLimitVisibility();
  renderAdminContactLinks();
}

function updatePasswordVisibility() {
  const user = state.users.find(item => item.name === els.loginUserSelect.value);
  const needsPassword = Boolean(user && user.password);
  els.loginPasswordRow.classList.toggle("hidden-panel", !needsPassword);
  if (!needsPassword) els.loginPasswordInput.value = "";
}

function renderAdminContactLinks() {
  const wa = (state.adminContact.wa || "").replace(/[^\d]/g, "");
  const email = state.adminContact.email || "";
  els.adminWaLink.textContent = `WA: ${state.adminContact.wa || "-"}`;
  els.adminWaLink.href = wa ? `https://wa.me/${wa}` : "#";
  els.adminEmailLink.textContent = `Email: ${email || "-"}`;
  els.adminEmailLink.href = email ? `mailto:${email}` : "#";
}

function showAccessTab(name) {
  const requestedTab = name === "users" && !isSuperadmin() ? "login" : name;
  els.accessTabs.forEach(tab => tab.classList.toggle("active", tab.dataset.accessTab === requestedTab));
  els.accessPanels.forEach(panel => panel.classList.toggle("active", panel.dataset.accessPanel === requestedTab));
}

function openAccessPanel(tab = "login", message = "") {
  renderAccessPanel(message);
  showAccessTab(tab);
  els.accessDialog.showModal();
}

function loginSelectedUser() {
  const user = state.users.find(item => item.name === els.loginUserSelect.value);
  if (!user) return;
  if (user.password && els.loginPasswordInput.value !== user.password) {
    renderAccessPanel(t("loginWrong"));
    return;
  }
  state.currentUser = user;
  saveCurrentUser();
  els.loginPasswordInput.value = "";
  renderAccessPanel(t("loginSuccess"));
}

function logoutUser() {
  state.currentUser = state.users.find(user => user.name === "Temanku") || state.users[0];
  saveCurrentUser();
  renderAccessPanel(t("logoutSuccess"));
}

function addUser() {
  if (!isSuperadmin()) return;
  const name = els.newUserName.value.trim();
  if (!name || state.users.some(user => user.name.toLowerCase() === name.toLowerCase())) return;
  const access = els.newUserAccess.value;
  state.users.push({
    name,
    password: els.newUserPassword.value,
    role: access === "full" ? "user" : "guest",
    canTest: access === "full",
    expiresAt: createAccessExpiry(),
    builtIn: false
  });
  els.newUserName.value = "";
  els.newUserPassword.value = "";
  els.newUserLimitType.value = "permanent";
  els.newUserLimitCount.value = "1";
  updateAccessLimitVisibility();
  saveUsers();
  renderAccessPanel(t("userAdded"));
}

function saveAdminContact() {
  if (!isSuperadmin()) return;
  state.adminContact = {
    wa: els.adminWaInput.value.trim(),
    email: els.adminEmailInput.value.trim()
  };
  localStorage.setItem("sekolahku-admin-contact", JSON.stringify(state.adminContact));
  renderAccessPanel(t("contactSaved"));
}

function shuffle(values) {
  return [...values].sort(() => Math.random() - 0.5);
}

function choice(values) {
  return values[Math.floor(Math.random() * values.length)];
}

function showScreen(name, push = true) {
  Object.values(screens).forEach(screen => screen.classList.remove("active"));
  screens[name].classList.add("active");
  if (push && state.history[state.history.length - 1] !== name) state.history.push(name);
  els.backBtn.classList.toggle("hidden", name === "home");
}

function applyLanguage() {
  document.documentElement.lang = state.language;
  document.querySelectorAll("[data-i18n]").forEach(node => {
    node.textContent = t(node.dataset.i18n);
  });
  els.languageButtons.forEach(button => {
    const active = button.dataset.languageChoice === state.language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderSubjects();
  if (screens.mathCategory.classList.contains("active")) renderMathCategories();
  if (screens.generalCategory.classList.contains("active")) renderGeneralCategories();
  if (screens.languageCategory.classList.contains("active")) renderLanguageCategories();
  if (screens.javaneseCategory.classList.contains("active")) renderJavaneseCategories();
  if (screens.islamCategory.classList.contains("active")) renderIslamCategories();
  if (screens.level.classList.contains("active")) renderLevels();
  renderAccessPanel();
}

function renderSubjects() {
  els.subjectGrid.innerHTML = "";
  Object.keys(copy[state.language].subjects).forEach(subject => {
    const [title, description] = copy[state.language].subjects[subject];
    const button = document.createElement("button");
    button.className = "subject-card";
    button.type = "button";
    const iconClass = subjectIcons[subject].includes("<img") ? "subject-icon image-icon" : "subject-icon";
    button.innerHTML = `<span class="${iconClass}">${subjectIcons[subject]}</span><strong>${title}</strong><small>${description}</small>`;
    button.addEventListener("click", () => {
      state.subject = subject;
      state.religion = null;
      if (subject === "religion") {
        showScreen("religion");
      } else if (subject === "math") {
        renderMathCategories();
        showScreen("mathCategory");
      } else if (subject === "general") {
        renderGeneralCategories();
        showScreen("generalCategory");
      } else if (subject === "language") {
        renderLanguageCategories();
        showScreen("languageCategory");
      } else if (subject === "javanese") {
        renderJavaneseCategories();
        showScreen("javaneseCategory");
      } else {
        renderLevels();
        showScreen("level");
      }
    });
    els.subjectGrid.appendChild(button);
  });
}

function renderMathCategories() {
  els.mathCategoryGrid.innerHTML = "";
  Object.entries(copy[state.language].mathCategories).forEach(([category, value]) => {
    const [title, description] = value;
    const button = document.createElement("button");
    button.className = "subject-card math-category-card";
    button.type = "button";
    const iconClass = mathCategoryIcons[category].includes("<img") ? "image-icon" : "";
    button.innerHTML = `<span class="${iconClass}">${mathCategoryIcons[category]}</span><strong>${title}</strong><small>${description}</small>`;
    button.addEventListener("click", () => {
      state.subject = "math";
      state.mathCategory = category;
      renderLevels();
      showScreen("level");
    });
    els.mathCategoryGrid.appendChild(button);
  });
}

function renderGeneralCategories() {
  els.generalCategoryGrid.innerHTML = "";
  Object.entries(copy[state.language].generalCategories).forEach(([category, value]) => {
    const [title, description] = value;
    const button = document.createElement("button");
    button.className = "subject-card general-category-card";
    button.type = "button";
    const iconClass = generalCategoryIcons[category].includes("<img") ? "image-icon" : "";
    button.innerHTML = `<span class="${iconClass}">${generalCategoryIcons[category]}</span><strong>${title}</strong><small>${description}</small>`;
    button.addEventListener("click", () => {
      state.subject = "general";
      state.generalCategory = category;
      renderLevels();
      showScreen("level");
    });
    els.generalCategoryGrid.appendChild(button);
  });
}

function renderLanguageCategories() {
  els.languageCategoryGrid.innerHTML = "";
  Object.entries(copy[state.language].languageCategories).forEach(([category, value]) => {
    const [title, description] = value;
    const button = document.createElement("button");
    button.className = "subject-card language-category-card";
    button.type = "button";
    const iconClass = languageCategoryIcons[category].includes("<img") ? "image-icon" : "";
    button.innerHTML = `<span class="${iconClass}">${languageCategoryIcons[category]}</span><strong>${title}</strong><small>${description}</small>`;
    button.addEventListener("click", () => {
      state.subject = "language";
      state.languageCategory = category;
      renderLevels();
      showScreen("level");
    });
    els.languageCategoryGrid.appendChild(button);
  });
}

function renderJavaneseCategories() {
  els.javaneseCategoryGrid.innerHTML = "";
  Object.entries(copy[state.language].javaneseCategories).forEach(([category, value]) => {
    const [title, description] = value;
    const button = document.createElement("button");
    button.className = "subject-card javanese-category-card";
    button.type = "button";
    const iconClass = javaneseCategoryIcons[category].includes("<img") ? "image-icon" : "";
    button.innerHTML = `<span class="${iconClass}">${javaneseCategoryIcons[category]}</span><strong>${title}</strong><small>${description}</small>`;
    button.addEventListener("click", () => {
      state.subject = "javanese";
      state.javaneseCategory = category;
      renderLevels();
      showScreen("level");
    });
    els.javaneseCategoryGrid.appendChild(button);
  });
}

function renderIslamCategories() {
  els.islamCategoryGrid.innerHTML = "";
  Object.entries(copy[state.language].islamCategories).forEach(([category, value]) => {
    const [title, description] = value;
    const button = document.createElement("button");
    button.className = "subject-card islam-category-card";
    button.type = "button";
    const iconClass = islamCategoryIcons[category].includes("<img") ? "image-icon" : "";
    button.innerHTML = `<span class="${iconClass}">${islamCategoryIcons[category]}</span><strong>${title}</strong><small>${description}</small>`;
    button.addEventListener("click", () => {
      state.subject = "religion";
      state.religion = "islam";
      state.islamCategory = category;
      renderLevels();
      showScreen("level");
    });
    els.islamCategoryGrid.appendChild(button);
  });
}

function renderLevels() {
  const subjectName = getSubjectName();
  els.selectedSubjectLabel.textContent = subjectName;
  els.levelGrid.innerHTML = "";
  for (let level = 1; level <= 6; level += 1) {
    const card = document.createElement("button");
    card.className = "level-card";
    card.type = "button";
    card.style.setProperty("--level-color", palettes[level - 1]);
    card.innerHTML = `<strong>${t("level")} ${level}</strong><small>${getLevelHint(level)}</small>`;
    card.addEventListener("click", () => startGame(level));
    els.levelGrid.appendChild(card);
  }
}

function getSubjectName() {
  if (state.subject === "religion" && state.religion) {
    if (state.religion === "islam") return `Islam - ${copy[state.language].islamCategories[state.islamCategory][0]}`;
    return state.language === "id" ? "Kristen" : "Christianity";
  }
  if (state.subject === "math") return `${copy[state.language].subjects.math[0]} - ${copy[state.language].mathCategories[state.mathCategory][0]}`;
  if (state.subject === "general") return `${copy[state.language].subjects.general[0]} - ${copy[state.language].generalCategories[state.generalCategory][0]}`;
  if (state.subject === "language") return `${copy[state.language].subjects.language[0]} - ${copy[state.language].languageCategories[state.languageCategory][0]}`;
  if (state.subject === "javanese") return `${copy[state.language].subjects.javanese[0]} - ${copy[state.language].javaneseCategories[state.javaneseCategory][0]}`;
  return copy[state.language].subjects[state.subject][0];
}

function getLevelHint(level) {
  const idHints = ["Mengenal dasar", "Lebih banyak pilihan", "Mulai menantang", "Soal campuran", "Butuh teliti", "Tantangan pintar"];
  const enHints = ["Learn the basics", "More choices", "Getting trickier", "Mixed questions", "Careful thinking", "Smart challenge"];
  return (state.language === "id" ? idHints : enHints)[level - 1];
}

function startGame(level) {
  if (!canTakeTest()) {
    openAccessPanel("login", isAccessExpired(state.currentUser) ? t("accessExpired") : t("accessDenied"));
    return;
  }
  state.level = level;
  state.questionIndex = 0;
  state.score = 0;
  state.locked = false;
  state.questions = createQuestions();
  els.gameSubject.textContent = getSubjectName();
  els.gameLevel.textContent = `${t("level")} ${level}`;
  showScreen("game");
  renderQuestion();
}

function createQuestions() {
  if (state.subject === "math") return createMathQuestions();
  if (state.subject === "matching") return createMatchingQuestions();
  if (state.subject === "religion") return createReligionQuestions();
  if (state.subject === "general") return createStaticQuestions("general");
  if (state.subject === "language") return createLanguageQuestions();
  return createJavaneseQuestions();
}

function createMathQuestions() {
  if (state.mathCategory === "pattern") return createPatternQuestions();
  const max = Math.min(6 + state.level * 4, 32);
  const modePool = state.level === 1
    ? ["count", "compare"]
    : state.level <= 3
      ? ["count", "compare", "add"]
      : state.level <= 5
        ? ["count", "compare", "add", "subtract"]
        : ["compare", "add", "subtract"];
  return createUniqueQuestions(index => {
    const mode = choice(modePool);
    if (mode === "count") {
      const answer = rand(1 + state.level, max);
      return {
        text: t("countingQuestion"),
        answer: String(answer),
        options: numberOptions(answer, max, optionCount()),
        visual: { type: "items", icon: choice(mathItems), count: answer }
      };
    }
    if (mode === "compare") {
      const left = rand(2, max);
      let right = rand(2, max);
      if (right === left) right += 1;
      const bigger = left > right ? "A" : "B";
      return {
        text: t("moreGroupQuestion"),
        answer: bigger,
        options: ["A", "B"],
        visual: { type: "compare", left, right, icon: choice(mathItems) }
      };
    }
    if (mode === "add") {
      const upper = Math.min(7 + state.level * 2, max);
      const a = rand(1 + Math.floor(state.level / 2), upper);
      const b = rand(1, upper);
      const answer = a + b;
      return {
        text: state.language === "id" ? `${a} + ${b} = ?` : `${a} + ${b} = ?`,
        answer: String(answer),
        options: numberOptions(answer, max + 12, optionCount()),
        visual: { type: "symbol", value: `${a} + ${b}` }
      };
    }
    const a = rand(5 + state.level, Math.min(20 + state.level * 3, max + 8));
    const b = rand(1 + Math.floor(state.level / 2), a - 1);
    const answer = a - b;
    return {
      text: `${a} - ${b} = ?`,
      answer: String(answer),
      options: numberOptions(answer, max + 8, optionCount()),
      visual: { type: "symbol", value: `${a} - ${b}` }
    };
  });
}

function createPatternQuestions() {
  const patternLength = state.level <= 1 ? 2 : state.level <= 3 ? 3 : state.level <= 5 ? 4 : 5;
  const visibleLength = state.level <= 2 ? 6 : state.level <= 4 ? 7 : 9;
  return createUniqueQuestions(i => {
    const base = shuffle(patternShapes).slice(0, patternLength).map((shape, index) => ({
      shape,
      color: patternColors[(i + index + state.level) % patternColors.length]
    }));
    const sequence = Array.from({ length: visibleLength }, (_, index) => base[index % base.length]);
    const blankIndex = rand(Math.max(2, patternLength), visibleLength - 1);
    const answerItem = sequence[blankIndex];
    const wrongShapes = shuffle(patternShapes.filter(shape => shape !== answerItem.shape));
    const optionShapes = [answerItem.shape, ...wrongShapes.slice(0, optionCount() - 1)];
    const options = shuffle(optionShapes).map((shape, index) => {
      const color = shape === answerItem.shape ? answerItem.color : patternColors[(i + index + state.level + 2) % patternColors.length];
      return patternOption(shape, color);
    });
    return {
      text: t("patternQuestion"),
      answer: shapeLabel(answerItem.shape),
      options,
      visual: { type: "pattern", sequence, blankIndex }
    };
  });
}

function patternOption(shape, color) {
  return {
    label: shapeLabel(shape),
    html: `<span class="shape option-shape shape-${shape} color-${color}" aria-hidden="true"></span>`
  };
}

function shapeLabel(shape) {
  return copy[state.language].shapeNames[shape];
}

function createReligionQuestions() {
  const pool = state.religion === "islam"
    ? (state.islamCategory === "reading" ? islamReadingQuestions : islamKnowledgeQuestions)
    : data[state.religion];
  return pickTen(levelPool(pool)).map(row => {
    const text = state.language === "id" ? row[0] : row[1];
    const options = state.language === "id" ? row[2] : row[3];
    return {
      text,
      answer: options[row[4]],
      options: limitOptions(options, options[row[4]]),
      visual: state.religion === "islam" ? { type: "shahada" } : { type: "lordsPrayer" }
    };
  });
}

function createStaticQuestions(kind) {
  if (kind === "general" && state.generalCategory === "flags") return createFlagQuestions();
  if (kind === "general" && state.generalCategory === "capitals") return createCapitalQuestions();
  const source = kind === "general" ? generalQuestionPools[state.generalCategory] : data[kind];
  return pickTen(levelPool(source)).map(row => {
    const options = state.language === "id" ? row[1] : row[2];
    return {
      text: row[0][state.language === "id" ? 0 : 1],
      answer: options[0],
      options: limitOptions(options, options[0]),
      visual: { type: "symbol", value: row[3] || choice(generalItems) }
    };
  });
}

function createFlagQuestions() {
  const pool = shuffle(levelSlice(flagQuestions)).slice(0, 10);
  return pool.map(item => {
    const answer = state.language === "id" ? item.id : item.en;
    const wrong = shuffle(flagQuestions.filter(flag => flag.file !== item.file))
      .map(flag => state.language === "id" ? flag.id : flag.en);
    return {
      text: state.language === "id" ? "Bendera negara manakah ini?" : "Which country's flag is this?",
      answer,
      options: limitOptions([answer, ...wrong], answer),
      visual: { type: "flagImage", src: encodeURI(`Bendera/${item.file}`), alt: answer }
    };
  });
}

function createCapitalQuestions() {
  return pickTen(levelPool(capitalQuestions)).map(item => {
    const country = state.language === "id" ? item.id : item.en;
    const answer = state.language === "id" ? item.capitalId : item.capitalEn;
    const wrong = shuffle(capitalQuestions.filter(row => row.file !== item.file))
      .map(row => state.language === "id" ? row.capitalId : row.capitalEn);
    return {
      text: state.language === "id" ? `Ibu kota ${country} adalah...` : `The capital of ${country} is...`,
      answer,
      options: limitOptions([answer, ...wrong], answer),
      visual: { type: "flagImage", src: encodeURI(`Bendera/${item.file}`), alt: country }
    };
  });
}

function createLanguageQuestions() {
  if (state.languageCategory === "translate") return createLanguageTranslateQuestions();
  return pickTen(levelPool(data.language)).map(row => {
    const options = state.language === "id" ? row[1] : row[2];
    return {
      text: t("spellingQuestion"),
      answer: options[0],
      options: limitOptions(options, options[0]),
      visual: { type: "symbol", value: row[0] }
    };
  });
}

function createLanguageTranslateQuestions() {
  return pickTen(levelPool(data.languageTranslate)).map(row => {
    const options = state.language === "id" ? row[1] : row[2];
    return {
      text: row[0][state.language === "id" ? 0 : 1],
      answer: options[0],
      options: limitOptions(options, options[0]),
      visual: { type: "symbol", value: row[3] }
    };
  });
}

function createMatchingQuestions() {
  const modes = state.level <= 2
    ? ["shapeObject", "color", "code"]
    : state.level <= 4
      ? ["shapeObject", "color", "shadow", "habit", "animalMaze", "code"]
      : ["shapeObject", "color", "shadow", "habit", "sortShape", "animalMaze", "code"];
  return createUniqueQuestions(i => {
    const mode = choice(modes);
    if (mode === "shapeObject") return createShapeObjectQuestion(i);
    if (mode === "color") return createColorQuestion(i);
    if (mode === "shadow") return createShadowQuestion(i);
    if (mode === "habit") return createHabitQuestion(i);
    if (mode === "sortShape") return createSortShapeQuestion(i);
    if (mode === "animalMaze") return createAnimalMazeQuestion(i);
    return createCodeQuestion(i);
  });
}

function createShapeObjectQuestion(seed) {
  const item = choice(matchingPools.shapeObject);
  const answer = visualOption(item.answer);
  const options = buildVisualOptions(answer, item.wrong, seed);
  return {
    text: t("shapeObjectQuestion"),
    answer: answer.label,
    options,
    visual: { type: "matchingPrompt", kind: "shape", shape: item.shape, color: item.color }
  };
}

function createColorQuestion(seed) {
  const item = choice(matchingPools.color);
  const answer = colorOption(item);
  const wrong = matchingPools.color.filter(color => color.color !== item.color).map(color => [color.color, color.label]);
  const options = buildColorOptions(answer, wrong, seed);
  return {
    text: t("colorQuestion"),
    answer: answer.label,
    options,
    visual: { type: "matchingPrompt", kind: "car", color: item.color }
  };
}

function createShadowQuestion(seed) {
  const item = choice(matchingPools.shadow);
  const answer = visualOption([item.icon, item.label]);
  const options = buildVisualOptions(answer, item.wrong, seed);
  return {
    text: t("shadowQuestion"),
    answer: answer.label,
    options,
    visual: { type: "matchingPrompt", kind: "shadow", icon: item.icon }
  };
}

function createHabitQuestion(seed) {
  const item = choice(matchingPools.habit);
  const answer = visualOption(item.answer);
  const options = buildVisualOptions(answer, item.wrong, seed);
  return {
    text: t("habitQuestion"),
    answer: answer.label,
    options,
    visual: { type: "matchingPrompt", kind: "emoji", icon: item.activity }
  };
}

function createSortShapeQuestion(seed) {
  const item = choice(matchingPools.sortShape);
  const answer = visualOption(item.answer);
  const options = buildVisualOptions(answer, item.wrong, seed);
  return {
    text: t("shapeObjectQuestion"),
    answer: answer.label,
    options,
    visual: { type: "matchingPrompt", kind: "shape", shape: item.shape, color: item.color }
  };
}

function createAnimalMazeQuestion(seed) {
  const item = choice(matchingPools.animalMaze);
  const answer = visualOption([item.feet, item.label]);
  const options = buildVisualOptions(answer, item.wrong, seed);
  return {
    text: t("animalMazeQuestion"),
    answer: answer.label,
    options,
    visual: { type: "animalMaze", head: item.head }
  };
}

function createCodeQuestion(seed) {
  const legend = matchingPools.code.legend;
  const wordPool = state.level === 1
    ? matchingPools.code.words.filter(word => word.length <= 3)
    : state.level <= 3
      ? matchingPools.code.words.filter(word => word.length <= 4)
      : state.level <= 5
        ? matchingPools.code.words.filter(word => word.length <= 5)
        : matchingPools.code.words;
  const word = choice(wordPool);
  const wrong = shuffle(matchingPools.code.words.filter(item => item !== word)).slice(0, optionCount() - 1);
  return {
    text: t("codeQuestion"),
    answer: word,
    options: shuffle([word, ...wrong]),
    visual: { type: "codeBoard", word, legend }
  };
}

function buildVisualOptions(answer, wrongItems, seed) {
  const wrong = shuffle(wrongItems).slice(0, optionCount() - 1).map(item => visualOption(item));
  return shuffle([answer, ...wrong]);
}

function buildColorOptions(answer, wrongItems, seed) {
  const wrong = shuffle(wrongItems).slice(0, optionCount() - 1).map(item => colorOption({ color: item[0], label: item[1] }));
  return shuffle([answer, ...wrong]);
}

function visualOption(item) {
  const [icon, label] = item;
  const text = translateMatchLabel(label);
  return {
    label: `${icon} ${text}`,
    html: `<span class="match-option-icon" aria-hidden="true">${icon}</span>`
  };
}

function colorOption(item) {
  return {
    label: translateMatchLabel(item.label),
    html: `<span class="match-color-dot color-${item.color}" aria-hidden="true"></span>`
  };
}

function translateMatchLabel(label) {
  return state.language === "id" ? (matchLabelId[label] || label) : label;
}

function createJavaneseQuestions() {
  const source = state.javaneseCategory === "script" ? data.javaneseScript : data.javaneseSpeech;
  return pickTen(levelPool(source)).map(row => ({
    text: Array.isArray(row[0]) ? row[0][state.language === "id" ? 0 : 1] : row[0],
    answer: row[1][0],
    options: limitOptions(row[1], row[1][0]),
    visual: { type: "symbol", value: row[2] }
  }));
}

function optionCount() {
  if (state.level === 1) return 2;
  if (state.level <= 3) return 3;
  return 4;
}

function limitOptions(options, answer) {
  const wrong = shuffle(options.filter(option => option !== answer));
  return shuffle([answer, ...wrong.slice(0, optionCount() - 1)]);
}

function pickTen(pool) {
  return shuffle(uniqueRows(pool)).slice(0, 10);
}

function levelPool(pool) {
  const limit = Math.min(pool.length, Math.max(10, 8 + state.level));
  return pool.slice(0, limit);
}

function levelSlice(pool, size = 10) {
  const start = (state.level - 1) * size;
  const end = start + size;
  if (pool.length >= end) return pool.slice(start, end);
  return pool.slice(start).concat(pool.slice(0, Math.max(0, end - pool.length)));
}

function uniqueRows(pool) {
  const seen = new Set();
  return pool.filter(row => {
    const signature = questionSignatureFromRow(row);
    if (seen.has(signature)) return false;
    seen.add(signature);
    return true;
  });
}

function questionSignatureFromRow(row) {
  const prompt = Array.isArray(row[0]) ? row[0].join("|") : String(row[0]);
  return `${prompt}|${row[3] || row[2] || ""}`;
}

function createUniqueQuestions(factory, count = 10) {
  const questions = [];
  const seen = new Set();
  let attempts = 0;
  while (questions.length < count && attempts < count * 80) {
    const question = factory(attempts);
    const signature = questionSignature(question);
    attempts += 1;
    if (seen.has(signature)) continue;
    seen.add(signature);
    questions.push(question);
  }
  return questions;
}

function questionSignature(question) {
  const visual = question.visual || {};
  if (visual.type === "items") return `items|${question.answer}|${visual.icon}|${visual.count}`;
  if (visual.type === "compare") return `compare|${visual.left}|${visual.right}|${visual.icon}`;
  if (visual.type === "pattern") return `pattern|${visual.blankIndex}|${visual.sequence.map(item => `${item.shape}:${item.color}`).join(",")}`;
  if (visual.type === "matchingPrompt") return `matching|${visual.kind}|${visual.shape || ""}|${visual.color || ""}|${visual.icon || ""}|${question.answer}`;
  if (visual.type === "animalMaze") return `animalMaze|${visual.head}|${question.answer}`;
  if (visual.type === "codeBoard") return `code|${visual.word}`;
  return `${question.text}|${question.answer}`;
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function numberOptions(answer, max, size = 4) {
  const options = new Set([String(answer)]);
  while (options.size < size) {
    const delta = rand(-4, 4) || 1;
    const value = Math.max(0, Math.min(max + 3, answer + delta));
    options.add(String(value));
  }
  return shuffle([...options]);
}

function renderQuestion() {
  state.locked = false;
  const question = state.questions[state.questionIndex];
  els.questionCount.textContent = `${state.questionIndex + 1}/10`;
  els.scoreCount.textContent = `${state.score} \u2605`;
  els.progressBar.style.width = `${(state.questionIndex / 10) * 100}%`;
  els.questionText.textContent = question.text;
  els.feedbackText.textContent = "";
  renderVisual(question.visual);
  els.answerGrid.innerHTML = "";
  question.options.forEach(option => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.type = "button";
    if (typeof option === "object") {
      button.innerHTML = option.html;
      button.setAttribute("aria-label", option.label);
      button.dataset.answer = option.label;
    } else {
      button.textContent = option;
      button.dataset.answer = option;
    }
    button.addEventListener("click", () => answerQuestion(button, button.dataset.answer, question.answer));
    els.answerGrid.appendChild(button);
  });
}

function renderVisual(visual) {
  els.visualStage.innerHTML = "";
  if (visual.type === "items") {
    for (let i = 0; i < visual.count; i += 1) {
      const item = document.createElement("span");
      item.className = "visual-item";
      item.style.animationDelay = `${Math.min(i * 0.025, 0.35)}s`;
      item.textContent = visual.icon;
      els.visualStage.appendChild(item);
    }
  } else if (visual.type === "compare") {
    const wrap = document.createElement("div");
    wrap.className = "compare-wrap";
    wrap.appendChild(compareGroup("A", visual.left, visual.icon));
    wrap.appendChild(compareGroup("B", visual.right, visual.icon));
    els.visualStage.appendChild(wrap);
  } else if (visual.type === "pattern") {
    const row = document.createElement("div");
    row.className = "pattern-row";
    visual.sequence.forEach((item, index) => {
      const slot = document.createElement("span");
      if (index === visual.blankIndex) {
        slot.className = "pattern-blank";
        slot.textContent = "......";
      } else {
        slot.className = `shape shape-${item.shape} color-${item.color}`;
      }
      row.appendChild(slot);
    });
    els.visualStage.appendChild(row);
  } else if (visual.type === "matchingPrompt") {
    const prompt = document.createElement("div");
    prompt.className = "matching-prompt";
    if (visual.kind === "shape") {
      prompt.innerHTML = `<span class="shape prompt-shape shape-${visual.shape} color-${visual.color}" aria-hidden="true"></span>`;
    } else if (visual.kind === "shadow") {
      prompt.innerHTML = `<span class="match-prompt-emoji silhouette" aria-hidden="true">${visual.icon}</span>`;
    } else if (visual.kind === "car") {
      prompt.innerHTML = `<span class="color-car color-${visual.color}" aria-hidden="true"><i></i><b></b></span>`;
    } else {
      prompt.innerHTML = `<span class="match-prompt-emoji" aria-hidden="true">${visual.icon}</span>`;
    }
    els.visualStage.appendChild(prompt);
  } else if (visual.type === "animalMaze") {
    const maze = document.createElement("div");
    maze.className = "animal-maze";
    maze.innerHTML = `
      <div class="maze-head">${visual.head}</div>
      <div class="maze-paths" aria-hidden="true">
        <span class="maze-path p1"></span>
        <span class="maze-path p2"></span>
        <span class="maze-path p3"></span>
      </div>
    `;
    els.visualStage.appendChild(maze);
  } else if (visual.type === "codeBoard") {
    const board = document.createElement("div");
    board.className = "code-board";
    const codeMap = Object.fromEntries(visual.legend);
    const legend = visual.legend.slice(0, 10).map(([letter, color]) => `
      <span class="code-key">
        <b class="match-color-dot code-dot color-${color}"></b>
        <small>${letter}</small>
      </span>
    `).join("");
    const encoded = visual.word.split("").map(letter => `
      <span class="code-cell">
        <b class="match-color-dot code-token color-${codeMap[letter]}"></b>
        <i></i>
      </span>
    `).join("");
    board.innerHTML = `<div class="code-title">CODING</div><div class="code-legend">${legend}</div><div class="code-word">${encoded}</div>`;
    els.visualStage.appendChild(board);
  } else if (visual.type === "flagImage") {
    const flag = document.createElement("div");
    flag.className = "flag-visual";
    flag.innerHTML = `<img src="${visual.src}" alt="${visual.alt}">`;
    els.visualStage.appendChild(flag);
  } else if (visual.type === "shahada") {
    const shahada = document.createElement("div");
    shahada.className = "faith-watermark shahada-panel";
    shahada.innerHTML = `
      <p class="arabic-line">أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ</p>
      <span></span>
      <p class="arabic-line">وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللهِ</p>
    `;
    els.visualStage.appendChild(shahada);
  } else if (visual.type === "lordsPrayer") {
    const prayer = document.createElement("div");
    prayer.className = "faith-watermark prayer-panel";
    prayer.innerHTML = `
      <p>Bapa kami yang di sorga,</p>
      <p>Dikuduskanlah nama-Mu,</p>
      <p>Datanglah Kerajaan-Mu,</p>
      <p>Jadilah kehendak-Mu di bumi seperti di sorga.</p>
    `;
    els.visualStage.appendChild(prayer);
  } else {
    const symbol = document.createElement("div");
    symbol.className = "big-symbol";
    symbol.textContent = visual.value;
    els.visualStage.appendChild(symbol);
  }
}

function compareGroup(label, count, icon) {
  const group = document.createElement("div");
  group.className = "compare-object";
  const size = Math.min(190, 72 + count * 5);
  group.style.width = `${size}px`;
  group.style.height = `${size}px`;
  group.innerHTML = `<strong>${label}</strong><span>${icon.repeat(Math.min(count, 8))}</span><small>${count}</small>`;
  return group;
}

function answerQuestion(button, selected, answer) {
  if (state.locked) return;
  state.locked = true;
  const buttons = [...els.answerGrid.querySelectorAll("button")];
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.answer === answer) btn.classList.add("correct");
  });
  if (selected === answer) {
    state.score += 1;
    button.classList.add("correct");
    els.feedbackText.textContent = t("correct");
  } else {
    button.classList.add("wrong");
    els.feedbackText.textContent = `${t("wrong")} ${answer}`;
  }
  setTimeout(nextQuestion, 950);
}

function nextQuestion() {
  state.questionIndex += 1;
  if (state.questionIndex >= 10) {
    showResult();
  } else {
    renderQuestion();
  }
}

function showResult() {
  els.progressBar.style.width = "100%";
  const title = state.score >= 8 ? t("resultGreat") : state.score >= 5 ? t("resultGood") : t("resultTry");
  els.resultTitle.textContent = title;
  els.resultText.textContent = t("resultText").replace("{score}", state.score);
  els.nextLevelBtn.disabled = state.level >= 6;
  els.nextLevelBtn.textContent = state.level >= 6 ? t("home") : t("nextLevel");
  showScreen("result");
}

document.querySelectorAll("[data-religion]").forEach(button => {
  button.addEventListener("click", () => {
    state.subject = "religion";
    state.religion = button.dataset.religion;
    if (state.religion === "islam") {
      renderIslamCategories();
      showScreen("islamCategory");
      return;
    }
    renderLevels();
    showScreen("level");
  });
});

els.backBtn.addEventListener("click", () => {
  state.history.pop();
  const previous = state.history.pop() || "home";
  showScreen(previous);
});

els.userToggleBtn.addEventListener("click", () => openAccessPanel("login"));
els.accessTabs.forEach(tab => {
  tab.addEventListener("click", () => showAccessTab(tab.dataset.accessTab));
});
els.loginUserSelect.addEventListener("change", updatePasswordVisibility);
els.loginBtn.addEventListener("click", loginSelectedUser);
els.logoutBtn.addEventListener("click", logoutUser);
els.newUserLimitType.addEventListener("change", updateAccessLimitVisibility);
els.addUserBtn.addEventListener("click", addUser);
els.saveContactBtn.addEventListener("click", saveAdminContact);
els.settingsBtn.addEventListener("click", () => els.settingsDialog.showModal());
els.languageButtons.forEach(button => {
  button.addEventListener("click", () => {
    state.language = button.dataset.languageChoice;
    localStorage.setItem("sekolahku-language", state.language);
    applyLanguage();
  });
});
els.nextLevelBtn.addEventListener("click", () => {
  if (state.level >= 6) {
    showScreen("home");
  } else {
    startGame(state.level + 1);
  }
});
els.replayBtn.addEventListener("click", () => startGame(state.level));
els.homeBtn.addEventListener("click", () => showScreen("home"));

loadAccessData();
applyLanguage();
showScreen("home", false);
