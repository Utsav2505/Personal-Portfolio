import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "@styles/global.css";

const Slide3 = () => {
  return (
    <>
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
              width: "25vw",
              transform: "translate(8vw, 0)",
            }}
            contentArrowStyle={{
              borderRight: "0.7vw solid #00C4AC",
              transform: "translate(-0.1vw,0.5vw)",
              rotate: "180deg",
            }}
            date="Present - April 2024"
            iconStyle={{
              background: "rgb(0, 0, 0)",
              color: "#00C4AC",
              width: "2vw",
              height: "2vw",
              transform: "translate(1.8vw, 1.4vw)",
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
            <div className="tags-row">
              <div className="tag">Langchain</div>
              <div className="tag">LLM</div>
              <div className="tag">Fast API</div>
              <div className="tag">Next.js</div>
            </div>
            <h3 className="vertical-timeline-element-title">
              Skill Forge : AI Mock Interviewer
            </h3>
            {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
            <p style={{ color: "#00C4AC", marginTop: "0.5vw" }}>
              Interactive online environment to practice and ace in mock
              interviews. followed by chatbot providing AI based roadmap
              generation, resume review and much more.
            </p>
            <div className="project-links-row">
              <div className="project-link">
                <img src="./view.svg" />
                View Project
              </div>
              <div className="project-link">
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
              width: "25vw",
              transform: "translate(-8vw, 0)",
            }}
            contentArrowStyle={{
              borderRight: "0.7vw solid #00C4AC",
              transform: "translate(-0.1vw,-0.4vw)",
              // rotate: "180deg",
            }}
            date="March 2024 - February 2024"
            iconStyle={{
              background: "rgb(0, 0, 0)",
              color: "#00C4AC",
              width: "2vw",
              height: "2vw",
              transform: "translate(1.8vw, 1.4vw)",
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
            <div className="tags-row">
              <div className="tag">Scikit-learn</div>
              <div className="tag">Flask</div>
              <div className="tag">Python</div>
              <div className="tag">Next.js</div>
            </div>
            <h3 className="vertical-timeline-element-title">
              Suspicious URL Detector
            </h3>
            {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
            <p style={{ color: "#00C4AC", marginTop: "0.5vw" }}>
              Powerful tool that detects suspicious URL's and provides a
              detailed report on the URL's safety.
            </p>
            <div className="project-links-row">
              <div className="project-link">
                <img src="./view.svg" />
                View Project
              </div>
              <div className="project-link">
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
              width: "25vw",
              transform: "translate(8vw, 0)",
            }}
            contentArrowStyle={{
              borderRight: "0.7vw solid #00C4AC",
              transform: "translate(-0.1vw,0.5vw)",
              rotate: "180deg",
            }}
            date="February 2024"
            iconStyle={{
              background: "rgb(0, 0, 0)",
              color: "#00C4AC",
              width: "2vw",
              height: "2vw",
              transform: "translate(1.8vw, 1.4vw)",
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
            <div className="tags-row">
              <div className="tag">OpenCV</div>
              <div className="tag">Flask</div>
              <div className="tag">Python</div>
              <div className="tag">React.js</div>
            </div>
            <h3 className="vertical-timeline-element-title">
              Face Recognition System
            </h3>
            {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
            <p style={{ color: "#00C4AC", marginTop: "0.5vw" }}>
              A face recognition system that recognizes faces in real-time and
              provides detailed information about the recognized person trained
              on the database of known faces.
            </p>
            <div className="project-links-row">
              <div className="project-link">
                <img src="./view.svg" />
                View Project
              </div>
              <div className="project-link">
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
