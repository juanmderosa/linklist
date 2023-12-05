import "./App.css";
import { LinksContainer } from "./components/LinksContainer";
import { IconsContainer } from "./components/IconsContainer";
import { Description } from "./components/Description";
import { ProfileImage } from "./components/ProfileImage";

function App() {
  return (
    <main className="mainContainer">
      <h1 className="title">Web Developer</h1>
      <ProfileImage />
      <Description />
      <LinksContainer />
      <IconsContainer />
    </main>
  );
}

export default App;
