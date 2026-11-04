import React, { useEffect } from 'react';
import { useAuction } from '../context/AuctionContext';

interface KeyboardShortcutsProps {
  selectedTeamId: string;
  onMarkSold?: () => void;
}

export const KeyboardShortcuts: React.FC<KeyboardShortcutsProps> = ({ selectedTeamId, onMarkSold }) => {
  const { placeBid, markSold, markUnsold, setIsPaused, isPaused, reAuction, nextPlayer, undo, canUndo } = useAuction();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore shortcuts if the user is typing in an input or select element
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
        return;
      }

      // Ctrl + Z -> Undo
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        if (canUndo) undo();
        return;
      }

      switch (e.key.toLowerCase()) {
        case 'b':
          if (selectedTeamId) {
            placeBid(selectedTeamId);
          }
          break;
        case 's':
          if (onMarkSold) {
            onMarkSold();
          } else {
            markSold();
          }
          break;
        case 'u':
          markUnsold();
          break;
        case 'p':
          setIsPaused(!isPaused);
          break;
        case 'r':
          reAuction();
          break;
        case 'n':
          nextPlayer();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedTeamId, onMarkSold, placeBid, markSold, markUnsold, setIsPaused, isPaused, reAuction, nextPlayer, undo, canUndo]);

  return null; // purely logic component
};
