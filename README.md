# Nahar Builders – Landing Page Clone

A front-end clone of the [Nahar Builders](https://www.naharbuilders.com/) landing page, built for learning and practice. All page content is loaded from a JSON file and rendered with JavaScript.

## Features

- Responsive layout (desktop, tablet, mobile)
- Data-driven sections rendered from `public.json`
- Sections: Navbar, Hero slider, Service strip, Quick-link cards, About, Featured Projects, Quote band, Capabilities, Footer

## Tech Stack

- HTML5
- Tailwind CSS v4 (CLI)
- JavaScript (ES6+, `fetch` API)
- Font Awesome (icons)
- Google Fonts: Cormorant Garamond (headings), Roboto (body)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Build Tailwind CSS

Adjust the input/output paths to match your folders.

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./dist/output.css --watch
```

### 3. Run the project

Open the project with the **Live Server** extension in VS Code.
Opening `index.html` directly (`file://`) will not work, because `fetch` needs a server.

## Data Source

All text, links, and image tags are stored in `public.json` and loaded like this:

```js
const res = await fetch("./public.json");
const data = await res.json();
```

| Key | Content |
|-----|---------|
| `site` | Site name, logos |
| `navbar` | Menu items, dropdowns, CTA button |
| `hero` | Slides, label, heading, text, buttons, service strip |
| `quickCards` | Three quick-link cards |
| `about` | Heritage section |
| `featuredProjects` | Project cards |
| `quote` | Quote band |
| `capabilities` | Service cards |
| `footer` | Links, address, contact, copyright |

## Project Structure

Update this to match your actual folders.

```
project-root/
├── index.html
├── public.json
├── src/
│   └── input.css
├── dist/
│   └── output.css
├── js/
│   └── main.js
├── img/
└── README.md
```

## Build Plan

- [ ] Project setup and global styles
- [ ] Navbar
- [ ] Hero section
- [ ] Service strip
- [ ] Quick-link cards
- [ ] About section
- [ ] Featured projects
- [ ] Quote band
- [ ] Capabilities
- [ ] Footer
- [ ] Responsive fixes

## Credits

- Design reference: [naharbuilders.com](https://www.naharbuilders.com/) (developed by Brain Machine AI)
- This project is for educational purposes only. All brand names, logos, and images belong to their respective owners.

## Author

Hridoy Hossen
