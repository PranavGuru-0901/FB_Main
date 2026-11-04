# IPL Auction Simulator 🏏

A modern, high-energy, real-time IPL Player Auction Simulator built with **React 19**, **TypeScript**, and **Vite**. Experience a broadcast-style auction with dynamic franchise color theming, high-resolution team logos, live bidding animations, squad management dashboards, and a complete player pool.

---

## 🌟 Key Features

### 1. 🏟️ Live Auction Room
- **Real-Time Bidding Engine**: Place bids on behalf of any of the 10 IPL franchises with dynamic purse checking and squad limits.
- **Custom Bid Increment**: Choose from standard increments (₹0.25 Cr, ₹0.50 Cr, ₹0.75 Cr, ₹1.00 Cr, ₹2.00 Cr) or specify any **Custom Increment** amount in Cr.
- **Broadcast Pop-up Animation**: Every new bid triggers a center-screen pop-up showcasing the team's official logo, franchise name, and bid value.
- **Animated Bid Counter**: Bid counter pops and pulses with team-colored glow ripples alongside floating delta indicators (`+₹0.25 Cr`).
- **Live Bid History & Ticker**: Real-time bid log and scrolling news ticker for live auction events.

### 2. 🎨 Dynamic Franchise Color Theming
Whenever a franchise places a bid, the entire application dynamically morphs into that team's official colors with custom ambient gradients, glowing borders, and themed buttons:
- **CSK**: Canary Gold & Royal Blue
- **DC**: DC Royal Blue & Crimson Red
- **GT**: Marine Teal & Titans Gold
- **KKR**: Knight Purple & Gold
- **LSG**: Bold Red (`#EB261C`), Royal Blue (`#0057E2`), and Gold (`#FECC00`)
- **MI**: Electric Blue & Gold
- **PBKS**: Punjab Crimson & Warm Gold
- **RR**: Royal Pink & Royals Navy Blue
- **RCB**: Royal Crimson & Gold
- **SRH**: Sunrisers Orange & Amber

### 3. 🛡️ High-Resolution Team Logos
- Official high-resolution PNG logos for all 10 franchises (`CSK`, `DC`, `GT`, `KKR`, `LSG`, `MI`, `PBKS`, `RR`, `RCB`, `SRH`).
- Custom anti-aliasing and subpixel scaling (`image-rendering: high-quality`, hardware-accelerated transforms) to keep logos razor-sharp across all screen sizes without pixelation.

### 4. 📊 Franchise Dashboards
- Track squad compositions, remaining purse (out of ₹120.00 Cr starting budget), total spent, and overseas player limits (max 8).
- Role composition breakdown (Batters, Bowlers, All-rounders, Wicketkeepers).
- Full purchased squad table with single-click player re-auction support in Admin Mode.

### 5. 🔍 Player Pool & Stats Modal
- Search players by name and filter by Set, Role, Nationality, or Status (Sold, Unsold, Not Auctioned).
- Detailed player profile modals with career matches, runs, wickets, high scores, best bowling figures, and recent 2026 season form.

### 6. 🏆 Results Summary
- Filter and sort completed auction results by highest price, latest sold, player name, or franchise.
- Real-time total expenditure tracking.

### 7. ⌨️ Keyboard Shortcuts & Admin Mode
- Toggle between **Admin Mode** (full auction controls) and **Viewing Mode** (spectator view).
- Supported hotkeys in Auction Room:
  - `B`: Place bid on behalf of selected shortcut bidder
  - `S`: Mark current player as SOLD
  - `U`: Mark current player as UNSOLD
  - `P`: Pause / Resume auction
  - `R`: Re-auction current player
  - `N`: Next player
  - `Ctrl + Z`: Undo last action

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation
```bash
# Clone repository or navigate to directory
cd ipl-main

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build
```bash
# Type check and build bundle
npm run build

# Preview production build locally
npm run preview
```

### Linting
```bash
npm run lint
```

---

## 🛠️ Tech Stack
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linter**: [Oxlint](https://oxc.rs/)
- **Styling**: Vanilla CSS with CSS Custom Properties, Keyframe Animations & Glassmorphism
