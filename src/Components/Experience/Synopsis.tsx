import classes from './Experience.module.css';
import { useId } from 'react';
import Link from '../Common/Link';
import { IPage } from '../../util/interfaces';

const Synopsis: React.FC = () => {
  const id = useId();

  const pages: IPage[] = [
    { name: 'Certificates', link: '#certificates' },
    { name: 'Projects', link: '#projects' },
  ];
  return (
    <div className={classes.synopsis}>
      <h2 className={classes.title}>synopsis</h2>
      <div className={classes['links-group']}>
        {pages.map((p, i) => {
          return <Link key={`${i}-${id}`} item={p} newTab={false} />;
        })}
      </div>
    </div>
  );
};

export default Synopsis;
