# 🎲 Tenzies Game

A fun, accessible, and fast-paced interactive dice game built with React, Tailwind CSS, and `react-confetti`. Roll until all dice are the same, freezing your target numbers along the way!

![screenshot of interface](./src/assets/screenshot.png)

## 🔗 Links

- **Live Site:** [View Live Demo](https://tenzies-game-lake-seven.vercel.app/)
- **GitHub Repository:** [View Source Code](https://github.com/iviktorry/tenzies-game)

---

## 🛠 Tech Stack

- **React** — Declarative UI, state management, derived states, `useRef`, and `useEffect`
- **Tailwind CSS** — Utility-first styling with responsive design
- **nanoid** — Unique key generation for list rendering
- **react-confetti** — Celebratory particle effects upon winning
- **Vite** — High-performance frontend build tooling

---

## ✨ Features & Accessibility (a11y)

- **Interactive Dice Freezing:** Click individual dice to hold or toggle their selection state between rolls.
- **Smart Re-rolling:** Only unheld dice are regenerated when you click "Roll".
- **Instant Win Detection:** Automatically evaluates if all 10 dice are selected and share the exact same value.
- **Victory Celebration:** Triggers a confetti animation and changes the action button to "New Game".
- **Screen Reader Support:** Full ARIA integration (`aria-pressed`, dynamic `aria-label` for dice state, and `aria-live="polite"` region for winning announcements).
- **Keyboard Navigation & Auto-Focus:** Automatically moves DOM focus to the "New Game" button via `useRef` upon winning for seamless keyboard gameplay.
- **Responsive Layout:** Optimized grid layout scaling seamlessly from mobile to desktop screens.

---

## 🧠 What I Learned & Practiced

- **Accessibility First (a11y):** Applied semantic ARIA attributes (`aria-pressed`, `aria-label`) to convey state changes to assistive technologies.
- **Managing DOM Focus (`useRef` & `useEffect`):** Utilized `useRef` alongside `useEffect` to automatically programmatically focus the primary button when the game is won.
- **Accessible Screen Reader Announcements:** Implemented a visually hidden (`sr-only`) live region to notify screen reader users of victory without disrupting the UI layout.
- **State Immutability:** Updating specific items within arrays using `.map()` and object spread syntax (`...item`).
- **Derived State:** Computing victory conditions (`gameWon`) dynamically on every render instead of syncing redundant state.
- **Lazy State Initialization:** Passing callback functions into `useState` to optimize performance and prevent unnecessary initial recalculations.

---

## 🙋‍♀️ Author

- GitHub — [@iviktorry](https://github.com/iviktorry)
- Frontend Mentor — [@iviktorry](https://www.frontendmentor.io/profile/iviktorry)
