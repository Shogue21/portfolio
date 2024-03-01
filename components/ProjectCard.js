import styles from "../styles/Projects.module.css"
import Tag from '../components/Tag'

import {useState} from 'react'

const ProjectCard = ({image, project, description, detailDescription, skills, url, dateCompleted, id}) => {
    //To Do:
    //Fix hover skills
    const [imgOpacity, setIMGOpacity] = useState(1);
    const [isHovered, setIsHovered] = useState(false);

    const displaySkillsMain = () => {
        return skills.map(skill => <Tag key={skill}skill={skill}/>);
    }
    const displaySkillsDetail = () => {
        return skills.map(skill => <div className={`${styles.description}`} key={skill}>{skill}</div>);
    }

    const renderBySentence = () => {
        return detailDescription.split(". ").map(desc => <div className={styles.description} key={desc}>{desc}</div>)
    }

    return (
        <div className={`card bg-gray d-flex m-2 ${styles.projectCard} shadow-lg`} style={{width: 300}}>
            <div className={`d-flex flex-column align-items-center p-1`}>
                <img src={image} className="card-img-top" alt="..." style={{opacity: imgOpacity, position: 'relative'}} onMouseOver={() => {setIMGOpacity(0.7); setIsHovered(true) }} onMouseLeave={() => {setIMGOpacity(1); setIsHovered(false)}}></img>
                <div className={`d-flex flex-row align-items-top`}>
                {isHovered && displaySkillsMain()}
                </div>
                <h5 className={`card-title mt-2 border-bottom border-3`}>{project}</h5>
            </div>
            <div className="card-body d-flex flex-column justify-content-end">
                <p className={`card-text ${styles.description}`}>{description}</p>
                <button type="button" className="btn btn-primary align-bottom" data-bs-toggle="modal" data-bs-target={`#modal${id}`}>View Project</button>
                <div className="modal fade" id={`modal${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{project}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body overflow-scroll">
                            <img src={image} className={`${styles.image} image h-100 w-100`}/>
                            <h5>Date Completed: </h5>
                            <p className={styles.description}>{dateCompleted}</p>
                            <h5>Language(s):</h5>
                            {displaySkillsDetail()}
                            <br/>
                            <h5>Project Overview:</h5>
                            {renderBySentence()}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <a href={url} target="blank"><button type="button" className="btn btn-primary">Go to site</button></a>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default ProjectCard
