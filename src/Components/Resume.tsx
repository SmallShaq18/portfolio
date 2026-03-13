import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Resume() {
    return (
        <section id="resume" className="relative bg-black text-white overflow-hidden">
  <h2 className="text-3xl font-bold mb-6 text-center">My Resume</h2>

  <div className="flex justify-center">
    {/*<iframe
      src="/shaq-cv.pdf"
      width="70%"
      height="600px"
      title="Shaq CV"
      className="shadow-lg rounded-lg"
    ></iframe>*/}
  </div>

  <a
    href="/shaq-cv.pdf"
    download
    className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-lg flex justify-center items-center mx-auto w-max hover:bg-teal-700 transition-colors duration-300"
  >
    Download CV <FontAwesomeIcon icon={faDownload} className="ml-2" />
  </a>
</section>
    );
}