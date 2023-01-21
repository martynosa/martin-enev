import { ICertificate, IProject } from '../../util/interfaces';
import classes from './Experience.module.css';

import Certificates from './Certificates';
import Projects from './Projects';
import Synopsis from './Synopsis';

const Experience: React.FC<{
  certificates: { softuni: ICertificate[]; udemy: ICertificate[] };
  projects: IProject[];
}> = ({ certificates, projects }) => {
  return (
    <section className={classes['experience-container']}>
      <Synopsis />
      <Certificates certificates={certificates} />
      <Projects projects={projects} />
    </section>
  );
};
export default Experience;
