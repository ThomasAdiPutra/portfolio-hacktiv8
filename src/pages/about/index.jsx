import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="uppercase">
        <div className="text-5xl font-extrabold">
          <span>Lorem</span>
          <span className="text-orange-700">IPSUM</span>
        </div>
        <div className="space-x-3">
          <span className="text-gray-500">+62 0123456789</span>
          <span className="text-orange-700">loremipsum@gmail.com</span>
        </div>
      </div>
      <p className="my-4">
        I am an opensource contributor and hav contributed to Zulip, Hasura,
        Fossa, Publiclab and many other projects. My tech includes Python and
        Javascript. Python for server side and scripting and Javascript for the
        frontend. I use Django framework for the server side development and
        React for the frontend development. I have also worked with GraphQL. Im
        a Github Campus Expert at my institute where I am responsible for
        building on campus community. I am the lead organiser of Hack in The
        North Hackathon and the cofounder of Pragma Conference held at IIIT
        Allahabad
      </p>
      <div className="space-x-3">
        <Link to={"https://linkedin.com"}>
          <FontAwesomeIcon icon={faLinkedin} fontSize={35} />
        </Link>
        <Link to={"https://github.com"}>
          <FontAwesomeIcon icon={faGithub} fontSize={35} />
        </Link>
      </div>
    </>
  );
}
