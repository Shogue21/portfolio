import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion';

export default function Home() {

  //To Do:
  // Make name bigger
  return (
    <div>
      <div className={styles.container}>
        <motion.div className={styles.header} initial="hidden" animate="visable" drag dragTransition={{ bounceStiffness: 500, bounceDamping: 5}} dragConstraints={{top: -50, left: -50, right: 50, bottom: 50,}} whileHover={{scale: 1.1}} variants={{
          hidden: {
            scale: .8,
            opacity: 0
          },
          visable: {
            scale: 1.3,
            opacity: 1,
            transition: {
              delay: .4
            }
          }
        }}>
          <h1 className={styles.title}>Seth Hogue</h1>
          <p className={styles.description}>Full-Stack Software Engineer</p>
        </motion.div>
      </div>
    </div>
  )
}
