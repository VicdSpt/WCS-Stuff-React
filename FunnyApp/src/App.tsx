import "./App.css";
import PersonAvatar from "./components/PersonAvatar";
import { people } from "./components/AvatarInfo";

function App() {
  return (
    <>
      <h1>Punches of the day</h1>
      <div className="images-container">
        {people.map((person, index) => (
          <div key={index}>
            <PersonAvatar
              firstName={person.firstName}
              lastName={person.lastName}
              image={person.image}
            />
          </div>
        ))}
      </div>
      <div>
        winner:
      </div>
      <div className="tenor-gif-embed" data-postid="8038917888032528445" data-share-method="host" data-aspect-ratio="1.83088" data-width="100%"><a href="https://tenor.com/view/richard-attenborough-whip-whipped-whiplash-whiplashed-gif-8038917888032528445">Richard Attenborough Whip GIF</a>from <a href="https://tenor.com/search/richard+attenborough-gifs">Richard Attenborough GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
    </>
  );
}

export default App;
