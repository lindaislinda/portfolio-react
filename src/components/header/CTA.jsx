import React from "react";
import Resume from "../../assets/Linda-Resume.pdf";
import { FiDownload } from "react-icons/fi";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://docs.google.com/document/d/1pEc23QMIs3S3ANwbAyEJ97-HnxYAyUwHf4aBjG7-Mdk/edit?tab=t.0#heading=h.aqu0wv5dof7c"
        download
        className="btn"
        target="_blank"
      >
        <FiDownload /> The Complete Guide To Big Tech
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Connect!
      </a>
    </div>
  );
};

export default CTA;
