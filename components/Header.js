import styles from '../styles/Header.module.css'
import Link from 'next/link'
import {motion} from 'framer-motion'
import {useState} from 'react'

const Header = () => {
    const [navShown, setNavShown] = useState(true);

    return (
        <div>
            <div className={`${styles.dropdown}`}>
                <button onClick={() => {setNavShown(navShown => !navShown)}} className={styles.dropbtn} style={navShown ? {backgroundColor: '#FC813D'} : {backgroundColor: 'inherit'}}>&gt;</button>
                <div className={styles.dropdownContent} style={navShown ? {display: 'inline-flex'} : {display: 'none'}}>
                    <nav className="navbar navbar-expand">
                    <div className="container-fluid">
                        <Link href="/" className="navbar-brand">Home</Link>
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
