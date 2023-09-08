import React from "react";

export default function ExperienceDetail({
  jobTitle,
  companyName,
  startDate,
  endDate,
  jobDescription,
}) {
  return (
    <div>
      <div className="flex justify-between items-start">
        <div className="text-2xl font-semibold">{jobTitle}</div>
        <div className="text-red-500">
          {startDate} - {endDate}
        </div>
      </div>
      <div className="text-xl text-gray-500 font-medium mt-1 mb-3">
        {companyName}
      </div>
      <div className="text-gray-500 w-[75%]">{jobDescription}</div>
    </div>
  );
}
