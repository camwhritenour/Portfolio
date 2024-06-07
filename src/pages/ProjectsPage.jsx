import ProjectList from "../components/Projects/Project";

const projects = [
    {
        id: 1,
        description: "Foodr - A simple app to help you decide what to eat.",
        link: "https://camwhritenour.github.io/Foodr/",
        img: "/assets/foodr.png",
        
    },
    {
        id: 2,
        description: "codeCave - A social media to help developers connect on projects.",
        link: "https://codecave.onrender.com/home",
        img: "/assets/codeCave.png"
    },
    {
        id: 3,
        description: "Fighting Game - A pixelated mortal kombat style game, using html and java script.",
        link: "https://samuraivsknight.netlify.app/",
        img: "/assets/fightingGame.png"
    },
    {
        id: 4,
        description: "DataDish - A site that will help you save recipes and build a grocery list from them.",
        link: "https://agile-hollows-63324-0df4568dcdbc.herokuapp.com/login",
        img: "/assets/DataDish.png"
    },
    {
        id: 5,
        description: "Password Generator - Generate passwords based on selected criteria.",
        link: "https://camwhritenour.github.io/Homework03-Password-Generator/",
        img: "/assets/PasswordGen.png"
    },
    {
        id: 6,
        description: "Quiz App - Take a timed quiz and keep track of your scores.",
        link: "https://camwhritenour.github.io/Homework04-Quiz/",
        img: "/assets/Quiz.png"
    },


]

export default function Projects() {
    return <ProjectList projects={projects}/>
}