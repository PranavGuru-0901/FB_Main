import React from 'react';
import type { Player } from '../context/AuctionContext';

interface PlayerStatsProps {
  player: Player;
}

export const PlayerStats: React.FC<PlayerStatsProps> = ({ player }) => {
  return (
    <div className="player-stats-container">
      {/* FOOTBALL CAREER SECTION */}
      <div className="stats-section">
        <h3 className="stats-section-title">PLAYER DETAILS</h3>
        <div className="stats-metrics-grid">
          <div className="metric-card">
            <span className="metric-value">{player.age}</span>
            <span className="metric-label">AGE</span>
          </div>
          
          <div className="metric-card">
            <span className="metric-value">{player.rating || '-'}</span>
            <span className="metric-label">EAFC RATING</span>
          </div>

          <div className="metric-card">
            <span className="metric-value">{player.role}</span>
            <span className="metric-label">MAIN POS</span>
          </div>

          <div className="metric-card">
            <span className="metric-value" style={{ fontSize: player.otherPositions.length > 10 ? '1rem' : undefined }}>{player.otherPositions || '-'}</span>
            <span className="metric-label">OTHER POS</span>
          </div>
        </div>
      </div>

      {/* ADDITIONAL INFO SECTION */}
      <div className="stats-section">
        <h3 className="stats-section-title">CLUB INFO</h3>
        <div className="stats-metrics-grid">
          <div className="metric-card accent-gold">
            <span className="metric-value" style={{ fontSize: player.prevTeam.length > 15 ? '0.9rem' : undefined }}>{player.prevTeam || '-'}</span>
            <span className="metric-label">LAST CLUB</span>
          </div>
          <div className="metric-card accent-blue">
            <span className="metric-value">{player.tier || '-'}</span>
            <span className="metric-label">TIER</span>
          </div>
        </div>
      </div>
    </div>
  );
};
