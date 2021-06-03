import styles from "../styles/Projects.module.css"

const Tag = ({skill}) => {
    return (
        <div className={`${styles.tag} ${styles.description} p-2`}>
            <p>{skill}</p>
        </div>
    )
}

export default Tag
