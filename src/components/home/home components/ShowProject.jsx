const ShowProject = ({ project, setProject, loading, setLoading }) => {
  const closeShow = () => {
    setProject(null);
    document.querySelector(".layout").classList.remove("active");
    setLoading(true);
  };

  const handleImageLoad = () => {
    setLoading(null);
  };
  console.log(project.imageUrl);

  return (
    <>
      <div className="showProject">
        <div className="project-info">
          <img
            className="img-fluid"
            src={`${project.imageUrl}`}
            alt=""
            onLoad={handleImageLoad}
          />
          <div className="text">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <h4>Technologies:</h4>
            <div className="techs">
              {project.technologies.map((tech) => (
                <span key={tech}> {tech} </span>
              ))}
            </div>
          </div>
          <div className="btns">
            <a className="sec-btn glass" onClick={closeShow}>
              Close
            </a>
            <a target="_blank" className="main-btn" href={project.url}>
              Visit Site
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowProject;
