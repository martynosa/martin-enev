import { useId } from 'react';

import { ICertificate } from '../../../interfaces';
import classes from './Experience.module.css';

import Link from '../Common/Link';

const Certificates: React.FC<{
  certificates: { softuni: ICertificate[]; udemy: ICertificate[] };
}> = ({ certificates }) => {
  const id = useId();
  const entries = Object.entries(certificates);

  return (
    <div id="certificates" className={classes.synopsis}>
      <h2 className={classes.title}>certificates</h2>
      <div>
        {entries.map((e, i) => {
          return (
            <div key={`${i}-${id}`} className={classes.group}>
              <h3 className={classes.organization}>{e[0]}</h3>
              {e[1].map((c, i) => {
                if (c.isVisible) {
                  return <Link item={c} key={`${i}-${id}`} newTab={true} />;
                }
                return null;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;