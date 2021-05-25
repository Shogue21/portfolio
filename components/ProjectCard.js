import "../styles/Projects.module.css"
import Tag from '../components/Tag'

import {useState} from 'react'
import Link from 'next/link'

const ProjectCard = ({image, project, description, skills, url}) => {
    const [imgOpacity, setIMGOpacity] = useState(1);
    const [isHovered, setIsHovered] = useState(false);

    const displaySkills = () => {
        skills.forEach(skill => {return <Tag skill={skill}/>});
    }

    return (
        <div className="card" style={{width: 300}}>
            <img src={image} className="card-img-top" alt="..." style={{opacity: imgOpacity, position: 'relative'}} onMouseOver={() => {setIMGOpacity(0.7); setIsHovered(true) }} onMouseLeave={() => {setIMGOpacity(1); setIsHovered(false)}}></img>
            {isHovered && displaySkills()}
            <h5 className="card-title">{project}</h5>
            <div className="card-body">
                <p className="card-text">{description}</p>
                <a className="link" href={url} target="blank"><button>View Project</button></a>
            </div>
        </div>
    )
}

export default ProjectCard
