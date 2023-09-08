import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

export default function Award() {
  const awards = [
    "Hack 36 3rd Prize Winner",
    "Mentor openCode'19",
    "Started North Indonesia First Student Design and Developer Conference",
  ];

  return (
    <div>
      <p className="text-5xl font-bold mb-8">AWARDS & Certification</p>
      <div className="text-gray-500 space-y-3 ms-10">
        {awards.map((award, index) => (
          <div key={index} className="space-x-3 text-lg">
            <FontAwesomeIcon icon={faAward} color="#ffdd00" />
            <span>{award}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
