import "./App.css";
// import { ThemeProvider } from "./ThemeContext";
import { ProfileProvider } from "./ProfileContext";
// import Counter from "./Counter";
// import ToggleMessage from "./ToggleMessage";
// import Livepreview from "./Livepreview"
// import PageTitle from "./PageTitle"
// import Clock from "./Clock";
// import ColorPicker from "./components/ColorPicker";
// import Card from "./Card"
// import ThemeButton from "./components/ThemeButton"
import ProfileEditor from "./ProfileEditor";
import ProfileCard from "./ProfileCard"

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <ToggleMessage /> */}
      {/* <Livepreview /> */}
      {/* <PageTitle /> */}
      {/* <Clock /> */}
      {/* <ColorPicker /> */}
      {/* <Card title="welcome" variant="warning"/> */}

      {/* <ThemeProvider>
        <ThemeButton />
      </ThemeProvider> */}

      <ProfileProvider>
        <ProfileCard />
        <ProfileEditor />
      </ProfileProvider>
    </>
  );
}

export default App;
