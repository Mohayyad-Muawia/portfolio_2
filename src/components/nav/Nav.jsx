"use client";
import {
  faBriefcase,
  faHandHoldingHeart,
  faHouse,
  faPaperPlane,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./nav.css";
import { useEffect } from "react";

const Nav = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".links a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          const link = document.querySelector(`.links a[href="#${id}"]`);

          if (entry.isIntersecting) {
            navLinks.forEach((navLink) => navLink.classList.remove("active"));
            if (link) link.classList.add("active"); // ✅ تحقق من وجود الرابط
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect(); // ✅ تنظيف المراقب عند الخروج
  }, []);
  return (
    <>
      <nav>
        <div className="links">
          <a href="#home" className="active" data-info="Home">
            <FontAwesomeIcon icon={faHouse} className="big" />
          </a>
          <a href="#about" data-info="About Me">
            <FontAwesomeIcon icon={faUser} />
          </a>
          <a href="#serv" data-info="Serivces">
            <FontAwesomeIcon icon={faHandHoldingHeart} />
          </a>
          <a href="#port" data-info="Portfolio">
            <FontAwesomeIcon icon={faBriefcase} />
          </a>
          <a href="#contact" data-info="Contact Me">
            <FontAwesomeIcon icon={faPaperPlane} />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
