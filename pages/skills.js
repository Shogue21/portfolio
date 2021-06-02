import Skill from '../components/Skill'
import styles from '../styles/Skills.module.css'

const skills = () => {
    return (
        <div className={`${styles.center}`}>
            <h3 className={`mb-2`}>Skills</h3>
            <div className={`d-flex flex-wrap justify-content-evenly align-items-center mb-3 ${styles.fill}`}>
            <Skill skill="Python" url="/skillImages/python.png"></Skill>
            <Skill skill="HTML" url="/skillImages/html.png"></Skill>
            <Skill skill="CSS" url="/skillImages/css.png"></Skill>
            <Skill skill="Django" url="/skillImages/django.png"></Skill>
            <Skill skill="React" url="/skillImages/react.png"></Skill>
            <Skill skill="Next.js" url="/skillImages/nextjs.png"></Skill>
            <Skill skill="Golang" url="/skillImages/golang.png"></Skill>
        </div>
        </div>
    )
}

export default skills
