"use client";
import { get_all_projects } from "@/lib/actions";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectsList";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  // Fetch all projects from the server
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProjects = async () => {
    setIsLoading(true);
    const data = await get_all_projects();
    setProjects(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="dashboard">
      <Link className="homeBtn" href="/">
        <FontAwesomeIcon icon={faHome} />
      </Link>

      <ProjectForm setProjects={setProjects} />

      <h1>All Projects</h1>

      <ProjectList
        projects={projects}
        setProjects={setProjects}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Dashboard;
