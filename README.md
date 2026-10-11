# Clovis Cilumba website — setup guide

Everything is in one file: `index.html`. Photos go in an `images` folder next to it.
Hosting on GitHub Pages is free. The only thing you pay for is your domain (once a year).

---

## 1. Fill in your details (in index.html)

Open `index.html` in any text editor (Notepad works; VS Code is nicer and free) and search for:

| Search for | Replace with |
|---|---|
| `you@example.com` | your business email |
| `yourhandle` | your Instagram username (appears 3 times) |
| `Quote on request` | your prices, if you want to show them |
| `within 48 hours` | how fast you actually reply (appears 2 times) |
| Service descriptions | edit the text and bullet lists so they match exactly what you offer |

## 2. Add your photos

1. Create a folder called `images` next to `index.html`.
2. Export your photos for web: about **2000px on the long side, JPG, under 500 KB each**. Big files make the site slow.
3. Near the bottom of `index.html`, find `const PHOTOS = [` and fill in each line:

```js
{ src: "images/concert-01.jpg", category: "concerts", alt: "Singer on stage at a concert in Ottawa" },
```

Categories: `concerts`, `events`, `portraits`, `livestreams`. Add as many lines as you want.

**Hero photo (optional):** put a photo at `images/hero.jpg`, then in the `.hero` CSS block remove the `/*` and `*/` around the `background:` line marked "To use your own photo".

## 3. Connect the booking form (free)

A website hosted on GitHub can't send emails by itself, so the form uses **Formspree**:

1. Make a free account at formspree.io and create a new form.
2. Copy the form link it gives you (looks like `https://formspree.io/f/abcdwxyz`).
3. In `index.html`, replace `https://formspree.io/f/YOUR_FORM_ID` with your link.

Booking requests will arrive in your email. The free plan has a monthly limit on submissions, which is plenty to start.

## 4. Testimonials

In the "What clients say" section, replace each placeholder with a real quote from a client (ask their permission), then delete `class="is-placeholder"` from that `<blockquote>`. Remove any extra placeholders you don't have quotes for yet.

## 5. Put it online with GitHub Pages

1. Create a free account at github.com.
2. Click **New repository**. Name it (e.g. `website`), set it to **Public**, and create it.
3. Click **Add file → Upload files**, drag in `index.html` and the `images` folder, then click **Commit changes**.
4. Go to **Settings → Pages**. Under "Build and deployment", choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
5. After a minute or two, your site is live at `https://YOUR-USERNAME.github.io/website/`.

To update the site later: open the file on GitHub, click the pencil icon to edit, or upload a new version.

## 6. Use your own domain

1. Buy a domain from a registrar (Namecheap, Porkbun, Cloudflare, GoDaddy, etc.).
2. On GitHub: **Settings → Pages → Custom domain**, type your domain (e.g. `clovismedia.ca`) and save.
3. At your registrar, open the DNS settings and add:

| Type | Host / Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR-USERNAME.github.io |

4. Wait (can take up to a day), then tick **Enforce HTTPS** in Settings → Pages.

GitHub's official guide, if you get stuck: docs.github.com → search "GitHub Pages custom domain".
