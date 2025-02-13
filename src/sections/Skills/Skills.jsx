import SkillList from '../../common/SkillList'
import styles from './SkillsStyles.module.css'

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
            <SkillList skill="C" />
            <SkillList skill="C#" />
            <SkillList skill="Java" />
            <SkillList skill="Python" />
            <SkillList skill="Kotlin" />
            <SkillList skill="SQL" />
            <SkillList skill="HTML" />
            <SkillList skill="CSS" />
            <SkillList skill="JavaScript" />

        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList skill="React" />
            <SkillList skill="Node.JS" />
            <SkillList skill="Spring Boot" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList skill="GIT" />
            <SkillList skill="Jira" />
            <SkillList skill="Linux" />
            <SkillList skill="Ghidra" />
            <SkillList skill="REST API" />
            <SkillList skill="Android" />
        </div>
    </section>
  )
}

export default Skills