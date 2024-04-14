
export default function ProjectList (props) {
    return (
        <section className="projects-group">
            {props.projects.map(item => (
                <figure className="project-item" key={item.id}>
                    <h3 className="project-title">{item.name}</h3>
                    <img src={item.img} className="project-image"/>
                </figure>
            ))}
        </section>
    )

}
