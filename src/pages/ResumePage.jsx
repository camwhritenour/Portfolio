

export default function ResumePage() {
    return (
        <>
            <div className="resume-container">
                <h2>
                    Work Experience
                </h2>
                <h3>
                    49 Financial
                </h3>
                <p>
                    Associate Financial Planner 2022-2023
                </p>
                <hr />
                <br />
                <h2>
                    Education
                </h2>
                <h3>Baylor University</h3>
                <p>
                    Bachelor of Business Adminstration - Entrepreneurship 2022
                </p>
                <hr />
                <br />
                <h3>Rice University Coding Bootcamp</h3>
                <p>
                    Full Stack Web Development Certificate 2024
                </p>
                <hr />
                <br />
                <h2>Skills</h2>
                <h3>Software Development</h3>
                <p>
                JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, MongoDB, MySQL, Express, React, Node, Handlebars, jQuery, Bootstrap
                </p>
                <hr />
                <br />
                <button onClick={() => {window.open(`https://drive.google.com/uc?export=download&id=1IV1EAM5cDR46vhbi5YKw1vz3wPm7tbMx`)}}>Download My Resume</button>
            </div>
        </>
    )
}
