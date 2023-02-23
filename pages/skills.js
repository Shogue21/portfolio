import Skill from '../components/Skill'
import styles from '../styles/Skills.module.css'

const skills = () => {
    return (
        <div className={`${styles.center}`}>
            <h3 className={`mb-5`}>Skills</h3>
            <div className={`d-flex flex-wrap flex-grow justify-content-center align-items-center shadow-lg w-50 pt-4 ${styles.skills}`}>
            <Skill skill="Python" url="/skillImages/python.png"></Skill>
            <Skill skill="HTML" url="/skillImages/html.png"></Skill>
            <Skill skill="CSS" url="/skillImages/css.png"></Skill>
            <Skill skill="Django" url="/skillImages/django.png"></Skill>
            <Skill skill="React" url="/skillImages/react.png"></Skill>
            <Skill skill="Next.js" url="/skillImages/nextjs.png"></Skill>
            <Skill skill="Golang" url="/skillImages/golang.png"></Skill>
            <Skill skill="Java" url="/skillImages/java.png"></Skill>
            <Skill skill="JavaScript" url="/skillImages/javascript.png"></Skill>
            <Skill skill="TypeScript" url="/skillImages/typescript.png"></Skill>
            <Skill skill="SQL" url="/skillImages/sql.png"></Skill>
        </div>
        </div>
    )
}

export default skills
