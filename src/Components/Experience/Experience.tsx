import { ICertificate, IProject } from '../../../interfaces';
import classes from './Experience.module.css';

import Certificates from './Certificates';
import Projects from './Projects';
import Synopsis from './Synopsis';

const Experience: React.FC<{
  certificates: { softuni: ICertificate[]; udemy: ICertificate[] };
  projects: IProject[];
}> = ({ certificates, projects }) => {
  return (
    <section className={classes.container}>
      <Synopsis />
      <Certificates certificates={certificates} />
      <Projects projects={projects} />
    </section>
  );
};
export default Experience;
