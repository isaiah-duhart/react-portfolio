import styles from "./HeroStyles.module.css";
import heroImage from "../../assets/final-headshot.png";
import sun from "../../assets/sun.svg";
import moon from '../../assets/moon.svg';
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from '../../assets/Isaiah_Duhart.pdf'
import {useTheme } from '../../common/ThemeContext'

function Hero() {
  const {theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImage}
          alt="Profile picture of Isaiah Duhart"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Isaiah
          <br />
          Duhart
        </h1>
        <h2>Software Developer</h2>
        <span>
          <a href="https://www.linkedin.com/in/isaiah-duhart/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
          <a href="https://www.github.com/isaiah-duhart" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
        </span>
        <p className={styles.description}>
          I am a Senior majoring in Computer Science at Virginia Tech. I enjoy working on frontend and backend projects. I am looking for full-time software development positions after I graduate this Spring.
        </p>
        <a href={CV} download> 
          <button className="hover">
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
