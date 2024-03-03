import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <motion.div className={styles.header} initial="hidden" animate="visable" drag dragTransition={{ bounceStiffness: 500, bounceDamping: 5}} dragConstraints={{top: -5, left: -5, right: 5, bottom: 5,}} whileHover={{scale: 1.5}} variants={{
          hidden: {
            scale: .8,
            opacity: 0
          },
          visable: {
            scale: 1.3,
            opacity: 1,
            transition: {
              delay: .1
            }
          }
        }}>
          <p className={styles.dragTip}>Drag me! &#8600;</p>
          <h1 className={styles.title}>Seth Hogue</h1>
          <p className={styles.description}>Full-Stack Software Engineer</p>
        </motion.div>
      </div>
    </div>
  )
}
