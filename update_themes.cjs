const fs = require('fs');

let cssContent = fs.readFileSync('src/index.css', 'utf8');

const newThemes = `/* =========================================================
   TEAM THEMES (Football Franchises)
   ========================================================= */

/* 1. BAR - Barcelona */
body[data-team="BAR"],
.app-container[data-team="BAR"] {
  --bg-main: #0a0406;
  --bg-card: #15080c;
  --bg-panel: #200d12;
  --border-color: #3b1822;
  --accent-gold: #f1c40f;
  --accent-gold-hover: #d4ac0d;
  --team-primary: #a50044;
  --team-primary-rgb: 165, 0, 68;
  --team-secondary: #004d98;
  --team-contrast: #ffffff;
  --bg-gradient: radial-gradient(circle at 50% -15%, rgba(165, 0, 68, 0.22) 0%, rgba(0, 77, 152, 0.1) 50%, #0a0406 90%);
  --shadow-active: 0 0 20px rgba(165, 0, 68, 0.35);
}

/* 2. RMA - Real Madrid */
body[data-team="RMA"],
.app-container[data-team="RMA"] {
  --bg-main: #0c0c0c;
  --bg-card: #141414;
  --bg-panel: #1e1e1e;
  --border-color: #333333;
  --accent-gold: #fec310;
  --accent-gold-hover: #e0ac0c;
  --team-primary: #ffffff;
  --team-primary-rgb: 255, 255, 255;
  --team-secondary: #fec310;
  --team-contrast: #000000;
  --bg-gradient: radial-gradient(circle at 50% -15%, rgba(255, 255, 255, 0.15) 0%, rgba(254, 195, 16, 0.08) 50%, #0c0c0c 90%);
  --shadow-active: 0 0 20px rgba(255, 255, 255, 0.35);
}

/* 3. ARS - Arsenal */
body[data-team="ARS"],
.app-container[data-team="ARS"] {
  --bg-main: #0d0101;
  --bg-card: #1a0303;
  --bg-panel: #280405;
  --border-color: #4a0809;
  --accent-gold: #9c824a;
  --accent-gold-hover: #7a6538;
  --team-primary: #ef0107;
  --team-primary-rgb: 239, 1, 7;
  --team-secondary: #ffffff;
  --team-contrast: #ffffff;
  --bg-gradient: radial-gradient(circle at 50% -15%, rgba(239, 1, 7, 0.22) 0%, rgba(255, 255, 255, 0.05) 50%, #0d0101 90%);
  --shadow-active: 0 0 20px rgba(239, 1, 7, 0.35);
}

/* 4. MCI - Manchester City */
body[data-team="MCI"],
.app-container[data-team="MCI"] {
  --bg-main: #040a10;
  --bg-card: #091522;
  --bg-panel: #0f1f33;
  --border-color: #193555;
  --accent-gold: #d4af37;
  --accent-gold-hover: #b8932b;
  --team-primary: #6cabdd;
  --team-primary-rgb: 108, 171, 221;
  --team-secondary: #1c2c5b;
  --team-contrast: #000000;
  --bg-gradient: radial-gradient(circle at 50% -15%, rgba(108, 171, 221, 0.22) 0%, rgba(28, 44, 91, 0.1) 50%, #040a10 90%);
  --shadow-active: 0 0 20px rgba(108, 171, 221, 0.35);
}

/* 5. MUN - Manchester United */
body[data-team="MUN"],
.app-container[data-team="MUN"] {
  --bg-main: #0d0202;
  --bg-card: #1a0404;
  --bg-panel: #280707;
  --border-color: #4a0d0d;
  --accent-gold: #ffe500;
  --accent-gold-hover: #e6ce00;
  --team-primary: #da291c;
  --team-primary-rgb: 218, 41, 28;
  --team-secondary: #000000;
  --team-contrast: #ffffff;
  --bg-gradient: radial-gradient(circle at 50% -15%, rgba(218, 41, 28, 0.22) 0%, rgba(255, 229, 0, 0.08) 50%, #0d0202 90%);
  --shadow-active: 0 0 20px rgba(218, 41, 28, 0.35);
}

/* 6. BAY - Bayern Munich */
body[data-team="BAY"],
.app-container[data-team="BAY"] {
  --bg-main: #0d0004;
  --bg-card: #1b0108;
  --bg-panel: #29010c;
  --border-color: #4d0216;
  --accent-gold: #0066b2;
  --accent-gold-hover: #004d86;
  --team-primary: #dc052d;
  --team-primary-rgb: 220, 5, 45;
  --team-secondary: #0066b2;
  --team-contrast: #ffffff;
  --bg-gradient: radial-gradient(circle at 50% -15%, rgba(220, 5, 45, 0.22) 0%, rgba(0, 102, 178, 0.1) 50%, #0d0004 90%);
  --shadow-active: 0 0 20px rgba(220, 5, 45, 0.35);
}

/* 7. DOR - Borussia Dortmund */
body[data-team="DOR"],
.app-container[data-team="DOR"] {
  --bg-main: #0c0b00;
  --bg-card: #181600;
  --bg-panel: #262300;
  --border-color: #454000;
  --accent-gold: #fde100;
  --accent-gold-hover: #e3ca00;
  --team-primary: #fde100;
  --team-primary-rgb: 253, 225, 0;
  --team-secondary: #000000;
  --team-contrast: #000000;
  --bg-gradient: radial-gradient(circle at 50% -15%, rgba(253, 225, 0, 0.18) 0%, rgba(0, 0, 0, 0.1) 50%, #0c0b00 90%);
  --shadow-active: 0 0 20px rgba(253, 225, 0, 0.35);
}

/* 8. JUV - Juventus */
body[data-team="JUV"],
.app-container[data-team="JUV"] {
  --bg-main: #050505;
  --bg-card: #101010;
  --bg-panel: #1a1a1a;
  --border-color: #2e2e2e;
  --accent-gold: #d4af37;
  --accent-gold-hover: #b8932b;
  --team-primary: #ffffff;
  --team-primary-rgb: 255, 255, 255;
  --team-secondary: #000000;
  --team-contrast: #000000;
  --bg-gradient: radial-gradient(circle at 50% -15%, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.1) 50%, #050505 90%);
  --shadow-active: 0 0 20px rgba(255, 255, 255, 0.35);
}

/* 9. INT - Inter Milan */
body[data-team="INT"],
.app-container[data-team="INT"] {
  --bg-main: #00010c;
  --bg-card: #010318;
  --bg-panel: #010526;
  --border-color: #020947;
  --accent-gold: #d4af37;
  --accent-gold-hover: #b8932b;
  --team-primary: #010e80;
  --team-primary-rgb: 1, 14, 128;
  --team-secondary: #000000;
  --team-contrast: #ffffff;
  --bg-gradient: radial-gradient(circle at 50% -15%, rgba(1, 14, 128, 0.28) 0%, rgba(0, 0, 0, 0.1) 50%, #00010c 90%);
  --shadow-active: 0 0 20px rgba(1, 14, 128, 0.45);
}

/* 10. PSG - Paris Saint-Germain */
body[data-team="PSG"],
.app-container[data-team="PSG"] {
  --bg-main: #00030a;
  --bg-card: #010815;
  --bg-panel: #010c21;
  --border-color: #02163d;
  --accent-gold: #d4af37;
  --accent-gold-hover: #b8932b;
  --team-primary: #004170;
  --team-primary-rgb: 0, 65, 112;
  --team-secondary: #da291c;
  --team-contrast: #ffffff;
  --bg-gradient: radial-gradient(circle at 50% -15%, rgba(0, 65, 112, 0.28) 0%, rgba(218, 41, 28, 0.1) 50%, #00030a 90%);
  --shadow-active: 0 0 20px rgba(0, 65, 112, 0.45);
}

/* 11. LIV - Liverpool */
body[data-team="LIV"],
.app-container[data-team="LIV"] {
  --bg-main: #0c0103;
  --bg-card: #180206;
  --bg-panel: #260309;
  --border-color: #450611;
  --accent-gold: #00b2a9;
  --accent-gold-hover: #008f88;
  --team-primary: #c8102e;
  --team-primary-rgb: 200, 16, 46;
  --team-secondary: #00b2a9;
  --team-contrast: #ffffff;
  --bg-gradient: radial-gradient(circle at 50% -15%, rgba(200, 16, 46, 0.22) 0%, rgba(0, 178, 169, 0.1) 50%, #0c0103 90%);
  --shadow-active: 0 0 20px rgba(200, 16, 46, 0.35);
}

/* Reset and Globals */`;

const oldThemeRegex = /\/\* =========================================================\s*TEAM THEMES \(Official IPL Franchises\)\s*=========================================================\s*\*\/[\s\S]*?\/\* Reset and Globals \*\//;
cssContent = cssContent.replace(oldThemeRegex, newThemes);

cssContent = cssContent.replace(/grid-template-columns: repeat\(10, 1fr\);/g, "grid-template-columns: repeat(11, 1fr);");

fs.writeFileSync('src/index.css', cssContent);
console.log("Updated themes in index.css");
