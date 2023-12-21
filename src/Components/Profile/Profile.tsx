import classes from "./Profile.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Nav from "../Common/Nav";
import ThemeNav from "../Common/ThemeNav";
import { useColors } from "../../ColorsContext";
import { IProfile } from "../../util/interfaces";

const Profile: React.FC<{ profile: IProfile }> = ({ profile }) => {
  const { color } = useColors();

  const [text] = useTypewriter({
    words: [profile.name],
    loop: 3,
  });

  return (
    <section className={classes["profile-container"]}>
      <Nav gitHub={profile.gitHub} linkedIn={profile.linkedIn} />
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
            <div className={classes.icon}>
              <img src="/tech-svg/html.svg" alt="html" />
              <span className={classes.tooltip}>html</span>
            </div>
            <div className={classes.icon}>
              <img src="/tech-svg/css.svg" alt="css" />
              <span className={classes.tooltip}>css</span>
            </div>
            <div className={classes.icon}>
              <img src="/tech-svg/javascript.svg" alt="javascript" />
              <span className={classes.tooltip}>javascript</span>
            </div>
            <div className={classes.icon}>
              <img src="/tech-svg/typescript.svg" alt="typescript" />
              <span className={classes.tooltip}>typescript</span>
            </div>
            <div className={classes.icon}>
              <img src="/tech-svg/nodejs.svg" alt="nodejs" />
              <span className={classes.tooltip}>nodejs</span>
            </div>
            <div className={classes.icon}>
              <img src="/tech-svg/express.svg" alt="express" />
              <span className={classes.tooltip}>express</span>
            </div>
            <div className={classes.icon}>
              <img src="/tech-svg/git.svg" alt="git" />
              <span className={classes.tooltip}>git</span>
            </div>
            <div className={classes.icon}>
              <img src="/tech-svg/react.svg" alt="react" />
              <span className={classes.tooltip}>react</span>
            </div>
            <div className={classes.icon}>
              <img src="/tech-svg/redux.svg" alt="redux" />
              <span className={classes.tooltip}>redux</span>
            </div>
            <div className={classes.icon}>
              <img src="./tech-svg/angular.svg" alt="angular" />
              <span className={classes.tooltip}>angular</span>
            </div>
            <div className={classes.icon}>
              <img src="./tech-svg/firebase.svg" alt="firebase" />
              <span className={classes.tooltip}>firebase</span>
            </div>
            <div className={classes.icon}>
              <img src="./tech-svg/mongodb.svg" alt="mongodb" />
              <span className={classes.tooltip}>mongodb</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
