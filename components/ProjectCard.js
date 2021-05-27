import styles from "../styles/Projects.module.css"
import Tag from '../components/Tag'

import {useState} from 'react'
import Link from 'next/link'
import { render } from "react-dom"

const ProjectCard = ({image, project, description, detailDescription, skills, url, dateCompleted, id}) => {
    const [imgOpacity, setIMGOpacity] = useState(1);
    const [isHovered, setIsHovered] = useState(false);

    const displaySkills = () => {
        return skills.map(skill => <Tag className={styles.tag} key={skill}skill={skill}/>);
    }

    const renderBySentence = () => {
        return detailDescription.split(". ").map(desc => <div key={desc}>{desc}</div>)
    }

    return (
        <div className={`card bg-gray d-flex m-2 ${styles.projectCard} shadow-lg`} style={{width: 300}}>
            <div className={`d-flex flex-column align-items-center p-1`}>
                <img src={image} className="card-img-top" alt="..." style={{opacity: imgOpacity, position: 'relative'}} onMouseOver={() => {setIMGOpacity(0.7); setIsHovered(true) }} onMouseLeave={() => {setIMGOpacity(1); setIsHovered(false)}}></img>
                {isHovered && displaySkills()}
                <h5 className={`card-title mt-2 border-bottom border-3`}>{project}</h5>
            </div>
            <div className="card-body d-flex flex-column justify-content-end">
                <p className="card-text">{description}</p>
                <button type="button" className="btn btn-primary align-bottom" data-bs-toggle="modal" data-bs-target={`#modal${id}`}>View Project</button>
                <div className="modal fade" id={`modal${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{project}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body overflow-scroll">
                            <img src={image} className="image h-100 w-100"/>
                            <h5>Date Completed: </h5>
                            <p>{dateCompleted}</p>
                            <h5>Language(s):</h5>
                            <p>{displaySkills()}</p>
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
