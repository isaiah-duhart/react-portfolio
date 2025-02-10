import styles from "./ProjectsStyles.module.css";
import ticTacToeLogo from "../../assets/tic-tac-toe.png";
import nbaLogo from '../../assets/nba-logo.png'
import messageLogo from '../../assets/green-messenger.png'
import flavourHubLogo from '../../assets/chef.png'
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={messageLogo}
          link="https://github.com/isaiah-duhart/zMessage-sockets"
          h3="zMessage"
          p="Command Line Messaging"
        />
        <ProjectCard
          src={flavourHubLogo}
          link="https://github.com/isaiah-duhart/flavour-hub"
          h3="Flavour Hub"
          p="Recipe Sharing Website"
        />
        <ProjectCard
          src={ticTacToeLogo}
          link="https://github.com/isaiah-duhart/tic-tac-toe"
          h3="Tic-Tac-Toe"
          p="Challenge a Friend!"
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
