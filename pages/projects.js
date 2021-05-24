import styles from '../styles/Projects.module.css'
import ProjectCard from '../components/ProjectCard'

const projects = () => {
    return (
        <div className={styles.container}>
            <ProjectCard image="/projectImages/muscially.png" project="Muscial.ly" description="A fun music kit site made in React and JavaScript"/>
            <ProjectCard image="/projectImages/quizgo.png" project="Quizgo" description="A quiz game made in Django"/>
            <ProjectCard image="/projectImages/ReactPokeRPS.png" project="Pokemon Rock, Paper, Scissors" description="A turn based, Rock, Paper, Scissors type health depleter game, created with React." />
            <ProjectCard image="/projectImages/ReservME.png" project="ReservME" description="A mock hotel reservation site created with Next.js" />
        </div>
    )
}

export default projects
