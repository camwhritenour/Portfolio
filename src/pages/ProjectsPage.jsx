import ProjectList from "../components/Projects/Project";

const projects = [
    {
        id: 1,
        name: "Foodr",
        link: "https://camwhritenour.github.io/Foodr/",
        img: "/assets/foodr.png"
    },
    {
        id: 2,
        name: "DataDish",
        link: "https://agile-hollows-63324-0df4568dcdbc.herokuapp.com/login",
        img: "/assets/DataDish.png"
    },
    {
        id: 3,
        name: "Password Generator",
        link: "https://camwhritenour.github.io/Homework03-Password-Generator/",
        img: "/assets/PasswordGen.png"
    },
    {
        id: 4,
        name: "Quiz App",
        link: "https://camwhritenour.github.io/Homework04-Quiz/",
        img: "/assets/Quiz.png"
    },
    {
        id: 5,
        name: "codeCave",
        link: "https://codecave.onrender.com/home",
        img: "/assets/codeCave.png"
    },
    {
        id: 6,
        name: "Fighting Game",
        link: "https://samuraivsknight.netlify.app/",
        img: "/assets/fightingGame.png"
    },
]

export default function Projects() {
    return <ProjectList projects={projects}/>
}