"use client";
import { add_project } from "@/lib/actions";
import {
  faArrowUpFromBracket,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef } from "react";
import toast from "react-hot-toast";

const ProjectForm = ({ setProjects }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    url: "",
    github: "",
    type: "web apps", // Default value for type
  });
  const [technologies, setTechnologies] = useState("");
  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeoutRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTechsChange = (e) => {
    setTechnologies(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    const fileBtn = document.querySelector(".fileBtn");
    fileBtn.textContent = e.target.files[0].name;
    fileBtn.classList.add("selected");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!image) {
      toast.error("Please select an image.");
      setIsSubmitting(false);
      return;
    }

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("url", formData.url);
    data.append("github", formData.github);
    data.append("type", formData.type); // Ensure the type is included

    const techArray = technologies.split("-").map((skill) => skill.trim());
    techArray.forEach((tech) => data.append("technologies[]", tech));

    data.append("image", image);

    try {
      const project = await toast.promise(
        add_project(data), // 👈 السيرفر أكشن
        {
          loading: "Uploading project...",
          success: "Project uploaded successfully!",
          error: (err) => `Error uploading project: ${err.message || err}`,
        }
      );

      // ✅ Reset the form after successful upload
      setFormData({
        title: "",
        description: "",
        url: "",
        github: "",
        type: "web apps",
      });
      setTechnologies("");
      setImage(null);
      const fileBtn = document.querySelector(".fileBtn");
      fileBtn.innerHTML = `<i class="fa-solid fa-image"></i> <span>Choose Image</span>`;
      fileBtn.classList.remove("selected");

      // update the UI
      setProjects((prev) => [project, ...prev]);

      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="projectForm">
        <h1>Upload New Project</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="half">
            <label>Project Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="New Project"
            />
          </div>
          <div className="half">
            <label>Technologies:</label>
            <input
              type="text"
              name="technologies"
              value={technologies}
              onChange={handleTechsChange}
              placeholder="html - css - js"
              required
            />
          </div>

          <div className="select-box half">
            <label>Type:</label>
            <select name="type" value={formData.type} onChange={handleChange}>
              <option value="web apps">Web Application</option>
              <option value="landing pages">Landing Page</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="half">
            <label>Image:</label>
            <label className="fileBtn" htmlFor="file">
              <FontAwesomeIcon icon={faImage} /> <span>Choose Image</span>
            </label>
            <input
              id="file"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>

          <div className="half">
            <label>Project Link:</label>
            <input
              type="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              required
              placeholder="http://linktoproject.com"
            />
          </div>

          <div className="half">
            <label>Github Repo:</label>
            <input
              type="text"
              name="github"
              value={formData.github}
              onChange={handleChange}
              placeholder="https://github.com/Mohayyad-Muawia/project"
              required
            />
          </div>

          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="My project description"
            />
          </div>

          <button className="main-btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Uploading..." : "Upload Project"}{" "}
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
          </button>
        </form>
      </div>
    </>
  );
};

export default ProjectForm;
