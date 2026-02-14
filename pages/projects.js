import { useEffect, useState } from "react";
import { api } from "../utils/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api("/api/projects").then(setProjects);
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      {projects.map(p => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
}