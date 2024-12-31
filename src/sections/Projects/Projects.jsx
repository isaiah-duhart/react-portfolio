import styles from "./ProjectsStyles.module.css";
import streamwest from "../../assets/viberr.png";
import nbaLogo from '../../assets/nba-logo.png'
import messageLogo from '../../assets/green-messenger.png'
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={messageLogo}
          link="https://github.com/isaiah-duhart/zMessage"
          h3="zMessage"
          p="Instant Messaging Application"
        />
        <ProjectCard
          src={streamwest}
          link="https://github.com/isaiah-duhart/streamwest"
          h3="Streamwest"
          p="Coming Soon!"
        />
        <ProjectCard
          src={nbaLogo}
          link="https://github.com/isaiah-duhart/nba-stat-tracker"
          h3="NBA Stat Tracker"
          p="Coming Soon!"
        />
      </div>
    </section>
  );
}

export default Projects;
