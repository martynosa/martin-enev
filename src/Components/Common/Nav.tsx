import classes from './Nav.module.css';

const Nav: React.FC<{ gitHub: string; linkedIn: string }> = ({
  github,
  linkedIn,
}) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <img src="/nav-svg/github.svg" alt="github" />
          <a href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <span>/</span>
        </li>
        <li>
          <img src="/nav-svg/linkedin.svg" alt="github" />
          <a href={linkedIn} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
