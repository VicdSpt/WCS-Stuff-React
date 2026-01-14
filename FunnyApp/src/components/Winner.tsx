import React from "react";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';


interface WinnerProps {
  winner: { firstName: string; lastName: string; image: string } | null;
  punchCount: number;
  allPeople: Array<{ firstName: string; lastName: string; image: string }>;
  punchCounts: number[];
}

function Winner({ winner, punchCount, allPeople, punchCounts }: WinnerProps) {
  // Create sorted podium (top 3)
  const podium = allPeople
    .map((person, index) => ({
      ...person,
      punches: punchCounts[index],
      index
    }))
    .sort((a, b) => b.punches - a.punches)
    .slice(0, 3);

  if (!winner || punchCount === 0) {
    return (
      <div className="winner-empty">
        <h2>No winner yet! Start punching! 🥊</h2>
      </div>
    );
  }

  return (
    <div className="winner-section">
      <h2 className="winner-title">
        <EmojiEventsIcon sx={{ fontSize: 40, color: 'gold' }} /> 
        Today's Champion
      </h2>
      
      <div className="podium-container">
        {/* Second Place */}
        {podium[1] && podium[1].punches > 0 && (
          <div className="podium-place podium-second">
            <img 
              src={podium[1].image} 
              alt={`${podium[1].firstName}`}
              className="podium-image podium-image-second"
            />
            <div className="podium-medal">🥈</div>
            <div className="podium-name">{podium[1].firstName}</div>
            <div className="podium-count">💥 {podium[1].punches}</div>
          </div>
        )}

        {/* First Place */}
        <div className="podium-place podium-first">
          <img 
            src={podium[0].image} 
            alt={`${podium[0].firstName}`}
            className="podium-image podium-image-first"
          />
          <div className="podium-medal podium-medal-first">🥇</div>
          <div className="podium-name podium-name-first">
            {podium[0].firstName} {podium[0].lastName}
          </div>
          <div className="podium-count podium-count-first">💥 {podium[0].punches}</div>
        </div>

        {/* Third Place */}
        {podium[2] && podium[2].punches > 0 && (
          <div className="podium-place podium-third">
            <img 
              src={podium[2].image} 
              alt={`${podium[2].firstName}`}
              className="podium-image podium-image-third"
            />
            <div className="podium-medal">🥉</div>
            <div className="podium-name">{podium[2].firstName}</div>
            <div className="podium-count">💥 {podium[2].punches}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Winner;