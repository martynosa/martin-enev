import classes from './Profile.module.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Nav from '../Common/Nav';
import ThemeNav from '../Common/ThemeNav';
import { useColors } from '../../ColorsContext';
import { IProfile } from '../../util/interfaces';

const Profile: React.FC<{ profile: IProfile }> = ({ profile }) => {
  const { color } = useColors();

  const [text] = useTypewriter({
    words: [profile.name],
    loop: 3,
  });

  return (
    <section className={classes['profile-container']}>
      <Nav github={profile.github} linkedIn={profile.linkedIn} />
      <ThemeNav />
      <div className={classes.details}>
        <div className={classes.summary}>
          <div className={classes.mugshot}></div>

          <h1 className={classes.name}>
            {text}
            <Cursor cursorColor={color} />
          </h1>

          <h2 className={classes.question}>Who am I?</h2>
          <p className={classes.answer}>{profile.summary}</p>
        </div>
        <div className={classes.stack}>
          <h2 className={classes.question}>Tech stack?</h2>
          <div className={classes.tech}>
            <img className={classes.icon} src="/tech-svg/html.svg" alt="html" />
            <img className={classes.icon} src="/tech-svg/css.svg" alt="css" />
            <img
              className={classes.icon}
              src="/tech-svg/javascript.svg"
              alt="javascript"
            />
            <img
              className={classes.icon}
              src="/tech-svg/typescript.svg"
              alt="typescript"
            />
            <img
              className={classes.icon}
              src="/tech-svg/nodejs.svg"
              alt="nodejs"
            />
            <img
              className={classes.icon}
              src="/tech-svg/express.svg"
              alt="express"
            />
            <img className={classes.icon} src="/tech-svg/git.svg" alt="git" />
            <img
              className={classes.icon}
              src="/tech-svg/react.svg"
              alt="react"
            />
            <img
              className={classes.icon}
              src="/tech-svg/redux.svg"
              alt="redux"
            />
            <img
              className={classes.icon}
              src="./tech-svg/angular.svg"
              alt="angular"
            />
            <img
              className={classes.icon}
              src="./tech-svg/firebase.svg"
              alt="firebase"
            />
            <img
              className={classes.icon}
              src="./tech-svg/mongodb.svg"
              alt="mongodb"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
