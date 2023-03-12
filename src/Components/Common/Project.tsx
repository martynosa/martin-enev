import classes from './Project.module.css';
import { useId } from 'react';
import { IProject } from '../../util/interfaces';

const Project: React.FC<{ project: IProject }> = ({ project }) => {
  const id = useId();
  return (
    <a
      href={project.link}
      className={classes.project}
      target="_blank"
      rel="noreferrer"
    >
      <h3>{project.name}</h3>
      <img src={`./projects/${project.name}.jpg`} alt={project.name} />
      <div>
        {project.techStack.map((t, i) => {
          return <img key={`${i}-${id}`} src={`/tech-svg/${t}.svg`} alt={t} />;
        })}
      </div>
    </a>
  );
};

export default Project;
