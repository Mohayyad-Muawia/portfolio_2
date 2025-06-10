import About from "./home components/About";
import Hero from "./home components/Hero";
import Services from "./home components/Services";
import "./home.css";
import Portfolio from "./home components/Portfolio";
import Contact from "./home components/Contact";
import Welcome from "../Welcome";

export default async function Home() {
  return (
    <div className="home">
      <Welcome />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}
