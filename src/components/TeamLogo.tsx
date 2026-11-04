import React, { useState } from 'react';

import arsLogo from '../assets/logos/ARS.png';
import barLogo from '../assets/logos/BAR.png';
import bayLogo from '../assets/logos/BAY.png';
import dorLogo from '../assets/logos/DOR.png';
import intLogo from '../assets/logos/INT.png';
import juvLogo from '../assets/logos/JUV.png';
import livLogo from '../assets/logos/LIV.png';
import mciLogo from '../assets/logos/MCI.png';
import munLogo from '../assets/logos/MUN.png';
import psgLogo from '../assets/logos/PSG.png';
import rmaLogo from '../assets/logos/RMA.png';

export const TEAM_LOGOS: Record<string, string> = {
  ARS: arsLogo,
  BAR: barLogo,
  BAY: bayLogo,
  DOR: dorLogo,
  INT: intLogo,
  JUV: juvLogo,
  LIV: livLogo,
  MCI: mciLogo,
  MUN: munLogo,
  PSG: psgLogo,
  RMA: rmaLogo,
};

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

  const cleanTeamId = teamId ? teamId.toUpperCase().trim() : '';
  const resolvedSrc = (cleanTeamId && TEAM_LOGOS[cleanTeamId]) 
    ? TEAM_LOGOS[cleanTeamId] 
    : (src || (cleanTeamId ? `/logos/${cleanTeamId}.png` : ''));

  const altText = alt || teamId || 'Team Logo';

  return (
    <div className={`team-logo-container team-logo-${size} ${className}`} style={style}>
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
};