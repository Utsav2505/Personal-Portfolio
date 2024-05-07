"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "@styles/global.css";
import ProjectDetails from "./ProjectDetails";

const Slide3 = () => {
  const router = useRouter();
  const skillForge = {
    title: "Skill Forge : AI Mock Interviewer",
    problemStatement:
      "Struggle to perform well in interviews due to lack of practice or guidance",
    solution:
      "Interactive online environment to practice and ace in mock interviews. followed by chatbot providing AI based roadmap generation, resume review and much more.",
    desc: "Implemented RAG based chatbot using Meta's Llama 2 7b LLM. Created Tools for specific features like Roadmap Generation and Resume Review, and agents to support Text and Voice based Chat pipelines with custom memory management to handle specific needs. Finally created API endpoints to communicate with web frontend with custom server logs management. Developed a interactive Next.js based Frontend with next-auth for user's data privacy, collecting user data in MongoDB no SQL database.",
    tags: [
      "Langchain",
      "LLM",
      "Fast API",
      "Llama",
      "Pandas",
      "Chroma DB",
      "Sentence Transformer",
      "Python",
      "Javascript",
      "Next.js",
      "Mongo DB",
      "Bootstrap",
    ],
    video: "",
    github: "https://github.com/Utsav2505/skill_forge",
  };
  const linkLurker = {
    title: "Link Lurker : Suspicious URL Detector",
    problemStatement:
      "Struggle to identify if a URL is safe to visit or not without clicking on it. Expensive/Paid tools to detect suspicious URL's.",
    solution:
      "Powerful tool that detects suspicious URL's and provides a detailed report on the URL's safety.",
    desc: "Implemented a URL detection system by analysing domains by web scraping to check for security headers, checked the entered URL in a database consisting of 5.5Lakhs+ blacklisted URLs and created and used a machine learning model to predict the safety of the URL. Created a Flask based API to communicate with the frontend and used Next.js to create a user-friendly interface.",
    tags: [
      "Scikit-learn",
      "Flask",
      "Pandas",
      "Beautiful Soup 4",
      "Python",
      "Javascript",
      "Next.js",
      "React.js",
    ],
    video: "https://imgur.com/qYMqqvv.mp4",
    github: "https://github.com/Utsav2505/Link-Lurker",
  };
  const faceRecognition = {
    title: "Face Recognition System",
    problemStatement: "",
    solution: "",
    desc: "Implemented a face recognition system using OpenCV to recognize faces in real-time and provide detailed information about the recognized person trained on the database of known faces. Created a React.js based frontend to interact with the system.",
    tags: ["Open CV", "Flask", "Numpy", "Python", "React.js", "Javascript"],
    video: "",
    github: "https://github.com/Utsav2505/Face-Recognition",
  };
  const portfolio = {
    title: "Personal Portfolio Website",
    problemStatement: "",
    solution: "",
    desc: "A Portfolio website to showcase my projects and skills. Developed using Next.js to support Full stack development and Green Sock for animations. Used and modified Vertical Timeline Library to showcase projects",
    tags: ["Next.js", "React.js", "Green Sock", "Javascript"],
    video: "",
    github: "https://github.com/Utsav2505/Personal-Portfolio",
  };
  const [viewProject, setViewProject] = useState("0");
  const [project, setProject] = useState(skillForge);
  const handleProjectClick = (projectName) => {
    setViewProject("1");
    setProject(projectName);
  };

  return (
    <>
      <ProjectDetails detail={project} state={viewProject} />
      {viewProject == "1" ? (
        <div className="project-close-btn" onClick={() => setViewProject("0")}>
          <img src="./close.svg" />
        </div>
      ) : null}
      <h2 className="timeline-head archivo-200"> Academic Projects </h2>
      <div className="timeline-container">
        <VerticalTimeline lineColor="#00C4AC" className="timeline">
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(0, 0, 0)",
              color: "#00C4AC",
              border: "0.15vw solid #00C4AC",
              borderRadius: "1vw",
              boxShadow: "0 0 0 0 #00C4AC",
              padding: "1vw",
              width: "32vw",
              transform: "translate(1vw, 0)",
            }}
            contentArrowStyle={{
              borderRight: "0.7vw solid #00C4AC",
              transform: "translate(-0.1vw,0.5vw)",
              rotate: "180deg",
            }}
            date={
              <div
                style={{
                  transform: "translate(-12vw,0)",
                  color: "white",
                  opacity: "1",
                }}
                className="archivo-400"
              >
                Present - April 2024
              </div>
            }
            iconStyle={{
              background: "rgb(0, 0, 0)",
              color: "#00C4AC",
              width: "2vw",
              height: "2vw",
              transform: "translate(1.5vw, 1.4vw)",
              boxShadow: "0 0 0 0.2vw #00C4AC",
              scale: "0.8",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // border: "1vw solid #00C4AC",
            }}
            icon={
              <>
                <div className="active-icon-border">
                  <div id="room"></div>
                  <span class="hotspot main-wrapper">
                    <span class="hotspot dots-container">
                      <span class="hotspot dot1"></span>
                      <span class="hotspot dot2"></span>
                      <span class="hotspot dot3"></span>
                    </span>
                  </span>
                </div>

                <div
                  style={{
                    backgroundColor: "#00C4AC",
                    width: "1vw",
                    height: "1vw",
                    borderRadius: "50%",
                  }}
                >
                  {" "}
                </div>
              </>
            }
          >
            <div className="tags-row ">
              <div className="tag archivo-500">Langchain</div>
              <div className="tag archivo-500">LLM</div>
              <div className="tag archivo-500">Fast API</div>
              <div className="tag archivo-500">Next.js</div>
            </div>
            <h3 className="project-title archivo-500">
              Skill Forge : AI Mock Interviewer
            </h3>
            {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
            <p
              style={{
                color: "white",
                marginTop: "0.5vw",
                textAlign: "left",
                fontWeight: "200",
                fontSize: "1.2vw",
              }}
              className="archivo-100"
            >
              Interactive online environment to practice and ace in mock
              interviews. followed by chatbot providing AI based roadmap
              generation, resume review and much more.
            </p>
            <div className="project-links-row archivo-500">
              <div
                className="project-link"
                onClick={() => handleProjectClick(skillForge)}
              >
                <img src="./view.svg" />
                View Project
              </div>
              <div
                className="project-link"
                onClick={() => router.push(skillForge.github)}
              >
                <img src="./github.svg" />
                Visit Github Repo
              </div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(0, 0, 0)",
              color: "#00C4AC",
              border: "0.15vw solid #00C4AC",
              borderRadius: "1vw",
              boxShadow: "0 0 0 0 #00C4AC",
              padding: "1vw",
              width: "32vw",
              transform: "translate(-1vw, 0)",
            }}
            contentArrowStyle={{
              borderRight: "0.7vw solid #00C4AC",
              transform: "translate(-0.1vw,-0.4vw)",
              // rotate: "180deg",
            }}
            date={
              <div
                style={{
                  transform: "translate(1vw,-0.3vw)",
                  color: "white",
                  opacity: "1",
                }}
                className="archivo-400"
              >
                March 2024 - Februry 2024
              </div>
            }
            iconStyle={{
              background: "rgb(0, 0, 0)",
              color: "#00C4AC",
              width: "2vw",
              height: "2vw",
              transform: "translate(1.5vw, 1.4vw)",
              boxShadow: "0 0 0 0.2vw #00C4AC",
              scale: "0.8",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // border: "1vw solid #00C4AC",
            }}
            icon={
              <div
                style={{
                  backgroundColor: "#00C4AC",
                  width: "1vw",
                  height: "1vw",
                  borderRadius: "50%",
                }}
              >
                {" "}
              </div>
            }
          >
            <div className="tags-row archivo-500">
              <div className="tag">Scikit-learn</div>
              <div className="tag">Flask</div>
              <div className="tag">Python</div>
              <div className="tag">Next.js</div>
            </div>
            <h3 className="project-title archivo-500">
              Link Lurker : Suspicious URL Detector
            </h3>
            {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
            <p
              style={{
                color: "white",
                marginTop: "0.5vw",
                textAlign: "left",
                fontWeight: "200",
                fontSize: "1.2vw",
              }}
              className="archivo-100"
            >
              Powerful tool that detects suspicious URL's and provides a
              detailed report on the URL's safety.
            </p>
            <div className="project-links-row archivo-500">
              <div
                className="project-link"
                onClick={() => handleProjectClick(linkLurker)}
              >
                <img src="./view.svg" />
                View Project
              </div>
              <div
                className="project-link"
                onClick={() => router.push(linkLurker.github)}
              >
                <img src="./github.svg" />
                Visit Github Repo
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(0, 0, 0)",
              color: "#00C4AC",
              border: "0.15vw solid #00C4AC",
              borderRadius: "1vw",
              boxShadow: "0 0 0 0 #00C4AC",
              padding: "1vw",
              width: "32vw",
              transform: "translate(1vw, 0)",
            }}
            contentArrowStyle={{
              borderRight: "0.7vw solid #00C4AC",
              transform: "translate(-0.1vw,0.5vw)",
              rotate: "180deg",
            }}
            date={
              <div
                style={{
                  transform: "translate(-13vw,0)",
                  color: "white",
                  opacity: "1",
                }}
                className="archivo-400"
              >
                February 2024
              </div>
            }
            iconStyle={{
              background: "rgb(0, 0, 0)",
              color: "#00C4AC",
              width: "2vw",
              height: "2vw",
              transform: "translate(1.5vw, 1.4vw)",
              boxShadow: "0 0 0 0.2vw #00C4AC",
              scale: "0.8",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // border: "1vw solid #00C4AC",
            }}
            icon={
              <>
                <div
                  style={{
                    backgroundColor: "#00C4AC",
                    width: "1vw",
                    height: "1vw",
                    borderRadius: "50%",
                  }}
                >
                  {" "}
                </div>
              </>
            }
          >
            <div className="tags-row ">
              <div className="tag archivo-500">Open CV</div>
              <div className="tag archivo-500">Flask</div>
              <div className="tag archivo-500">Python</div>
              <div className="tag archivo-500">React.js</div>
            </div>
            <h3 className="project-title archivo-500">
              Face Recognition System
            </h3>
            {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
            <p
              style={{
                color: "#ffff",
                marginTop: "0.5vw",
                textAlign: "left",
                fontWeight: "200",
                fontSize: "1.2vw",
              }}
              className="archivo-100"
            >
              A face recognition system that recognizes faces in real-time and
              provides detailed information about the recognized person trained
              on the database of known faces
            </p>
            <div className="project-links-row archivo-500">
              <div
                className="project-link"
                onClick={() => handleProjectClick(faceRecognition)}
              >
                <img src="./view.svg" />
                View Project
              </div>
              <div
                className="project-link"
                onClick={() => router.push(faceRecognition.github)}
              >
                <img src="./github.svg" />
                Visit Github Repo
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(0, 0, 0)",
              color: "#00C4AC",
              border: "0.15vw solid #00C4AC",
              borderRadius: "1vw",
              boxShadow: "0 0 0 0 #00C4AC",
              padding: "1vw",
              width: "32vw",
              transform: "translate(-1vw, 0)",
            }}
            contentArrowStyle={{
              borderRight: "0.7vw solid #00C4AC",
              transform: "translate(-0.1vw,-0.4vw)",
              // rotate: "180deg",
            }}
            date={
              <div
                style={{
                  transform: "translate(1vw,-0.3vw)",
                  color: "white",
                  opacity: "1",
                }}
                className="archivo-400"
              >
                December 2023 - November 2023
              </div>
            }
            iconStyle={{
              background: "rgb(0, 0, 0)",
              color: "#00C4AC",
              width: "2vw",
              height: "2vw",
              transform: "translate(1.5vw, 1.4vw)",
              boxShadow: "0 0 0 0.2vw #00C4AC",
              scale: "0.8",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // border: "1vw solid #00C4AC",
            }}
            icon={
              <div
                style={{
                  backgroundColor: "#00C4AC",
                  width: "1vw",
                  height: "1vw",
                  borderRadius: "50%",
                }}
              >
                {" "}
              </div>
            }
          >
            <div className="tags-row ">
              <div className="tag archivo-500">Next.js</div>
              <div className="tag archivo-500">React.js</div>
              <div className="tag archivo-500">Green Sock</div>
              {/* <div className="tag archivo-500">React.js</div> */}
            </div>
            <h3 className="project-title archivo-500">
              Personal Portfolio Website
            </h3>
            {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
            <p
              style={{
                color: "#ffff",
                marginTop: "0.5vw",
                textAlign: "left",
                fontWeight: "200",
                fontSize: "1.2vw",
              }}
              className="archivo-100"
            >
              A Portfolio website to showcase my projects and skills. Developed
              using Next.js to support Full stack development and Green Sock for
              animations. Used and modified Vertical Timeline Library to
              showcase projects
            </p>
            <div className="project-links-row archivo-500">
              <div
                className="project-link"
                onClick={() => handleProjectClick(portfolio)}
              >
                <img src="./view.svg" />
                View Project
              </div>
              <div
                className="project-link"
                onClick={() => router.push(portfolio.github)}
              >
                <img src="./github.svg" />
                Visit Github Repo
              </div>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Slide3;
