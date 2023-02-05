import classes from './ThemeNav.module.css';
import { useColors } from '../../Colors-Context';
import { orange, teal, violet } from '../../util/colors';

const ThemeNav: React.FC = () => {
  const { changeColor, changeTheme, isDark } = useColors();

  return (
    <nav className={classes['theme-nav']}>
      <ul>
        <li>
          <div
            className={classes.orange}
            onClick={() => changeColor(orange)}
          ></div>
        </li>
        <li>
          <span>/</span>
        </li>
        <li>
          <div className={classes.teal} onClick={() => changeColor(teal)}></div>
        </li>
        <li>
          <span>/</span>
        </li>
        <li>
          <div
            className={classes.violet}
            onClick={() => changeColor(violet)}
          ></div>
        </li>
        <li>
          <span>/</span>
        </li>
        <li>
          <div className={classes.theme} onClick={changeTheme}>
            {isDark && <img src="/nav-svg/sun2.svg" alt="sun" />}
            {!isDark && <img src="/nav-svg/moon2.svg" alt="moon" />}
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default ThemeNav;
