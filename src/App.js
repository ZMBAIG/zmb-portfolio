import About from "./components/About";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Resume from "./components/Resume";
import AnimationBox from "./components/AnimationBox";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <About />
      <Skills />
      <Work />
      <Resume />
      <Contact />
      <AnimationBox />
    </div>
  );
}

export default App;
