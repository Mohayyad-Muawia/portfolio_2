import { faCode, faPalette, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollFadeIn from "@/components/motion/FadeIn";

export default function Services() {
  const services = [
    {
      icon: faCode,
      title: "Frontend Development",
      text: `Landing pages, static websites, portfolios and more, I can do all that with my skills in frontend development. Whether using pure HTML, CSS and JavaScript... or with frameworks like React and Bootstrap, it was never a problem to me.`,
    },
    {
      icon: faServer,
      title: "Backend Development",
      text: `Server side programming, APIs making, Mongo database, express routing, request and response fetching and even more. My capabilities know no limits when it comes to web development. I know I can do it.`,
    },
    {
      icon: faPalette,
      title: "UI UX Design",
      text: `Sometimes the project comes without a UI/UX pre-design — even that can't stop me! I'm already good at UI/UX design. Most of my projects were designed by me, and I know I can do even more.`,
    },
  ];

  const reasons = [
    "I am not any web developer. I am Mohayyad Muawia, a guy you can trust to do the right job the right way at the right time.",
    "Sometimes things go hard, new problems keep showing up — but no problem. I'm sure I can find the solution.",
    "Creativity — my work is always creative and unique. Just relax and leave it to me.",
    "Clean code — I can write clean and tidy code for future repair and upgrade purposes.",
    "I can give you a warranty, so if any unexpected things happen, I will be right there to fix it.",
  ];

  return (
    <>
      <ScrollFadeIn id="serv" className="main-title section">
        <h1>services</h1>
        <h3>what I am great at</h3>
      </ScrollFadeIn>

      <div className="services">
        {services.map((service, idx) => (
          <ScrollFadeIn key={idx} index={idx / 2} className="serv">
            <FontAwesomeIcon icon={service.icon} className="sm" />
            <h2>{service.title}</h2>
            <p>{service.text}</p>
          </ScrollFadeIn>
        ))}
      </div>

      <ScrollFadeIn>
        <h2 className="sub-title">why me?</h2>
      </ScrollFadeIn>

      <div className="reasons">
        <ScrollFadeIn>
          <h4>
            I know there are too many web developers out there, so why would you
            choose me? Let me tell you why:
          </h4>
        </ScrollFadeIn>

        <ul>
          {reasons.map((reason, i) => (
            <ScrollFadeIn key={i} index={i + 3}>
              <li>{reason}</li>
            </ScrollFadeIn>
          ))}
        </ul>
      </div>
    </>
  );
}
