import styles from "./ProjectsStyles.module.css";
import streamwest from "../../assets/viberr.png";
import freshBurger from '../../assets/fresh-burger.png'
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={streamwest}
          link="https://github.com/isaiah-duhart/streamwest"
          h3="Streamwest"
          p="Coming Soon!"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/isaiah-duhart/nba-stat-tracker"
          h3="NBA Stat Tracker"
          p="Coming Soon!"
        />
      </div>
    </section>
  );
}

export default Projects;
