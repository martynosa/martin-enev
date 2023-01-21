import { useTypewriter, Cursor } from 'react-simple-typewriter';

import { IProfile } from '../../../interfaces';
import Nav from '../Common/Nav';
import classes from './Profile.module.css';

const Profile: React.FC<{ profile: IProfile }> = ({ profile }) => {
  const [text] = useTypewriter({
    words: [profile.name],
    loop: 0,
  });

  return (
    <section className={classes.container}>
      <Nav github={profile.github} linkedIn={profile.linkedIn} />
      <div className={classes.details}>
        <div className={classes.mugshot}></div>

        <h1 className={classes.name}>
          {text}
          <Cursor cursorColor={'#ff922b'} />
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
          <img className={classes.icon} src="/tech-svg/react.svg" alt="react" />
          <img className={classes.icon} src="/tech-svg/redux.svg" alt="redux" />
          <img
            className={classes.icon}
            src="./tech-svg/angular.svg"
            alt="angular"
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
