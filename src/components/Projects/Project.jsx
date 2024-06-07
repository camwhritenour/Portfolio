import { Link } from "react-router-dom"
import "./Project.css"

export default function ProjectList (props) {
    return (
        <section className="projects-group">
            {props.projects.map(item => (
                <figure className="project-item" key={item.id}>
                    <img src={item.img} className="project-image" onClick={(e) => {window.open(item.link)}}/>
                    <h3 className="project-info">{item.description}</h3>
                </figure>
            ))}
        </section>
    )

}
