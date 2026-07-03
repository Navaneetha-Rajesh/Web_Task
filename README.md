# IGNITO | Space & Anti-Gravity Tech Fest Portal

IGNITO is a futuristic, highly responsive, and premium techno-managerial fest portal website built with React, Vite, Tailwind CSS v4, and Framer Motion. Heavily inspired by MEC Kochi's Excel architecture and space navigation simulators.

## Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher)

## Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd WebTask
   ```

2. **Install Dependencies**
   Install the required design, animation, and icon libraries:
   ```bash
   npm install
   ```

## Development & Operations Commands

Run these scripts from the project root directory:

### Start Local Development Server
Launch the hot-reloading development server on your local machine:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the interactive cockpit and portal.

### Build for Production
Compile and optimize the source assets into a lightweight, production-ready static bundle under the `/dist` directory:
```bash
npm run build
```

### Preview Production Build
Serve the compiled production bundle locally to test production behaviors and performance metrics:
```bash
npm run preview
```

### Code Quality Check
Run static analysis checks on source files:
```bash
npm run lint
```

## Key Technologies
- **Vite & React 19**: Faster dev tooling and modern rendering engines.
- **Tailwind CSS v4**: Theme variables, glassmorphic layout tokens, and custom animations configured natively in `src/index.css`.
- **Framer Motion**: Smooth scroll-reveals, modal overlays, past-edition carousel shifts, and custom sniper cursor springs.
- **Lucide React**: Vector assets for telemetry panels and contacts.
- **Web Audio API**: Synthetic cosmic ambient loops and beeps generated client-side without loading heavy external sound files.
