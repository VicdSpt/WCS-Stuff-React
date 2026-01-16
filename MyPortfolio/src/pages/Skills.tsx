import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from "@fortawesome/free-brands-svg-icons/faHtml5";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";


function Skills() {
  return (
    <main className="container mx-auto py-20 px-4">
      <div>
        <div>
          <h1>Skills</h1>
          <p>Programing Languages I should know</p>
        </div>
        <section>
          <div>
            <h2>Frontend</h2>
            <p>The pretty stuff</p>
            <div className="text-6xl">
              <FontAwesomeIcon icon={faHtml5} />
              <FontAwesomeIcon icon={faCss3Alt} />
              <FontAwesomeIcon icon={faReact} />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h2>Backend</h2>
            <p>The cool stuff</p>
            <div className="text-6xl">
              <FontAwesomeIcon icon={faNodeJs} />

            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Skills;
