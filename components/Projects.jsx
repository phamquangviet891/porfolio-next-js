import React, { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "../config/db";

const Projects = () => {
  const [days, setDays] = useState(365);
  const list = [
    0, 1, 2, 3, 41, 42, 43, 44, 82, 83, 123, 124, 125, 126, 164, 165, 166, 167,
    205, 206, 246, 247, 287, 288, 5, 6, 46, 47, 87, 88, 128, 129, 169, 170, 210,
    211, 251, 252, 292, 293, 8, 9, 14, 15, 49, 50, 51, 90, 91, 92, 131, 132,
    133, 134, 172, 173, 213, 214, 254, 255, 295, 296, 175, 176, 217, 177, 218,
    259, 55, 56, 96, 97, 137, 138, 178, 179, 219, 220, 260, 261, 217, 218, 259,
    260, 261, 301, 302, 17, 18, 19, 58, 59, 60, 61, 99, 100, 102, 103, 140, 141,
    144, 181, 182, 185, 222, 223, 225, 226, 263, 264, 265, 266, 304, 305, 306,
    24, 25, 65, 66, 67, 106, 107, 108, 147, 148, 149, 150, 188, 189, 229, 230,
    270, 271, 311, 312, 67, 108, 149, 150, 191, 232, 192, 233, 274, 234, 275,
    316, 194, 235, 276, 154, 195, 236, 73, 114, 155, 33, 34, 74, 75, 115, 116,
    156, 157, 197, 198, 238, 239, 279, 280, 320, 321, 36, 37, 38, 39, 77, 78,
    79, 80, 118, 119, 159, 160, 161, 162, 200, 201, 202, 203, 241, 242, 282,
    283, 284, 285, 323, 324, 325, 326,
  ];
  const Box = ({ index }) => {
    return <div className={list.includes(index) ? "box active" : "box"}></div>;
  };

  const Githuboxes = () => {
    return Array.from({ length: days }, (element, index) => (
      <Box key={index} index={index} />
    ));
  };

  const dates = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Agt",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [width, setWidth] = useState();
  const handleWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleWidth();
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, [width, setWidth]);
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto py-8 md:py-16"></div>
      <p className="px-2  md:px-24 uppercase text-xl tracking-widest font-lato text-[#fff]">
        Projects
      </p>
      <h2 className="px-2 md:px-24 pb-3 first-letter:first-line:marker:selection:file:placeholder:backdrop:md:px-24 font-lato mb-2 md:mb-8 ">
        What i've build
      </h2>
      <div className="grid md:grid-cols-4 gap-8 p2-4 px-2 md:px-20 mb-6">
        {projects.map((project, i) => {
          return (
            <ProjectItem
              key={i}
              title={project.name}
              description={project.description}
              technologies={project.technologies}
              projectUrl={project.externalLink}
              githublink={project.githubLink}
              publicrepo={project.public}
              playstorelink={project.playstorelink}
              appstorelink={project.appstorelink}
            />
          );
        })}
      </div>
      {/* <div className="githubContainer mt-10 md:mt-20">
        {width > 728 ? (
          <div className="githubChart">
            <div className="dates">
              {dates.map((date, i) => {
                return <span key={i}>{date}</span>;
              })}
            </div>
            <div className="boxContainer">
              <Githuboxes />
            </div>
          </div>
        ) : null}
        <a
          href="https://github.com/phamquangviet891"
          target="_blank"
          rel="noreferrer"
        >
          <h2
            className={
              width < 728
                ? "githubTitlesmall text-xl font-fuzzy-bubbles mt-5 md:mt-8"
                : "githubTitle text-x font-fuzzy-bubbles  mt-5 md:mt-8"
            }
          >
            GITHUB LINK
          </h2>
        </a>
      </div> */}
    </div>
  );
};

export default Projects;
