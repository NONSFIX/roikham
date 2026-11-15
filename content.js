// Everything you'd normally want to edit lives here.
// Each text is { th, en }.
window.SITE = {
  version: "v0.4.2",
  links: {
    play: "https://nonsfix.github.io/roi-kham-cards/",
    patchNotes: "https://nonsfix.github.io/roi-kham-cards/patch",
    facebook: "https://www.facebook.com/roikham",
    messenger: "https://m.me/roikham",
    feedbackForm: "https://nonsfix.github.io/roi-kham-cards/feedback?from=site", // the game's ส่งความเห็น page (live from game v0.4.1); empty = hidden
    privacy: "privacy/",
  },

  // Live count of words players have answered about (Supabase word_vote_count: two totals, nothing about the visitor).
  // Set to null to hide the line.
  liveCount: { url: "https://qoceonncejbvemcgtwsn.supabase.co/rest/v1/rpc/word_vote_count", key: "sb_publishable_tfq2N5mE7rFspK9FEmT_bw_Xcv64LU1" },

  // Optional announcement shown first. Set to null when there's nothing to say.
  promo: null,
  // promo: { title: { th: "...", en: "..." }, body: { th: "...", en: "..." } },

  hero: {
    bg: "art/sanctum.webp",
    // The game's hero cards (art/scene/heroes), fanned like the game's team fan: left, centre, right.
    cards: [
      { art: "art/card-warrior.webp", name: "พิทักษ์", hue: "#a3201f" },
      { art: "art/card-mage.webp", name: "อักษะรา", hue: "#cf6d12" },
      { art: "art/card-archer.webp", name: "ธนนท์", hue: "#25538f" },
    ],
    pitch: { th: "เกมการ์ดคำศัพท์ไทย", en: "A Thai word card game" },
    terms: { th: "เปิดเบต้า · เล่นฟรี · ไม่ต้องสมัคร", en: "Open beta · Free · No sign-up" },
  },

  // "How to play": one step per card, using the game's v0.4 how-to art.
  steps: [
    { art: "art/howto-1.webp", title: { th: "จั่วตัวอักษร", en: "Draw letters" },
      text: { th: "ได้ตัวอักษรไทยมาชุดหนึ่งในแต่ละตา", en: "Each turn deals you a hand of Thai letters." } },
    { art: "art/howto-2.webp", title: { th: "ต่อเป็นคำ", en: "Make a word" },
      text: { th: "สะกดคำไทยที่มีอยู่จริง หรือเริ่มที่โหมดวิหาร เล่นด้วยการ์ดคำ ไม่ต้องสะกด", en: "Spell a real Thai word, or start in Temple mode: play word cards, no spelling needed." } },
    { art: "art/howto-3.webp", title: { th: "คำกลายเป็นพลัง", en: "Words become power" },
      text: { th: "คำที่ส่งออกไปกลายเป็นพลังให้ผู้กล้า", en: "The words you play power your heroes." } },
    { art: "art/howto-4.webp", title: { th: "ขับไล่ปีศาจ", en: "Banish the demons" },
      text: { th: "นำทีมผู้กล้า 6 ตน สู้กับปีศาจ 11 ตน", en: "Lead a team of 6 heroes against 11 demons." } },
  ],

  // Latest patch only. Older versions live on the game's patch notes page.
  patch: {
    version: "v0.4.2",
    date: "2026-11-15",
    title: { th: "เสียงใหม่ จังหวะโจมตี และเล่นบนมือถือง่ายขึ้น", en: "New sounds, harder hits, easier on phones" },
    art: "art/lanterns.webp",
    items: [
      { head: { th: "จังหวะโจมตี", en: "Harder hits" },
        text: { th: "โจมตีแรงแล้วจอสั่นและหยุดค้างแวบหนึ่ง ตัวเลขดาเมจใหญ่ตามแรงตี", en: "Big hits shake the screen and pause for a beat; damage numbers grow with the hit." } },
      { head: { th: "เสียงใหม่", en: "New sounds" },
        text: { th: "ห้าเสียงใหม่: ฟันดาบ ยิงธนู เวทมนตร์ ไฟลุก และขับไล่ปีศาจ", en: "Five new sounds: sword, arrow, magic, fire and banish." } },
      { head: { th: "โหมดวิหารบนมือถือ", en: "Temple mode on phones" },
        text: { th: "ปุ่มกดง่ายขึ้น คำถามไม่บังการ์ดในมือ หน้าเมนูเปิดเร็วขึ้น", en: "Bigger buttons, questions no longer cover your hand, and a faster menu." } },
      { head: { th: "เปิดเบต้า", en: "Open beta" },
        text: { th: "เล่นฟรีบนเว็บ ช่วงเบต้าความคืบหน้าอาจถูกรีเซ็ต แต่คำที่ช่วยกันเก็บจะอยู่ตลอด", en: "Free on the web. Progress may reset during the beta; the words we collect together stay." } },
      { head: { th: "ส่งความเห็น", en: "Feedback" },
        text: { th: "เจอบั๊กหรือคำผิด กดส่งความเห็นในเกมได้เลย", en: "Found a bug or a wrong word? Send feedback from inside the game." } },
    ],
  },

  // Upcoming project teaser
  next: {
    name: "เก็บคำ",
    desc: { th: "เกมเก็บคำ ฝึกไวยากรณ์ไทยแบบเล่นสนุก", en: "Collect words and learn Thai grammar through play" },
  },
};
