import Contact from "./Components/Contact";
import Introduction from "./Components/Introduction";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Technologies from "./Components/Technologies";
import "./CSS/App.css"

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Projects />
      <Technologies />
      <Contact />
    </>
  );
}

export default App;
