import classes from './Experience.module.css';
import { useId } from 'react';
import Project from '../Common/Project';
import { IProject } from '../../util/interfaces';

const Projects: React.FC<{ projects: IProject[] }> = ({ projects }) => {
  const id = useId();

  return (
    <div id="projects" className={classes.synopsis}>
      <h2 className={classes.title}>projects</h2>
      <div className={classes.projects}>
        {projects.map((p, i) => {
          if (p.isVisible) {
            return <Project key={`${i}-${id}`} project={p} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Projects;
