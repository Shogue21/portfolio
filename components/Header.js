import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>V</button>
                <div className={styles.dropdownContent}>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
        </div>
    )
}

export default Header
