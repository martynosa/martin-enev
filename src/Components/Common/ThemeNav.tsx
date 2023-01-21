import classes from './ThemeNav.module.css';

const ThemeNav: React.FC = () => {
  const isDark = true;
  return (
    <nav className={classes['theme-nav']}>
      <ul>
        <li>
          <button className={classes.orange}></button>
        </li>
        <span>/</span>
        <li>
          <button className={classes.teal}></button>
        </li>
        <span>/</span>
        <li>
          <button className={classes.violet}></button>
        </li>
        <span>/</span>
        <li>
          <button className={classes.theme}>
            {isDark && <img src="/nav-svg/sun2.svg" alt="sun" />}
            {!isDark && <img src="/nav-svg/moon2.svg" alt="moon" />}
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default ThemeNav;
