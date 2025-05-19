import { get_all_projects } from "@/lib/actions";
import About from "./home components/About";
import Hero from "./home components/Hero";
import Services from "./home components/Services";
import "./home.css";
import Portfolio from "./home components/Portfolio";
import Contact from "./home components/Contact";
import Welcome from "../Welcome";
import toast from "react-hot-toast";

export default async function Home() {
  let allProjects;
  try {
    allProjects = await get_all_projects();
    if (!allProjects) {
      toast.error("Failed to fetch projects");
    }
  } catch (err) {
    console.log(err);
  }

  return (
    <div className="home">
      <Welcome />
      <Hero />
      <About />
      <Services />
      <Portfolio allProjects={allProjects} />
      <Contact />
    </div>
  );
}
