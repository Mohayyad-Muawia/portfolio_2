// ProjectList.jsx (client component)
"use client";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import "./dashboard.css";
import Loading from "@/components/loading/Loading";

const ProjectList = ({ projects, setProjects, isLoading }) => {
  return (
    <motion.div className="projectsBox" layout>
      {isLoading && <Loading />}

      <AnimatePresence>
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            layout
            layoutId={`project-${project.id}`}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: i * 0.02,
            }}
          >
            <ProjectCard
              project={project}
              setProjects={setProjects}
              authenticated={true}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectList;
