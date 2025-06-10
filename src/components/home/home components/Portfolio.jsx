"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import ScrollFadeIn from "@/components/motion/FadeIn";

export default function Portfolio() {
  const [allProjects, setAllProjects] = useState([]);
  const [flProjects, setFlProjects] = useState([]);
  const [activeTab, setActiveTab] = useState("web apps");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects", { cache: "no-store" }); 
        const data = await res.json();
        setAllProjects(data);
      } catch (err) {
        console.error("Failed to fetch projects", err);
      }
    }

    fetchProjects();
  }, []);

  useEffect(() => {
    setFlProjects(allProjects.filter((project) => project.type === activeTab));
  }, [activeTab, allProjects]);

  const tabLabels = {
    "web apps": "Web Applications",
    "landing pages": "Landing Pages",
    other: "Other Projects",
  };

  return (
    <div className="portfolio section" id="port">
      <ScrollFadeIn>
        <div className="main-title">
          <h1>portfolio</h1>
          <h3>my masterpiece collection</h3>
        </div>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <div className="projects-tabs">
          {Object.keys(tabLabels).map((tab) => (
            <a
              key={tab}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tabLabels[tab]}
            </a>
          ))}
        </div>
      </ScrollFadeIn>

      {flProjects && flProjects.length !== 0 ? (
        <motion.div className="projectsBox" layout>
          <AnimatePresence mode="wait">
            {flProjects.map((project, i) => (
              <motion.div
                key={project.id || i}
                layoutId={`project-${project.id}`}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: i * 0.05,
                }}
              >
                <ProjectCard
                  project={project}
                  setProjects={setFlProjects}
                  authenticated={false}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <ScrollFadeIn>
          <div className="no-projects">
            <h1>Sorry, there is no Projects Found.</h1>
            <h3>Please check back later or contact me for more information.</h3>
          </div>
        </ScrollFadeIn>
      )}
    </div>
  );
}
