import React from "react";
import ExperienceDetail from "../../components/experience-detail";

export default function Experience() {
  const experiences = [
    {
      jobTitle: "GITHUB CAMPUS EXPERT",
      companyName: "GITHUB",
      startDate: "August 2020",
      endDate: "Present",
      jobDescription:
        "Responsible for building the on campus community with the support of GitHub.",
    },
    {
      jobTitle: "OPENSOURCE DEVELOPER INTERN",
      companyName: "FOSSASIA",
      startDate: "June 2019",
      endDate: "Present",
      jobDescription:
        "Contributing to Fossasia's open event server and fronetend as an intern. Resolved numerous bugs and added new features to the eventyay platform.",
    },
    {
      jobTitle: "SOFTWARE DEVELOPER INTERN",
      companyName: "HASURA",
      startDate: "December 2018",
      endDate: "January 2019",
      jobDescription:
        "Worked on the Hasura GraphQL engine and added new features in it.",
    },
  ];
  return (
    <>
      <div className="space-y-10">
        <div className="text-5xl font-bold">EXPERIENCE</div>
        {experiences.map((experience, index) => (
          <ExperienceDetail key={index} {...experience} />
        ))}
      </div>
    </>
  );
}
