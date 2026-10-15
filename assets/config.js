/* =====================================================================
   YOUR SETTINGS — everything you'll want to change is in this block.
   See README.md for step-by-step help.
   ===================================================================== */
const CONFIG = {

  /* Short video loop behind your name. Put the file in the "videos" folder,
     e.g. "videos/reel.mp4" (keep it under ~10 MB, 10–20 seconds, no sound).
     Leave "" to show the stage lights only. */
  heroVideo: "",

  /* Cal.com booking link, e.g. "mufuki/session" (from cal.com/mufuki/session).
     Leave "" to show only the request form. */
  calLink: "",

  /* Show prices on the site? Set to true once the prices below are your real ones. */
  showPrices: false,

  /* PRICES (Canadian dollars, before tax). Change these to your real prices. */
  prices: {
    photo: {
      hourly: 120, minHours: 1, maxHours: 8,
      extras: [
        { en: "Rush delivery (48 h)", fr: "Livraison express (48 h)", price: 50 },
        { en: "Extra retouched photos (10)", fr: "10 photos retouchées de plus", price: 40 },
      ],
    },
    livestream: {
      hourly: 150, minHours: 2, maxHours: 8,
      extras: [
        { en: "Second camera angle", fr: "Deuxième angle de caméra", price: 75 },
        { en: "Full recording delivered after", fr: "Enregistrement complet livré après", price: 40 },
      ],
    },
    podcast: {
      hourly: 90, minHours: 1, maxHours: 6,
      extras: [
        { en: "Edited episode", fr: "Épisode monté", price: 75 },
        { en: "3 short clips for social media", fr: "3 courts extraits pour les réseaux sociaux", price: 60 },
      ],
    },
  },

  /* PORTFOLIO — one line per photo in the "images" folder.
     category: concerts, events, portraits or livestreams.
     Lines with src: "" show a grey placeholder box.
     "thumb" is a smaller copy for the grid; the full photo opens when clicked. */
  photos: [
    { src: "images/photos/concert-01.jpg", thumb: "images/photos/thumbs/concert-01.jpg", w: 599, h: 900, category: "concerts", alt: "Singer raising his hand on stage under blue and purple lights" },
    { src: "images/photos/portrait-01.jpg", thumb: "images/photos/thumbs/portrait-01.jpg", w: 600, h: 900, category: "portraits", alt: "Woman in a suit and camel coat on a city street at night" },
    { src: "images/photos/event-02.jpg", thumb: "images/photos/thumbs/event-02.jpg", w: 900, h: 600, category: "events", alt: "Marchers holding a Jesus Saves sign" },
    { src: "images/photos/concert-03.jpg", thumb: "images/photos/thumbs/concert-03.jpg", w: 599, h: 900, category: "concerts", alt: "Singer making a heart with his hands on stage" },
    { src: "images/photos/portrait-05.jpg", thumb: "images/photos/thumbs/portrait-05.jpg", w: 599, h: 900, category: "portraits", alt: "Studio portrait of a woman in a pool of light" },
    { src: "images/photos/event-06.jpg", thumb: "images/photos/thumbs/event-06.jpg", w: 900, h: 600, category: "events", alt: "Guests posing in front of a gold and black party backdrop" },
    { src: "images/photos/concert-05.jpg", thumb: "images/photos/thumbs/concert-05.jpg", w: 599, h: 900, category: "concerts", alt: "Performer on stage under teal stage lights" },
    { src: "images/photos/portrait-08.jpg", thumb: "images/photos/thumbs/portrait-08.jpg", w: 599, h: 900, category: "portraits", alt: "Man in a patterned jacket and sunglasses in the studio" },
    { src: "images/photos/event-09.jpg", thumb: "images/photos/thumbs/event-09.jpg", w: 900, h: 600, category: "events", alt: "Science fair winners holding certificates on stage" },
    { src: "images/photos/concert-02.jpg", thumb: "images/photos/thumbs/concert-02.jpg", w: 599, h: 900, category: "concerts", alt: "Musician playing a keytar on stage" },
    { src: "images/photos/portrait-02.jpg", thumb: "images/photos/thumbs/portrait-02.jpg", w: 600, h: 900, category: "portraits", alt: "Black and white portrait of a woman in a suit and tie" },
    { src: "images/photos/event-01.jpg", thumb: "images/photos/thumbs/event-01.jpg", w: 900, h: 600, category: "events", alt: "March for Jesus parade with flags on a city street" },
    { src: "images/photos/concert-06.jpg", thumb: "images/photos/thumbs/concert-06.jpg", w: 599, h: 900, category: "concerts", alt: "Singer kneeling on stage during a performance" },
    { src: "images/photos/portrait-09.jpg", thumb: "images/photos/thumbs/portrait-09.jpg", w: 599, h: 900, category: "portraits", alt: "Woman with braids posing in an African print top" },
    { src: "images/photos/event-03.jpg", thumb: "images/photos/thumbs/event-03.jpg", w: 900, h: 600, category: "events", alt: "Marchers in Canada shirts at March for Jesus" },
    { src: "images/photos/concert-04.jpg", thumb: "images/photos/thumbs/concert-04.jpg", w: 599, h: 900, category: "concerts", alt: "Singer performing with a microphone in purple light" },
    { src: "images/photos/portrait-07.jpg", thumb: "images/photos/thumbs/portrait-07.jpg", w: 599, h: 900, category: "portraits", alt: "Man in white sunglasses posing against a pink backdrop" },
    { src: "images/photos/event-07.jpg", thumb: "images/photos/thumbs/event-07.jpg", w: 900, h: 600, category: "events", alt: "Guests seated at tables during a banquet" },
    { src: "images/photos/portrait-03.jpg", thumb: "images/photos/thumbs/portrait-03.jpg", w: 900, h: 600, category: "portraits", alt: "Woman in a pink top beside a white arch bridge" },
    { src: "images/photos/event-04.jpg", thumb: "images/photos/thumbs/event-04.jpg", w: 900, h: 600, category: "events", alt: "Crowd walking down a city street at March for Jesus" },
    { src: "images/photos/portrait-06.jpg", thumb: "images/photos/thumbs/portrait-06.jpg", w: 900, h: 599, category: "portraits", alt: "Couple standing in a circle of light in the studio" },
    { src: "images/photos/event-05.jpg", thumb: "images/photos/thumbs/event-05.jpg", w: 900, h: 600, category: "events", alt: "Guests talking at an indoor reception" },
    { src: "images/photos/portrait-10.jpg", thumb: "images/photos/thumbs/portrait-10.jpg", w: 599, h: 900, category: "portraits", alt: "Woman with braids in an African print top, looking down" },
    { src: "images/photos/event-08.jpg", thumb: "images/photos/thumbs/event-08.jpg", w: 900, h: 600, category: "events", alt: "Students presenting a science fair project on optical illusions" },
    { src: "images/photos/portrait-04.jpg", thumb: "images/photos/thumbs/portrait-04.jpg", w: 900, h: 600, category: "portraits", alt: "Cyclist riding across a white arch bridge" },
  ],

  /* BEFORE / AFTER — the same photo straight from the camera and edited.
     Both images should be the same size. Leave both "" to show the illustration. */
  beforeAfter: [
    { before: "", after: "", alt: "Concert photo before and after editing" },
  ],

  /* VIDEO & PODCAST SAMPLES — paste YouTube links. */
  reels: [
    { youtube: "", en: "Livestream highlight", fr: "Moment fort d'une diffusion" },
    { youtube: "", en: "Podcast episode clip", fr: "Extrait d'un épisode de balado" },
  ],

  /* INSTAGRAM — paste links to posts you want to show,
     e.g. "https://www.instagram.com/p/ABC123xyz/". Up to 6 looks best. */
  instagramPosts: [
    "https://www.instagram.com/p/DaY-7Z1Eamj/",
    "https://www.instagram.com/p/DM6WWdJR6vD/",
    "https://www.instagram.com/p/DMvWnmoxxrz/",
    "https://www.instagram.com/p/DMu1GegxfxH/",
    "https://www.instagram.com/p/DMl0ooTxyzH/",
    "https://www.instagram.com/p/DMlxSHbxTN8/",
  ],
};
