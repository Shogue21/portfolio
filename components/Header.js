import styles from '../styles/Header.module.css'
import Link from 'next/link'

const Header = () => {
    return (
        <div>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>&gt;</button>
                <div className={styles.dropdownContent}>
                    <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link href="/" className="navbar-brand">Home</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link href="/aboutme" className="nav-link">About Me</Link>
                                <Link href="/projects" className="nav-link">Projects</Link>
                                <Link href="/skills" className="nav-link">Skills</Link>
                            </div>
                        </div>
                    </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header
