import "./App.css";
import AvatarSimpsons from "./components/AvatarSimpsons";

function App() {
  const Bart = {
    image:
      "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart",
    lastName: "Simpson",
    city: "Springfield",
    age: 15,
  };
  const Homer = {
    image:
      "https://www.stickees.com/files/cartoon/the-simpsons/2246-homer-simpson-donut-2.png",
    firstName: "Homer",
    lastName: "Simpson",
    city: "Springfield",
    age: 55,
  };

  return (
    <>
      <AvatarSimpsons
        image={Bart.image}
        firstName={Bart.firstName}
        lastName={Bart.lastName}
        city={Bart.city}
        age={Bart.age}
      />

      <AvatarSimpsons
        image={Homer.image}
        firstName={Homer.firstName}
        lastName={Homer.lastName}
        city={Homer.city}
        age={Homer.age}
      />
    </>
  );
}

export default App;
