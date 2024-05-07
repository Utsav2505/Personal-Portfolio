import React from "react";

const Slide4 = () => {
  return (
    <div className="slide-4-container">
      <div className="html-section">About/&gt;</div>
      <div className="head-details">
        <h1 className="archivo-200">
          Utsav Maji<p className="archivo-100">, 19</p>
        </h1>
        <h3 className="archivo-100">Bachelor's Student</h3>
      </div>
      <div className="base-details archivo-100">
        <h2 className="archivo-100">
          <p>Studying : </p> Artificial Intelligence and Data Science
        </h2>
        <h2 className="archivo-100">
          <p>At : </p>
          <u className="underlines">
            {" "}
            University School of Automation and Robotics
          </u>
        </h2>
      </div>
      <div className="bottom-details">
        <p className="archivo-100">
          Starting my college journey in 2023 in Delhi, India. I firmly believe
          in the potential for AI to be more diverse and fascinating. With a
          mission to learn and explore the possibilities of Computer Science, I
          am dedicated to pursuing innovation through experimentation.
        </p>
      </div>
      <div className="skill-container">
        <h2 className="skill-header archivo-200">SKILLS</h2>
        <div className="skills-tags archivo-100">
          <table className="skills-table">
            <tr>
              <td>Languages : </td>
              <td>
                <div className="tag archivo-400">C/C++</div>
                <div className="tag archivo-400">Python</div>
                <div className="tag archivo-400">Javascript</div>
                {/* <div className="tag archivo-400">HTML</div> */}
              </td>
            </tr>
            <tr>
              <td>Libraries : </td>
              <td>
                <div className="tag archivo-400">Numpy</div>
                <div className="tag archivo-400">Pandas</div>
                <div className="tag archivo-400">Scikit-learn</div>
                <div className="tag archivo-400">Open-CV</div>
                <div className="tag archivo-400">Transformers</div>
                <div className="tag archivo-400">Pytorch</div>
                <div className="tag archivo-400">React.js</div>
                <div className="tag archivo-400">Redux</div>
                <div className="tag archivo-400">Express.js</div>
                {/* <div className="tag archivo-400">Scikit-learn</div> */}
              </td>
            </tr>
            <tr>
              <td>Databases : </td>
              <td>
                <div className="tag archivo-400">Mongo DB</div>
                <div className="tag archivo-400">My SQL</div>
                <div className="tag archivo-400">Postgre SQL</div>
              </td>
            </tr>
            <tr>
              <td>Frameworks : </td>
              <td>
                <div className="tag archivo-400">Langchain</div>
                <div className="tag archivo-400">Fast API</div>
                <div className="tag archivo-400">Flask</div>
                <div className="tag archivo-400">Next.js</div>
                <div className="tag archivo-400">Bootstrap</div>
              </td>
            </tr>
            <tr>
              <td>Tools : </td>
              <td>
                <div className="tag archivo-400">Git/Github</div>
                <div className="tag archivo-400">Postman</div>
                <div className="tag archivo-400">Firebase</div>
                <div className="tag archivo-400">Figma</div>
                <div className="tag archivo-400">Jupyter</div>
                <div className="tag archivo-400">VS Code</div>
              </td>
            </tr>
            <tr>
              <td>Others : </td>
              <td>
                <div className="tag archivo-400">Arduino</div>
                <div className="tag archivo-400">CAD</div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Slide4;
