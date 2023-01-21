import classes from './Project.module.css';
import { IProject } from '../../util/interfaces';

const Project: React.FC<{ project: IProject }> = ({ project }) => {
  return (
    <a
      href={project.link}
      className={classes.project}
      target="_blank"
      rel="noreferrer"
    >
      <h3>{project.name}</h3>
      <img src={`./projects/${project.name}.jpg`} alt={project.name} />
    </a>
  );
};

export default Project;
