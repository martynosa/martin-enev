import classes from './Nav.module.css';

const Nav: React.FC<{ github: string; linkedIn: string }> = ({
  github,
  linkedIn,
}) => {
  const isDark = true;

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <img src="/nav-svg/github.svg" alt="github" />
          <a href={github} target="_blank" rel="noreferrer">
            Github
          </a>
        </li>

        <li>
          <img src="/nav-svg/linkedin.svg" alt="github" />
          <a href={linkedIn} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>
      <button>
        {isDark && <img src="/nav-svg/sun2.svg" alt="sun" />}
        {!isDark && <img src="/nav-svg/moon2.svg" alt="moon" />}
      </button>
    </nav>
  );
};

export default Nav;
