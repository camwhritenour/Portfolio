import React from "react";
import "./Hero.css";

export default function Hero() {
    return (
        <>
            <section className="hero-container">
                <div className="hero-content">
                    <h2>Creating an Inspirational Digital Future</h2>
                    <p>
                        Passionate Full Stack Developer | Taking New Ideas from Concept to Reality | Solving Tomorrow's Problems with Today's Creativity
                    </p>
                </div>

                <div className="hero-img">
                    <div>
                        <div className="tech-icon">
                            <img src="src/assets/react.svg" />
                        </div>
                        <img src="src/assets/portrait.svg" alt="" />
                    </div>

                    <div>
                        <div className="tech-icon">
                            <img src="src/assets/html5.svg" />
                        </div>
                        <div className="tech-icon">
                            <img src="src/assets/css.svg" />
                        </div>
                        <div className="tech-icon">
                            <img src="src/assets/javascript.svg" />
                        </div>
                        <div className="tech-icon">
                        <img src="src/assets/mongodb.svg"/>
                    </div>
                    </div>
                </div>
            </section>
            <article className="hero-content">
                <h2>About Me</h2>
                <p>
                    I was born and raised in a small town in Southern Illinois. Growing up I wanted to do a little bit
                    of everything, so I joined as many extracurriculars that I could. This included: Baseball,
                    Basketball, Football, Soccer, Band, Scholar Bowl, Cross Country, Track, Student Council, and
                    Spelling Bees (1st Place in 7th Grade). When I got to highschool I toned it down a little and only
                    did Football, Baseball, Student Council, and NHS my senior year. Heading in to graduation, I had
                    always known that I didn't want to stay around my hometown, so I applied to a handful of colleges
                    around the country. After visiting Baylor I was impressed with both their campus and academics. A
                    few months after my visit I recieved a scholarship opportunity from Baylor, which made my decision
                    pretty easy. When I got to college I decided I was going to focus on myself and growing as an
                    individual. In my 4 years I graduated from Hankamer School of Business with a BBA in
                    Entrepreneurship. It has always been my dream of one day starting my own business, so what better way to
                    prepare than learning all the different aspects of business while honing my entrepreneurial mindset.
                    Two weeks after graduating I began working as Financial Advisor for a promising young company. I
                    worked there for a year where I learned a lot about sales, time management, organization, and
                    generally how businesses operate. Near the end of my finance career I did a lot of personal
                    reflecting on my current situation and what I actually wanted to do with my life. It didn't take me
                    long to realize that I wanted to create things, whether that be something physical or digital. I
                    felt a deep desire to create/build. Now that I knew what I wanted to do and recognizing my
                    intermediate knowledge of computers, it only made sense for me to jump headfirst into coding.
                </p>
                <p>
                    My interest in computers started at a young age, mainly because of video games. I bought my first
                    desktop computer when I was 12, for the sole purpose of playing java minecraft and being able to use
                    mods. I then lost interest in computers for a brief period, mainly because I didn't fully understand
                    them at the time. After a few years of my old PC collecting dust, I started doing more research on
                    computers and how they worked, which lead to me selling my old PC and building my first PC in 2017.
                    Then after my first year of college I saved up some money, sold the computer I had built, and began
                    buidling my second PC that I wanted to be as future proof as I could. This is still the main PC I
                    use today. I understood how computers work and what makes them work, but for whatever reason I was
                    always intimidated by software and learning to code. This is very out of character for me as I have
                    always thought of myself as being capabale of anything I put my mind to. Finally, I got past those
                    mental blocks and enrolled in a Coding Bootcamp through Rice University.
                </p>
            </article>
        </>
    )
}