import React from "react";
import ContactForm from "./ContactForm";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import ScrollFadeIn from "@/components/motion/FadeIn";

export default function Contact() {
  return (
    <div className="contact section" id="contact">
      <ScrollFadeIn>
        <div className="main-title">
          <h1>contact me</h1>
          <h3>feel free to get in touch anytime</h3>
        </div>
      </ScrollFadeIn>

      <ContactForm />

      <ScrollFadeIn>
        <h2 className="sub-title">my accounts</h2>
      </ScrollFadeIn>

      <div className="accounts">
        {[
          {
            href: "https://www.facebook.com/profile.php?id=100085583352711&mibextid=ZbWKwL",
            icon: faFacebookF,
            label: "Facebook",
            i: "170px",
          },
          {
            href: "https://www.instagram.com/mohayyadmuawia?igsh=YzU1NGVlODEzOA==",
            icon: faInstagram,
            label: "Instagram",
            i: "175px",
          },
          {
            href: "https://www.linkedin.com/in/mohayyad-muawia-722255279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            icon: faLinkedinIn,
            label: "Linked In",
            i: "160px",
          },
          {
            href: "https://github.com/Mohayyad-Muawia",
            icon: faGithub,
            label: "Git Hub",
            i: "150px",
          },
          {
            href: "https://wa.me/249128502410",
            icon: faWhatsapp,
            label: "Whatsapp",
            i: "175px",
          },
          {
            href: "https://x.com/Not_Mohayyad?t=ISWXmwxV6sNvZJfo_aIMiw&s=09",
            icon: faXTwitter,
            label: "X-Twitter",
            i: "165px",
          },
          {
            href: "mailto: mohayyad2.0@gmail.com",
            icon: faAt,
            label: "Email",
            i: "140px",
          },
        ].map((item, index) => (
          <ScrollFadeIn key={index} index={index / 2}>
            <a
              href={item.href}
              target="_blank"
              className="acc"
              style={{ "--i": item.i }}
              rel="noopener noreferrer"
            >
              <div className="icon">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <span>{item.label}</span>
            </a>
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  );
}
