import styles from '../styles/About.module.css'
import {motion} from 'framer-motion'

const aboutme = () => {
    //To Do:
    // 2 Paragraphs
    // More attention to contact links
    // Semi-transparent background of different color (orange/gray)?
    return (
        <>
        <div className={`${styles.container}`}>
            <div className={`${styles.centered} shadow-lg p-3`}>
                <h3 className={styles.title}>About Me</h3>
                <p className={`${styles.description}`}>Hey, my name is Seth Hogue. I am a student at <a className={styles.link} target="blank" href="https://basecampcodingacademy.org/">Base Camp Coding Academy</a> pursuing a career as a full-stack software engineer. Before BCCA, I had 0 coding experience but during my time at BCCA, I have been excelling in my work and have developed a love for coding. Software development has been great for me because it allows me to express my creativity and solve interesting problems.</p>
                <p className={`${styles.description}`}>A fun focus of mine has been creating small game websites such as my Pokemon RPS site built in React and my Quizgo site built with Django. If you're interested in learning more about these projects, feel free to check some of them out in my projects section! I'm also available to chat through LinkedIn or email!</p>
            </div>
        </div>
        <div className={`d-flex justify-content-center mb-5`}><h3>Contact Me!</h3></div>
        <div className={`${styles.images} pb-3`}>
            <motion.a whileHover={{scale: 1.2}} href="https://www.linkedin.com/in/seth-hogue/" target="blank"><img src="/contactImages/linkedin.png"/></motion.a>
            <motion.a whileHover={{scale: 1.2}} href="https://github.com/Shogue21" target="blank"><img src="/contactImages/github.png"/></motion.a>
            <motion.a whileHover={{scale: 1.2}} href="mailto: sethhogue5@gmail.com" target="blank"><img src="/contactImages/gmail.png"/></motion.a>
        </div>
        </>
    )
}

export default aboutme
