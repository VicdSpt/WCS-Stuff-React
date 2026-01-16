import html from "../images/html.png";
import CSS from "../images/CSS.png";
import JS from "../images/JS.png";
import react from "../images/react.png";
import typescript from "../images/typescript.png";
import tailwind from "../images/tailwind.png";
import bootstrap from "../images/bootstrap.png";
import nodejs from "../images/nodejs.png"
import git from "../images/git.png"
import github from "../images/github.png"
import NPM from "../images/NPM.png"
import vite from "../images/vite.png"

function Skills() {
  return (
    <main className="container mx-auto py-20 px-4">
      <div>
        <header className="text-center bg-amber-300 mb-5 py-4">
          <h1 className="text-4xl font-bold mb-2">Skills</h1>
          <p>Programming Languages I should know</p>
        </header>

        <section className="bg-red-300 mb-5 py-5 px-4">
          <div>
            <h2 className="text-5xl mb-2">Frontend</h2>
            <p className="mb-4">The pretty stuff</p>
            <div className="flex gap-4 flex-wrap">
              <img src={html} alt="HTML logo" />
              <img src={CSS} alt="CSS logo" />
              <img src={JS} alt="JavaScript logo" />
              <img src={react} alt="React logo" />
              <img src={typescript} alt="TypeScript logo" />
              <img src={tailwind} alt="Tailwind CSS logo" />
              <img src={bootstrap} alt="Bootstrap logo" />
            </div>
          </div>
        </section>

        <section className="bg-blue-300 mb-5 py-5 px-4">
          <div>
            <h2 className="text-5xl mb-2">Backend</h2>
            <p className="mb-4">The cool stuff</p>
            <div className="flex gap-4 flex-wrap">
              <img src={nodejs} alt="Node.js logo" />
            </div>
          </div>
        </section>

        <section className="bg-green-300 py-5 px-4">
          <div>
            <h2 className="text-5xl mb-2">Infrastructure</h2>
            <p className="mb-4">The weird stuff</p>
            <div className="flex gap-4 flex-wrap">
              <img src={git} alt="Git logo" />
              <img src={github} alt="GitHub logo" />
              <img src={NPM} alt="NPM logo" />
              <img src={vite} alt="Vite logo" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Skills;