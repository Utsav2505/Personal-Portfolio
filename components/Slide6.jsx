"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Slide6 = () => {
  const router = useRouter();
  return (
    <>
      <div className="html-section slide-6-head">Contact me/&gt;</div>
      <div className="slide-6-container">
        <table className="links-table-1">
          <thead></thead>
          <tbody>
            <tr
              onClick={() =>
                router.push("https://www.linkedin.com/in/utsav-maji/")
              }
            >
              <td>
                <img src="./linkedin.svg" className="icon" />
              </td>
              <td className="col-width">/utsav-maji</td>
            </tr>
            <tr onClick={() => router.push("https://github.com/Utsav2505")}>
              <td>
                <img src="./github.svg" className="icon" />
              </td>
              <td>/Utsav2505</td>
            </tr>
            <tr
              onClick={() =>
                (window.location.href = "mailto:utsav2005maji@gmail.com")
              }
            >
              <td>
                <img src="./mail.svg" className="icon" />
              </td>
              <td>utsav2005maji@gmail.com</td>
            </tr>
            <tr
              onClick={() =>
                router.push("https://www.instagram.com/utsavmaji/")
              }
            >
              <td>
                <img src="./instagram.svg" className="icon" />
              </td>
              <td>@utsavmaji</td>
            </tr>
          </tbody>
        </table>

        <table className="links-table-2">
          <thead></thead>
          <tbody>
            <tr
              onClick={() =>
                router.push("https://www.facebook.com/utsav.maji.5/")
              }
            >
              <td>
                <img src="./facebook.svg" className="icon facebook" />
              </td>
              <td>/utsav.maji.5</td>
            </tr>
            <tr onClick={() => router.push("https://twitter.com/M_utsav25")}>
              <td>
                <img src="./twitter.svg" className="icon" />
              </td>
              <td>@M_utsav25</td>
            </tr>
            <tr onClick={() => router.push("https://medium.com/@mutsav")}>
              <td>
                <img src="./medium.svg" className="icon" />
              </td>
              <td>@mutsav</td>
            </tr>
            <tr
              onClick={() => router.push("https://buymeacoffee.com/utsav.maji")}
            >
              <td>
                <img src="./buymeacoffee.svg" className="icon" />
              </td>
              <td>/utsav.maji</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Slide6;

//https://medium.com/@mutsav
