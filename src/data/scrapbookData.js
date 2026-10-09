// Central data file for Chello's 19th Birthday Scrapbook
// To personalize with real photos, simply replace the imageUrl strings below with your own image URLs or local assets in /public or /src/assets.

export const scrapbookData = {
  recipient: {
    nickname: "Chello",
    fullName: "Bhavasri",
    petNames: "Pattu, my Wifey, my Babygirl",
    age: 19
  },

  intro: {
    badge: "A LITTLE WORLD, JUST FOR BHAVASRI",
    title: "For my Babygirl 🤎",
    subtitle: "A tiny little world I made for you...",
    envelopeCaption: "sealed with a little too much love ♡",
    stampNumber: "19",
    letterPreview: "Happy 19th Birthday, my favourite soul in this whole universe. This little corner was created to remind you how deeply loved and cherished you are...",
    fullLetter: {
      date: "October 9, 2026",
      greeting: "My Dearest Chello,",
      paragraphs: [
        "Welcome to this little corner of the internet built entirely for you. I wanted to build something that wouldn't fade, something you could come back to whenever you need a reminder of how extraordinary you are.",
        "From the spontaneous late-night giggles to the deepest conversations when the world outside went quiet, you have made the past years so much brighter simply by being in them.",
        "You are thoughtful, hilariously chaotic, fiercely strong, and softer-hearted than you let on. Today you turn 19, and I could not be prouder of the person you are blossoming into every single day.",
        "Take your time scrolling through our memories, the little things I notice about you, and all the reasons you are irreplaceable to me. Happy 19th Birthday, Pattu. You deserve the world, and I hope this little world brings a smile to your face."
      ],
      closing: "With all my love and endless gratitude,",
      signature: "always your person ♡"
    }
  },

  hero: {
    heading: "Happy 19th Birthday, Chello 🤎",
    supportingMessage: "To my Pattu, my Wifey, my Babygirl — and one of the hardest people in the world to forget.",
    exploreBtnText: "Explore Our Little World ↓",
    surpriseBtnText: "A Little Surprise ♡",
    polaroids: [
      {
        id: "hero-1",
        caption: "the birthday girl ♡",
        rotation: -4,
        tapeColor: "blush",
        imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
        alt: "The birthday girl"
      },
      {
        id: "hero-2",
        caption: "my favourite human",
        rotation: 5,
        tapeColor: "taupe",
        imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80",
        alt: "My favourite human"
      }
    ],
    scrollCaption: "Keep scrolling, pretty girl.",
    music: {
      title: "Golden Hour (Chello's Version) ♡",
      artist: "Scrapbook Soundtrack",
      duration: 184, // seconds
      audioUrl: "" // Leave empty for soothing ambient acoustic synthesizer, or put a link to an audio file
    },
    filmStrip: [
      { id: "fs1", text: "one more reel ♡", icon: "video" },
      { id: "fs2", text: "us, being us ♡", icon: "heart" },
      { id: "fs3", text: "the blurry ones ♡", icon: "sparkles" },
      { id: "fs4", text: "ordinary magic ♡", icon: "sun" }
    ]
  },

  nineteen: {
    number: "19",
    quote1: "19 years of being unapologetically you.",
    quote2: "And somehow, I got lucky enough to become part of some of those years.",
    quote3: "here’s to everything you’re becoming. ✧",
    polaroid: {
      caption: "chapter 19 ✧",
      rotation: -3,
      tapeColor: "cream",
      imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
    }
  },

  girlBehind: {
    heading: "The girl behind all my favourite memories.",
    body: "Some people walk into your life and become memories. You somehow became part of the way I remember an entire chapter of mine.",
    polaroid: {
      caption: "that radiant smile ♡",
      rotation: 4,
      tapeColor: "blush",
      imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=650&q=80"
    },
    traits: [
      { text: "Divinely pretty", rotation: -2, bg: "#EBD1C1", color: "#382219" },
      { text: "Bold", rotation: 3, bg: "#FFF9EF", color: "#795B4D" },
      { text: "Cute", rotation: -4, bg: "#F8F1E5", color: "#382219" },
      { text: "Funny", rotation: 2, bg: "#EBD1C1", color: "#4B3025" },
      { text: "Strong", rotation: -1, bg: "#FFF9EF", color: "#382219" },
      { text: "Thoughtful", rotation: 3, bg: "#C9958D", color: "#FFF9EF" },
      { text: "Soft-hearted", rotation: -3, bg: "#F8F1E5", color: "#4B3025" },
      { text: "Unforgettable", rotation: 2, bg: "#382219", color: "#FFF9EF" }
    ]
  },

  snapshots: [
    {
      id: "snap-1",
      title: "Hostel memories",
      caption: "Hostel memories",
      description: "Midnight instant noodles, sharing a single room, laughing through exams, and turning that tiny hostel space into our second home. Those were the golden days.",
      date: "Late nights & early mornings",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      rotation: -3,
      tapeColor: "taupe"
    },
    {
      id: "snap-2",
      title: "Dancing together",
      caption: "Dancing together",
      description: "Tripping over our own feet, making up ridiculous choreography to whatever song came on, and completely owning the room without a care in the world.",
      date: "Spontaneous dance breaks",
      imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      rotation: 2,
      tapeColor: "blush"
    },
    {
      id: "snap-3",
      title: "Countless reels",
      caption: "Countless reels",
      description: "Taking 47 takes just to get a 7-second reel right, bursting into uncontrollable laughter halfway through every take, and leaving the bloopers as our favourites.",
      date: "Drafts folder overload",
      imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80",
      rotation: -2,
      tapeColor: "cream"
    },
    {
      id: "snap-4",
      title: "Random hangouts",
      caption: "Random hangouts",
      description: "Walking around without a destination in mind, sitting on random curbs discussing life, and somehow making the most mundane outings feel like movie scenes.",
      date: "Unplanned afternoons",
      imageUrl: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=800&q=80",
      rotation: 3,
      tapeColor: "rose"
    },
    {
      id: "snap-5",
      title: "Laughing until our stomachs hurt",
      caption: "Laughing until our stomachs hurt",
      description: "That silent, tear-streaming, wheezing laughter where neither of us could breathe, talk, or remember why we started laughing in the first place.",
      date: "Best kind of therapy",
      imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
      rotation: -4,
      tapeColor: "taupe"
    },
    {
      id: "snap-6",
      title: "Silly selfies",
      caption: "Silly selfies",
      description: "The unflattering angles, double chins, weird faces, and goofy filters that will never make it to Instagram but will forever live in my heart (and gallery).",
      date: "Camera roll treasures",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      rotation: 2,
      tapeColor: "blush"
    },
    {
      id: "snap-7",
      title: "Late-night conversations",
      caption: "Late-night conversations",
      description: "When the clock hit 2 AM and all our guards dropped. Talking about fears, hopes, secrets, and everything we rarely tell anyone else.",
      date: "2:00 AM whispers",
      imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      rotation: -2,
      tapeColor: "cream"
    },
    {
      id: "snap-8",
      title: "Blurry candid photos",
      caption: "Blurry candid photos",
      description: "Proof that we were having way too much fun to pause for a posed picture. The motion blur only makes the joy more authentic and real.",
      date: "Too busy living it",
      imageUrl: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&w=800&q=80",
      rotation: 4,
      tapeColor: "rose"
    },
    {
      id: "snap-9",
      title: "Random everyday moments",
      caption: "Random everyday moments",
      description: "Grabbing snacks, walking across campus under one umbrella, complaining about the weather, and making Tuesday feel like a celebration.",
      date: "Ordinary magic",
      imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      rotation: -3,
      tapeColor: "taupe"
    },
    {
      id: "snap-10",
      title: "Beautiful portraits",
      caption: "Beautiful portraits",
      description: "Effortlessly glowing, perfectly captured in golden hour light. A timeless reminder of how stunning you look when you're just being yourself.",
      date: "Golden hour glow",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      rotation: 3,
      tapeColor: "blush"
    }
  ],

  littleThings: [
    {
      id: "lt-1",
      text: "You notice things people casually mention once.",
      subtext: "You listen with your whole heart, storing the smallest whispers in mind.",
      rotation: -2,
      paperColor: "cream"
    },
    {
      id: "lt-2",
      text: "You remember the tiniest details.",
      subtext: "Favorite orders, dates, little habits that others breeze past.",
      rotation: 1.5,
      paperColor: "blush"
    },
    {
      id: "lt-3",
      text: "You somehow remember what people like and dislike.",
      subtext: "Without anyone even having to repeat themselves.",
      rotation: -1,
      paperColor: "ivory"
    },
    {
      id: "lt-4",
      text: "You care in ways people don’t always notice immediately.",
      subtext: "Quiet gestures of loyalty, protection, and gentle warmth.",
      rotation: 2.5,
      paperColor: "blush"
    },
    {
      id: "lt-5",
      text: "You make people feel remembered.",
      subtext: "In a world that rushes by, you make others feel truly seen.",
      rotation: -2,
      paperColor: "cream"
    },
    {
      id: "lt-6",
      text: "And somehow, the smallest things you do become the things people remember most.",
      subtext: "That is your superpower, Chello.",
      rotation: 1,
      paperColor: "ivory"
    }
  ],

  tinyNote: {
    stickyText: "hey beautiful, you look cute today ♡",
    line1: "You probably thought this was just a tiny note.",
    bigText: "I still have it.",
    line2: "Of course I kept it.",
    reflection: "Some notes aren't just ink on paper. They are bookmarks in the story of my favorite times."
  },

  gratitude: [
    { id: "g1", title: "every laugh", note: "The breathless kind that cures all sadness.", color: "cream" },
    { id: "g2", title: "every dance", note: "Messy, unapologetic, and full of joy.", color: "blush" },
    { id: "g3", title: "every ridiculous reel", note: "All the takes that made us cry laughing.", color: "yellow" },
    { id: "g4", title: "every random hangout", note: "Because sitting in silence with you is peace.", color: "cream" },
    { id: "g5", title: "every late-night conversation", note: "Unpacking dreams when the clock struck 2 AM.", color: "blush" },
    { id: "g6", title: "remembering the tiny things", note: "How you hold space for what matters to me.", color: "yellow" },
    { id: "g7", title: "making ordinary days memorable", note: "Turning simple walks into adventures.", color: "cream" },
    { id: "g8", title: "caring deeply", note: "Your genuine, boundless empathy.", color: "blush" },
    { id: "g9", title: "forgiving me", note: "For every awkward moment and gentle stumble.", color: "yellow" },
    { id: "g10", title: "staying", note: "Standing steadfast when life got chaotic.", color: "cream" },
    { id: "g11", title: "being someone I can call", note: "At any hour, without hesitation.", color: "blush" },
    { id: "g12", title: "every shared memory", note: "The golden chapter I cherish most.", color: "yellow" }
  ],

  flipCards: [
    {
      id: "fc-1",
      trait: "Thoughtful",
      icon: "sparkles",
      frontSubtitle: "tap to reveal",
      backDescription: "You make people feel remembered."
    },
    {
      id: "fc-2",
      trait: "Caring",
      icon: "heart",
      frontSubtitle: "tap to reveal",
      backDescription: "You care so much more deeply than you realize."
    },
    {
      id: "fc-3",
      trait: "Empathetic",
      icon: "eye",
      frontSubtitle: "tap to reveal",
      backDescription: "You don’t just hear people. You understand them."
    },
    {
      id: "fc-4",
      trait: "Strong",
      icon: "shield",
      frontSubtitle: "tap to reveal",
      backDescription: "You’ve been through difficult things and still keep moving forward."
    },
    {
      id: "fc-5",
      trait: "Ambitious",
      icon: "compass",
      frontSubtitle: "tap to reveal",
      backDescription: "You dream big, and I genuinely believe you’re capable of building the life you imagine."
    },
    {
      id: "fc-6",
      trait: "Funny",
      icon: "smile",
      frontSubtitle: "tap to reveal",
      backDescription: "Everything becomes approximately 37% more chaotic when you’re around."
    },
    {
      id: "fc-7",
      trait: "Forgiving",
      icon: "sun",
      frontSubtitle: "tap to reveal",
      backDescription: "Your heart has made room for people even when it would’ve been easier to walk away."
    },
    {
      id: "fc-8",
      trait: "Memorable",
      icon: "bookmark",
      frontSubtitle: "tap to reveal",
      backDescription: "You have a talent for turning completely random moments into permanent memories."
    },
    {
      id: "fc-9",
      trait: "Beautiful",
      icon: "flower",
      frontSubtitle: "tap to reveal",
      backDescription: "Your smile genuinely changes the energy of a room."
    },
    {
      id: "fc-10",
      trait: "One of a kind",
      icon: "gem",
      frontSubtitle: "tap to reveal",
      backDescription: "I’ve met a lot of people. There is nobody quite like you."
    }
  ],

  chaos: [
    {
      id: "cat-1",
      name: "Reels",
      icon: "film",
      noteTitle: "Our 47-Take Masterpieces 🎬",
      noteMemory: "We spent 2 hours rehearsing a 10-second transition. Between our terrible sync and laughing fits, it never got posted — but it's forever saved in our vault.",
      polaroidImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=700&q=80",
      polaroidCaption: "take 42 of 47 ♡"
    },
    {
      id: "cat-2",
      name: "Dancing",
      icon: "music",
      noteTitle: "Living Room Concerts 💃",
      noteMemory: "The sheer enthusiasm we bring to dance routines that we have no formal training for is unparalleled. Every beat drop was pure comedy and joy.",
      polaroidImage: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=700&q=80",
      polaroidCaption: "vibes over technique always"
    },
    {
      id: "cat-3",
      name: "Photos",
      icon: "camera",
      noteTitle: "1000 Photos to Pick 1 📸",
      noteMemory: "‘Hold on, do another angle!’ ‘My hair is weird!’ ‘Wait, look at this one!’ Our photo sessions are 90% coaching each other and 10% actually posing.",
      polaroidImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80",
      polaroidCaption: "golden hour photographer"
    },
    {
      id: "cat-4",
      name: "Inside jokes",
      icon: "message-circle",
      noteTitle: "The Language Nobody Else Gets 🤫",
      noteMemory: "Just one specific glance across a crowded room and we both have to bite our cheeks so we don't start laughing inappropriately.",
      polaroidImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=700&q=80",
      polaroidCaption: "if you know, you know"
    },
    {
      id: "cat-5",
      name: "Late-night talks",
      icon: "moon",
      noteTitle: "When 2 AM Hits Different 🌙",
      noteMemory: "Going from talking about our favorite snacks to our biggest existential fears and childhood memories in the span of twelve minutes.",
      polaroidImage: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=700&q=80",
      polaroidCaption: "softest hours"
    },
    {
      id: "cat-6",
      name: "Hostel memories",
      icon: "home",
      noteTitle: "Our Four Walls Fortress 🏠",
      noteMemory: "Sneaking snacks past warden rules, cramped rooms with clothes piled everywhere, and singing loudly while doing laundry at weird hours.",
      polaroidImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80",
      polaroidCaption: "hostel diaries ♡"
    },
    {
      id: "cat-7",
      name: "Random hangouts",
      icon: "coffee",
      noteTitle: "Doing Nothing Perfectly ☕",
      noteMemory: "We could literally just sit next to each other on our phones, occasionally showing each other memes, and it’s still the highlight of the week.",
      polaroidImage: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=700&q=80",
      polaroidCaption: "casual Tuesdays"
    },
    {
      id: "cat-8",
      name: "Silly arguments",
      icon: "zap",
      noteTitle: "The Petty Debates ⚡",
      noteMemory: "Arguing fiercely about which snack is superior or whether a certain celebrity is overrated, completely passionate over things that don't matter at all.",
      polaroidImage: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&w=700&q=80",
      polaroidCaption: "agree to disagree (I was right)"
    },
    {
      id: "cat-9",
      name: "Making up",
      icon: "heart-handshake",
      noteTitle: "Five Minutes Later 💕",
      noteMemory: "The dramatic silence that lasts for all of 3 minutes before one of us says something funny and the entire argument evaporates into giggles.",
      polaroidImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=700&q=80",
      polaroidCaption: "can’t stay mad at you"
    },
    {
      id: "cat-10",
      name: "Tiny thoughtful gestures",
      icon: "gift",
      noteTitle: "The Sweet Surprises 🎁",
      noteMemory: "You bringing me my favorite drink without asking, leaving a sticky note on my book, or saving me the last bite of dessert.",
      polaroidImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80",
      polaroidCaption: "pure kindness"
    },
    {
      id: "cat-11",
      name: "Dreams and ambitions",
      icon: "sparkle",
      noteTitle: "The Life We Are Building ✨",
      noteMemory: "Talking about our career goals, the places we want to travel to, and promising each other that no matter where life takes us, we’ll stay tight.",
      polaroidImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
      polaroidCaption: "the future looks bright"
    }
  ],

  memoriesWoven: {
    line1: "Some people become memories.",
    line2: "You became part of mine.",
    handwritten: "not just remembered. woven in.",
    polaroidLeft: {
      caption: "woven in my heart ♡",
      rotation: -6,
      imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
    },
    polaroidRight: {
      caption: "forever cherished",
      rotation: 5,
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    }
  },

  universe: {
    heading: "Our Little Universe",
    subtitle: "Different little moments. The same little world.",
    description: "Every memory with you is like a star in a constellation. Click on each glowing star to revisit the coordinates of our little universe.",
    stars: [
      {
        id: "star-1",
        label: "Hostel days",
        x: 20,
        y: 28,
        glow: "gold",
        memory: "Where every late night became an adventure, shared ramen became gourmet meals, and four hostel walls held all our secrets.",
        date: "Year 1 & 2"
      },
      {
        id: "star-2",
        label: "Reels",
        x: 38,
        y: 18,
        glow: "rose",
        memory: "Uncounted bloopers, giggling fits, and choreography that was 90% goofiness and 10% synchronization.",
        date: "Drafts archive"
      },
      {
        id: "star-3",
        label: "Dancing",
        x: 58,
        y: 24,
        glow: "cream",
        memory: "Spontaneous dance breaks in living rooms and corridors where nobody was watching and nothing else mattered.",
        date: "Uninhibited joy"
      },
      {
        id: "star-4",
        label: "Random days",
        x: 78,
        y: 35,
        glow: "gold",
        memory: "The rainy afternoons, walking to the corner store, grabbing boba, and turning the most mundane days into pure comfort.",
        date: "Tuesday magic"
      },
      {
        id: "star-5",
        label: "Laughing",
        x: 25,
        y: 68,
        glow: "rose",
        memory: "Tears running down our faces, cheeks hurting from smiling, laughing so hard that no sound was coming out anymore.",
        date: "Best medicine"
      },
      {
        id: "star-6",
        label: "Fights",
        x: 46,
        y: 60,
        glow: "cream",
        memory: "The silly 5-minute disagreements that proved even when we argue, our hearts are completely inseparable.",
        date: "Growing together"
      },
      {
        id: "star-7",
        label: "Tiny gestures",
        x: 65,
        y: 72,
        glow: "gold",
        memory: "The saved seat, the sticky note, the check-in text when I was quiet, the coffee ordered just the way I like it.",
        date: "Pure thoughtfulness"
      },
      {
        id: "star-8",
        label: "Late-night conversations",
        x: 82,
        y: 65,
        glow: "rose",
        memory: "Talking until 3 AM about dreams, fears, families, and where we hope to be in ten years. Safe and understood.",
        date: "Golden hours"
      }
    ]
  },

  finale: {
    heading: "Happy 19th Birthday, Chello 🤎",
    subheading: "A final message for the girl who deserves everything good in this world.",
    previewText: "Thank you for being my person. Thank you for your warmth, your chaotic energy, your loyalty, and every single second of laughter we've shared so far.",
    fullLetter: {
      title: "For Bhavasri on her 19th Birthday ♡",
      paragraphs: [
        "Dear Chello,",
        "Watching you grow, evolve, and step into who you are at 19 is an absolute honor. You bring a light into every room that isn't loud or demanding, but so warm that everyone naturally wants to stay near it.",
        "Thank you for being someone I can count on, someone whose laughter is infectious, and someone whose heart is genuinely pure.",
        "As you enter your nineteenth year, I wish you endless courage for your ambitions, boundless laughter for your days, quiet peace for your nights, and the unwavering knowledge that you are cherished beyond measure.",
        "No matter where the future leads or how busy life gets, you will always have a cheerleader, a confidant, and a friend in me."
      ],
      signoff: "always your person ♡",
      date: "October 9, 2026"
    }
  },

  surprise: {
    title: "A Little Surprise for Chello! 🎉🤎",
    subtitle: "Make a wish, birthday girl!",
    wishes: [
      "May your 19th year be full of unforgettable adventures ✧",
      "May all your wildest dreams and secret wishes come true 🪄",
      "May you always have reasons to smile that radiant smile 🤎",
      "And may you never forget how deeply loved you are by everyone lucky enough to know you!"
    ],
    secretToast: "Cheers to 19 years of Bhavasri — the prettiest, funniest, and most irreplaceable soul! 🥂🎂✨"
  }
};
