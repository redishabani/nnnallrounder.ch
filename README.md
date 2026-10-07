This repository is a **static, multilingual website** for N.N.N. Allrounder, a home-services business in Zurich. It presents services such as cleaning, furniture assembly, transport, gardening, painting, and interior work, and directs visitors to contact the business by phone, email, or WhatsApp.

### Organization

The repository is very small: the site lives under `/home/runner/work/nnnallrounder.ch/nnnallrounder.ch/public/`.

- **Pages:** `/home/runner/work/nnnallrounder.ch/nnnallrounder.ch/public/index.html` is the German homepage; `/public/eng/index.html`, `/public/fra/index.html`, and `/public/ita/index.html` are English, French, and Italian versions.
- **Styles:** `/public/css/` contains the site styles and bundled stylesheets for Bootstrap and UI plugins.
- **Scripts:** `/public/js/main.js` handles template interactions such as mobile navigation and scrolling; `/public/js/language.js` manages language selection and remembers the visitor’s preference.
- **Assets:** `/public/images/` contains the hero and service images; `/public/fonts/` contains icon fonts.
- **Fallback:** `/public/404.html` is a Firebase-generated “Page Not Found” page.

There is no apparent application backend or build setup in the repository; the HTML pages directly reference the CSS, JavaScript, images, and fonts.

### Main entry points

The German `/public/index.html` is the root entry point. Its language selector links to the other localized pages, while `language.js` can redirect based on a saved language preference. Each page contains the same overall sections—hero, contact details, services, and footer—with translated text.

### Suggested reading path

1. `/home/runner/work/nnnallrounder.ch/nnnallrounder.ch/public/index.html` — understand the page structure and content.
2. `/home/runner/work/nnnallrounder.ch/nnnallrounder.ch/public/js/language.js` — understand language selection, persistence, and redirects.
3. `/home/runner/work/nnnallrounder.ch/nnnallrounder.ch/public/js/main.js` — see the shared navigation and UI behavior.
4. `/home/runner/work/nnnallrounder.ch/nnnallrounder.ch/public/css/style.css` and `/home/runner/work/nnnallrounder.ch/nnnallrounder.ch/public/css/style_1.css` — inspect the visual styles.
5. Compare `/public/eng/index.html`, `/public/fra/index.html`, and `/public/ita/index.html` for localized content.
