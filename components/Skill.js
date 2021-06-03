import styles from '../styles/Skills.module.css'

const Skill = ({skill, url}) => {
    return (
        <div className={styles.skill}>
            <h5>{skill}</h5>
            <img src={url}></img>
        </div>
    )
}

export default Skill
