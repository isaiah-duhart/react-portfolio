import styles from './ProjectsStyles.module.css'
import nbaLogo from '../../assets/nba-logo.png'
import messageLogo from '../../assets/green-messenger.png'
import spotifyLogo from '../../assets/spotify.jpeg'
import apiLogo from '../../assets/api.jpeg'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
	return (
		<section id='projects' className={styles.container}>
			<h1 className='sectionTitle'>Projects</h1>
			<div className={styles.projectsContainer}>
				<ProjectCard
					src={spotifyLogo}
					link='https://github.com/isaiah-duhart/spoti-shuffle'
					h3='Spoti-Shuffle'
					p='Actually Random Spotify Shuffle'
				/>
				<ProjectCard
					src={apiLogo}
					link='https://github.com/isaiah-duhart/spoti-api'
					h3='Spoti-Api'
					p='Backend of Spoti-Shuffle'
				/>
        <ProjectCard
					src={messageLogo}
					link='https://github.com/isaiah-duhart/zMessage'
					h3='zMessage'
					p='Coming Soon&trade;!'
				/>
				<ProjectCard
					src={nbaLogo}
					link='https://github.com/isaiah-duhart/nba-stat-tracker'
					h3='NBA Stat Tracker'
					p='Coming Soon&trade;!'
				/>
			</div>
		</section>
	)
}

export default Projects
