const fs = require('fs');

// 1. Update AuctionContext.tsx
let contextPath = 'src/context/AuctionContext.tsx';
let contextContent = fs.readFileSync(contextPath, 'utf8');

const newFranchises = `const INITIAL_FRANCHISES: Record<string, Franchise> = {
  BAR: { id: 'BAR', name: 'Barcelona', logo: '/logos/BAR.png', purse: STARTING_PURSE, spent: 0, squad: [] },
  RMA: { id: 'RMA', name: 'Real Madrid', logo: '/logos/RMA.png', purse: STARTING_PURSE, spent: 0, squad: [] },
  ARS: { id: 'ARS', name: 'Arsenal', logo: '/logos/ARS.png', purse: STARTING_PURSE, spent: 0, squad: [] },
  MCI: { id: 'MCI', name: 'Manchester City', logo: '/logos/MCI.png', purse: STARTING_PURSE, spent: 0, squad: [] },
  MUN: { id: 'MUN', name: 'Manchester United', logo: '/logos/MUN.png', purse: STARTING_PURSE, spent: 0, squad: [] },
  BAY: { id: 'BAY', name: 'Bayern Munich', logo: '/logos/BAY.png', purse: STARTING_PURSE, spent: 0, squad: [] },
  DOR: { id: 'DOR', name: 'Borussia Dortmund', logo: '/logos/DOR.png', purse: STARTING_PURSE, spent: 0, squad: [] },
  JUV: { id: 'JUV', name: 'Juventus', logo: '/logos/JUV.png', purse: STARTING_PURSE, spent: 0, squad: [] },
  INT: { id: 'INT', name: 'Inter Milan', logo: '/logos/INT.png', purse: STARTING_PURSE, spent: 0, squad: [] },
  PSG: { id: 'PSG', name: 'Paris Saint-Germain', logo: '/logos/PSG.png', purse: STARTING_PURSE, spent: 0, squad: [] },
  LIV: { id: 'LIV', name: 'Liverpool', logo: '/logos/LIV.png', purse: STARTING_PURSE, spent: 0, squad: [] }
};`;

contextContent = contextContent.replace(/const INITIAL_FRANCHISES: Record<string, Franchise> = \{[\s\S]*?\};/, newFranchises);
fs.writeFileSync(contextPath, contextContent);

// 2. Update TeamLogo.tsx
let teamLogoPath = 'src/components/TeamLogo.tsx';
let newTeamLogo = `import React, { useState } from 'react';

export const TEAM_LOGOS: Record<string, string> = {};

export interface TeamLogoProps {
  teamId?: string;
  src?: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  className?: string;
  style?: React.CSSProperties;
}

export const TeamLogo: React.FC<TeamLogoProps> = ({
  teamId,
  src,
  alt,
  size = 'sm',
  className = '',
  style = {},
}) => {
  const [imgError, setImgError] = useState(false);
  const resolvedSrc = src || (teamId ? \`/logos/\${teamId}.png\` : '');
  const altText = alt || teamId || 'Team Logo';

  return (
    <div className={\`team-logo-container team-logo-\${size} \${className}\`} style={style}>
      {resolvedSrc && !imgError ? (
        <img
          src={resolvedSrc}
          alt={altText}
          className="team-logo-img"
          loading="eager"
          decoding="async"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="team-logo-fallback">{teamId || '⚽'}</span>
      )}
    </div>
  );
};`;
fs.writeFileSync(teamLogoPath, newTeamLogo);

// 3. Update App.tsx default team
let appPath = 'src/App.tsx';
let appContent = fs.readFileSync(appPath, 'utf8');
appContent = appContent.replace(/useState<string>\('CSK'\)/g, "useState<string>('BAR')");
fs.writeFileSync(appPath, appContent);

console.log("Replaced franchises");
