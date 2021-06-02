import styles from '../styles/Skills.module.css'

const Skill = ({skill, url}) => {
    //To Do:
    // Less horizontal space between, more vertical
    // Similar background to about me?
    // Similar layout to projects?
    return (
        <div className={styles.skill}>
            <h5>{skill}</h5>
            <img src={url}></img>
        </div>
    )
}

export default Skill
