import React from 'react';
import { useAuction } from '../context/AuctionContext';
import { TeamLogo } from './TeamLogo';

interface FranchiseGridProps {
  onSelectTeam?: (teamId: string) => void;
  interactive?: boolean;
}

export const FranchiseGrid: React.FC<FranchiseGridProps> = ({ onSelectTeam, interactive = false }) => {
  const { franchises, currentBidder, currentBid, bidIncrement, placeBid, isPaused, currentPlayer } = useAuction();

  const handleTeamClick = (teamId: string) => {
    if (interactive && onSelectTeam) {
      onSelectTeam(teamId);
    } else if (interactive) {
      // Default behavior: place bid for this team
      if (currentPlayer && currentPlayer.status === 'NOT AUCTIONED' && !isPaused) {
        placeBid(teamId);
      }
    }
  };

  return (
    <div className="franchise-grid-container">
      <div className="franchise-grid-header">
        <span>FRANCHISE STANDINGS</span>
        <span className="text-xs text-muted">Click team to place bid in Admin Mode</span>
      </div>
      <div className="franchise-grid">
        {Object.values(franchises).map((team) => {
          const isHighestBidder = currentBidder === team.id;
          const purseWarning = team.purse < (currentBid + bidIncrement); // simple warning

          return (
            <div
              key={team.id}
              onClick={() => handleTeamClick(team.id)}
              className={`franchise-card ${isHighestBidder ? 'active-bidder' : ''} ${
                interactive ? 'clickable' : ''
              } ${purseWarning && !isHighestBidder ? 'low-purse' : ''}`}
            >
              <div className="franchise-card-header">
                <TeamLogo teamId={team.id} src={team.logo} size="sm" />
                <span className="franchise-id">{team.id}</span>
              </div>
              <div className="franchise-purse-value">
                €{team.purse.toFixed(2)} M
              </div>
              <div className="franchise-card-footer">
                <span className="squad-count">{team.squad.length} Players</span>
                {isHighestBidder && <span className="bid-badge">BIDDING</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
