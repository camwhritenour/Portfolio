import ProjectList from "../components/Project";

const projects = [
    {
        id: 1,
        name: "Foodr",
        link: "",
        img: "/src/components/UI/images/foodr.png"
    },
    {
        id: 2,
        name: "DataDish",
        link: "",
        img: ""
    },
    {
        id: 3,
        name: "Password Generator",
        link: "",
        img: ""
    },
    {
        id: 4,
        name: "Coding Quiz",
        link: "",
        img: ""
    },
]

export default function Projects() {
    return <ProjectList projects={projects}/>
}