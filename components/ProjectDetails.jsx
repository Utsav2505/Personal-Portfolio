import React, { useState } from "react";
import "@styles/global.css";
import { useRouter } from "next/navigation";

const ProjectDetails = ({ detail, state }) => {
  const router = useRouter();
  const [viewProject, setViewProject] = useState("0");
  const handleClose = () => {
    setViewProject("0");
    state = "0";
  };
  return (
    <div
      className={
        state == "1"
          ? "project-background project-details-on"
          : "project-background project-details-off"
      }
    >
      <div className="project-container">
        <div className="project-first-half">
          <div className="project-pop-title archivo-400">{detail.title}</div>
          {detail.problemStatement !== "" ? (
            <div className="project-problm-statmnt archivo-100">
              Problem Statement : {detail.problemStatement}
            </div>
          ) : null}
          {detail.solution !== "" ? (
            <div className="project-pop-solution archivo-100">
              Solution : {detail.solution}
            </div>
          ) : null}
          <div className="project-pop-desc archivo-100">{detail.desc}</div>
          <div>
            <div className="project-links-row-2 archivo-500">
              <div
                className="project-link"
                onClick={() => router.push(detail.github)}
              >
                <img src="./github.svg" />
                Visit Github Repo
              </div>
            </div>
          </div>
        </div>

        <div className="project-second-half">
          {detail.video !== "" ? (
            <video
              src={detail.video}
              controls
              className="project-video"
            ></video>
          ) : null}
          <div className="tech-stack-container">
            <div
              className="archivo-400"
              style={{ width: "100%", margin: "2vh 0 1vh 0" }}
            >
              Tech Stack
            </div>
            <div
              className="tags-row"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {detail.tags.map((tag, index) => (
                <div key={index} className="tag archivo-500">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
