import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

export default function Skill() {
  const skills = [
    "HTML5",
    "CSS3",
    "Javascript",
    "React",
    "Nodejs",
    "Python",
    "Django",
    "Ember",
  ];
  return (
    <div>
      <p className="text-5xl font-bold">SKILLS</p>
      <p className="uppercase text-gray-500 text-xl mt-12 mb-5">
        Programming Languages & Tools
      </p>
      <div className="grid grid-cols-2 text-lg gap-2">
        {skills.map((skill, index) => (
          <div className="space-x-3" key={index}>
            <FontAwesomeIcon
              icon={faCheckCircle}
              color="#fff"
              className="bg-green-600 rounded-full"
            />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
