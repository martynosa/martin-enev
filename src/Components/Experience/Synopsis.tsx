import { useId } from 'react';

import { IPage } from '../../../interfaces';
import classes from './Experience.module.css';

import Link from '../Common/Link';

const Synopsis: React.FC = () => {
  const id = useId();

  const pages: IPage[] = [
    { name: 'Certificates', link: '#certificates' },
    { name: 'Projects', link: '#projects' },
  ];
  return (
    <div className={classes.synopsis}>
      <h2 className={classes.title}>synopsis</h2>
      <div className={classes.group}>
        {pages.map((p, i) => {
          return <Link item={p} key={`${i}-${id}`} newTab={false} />;
        })}
      </div>
    </div>
  );
};

export default Synopsis;
