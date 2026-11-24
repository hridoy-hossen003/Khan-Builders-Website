# Khan Builders – Landing Page

A responsive landing page for a construction and real estate company, built as a front-end clone of the [Nahar Builders](https://www.naharbuilders.com/) design for learning and practice. All page content is stored in a JSON file and rendered with JavaScript.

## Features

- Fully responsive layout (desktop, tablet, mobile)
- Data-driven sections rendered from `public.json`
- Hover effects: zoom on card images, lift on capability cards, color fill on buttons
- "See more / See less" toggle for long project descriptions
- Reusable card and section components built with Tailwind CSS

## Sections

- [x] Navbar
- [x] Hero
- [x] Service strip
- [x] Quick-link cards
- [x] About (Our Heritage)
- [x] Featured Developments
- [x] Quote band
- [x] Capabilities
- [x] Footer

## Tech Stack

- HTML5
- Tailwind CSS v4 (CLI)
- JavaScript (ES6+, `fetch` API, DOM manipulation)
- Font Awesome (icons)
- Google Fonts: Cormorant Garamond (headings), Jost (body)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/hridoy-hossen003/Khan-Builders-Website.git
cd Khan-Builders-Website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Build Tailwind CSS

Adjust the input/output paths to match your folders.

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./dist/output.css --watch
```

### 4. Run the project

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

Each section has its own display function (for example `displayServiceStrip`, `displayFeaturesCard`, `displayCapabilities`) that receives its part of the data and builds the HTML.

## Project Structure

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

## Credits

- Design reference: [naharbuilders.com](https://www.naharbuilders.com/) (developed by Brain Machine AI)
- This project is for educational purposes only. All brand names, logos, and images belong to their respective owners.

## Author

Hridoy Hossen