import { useState } from "react";
import "./App.css";

import UserContext from "./contexts/UserContext"
import UserProfile from "./components/UserProfile";

function App() {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <>
      <UserContext value={{isOnline, setIsOnline}}>
        <UserProfile />;
      </UserContext>
    </>
  );
}

export default App;
