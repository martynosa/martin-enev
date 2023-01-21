import classes from './Link.module.css';
import { ICertificate, IPage, IProject } from '../../util/interfaces';

const Link: React.FC<{
  item: ICertificate | IProject | IPage;
  newTab: boolean;
}> = ({ item, newTab }) => {
  return (
    <a
      className={classes.link}
      href={item.link}
      target={newTab ? '_blank' : ''}
      rel="noreferrer"
    >
      {item.name}
    </a>
  );
};

export default Link;
