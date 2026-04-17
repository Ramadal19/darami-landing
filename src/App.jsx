import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import About from "./components/About";
import Insights from "./components/Insights";
import Contact from "./components/Contact";
import "./styles/app.css";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Hero />
      <Solutions />
      <About />
      <Insights />
      <Contact />
    </div>
  );
}