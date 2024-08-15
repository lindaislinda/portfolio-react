import React from "react";
import Resume from "../../assets/Linda-Resume.pdf";
import { FiDownload } from "react-icons/fi";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1nrvX4cce67lgjgACHIoKlR0QdKlqiTl-/view?usp=sharing"
        download
        className="btn"
        target="_blank"
      >
        <FiDownload /> Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Connect!
      </a>
    </div>
  );
};

export default CTA;
