import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import { loadingTitle, title } from "../globalStrings";
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
import Disk from "./components/Disk";

const certificates = [
  {
    date: "Aug 2022",
    title: "Architecting with Google Compute Engine",
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
    date: "Sep 2023 - Present",
    title: "Member of Technical Staff - DevOps",
    place: "Zoho Corporation",
    description: "",
  },
  {
    date: "Jan 2023 - Jul 2023",
    title: "Associate DevOps Engineer - Intern",
    place: "Tekion Corp",
    description: "Actively contributed to the team, utilizing Amazon Web Services, Docker, and \
    Linux to manage microservices and optimize operations. \
    \n - Developed Infrastructure-as-Code and automation scripts using Terraform and \
    Python to streamline operational tasks, increasing efficiency \
    and reducing manual effort. \
    \n - Managed CI/CD pipelines in Jenkins, automating the build and \
    deployment across environments.",
  },
  {
    date: "Jul 2022 - Dec 2022",
    title: "Full Stack Engineer Intern",
    place: "BlitzCraftHQ",
    description: "Collaborated with the team to build a real-time NFT Analytics Platform.\
    \n- Written Aggregation pipelines to efficiently query data and visualize them through interactive charts.",
  },
  {
    date: "Feb 2021 - Jul 2021",
    title: "SDE Intern",
    place: "Onfluence, UK",
    description: "Played a role in the team as Backend developer.",
  },
  {
    date: "Aug 2020 - Oct 2020",
    title: "Crewman | Developer",
    place: "Pattarai",
    description: "Worked on real-time projects, in diverse range of domains, \
    which include Mobile App development, Web Development, Internet of Things (IoT), Web3 and Graphic Design.",
  },
];

export default function About() {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    document.title = `About | ${title}`;

    fetch(
      "https://roshportfolio.azurewebsites.net/api/getBadges?code=uxo4MXpbgItnmzlf8rrCXO-vc82Fo7IVWaQYkOa6J2ScAzFu9Im18Q==",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then(({ data }) => {
        setBadges(data.matchedUser.badges);
      })
      .catch((err) => {
        console.log(err);
        setBadges([]);
      });
  }, []);
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
      <Disk
        style={{
          opacity: 0.1,
          zIndex: 0,
          transform: "scale(4) translate(-20%,80%)",
        }}
      />
      <div className="d-flex flex-column justify-content-center text-center p-5">
        <motion.div exit="exit" initial="initial" animate="animate">
          <motion.div variants={fadeIn1}>
            <div className="text-light my-5 font-mono">
              <h1 className="my-4 mx-1 mx-md-4">About</h1>
              <p className="about-content mx-5">
              A recent graduate from Loyola-ICAM College of Engineering and Technology, fueled by a passion for programming. 
              As a dedicated minimalist, I value simplicity, organization ✅, and careful planning 📃 in everything I do
              </p>
            </div>
            
            {/* <Disk
              style={{
                opacity: 0.1,
                zIndex: 0,
                right: 0,
                transform: "scale(4) translate(50%,10%)",
              }}
            /> */}
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
                        style={{
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
                    contentArrowStyle={{ borderRight: "7px solid #fff" }}
                    date="2019 - 2023"
                    iconStyle={{
                      background: "#131313",
                      color: "#fff",
                      border: "1px solid #ffff00",
                    }}
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
                    date="2017 - 2019"
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
            <div className="row text-light mb-5">
              <h3 className="font-mono mb-4"> Tools & Tech I've worked in </h3>
              <div className="my-2 skills">
                <span>HTML</span> <span>CSS</span> <span>Javascript</span>{" "}
                <span>Python</span><span>Bash Scripting</span>
                <span>C </span> <span>Java</span> <span>TypeScript</span>
              </div>
              <div className="my-2 skills">
                <span>Bootstrap</span> <span>Material UI</span>{" "}
                <span>Tailwind CSS</span> <span>Jquery</span> <span>Flask</span>
                <span>Django</span> <span>FastAPI</span> <span>Flutter</span>{" "}
                <span>Android</span> 
              </div>
              <div className="my-2 skills">
                <span>ReactJS</span>
                {/* <span>Angular</span> */}
                <span>NodeJS</span><span>Redux</span> <span>ExpressJS</span> <span>NextJS</span>
                <span>MySQL</span>
                <span>MongoDB</span>
                <span>PostgreSQL</span>
                <span>Firestore</span>
                <span>GraphQL</span>
                {/*<span>SQLAlchemy</span>*/}
              </div>
              <div className="my-2 skills">
                <span>Firebase</span>{" "}
                {/* <span>Supabase</span> */}
                <span>Postman</span>
                {/* <span>Wordpress</span> */}
                <span>Figma</span>
                <span>Adobe XD</span> <span>Photoshop</span>{" "}
                <span>Premiere Pro</span> <span>Illustrator</span>{" "}
                <span>IoT</span>
                <span>Solidity</span>
              </div>
              <div className="my-2 skills">
                <span>Linux</span> <span>AWS</span> <span>Azure</span> <span>Docker</span>{" "}
                <span>Jenkins</span>
                <span>Terraform</span>
                <span>Git</span> <span>GitHub</span>
                <span>Gitlab</span>
              </div>
            </div>

            {/* <div className="row text-light">
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
            </div> */}
{/*             <div className="row text-light">
              <h6 className="font-mono"> Also View my profile in </h6>
              <div>
                <a href="https://leetcode.com/roshithaignatius21/">
                  <img src="leetcode.png" alt="lc" width="40" className="m-3" />
                </a>
                <a href="https://www.hackerrank.com/roshithaignatiu1">
                  <img
                    src="hackerrank.png"
                    alt="hr"
                    width="40"
                    className="m-3"
                  />
                </a>
              </div>
            </div>
            {badges.length && (
              <div className="row text-light mt-5 justify-content-center">
                <h6 className="font-mono mb-3"> LeetCode Badges </h6>
                <div className="row justify-content-center px-5 mx-5">
                  {badges.map((badge) => {
                    return (
                      <div className="col-md-2 col-3 col-12 my-5">
                        <img
                          src={badge.medal.config.iconGif}
                          alt={badge.displayName}
                          width="100"
                        />
                        <div className="text-light font-mono mt-2">
                          {badge.displayName}
                        </div>
                      </div>
                    );
                  })} 
                </div> 
              </div>
            )}*/}
          </motion.div>
        </motion.div>
      </div>
    </Menu>
  );
}
