## Project Structure

```text
src/
│ declarations.d.ts 
│
├── app/ 
│ │ favicon.ico
│ │ globals.css 
│ │ layout.tsx 
│ │
│ └── (commonLayout)/ 
│ layout.tsx
│ page.tsx # Main landing page
│
├── assets/ # Organized static assets and images
│ │ logo-google.png
│ │ whyBanner.png
│ │
│ ├── getting-started/
│ ├── hero-section/
│ ├── question/
│ ├── reviews/
│ ├── services/
│ ├── tools/
│ └── trusted/
│
└── components/
├── ClientReviews/
├── FAQ/
├── Footer/
├── GettingStarted/
├── HeroSection/
├── Navbar/
├── OurServices/
├── OurTools/
├── Pricing/
├── StillHaveQuestions/
├── Trusted/
└── WhyChooseUs/

---

## Key Features

- **Dynamic FAQ Accordion**  
  Built with custom Tailwind transitions for a smooth user experience.

- **Interactive Reviews Slider**  
  Implemented using Swiper.js with centered-slide focus and continuous looping.

- **Responsive Layouts**  
  Pixel-perfect implementation from design, fully optimized for Mobile, Tablet, and Desktop.

- **Component-Based Architecture**  
  Reusable and scalable React components using TypeScript interfaces.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Icons:** Lucide React
- **Slider Library:** Swiper.js

---

## Challenges Faced & Solutions

### 1. Hydration Error Management

Encountered hydration mismatch errors caused by browser extensions injecting attributes into the HTML body.

**Solution:**

- Used `suppressHydrationWarning` in the root layout
- Ensured client-side components render only after initial mount using React hooks

---

### 2. Custom Animation Without Heavy Libraries

Needed smooth animations without increasing bundle size.

**Solution:**

- Built FAQ accordion animations using pure Tailwind CSS
- Used CSS Grid logic for smooth "slide-down" effects
- Avoided external animation libraries to keep performance optimized

---

### 3. Swiper Continuous Loop Fix

Faced an issue where the slider showed a blank gap before looping.

**Solution:**

- Implemented a data-doubling strategy
- Configured Swiper for seamless infinite scrolling
- Ensured smooth looping even with limited slides
