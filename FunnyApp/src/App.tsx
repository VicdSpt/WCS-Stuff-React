import "./App.css";
import PersonAvatar from "./components/PersonAvatar";
import { people } from "./components/AvatarInfo";
import SportsMmaIcon from "@mui/icons-material/SportsMma";
import Winner from "./components/Winner";
import { useState } from "react";

function App() {
  
  const [punchCounts, setPuncCounts] = useState(people.map(() => 0));

  const handlePunch = (index: number) => {
    setPuncCounts(prev => {
      const newCounts = [...prev];
      newCounts[index] = newCounts[index] + 1
      return newCounts
    })
  }

  const maxPunches = Math.max(...punchCounts);
  const winnerIndex = punchCounts.indexOf(maxPunches)
  const winner = maxPunches > 0 ? people[winnerIndex] : null

  return (
    <>
      <div>
        <h1>
          <SportsMmaIcon fontSize="large" /> Reminders of the day    <SportsMmaIcon fontSize="large" />
        </h1>
        <div className="images-container">
          {people.map((person, index) => (
            <div key={index}>
              <PersonAvatar
                firstName={person.firstName}
                lastName={person.lastName}
                image={person.image}
                punchCount={punchCounts[index]}
                onPunchClick={() => handlePunch(index)}
              />
            </div>
          ))}
        </div>
        <div className="winner-container">
          <div>
            <Winner
              winner={winner}
              punchCount={maxPunches}
              allPeople={people}
              punchCounts={punchCounts} 
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
