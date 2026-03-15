import React from "react";
import "./Certificates.scss";

const certificates = [
  {
    name: "AWS Cloud Basics",
    org: "Amazon Web Services",
    link: "YOUR_DRIVE_LINK"
  },
  {
    name: "Introduction to DevOps",
    org: "IBM",
    link: "YOUR_DRIVE_LINK"
  },
  {
    name: "Databases and SQL for Data Science",
    org: "IBM / Coursera",
    link: "YOUR_DRIVE_LINK"
  },
  {
    name: "Power BI for Data Science and Analytics",
    org: "Coursera",
    link: "YOUR_DRIVE_LINK"
  },
  {
    name: "Embedded C Programming",
    org: "Microchip",
    link: "YOUR_DRIVE_LINK"
  }
];

export default function Certificates() {
  return (
    <div className="cert-container">

      <h2 className="cert-title">
        Certificates – Click to View
      </h2>

      <ul className="cert-list">
        {certificates.map((cert, i) => (
          <li key={i} className="cert-item">
            <a href={cert.link} target="_blank" rel="noreferrer">

              <div className="cert-name">
                {cert.name}
              </div>

              <div className="cert-org">
                {cert.org}
              </div>

            </a>
          </li>
        ))}
      </ul>

    </div>
  );
}