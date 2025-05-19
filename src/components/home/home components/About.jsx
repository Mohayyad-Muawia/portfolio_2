import * as motion from "motion/react-client";
import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEarthAmericas,
  faEnvelope,
  faFileLines,
  faLanguage,
  faLocationDot,
  faPersonArrowUpFromLine,
  faPhone,
  faUserLarge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollFadeIn from "@/components/motion/FadeIn";
import Counter from "./Counter";

export default function About() {
  const calculateAge = (birthDateString) => {
    const today = new Date();
    const birthDate = new Date(birthDateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  return (
    <div className="about-me section" id="about">
      <ScrollFadeIn className="main-title">
        <h1>About me</h1>
        <h3>personal info and skills</h3>
      </ScrollFadeIn>

      <div className="info">
        <ScrollFadeIn>
          <h1>
            Hello<span>,</span> I am Mohayyad Muawia
          </h1>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <p>
            I am a <span>MERN Stack</span> Web Developer with great experience
            in this field. I used to both <span>Work Alone</span> and{" "}
            <span>Team Work</span>, so that I can design the website{" "}
            <span>UI</span> and develop both <span>Frontend</span> and{" "}
            <span>Backend</span> for the website. Currently studying{" "}
            <span>Software Engineering</span>, at Sudan University of Science
            and Technology <span>( SUST )</span>.
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <a className="cv main-btn" href="/CV.pdf" download="/CV.pdf">
            Download My Resume <FontAwesomeIcon icon={faFileLines} />
          </a>
        </ScrollFadeIn>

        <div className="personal">
          <ScrollFadeIn>
            <p>
              <span>
                <FontAwesomeIcon icon={faUserLarge} />
              </span>
              Mohayyad Muawia Elzubair
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <p>
              <span>
                <FontAwesomeIcon icon={faEarthAmericas} />
              </span>
              Sudanese
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <p>
              <span>
                <FontAwesomeIcon icon={faPersonArrowUpFromLine} />
              </span>
              {calculateAge("2006-01-31")} years old
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <p>
              <span>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              Sudan North, Dongola
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <p>
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              +249 128502410
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <p>
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              Mohayyad2.0@gmail.com
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <p>
              <span>
                <FontAwesomeIcon icon={faLanguage} />
              </span>
              Arabic - English
            </p>
          </ScrollFadeIn>
        </div>
      </div>

      <div className="skills">
        <ScrollFadeIn index={0}>
          <h2 className="sub-title">Skills</h2>
        </ScrollFadeIn>

        <div className="list">
          <ScrollFadeIn index={1}>
            <div className="skill">
              <FontAwesomeIcon icon={faHtml5} />
              <h3>HTML</h3>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn index={2}>
            <div className="skill">
              <FontAwesomeIcon icon={faJs} />
              <h3>JavaScript</h3>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="skill">
              <FontAwesomeIcon icon={faNodeJs} />
              <h3>Node js</h3>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn index={3}>
            <div className="skill">
              <FontAwesomeIcon icon={faBootstrap} />
              <h3>Bootstrap</h3>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn index={4}>
            <div className="skill">
              <FontAwesomeIcon icon={faReact} />
              <h3>React</h3>
            </div>
          </ScrollFadeIn>

          {/* SVG-based icons */}
          {[
            {
              label: "MongoDB",
              svg: (
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>MongoDB</title>
                  <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
                </svg>
              ),
            },
            {
              label: "CSS",
              icon: faCss3Alt,
            },
            {
              label: "TypeScript",
              svg: (
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>TypeScript</title>
                  <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
                </svg>
              ),
            },
            {
              label: "Express js",
              svg: (
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Express</title>
                  <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
                </svg>
              ),
            },
            {
              label: "Tailwind",
              svg: (
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Tailwind CSS</title>
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                </svg>
              ),
            },
            {
              label: "Next js",
              svg: (
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Next.js</title>
                  <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
                </svg>
              ),
            },
            {
              label: "Supabase",
              svg: (
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Supabase</title>
                  <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z" />
                </svg>
              ),
            },
          ].map(({ label, icon, svg }, i) => (
            <ScrollFadeIn key={label} index={i + 5}>
              <div className="skill">
                {svg || <FontAwesomeIcon icon={icon} />}
                <h3>{label}</h3>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        <div className="numbers">
          {[
            { number: 40, text: "Mini & Full Projects" },
            { number: 2, text: "Years of Experience" },
            { number: 2000, text: "Hours of Work" },
            { number: 12, text: "Web Technologies" },
          ].map((item, i) => (
            <ScrollFadeIn key={i} index={i + 10}>
              <div className="num">
                <h2>
                  +<Counter targetNumber={item.number} />
                </h2>
                <p>{item.text}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
