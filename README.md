# Bookstore Management System — Project Website (Ontology + Multi‑Agent Simulation)

This repository contains a **responsive single-page web site** used as a **documentation hub / showcase** for a Bookstore Management System project developed for **CS3142 (Complex Systems and Agent Technology)**.

The website highlights:
- the **ontology engineering** component (OWL/SWRL concepts),
- the **multi-agent simulation** design (agent roles + communication),
- and provides a **single entry point** to presentation materials (video, documentation, screenshots, code) via a Google Drive folder.

> Note: This repo hosts the **web front-end documentation site** (HTML/CSS/JavaScript).  
> The **simulation/ontology implementation artifacts** are referenced via external materials (Google Drive link embedded in the site).

---

## Live Sections (What the Website Contains)

The page is structured into the following sections:

- **Home / Hero**: Project title + module context
- **Presentation**: Link card to a Google Drive folder containing presentation materials
- **Features**: High-level system capabilities (Ontology, Multi-Agent System, Message Bus, Visualization, Analytics, Integration)
- **Technology Stack**: Summary of technologies used in the overall project
- **Contact / Assignment Info**: Course + student/institution details

---

## Tech Stack (This Repository)

**Frontend**
- HTML5 (single-page layout)
- CSS3 (responsive design, grid, modern UI styling)
- Vanilla JavaScript (DOM interactions + animations)

**External Libraries/CDNs**
- Google Fonts (Inter)
- Font Awesome icons

---

## Project Tech (Overall System — as Presented)

The website describes the underlying academic project as using:

- **Ontology Engineering**
  - OWL classes and properties
  - SWRL rule concepts
  - Tooling mentioned: **Owlready2**

- **Multi‑Agent System (MAS)**
  - Multiple agent types (website mentions “three autonomous agent types”)
  - Agent decision-making and emergent behaviors (conceptual/academic framing)

- **Simulation + Visualization**
  - Tooling mentioned: **Mesa framework**
  - Analytics tooling mentioned: Pandas, Matplotlib
  - GUI tooling mentioned: Tkinter

> For interviews/CV: present these as the *project’s architecture and implementation*, but clarify that this repository is the **web showcase/documentation** part.

---

## Repository Structure

This repo is intentionally simple:

- `index.html` — single-page website layout and content
- `styles.css` — all styling (layout, responsiveness, UI components)
- `script.js` — interactive behavior and animation logic
- `README.md` — project documentation (this file)

---

## Key Frontend Features (What You Can Explain in an Interview)

### 1) Smooth Section Navigation
Navigation links use smooth scrolling to jump between page sections (Home, Presentation, Features, Technology, Contact).

### 2) Mobile-Friendly Navbar
A hamburger menu toggles navigation visibility on small screens.

### 3) Scroll-Aware Navbar Styling
When the user scrolls down, the navbar background and shadow change to improve readability and visual depth.

### 4) On-Scroll Animations (Intersection Observer)
Feature cards, tech items, and contact cards animate into view using the browser’s `IntersectionObserver` API:
- initial state: opacity `0`, translated down
- when visible: opacity `1`, translate to normal position

This is a clean, modern approach (better than heavy scroll listeners) and is a good point to discuss performance-friendly UI design.

### 5) External Presentation Materials
The “Presentation” section links to a Google Drive folder that contains:
- video presentation
- documentation
- screenshots
- source code (for the underlying system)

---

## How to Run Locally

Because this is a static site, there is no build step.

### Option A — Open directly
1. Download / clone the repo
2. Open `index.html` in a browser

### Option B — Use a local dev server (recommended)
Using a local server avoids any browser security restrictions and better matches real hosting.

**VS Code Live Server**
1. Install “Live Server”
2. Right-click `index.html` → “Open with Live Server”

**Python simple server**
```bash
python -m http.server 8000
```
Then open:
- `http://localhost:8000`

---

## What to Put on Your CV (Suggested Bullet Points)

You can copy/adapt these:

- Built a **responsive project documentation website** (HTML/CSS/JavaScript) to showcase an academic Bookstore Management System project.
- Implemented **mobile-first navigation**, smooth scrolling, and **IntersectionObserver-based animations** for modern UI/UX.
- Documented a system architecture involving **Ontology Engineering (OWL/SWRL with Owlready2)** and a **Multi‑Agent Simulation design (Mesa)** with agent communication and visualization concepts.
- Created a centralized access point for **presentation assets and technical documentation**.

---

## Interview Preparation Guide (Talking Points)

Be ready to explain:

1. **Why a website repo exists**
   - “It’s a clean, shareable hub that recruiters/lecturers can open instantly without installing dependencies.”

2. **How the UI is built**
   - Semantic HTML sections + CSS grid + responsive breakpoints  
   - JS behaviors: event listeners, class toggles, IntersectionObserver

3. **How your MAS concept works (from the project)**
   - Agents: roles/responsibilities, decision rules, communication mechanism (message bus)
   - Metrics: what you measure (throughput, wait time, stockouts, etc.)
   - Visualization: how Mesa/Tkinter dashboards help interpret emergent behavior

---

## Notes / Limitations

- This repository is a **front-end project website** only.
- If you want the README to be fully “end-to-end reproducible”, consider adding:
  - a `/docs` folder (or `/assets`) with screenshots
  - a short architecture diagram image
  - a separate repo (or subfolder) containing the Python simulation + ontology code, if you are allowed to publish it

---

## License
Add a license if you plan to share publicly (MIT is common for portfolio sites).
