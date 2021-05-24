import "../styles/Projects.module.css"

import {useState} from 'react'

const ProjectCard = ({image, project, description}) => {
    const [imgOpacity, setIMGOpacity] = useState(1);

    return (
        <div className="card" style={{width: 300}}>
            <img src={image} className="card-img-top" alt="..." style={{opacity: imgOpacity}} onMouseOver={() => {setIMGOpacity(0.7)}} onMouseLeave={() => {setIMGOpacity(1)}}/>
            <h5 className="card-title">{project}</h5>
            <div className="card-body">
                <p className="card-text">{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard
