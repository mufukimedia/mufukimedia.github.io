# mufuki.ca — how to update your website

Your site has three pages:

| File | What it is |
|---|---|
| `index.html` | The main website |
| `client.html` | The private client gallery (mufuki.ca/client.html) |
| `tools/gallery-maker.html` | Your tool for creating client galleries (mufuki.ca/tools/gallery-maker.html) |

Almost everything you'll change lives in **one block** near the bottom of `index.html` called `const CONFIG = {`. To edit on GitHub: open the file, click the **pencil icon**, make the change, then click **Commit changes**. The live site updates within a minute or two.

---

## 1. Your prices

Prices are hidden until you turn them on: in `CONFIG`, change `showPrices: false` to `showPrices: true`.

In `CONFIG`, find `prices:`. Each service has:
- `hourly`: your price per hour
- `minHours` / `maxHours`: the range on the hours slider
- `extras`: optional add-ons, each with an English name (`en`), a French name (`fr`) and a `price`

The "From $…/h" labels under each service and the price estimator both use these numbers.

## 2. Portfolio photos

1. Export photos at about **2000px on the long side, JPG, under 500 KB**.
2. On GitHub, open the `images` folder, then **Add file → Upload files**.
3. In `CONFIG → photos`, fill in each line:
   `{ src: "images/concert-01.jpg", category: "concerts", alt: "Singer on stage at a concert in Ottawa" },`

Categories: `concerts`, `events`, `portraits`, `livestreams`.

## 3. Before and after

Pick a photo you edited heavily. Export **both versions at exactly the same size**, upload them to `images`, then in `CONFIG → beforeAfter`:

`{ before: "images/show-raw.jpg", after: "images/show-edit.jpg", alt: "Concert photo before and after editing" },`

Add more lines for more comparisons.

## 4. Video behind your name

Make a **10–20 second loop, no sound, MP4, under ~10 MB** (1920px wide is plenty). Upload it to a `videos` folder and set:

`heroVideo: "videos/reel.mp4",`

The stage spotlight still follows the mouse on top of it.

## 5. Video and podcast samples

Upload your clips to YouTube (Public or Unlisted), then paste the links in `CONFIG → reels`:

`{ youtube: "https://youtu.be/abc123XYZ00", en: "Sunday service livestream", fr: "Diffusion du culte du dimanche" },`

## 6. Instagram posts

Open a post on Instagram, tap **⋯ → Copy link**, and paste it in `CONFIG → instagramPosts`:

`instagramPosts: ["https://www.instagram.com/p/ABC123/", "https://www.instagram.com/p/DEF456/"],`

3 or 6 posts look best. Update the list when you post something you're proud of.

## 7. Online booking calendar (Cal.com, free)

1. Sign up at **cal.com** with bookings@mufuki.ca and connect your Google Calendar.
2. Create an event type (for example "Session call", 30 min) and set your available hours.
3. Your link looks like `cal.com/mufuki/session`. Put the part after `cal.com/` in:
   `calLink: "mufuki/session",`

Clients then pick a time right on your site, and it lands in your calendar automatically.

## 8. Booking form (Formspree, free)

1. Sign up at **formspree.io** with bookings@mufuki.ca and create a form.
2. Copy its link (like `https://formspree.io/f/abcdwxyz`).
3. In `index.html`, replace `https://formspree.io/f/YOUR_FORM_ID` with it.

## 9. Testimonials

In the "What clients say" section of `index.html`, replace each placeholder with a real quote (with the client's permission) and remove `class="is-placeholder"` from that `<blockquote>`. Also remove the `data-i18n="rev.ph"` and `data-i18n="rev.who"` parts from that quote, otherwise the language switch replaces it with placeholder text.

## 10. English / French

All the site's text is in `I18N` (just below `CONFIG`), with an `en` and `fr` version of every line. Change both when you edit wording.

---

## Delivering photos and videos to a client

**After each shoot:**

1. **Upload the files to Google Drive** (15 GB free with your Gmail). Make one folder per client.
2. Right-click the folder → **Share** → under General access choose **Anyone with the link** → **Copy link**.
3. Open **mufuki.ca/tools/gallery-maker.html**. Fill in the client's name, gallery title, date, the Drive link and how long the files stay available. Click **Create gallery**.
4. On GitHub, edit `client.html`. Find `const GALLERIES = [` and paste the line the tool gave you on a new line inside the brackets. **Commit changes**.
5. Copy the client message from the tool and send it by email or text. It has a one-tap link and their access code, in English and French.

The client opens the link and sees their name, the event, a preview of the photos, and a **Download all files** button.

**Good to know**
- The Drive link is locked inside `client.html`; nobody can read it without the client's code.
- Anyone who has the code (or the Drive link itself) can open the files, so only send them to your client.
- To remove access, delete that client's line from `client.html`, and in Google Drive change the folder back to **Restricted**.
- When the expiry date passes, the gallery shows a message telling the client to email you.
- Delete the **DEMO** line in `client.html` once you have real clients (demo code: `DEMO-MUFU-2026`).

---

## Domain and email (already set up)

- mufuki.ca and www.mufuki.ca point to GitHub Pages (DNS at Porkbun).
- bookings@mufuki.ca forwards to your Gmail (Porkbun → Email Forwarding).
- If HTTPS isn't on yet: GitHub repo → Settings → Pages → tick **Enforce HTTPS**.
