import { useId } from 'react';

import { IProject } from '../../../interfaces';
import classes from './Experience.module.css';

import Project from '../Common/Project';

const Projects: React.FC<{ projects: IProject[] }> = ({ projects }) => {
  const id = useId();

  return (
    <div id="projects" className={classes.synopsis}>
      <h2 className={classes.title}>projects</h2>
      <div className={classes.projects}>
        {projects.map((p, i) => {
          if (p.isVisible) {
            return <Project project={p} key={`${i}-${id}`} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Projects;