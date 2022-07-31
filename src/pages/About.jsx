import React from "react";
import Menu from "./Menu";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faUniversity,
  faCertificate,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const certificates = [
  {
    date: "June 2022",
    title: "Google Cloud Fundamentals: Core Infrastructure",
    offeredBy: "Google Cloud - Coursera",
  },
  {
    date: "May 2020",
    title: "Machine Learning for All",
    offeredBy: "Coursera",
  },
  {
    date: "2011 - 2012",
    title: "Junior Animator",
    offeredBy: "A Square Animation Co.",
  },
];

const experiences = [
  {
    date: "Feb 2021 - Jul 2021",
    title: "SDE Intern",
    place: "Onfluence, UK",
    description: "Played a role in the team as Backend developer.",
  },
  {
    date: "Jul 2021 - Aug 2021",
    title: "Web Developer",
    place: "LICET",
    description: "Developed a portal for a mentorship program.",
  },
  {
    date: "Jul 2021 - Aug 2021",
    title: "Full Stack Developer Intern",
    place: "Zue Technologies",
    description:
      "Developed a Portfolio and a Shopping Site for their New Startup.",
  },
  {
    date: "Aug 2020 - Oct 2020",
    title: "Web Developer",
    place: "Pattarai",
    description: "Developed a module in an ERP suite.",
  },
];

export default function About() {
  const easing = [0.6, -0.05, 0.1, 0.99];
  const fadeIn1 = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: easing,
      },
    },
  };
  return (
    <Menu>
      <div className="d-flex flex-column justify-content-center text-center p-5">
        <motion.div exit="exit" initial="initial" animate="animate">
          <motion.div variants={fadeIn1}>
            <div className="row text-light my-5 font-mono">
              <h1 className="my-4">About</h1>
              <p className="about-content">
                I'm a Budding Engineer who's fueled by coffee. I'm currently
                pursuing my Bachelor of Technology in Loyola-ICAM College of
                Engineering and Technology. Being a Minimalist, I'm always keen
                on keeping up things simple, organised and well-planned. I love
                learning and Programming all day and night 🌛.
              </p>
            </div>
            <div className="row text-light mb-5">
              <h3 className="font-mono mb-4"> Skills </h3>
              <div className="my-2 skills">
                <span>HTML</span> <span>CSS</span> <span>Javascript</span>{" "}
                <span>Python</span>
                <span>Dart</span> <span>PHP</span> <span>C / C++</span>{" "}
                <span>Java</span> <span>TypeScript</span>
              </div>
              <div className="my-2 skills">
                <span>Bootstrap</span> <span>Material UI</span>{" "}
                <span>Jquery</span> <span>Flask</span>
                <span>Django</span> <span>FastAPI</span> <span>Flutter</span>{" "}
                <span>Android</span> <span>Redux</span>
              </div>
              <div className="my-2 skills">
                <span>ReactJS</span> <span>Angular</span> <span>NodeJS</span>{" "}
                <span>ExpressJS</span> <span>NextJS</span>
                <span>MySQL</span> <span>MongoDB</span> <span>Firestore</span>{" "}
                <span>PostgreSQL</span>
                <span>SQLAlchemy</span>
              </div>
              <div className="my-2 skills">
                <span>Git</span> <span>GitHub</span> <span>Firebase</span>{" "}
                <span>Supabase</span>
                <span>Postman</span>
                <span>Wordpress</span> <span>Figma</span>
                <span>Adobe XD</span> <span>Photoshop</span>{" "}
                <span>Premiere Pro</span> <span>Illustrator</span>{" "}
                <span>Unity</span> <span>IoT</span>
              </div>
            </div>
            <div className="row text-light">
              <h3 className="font-mono"> Education </h3>
              <div className="timeline text-start">
                <VerticalTimeline>
                  <VerticalTimelineElement
                    className="font-mono"
                    contentStyle={{
                      background: "#131313",
                      color: "#fff",
                      border: "none",
                    }}
                    contentArrowStyle={{ borderRight: "7px solid  white" }}
                    date="2019 - 2023"
                    iconStyle={{ background: "#131313", color: "#fff" }}
                    icon={<FontAwesomeIcon icon={faUniversity} />}
                  >
                    <h3 className="font-weight-bold my-3">
                      Bachelor of Technology
                    </h3>
                    <h5 className="vertical-timeline-element-subtitle">
                      Information Technology
                    </h5>
                    <p>
                      Loyola-ICAM College of Engineering and Technology, Chennai
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="font-mono"
                    date="2007 - 2019"
                    contentStyle={{ background: "#131313", color: "#fff" }}
                    iconStyle={{ background: "#131313", color: "#fff" }}
                    icon={<FontAwesomeIcon icon={faSchool} />}
                  >
                    <h3 className="font-weight-bold my-3">
                      Higher Secondary and SSLC
                    </h3>
                    <h5 className="vertical-timeline-element-subtitle">
                      Math, Physics and Chemistry
                    </h5>
                    <p>
                      Ebenezer Marcus Matriculation Higher Secondary School,
                      Chennai.
                    </p>
                  </VerticalTimelineElement>
                </VerticalTimeline>
              </div>
            </div>
            <div className="row text-light">
              <h3 className="font-mono"> Experience </h3>
              <div className="timeline text-start">
                <VerticalTimeline>
                  {experiences.map((exp) => {
                    return (
                      <VerticalTimelineElement
                        className="font-mono"
                        contentStyle={{
                          background: "#131313",
                          color: "#fff",
                          border: "none",
                        }}
                        contentArrowStyle={{ borderRight: "7px solid  white" }}
                        date={exp.date}
                        iconStyle={{ background: "#131313", color: "#fff" }}
                        icon={<FontAwesomeIcon icon={faBriefcase} />}
                      >
                        <h3 className="font-weight-bold my-3">{exp.title}</h3>
                        <h5 className="vertical-timeline-element-subtitle">
                          {exp.place}
                        </h5>
                        <p>{exp.description}</p>
                      </VerticalTimelineElement>
                    );
                  })}
                </VerticalTimeline>
              </div>
            </div>
            <div className="row text-light">
              <h3 className="font-mono"> Certifications </h3>
              <div className="timeline text-start">
                <VerticalTimeline layout="1-column-left">
                  {certificates.map((cert) => {
                    return (
                      <VerticalTimelineElement
                        className="font-mono"
                        date={cert.date}
                        contentStyle={{ background: "#131313", color: "#fff" }}
                        iconStyle={{ background: "#131313", color: "#fff" }}
                        icon={<FontAwesomeIcon icon={faCertificate} />}
                      >
                        <h3 className="font-weight-bold my-3">{cert.title}</h3>
                        <p>{cert.offeredBy}</p>
                      </VerticalTimelineElement>
                    );
                  })}
                </VerticalTimeline>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Menu>
  );
}
