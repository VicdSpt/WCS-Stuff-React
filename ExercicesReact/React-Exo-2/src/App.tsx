import "./App.css";
import SimpleToggle from "./SimpleToggle";
import CharacterCount from "./CharacterCount";
import TemperatureSlider from "./TemperatureSlider";
import RapidCounter from "./RapidCounter";
import LoginForm from "./LoginForm";
import TrafficLight from "./TrafficLight";
import TagList from "./TagList";
import ProfileEditor from "./Profile"

function App() {
  return (
    <>
      <SimpleToggle />
      <CharacterCount />
      <TemperatureSlider />
      <RapidCounter />
      <LoginForm />
      <TrafficLight />
      <TagList />
      <ProfileEditor />
    </>
  );
}

export default App;
