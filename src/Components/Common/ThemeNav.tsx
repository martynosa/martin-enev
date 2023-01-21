import classes from './ThemeNav.module.css';
import { useColors } from '../../Colors-Context';
import { orange, teal, violet } from '../../util/colors';

const ThemeNav: React.FC = () => {
  const { changeColor, changeTheme, isDark } = useColors();

  return (
    <nav className={classes['theme-nav']}>
      <ul>
        <li>
          <button
            className={classes.orange}
            onClick={() => changeColor(orange)}
          ></button>
        </li>
        <span>/</span>
        <li>
          <button
            className={classes.teal}
            onClick={() => changeColor(teal)}
          ></button>
        </li>
        <span>/</span>
        <li>
          <button
            className={classes.violet}
            onClick={() => changeColor(violet)}
          ></button>
        </li>
        <span>/</span>
        <li>
          <button className={classes.theme} onClick={changeTheme}>
            {isDark && <img src="/nav-svg/sun2.svg" alt="sun" />}
            {!isDark && <img src="/nav-svg/moon2.svg" alt="moon" />}
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default ThemeNav;
