import React from "react";
import MacWindows from "./MacWindows";
import githubData from "./../../assets/github.json";
import "./github.scss";

const GitCard = ({
  data = {
    id: 1,
    image: "",
    title: "",
    description: "",
    tags: [],
    repoLink: "",
    demoLink: "",
  },
}) => {
  return (
    <div className="card">
      <img src={data.image} alt="" />
      <h1>{data.title}</h1>
      <p className="description">{data.description}</p>

      <div className="tags">
        {data.tags.map((tags) => (
          <p className="tag">{tags}</p>
        ))}
      </div>

      <div className="urls">
        <a href={data.repoLink}>Repositry</a>
        {data.demoLink && <a href={data.demoLink}>Demo Link</a>}
      </div>
    </div>
  );
};

function Github({ windowName, setWindowState }) {
  return (
    <MacWindows windowName={windowName} setWindowState={setWindowState}>
      <div className="cards">
        {githubData.map((project) => {
          return <GitCard data={project} />;
        })}
      </div>
    </MacWindows>
  );
}

export default Github;
