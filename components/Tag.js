import styles from "../styles/Projects.module.css"

const Tag = ({skill}) => {
    return (
        <div className={`${styles.tag} ${styles.description} d-flex align-items-center justify-content-center`}>
            <p>{skill}</p>
        </div>
    )
}

export default Tag
