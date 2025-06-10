import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { delete_project } from "@/lib/actions";
import toast from "react-hot-toast";

export default function ProjectCard({ project, setProjects, authenticated }) {
  const deleteProject = async (id) => {
    try {
      toast.promise(delete_project(id), {
        loading: "Deleting project...",
        success: "Project deleted successfully!",
        error: "Error deleting project",
      });
      setProjects((prev) => prev.filter((project) => project.id !== id));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <div className="project" key={project.id} data-title={project.title}>
      <div className="img-box">
        <img
          className="img-fluid"
          src={`${project.imageUrl}`}
          alt=""
          loading="lazy"
        />
      </div>
      <div className="info">
        <div className="top">
          <h3>{project.title}</h3>
          <div className="btns">
            <a
              className={project.github ? "" : "disabled"}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <span className="separator"></span>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLink} />
            </a>
            {authenticated && (
              <>
                <span className="separator"></span>
                <a
                  className="delete"
                  target="_blank"
                  onClick={() => deleteProject(project.id)}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </a>
              </>
            )}
          </div>
        </div>
        <p>{project.description}</p>

        <div className="techs">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
