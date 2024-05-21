import React, { useState } from "react";
import "./main.css";
import { AnimatePresence, motion } from "framer-motion";
const myProjects = [
    {   projectTitle: "Logan", 
        githublink: "https://github.com/MohammedEbrahim1999/Logan", 
        category: "html", 
        imgPath: "/imgs/1.jpg" ,
        projectDes: "I worked on the project to design a Responsive website. This was the first Responsive website I made, and I finished it ten months ago and it Give Me More data About Responsive design",
        uses: " Technologies Used: HTML,CSS,JavaScript,Bootstrap",
    },
    {
        projectTitle: "Construction Company",
        githublink: "https://github.com/MohammedEbrahim1999/Construction-Company",
        category: "html",
        imgPath: "/imgs/2.jpg",
        projectDes: "I started learning With made this project and finished it in a short period of time.I tried to make it responsive.",
        uses: " Technologies Used: HTML,CSS,",
    },
    {   projectTitle: "Protofile ",
        githublink: "https://github.com/MohammedEbrahim1999/Protofile", 
        category: "js", 
        imgPath: "/imgs/3.jpg",
        projectDes: "I Made This Website Two Months Ago to Grow My Projects and I Add A lot Of Features Using Js. ",
        uses : "Technologies Used: HTML,CSS,JavaScript,Jquery, Es6",
    },
    {
        projectTitle: "Hospital management System ",
        githublink: "https://github.com/MohammedEbrahim1999/Hospital-management-system",
        category: "js",
        imgPath: "/imgs/4.jpg",
        projectDes: "I participated in this project while working on my graduation project from the university in 2021, and it was discussed with the relevant committee",
        uses :  "Technologies Used: HTML,CSS,JavaScrip",
    },
    {   projectTitle: "Shopping Cart ", 
        githublink: "https://github.com/MohammedEbrahim1999/Shopping-Cart", 
        category: "react", 
        imgPath: "/imgs/5.jpg",
        projectDes: "I made This Project With React FrameWork And It Similar to a food store for ordering food, but it is an incomplete version, I was learning React at the time ",
        uses : "Technologies Used: HTML, CSS, Js, React"
    },
    {
        projectTitle: "Protofile Page ",
        category: "react",
        imgPath: "/imgs/6.jpg",
        projectDes: "This Is My Protofile Page That Contain All Projects I Made And What I Will Do Next, Contain My Cv Also And I Will Make This Page Up To Date Always        ",
        uses : "Technologies Used: HTML, CSS, Js, React"
    },
];
const Main = () => {
    const [curActive, setcurActive] = useState("all");
    const [arr, setArr] = useState(myProjects);
    const handleClick = (buttonCategory) => {
        setcurActive(buttonCategory);
        const newArr = myProjects.filter((item) => {
            return item.category === buttonCategory;
        });
        setArr(newArr);
    };
    return (
        <main className="flex" id="projects">
            <section className="flex left-section">
                <button
                    onClick={() => {
                        setcurActive("all");
                        setArr(myProjects);
                    }}
                    className={curActive === "all" ? "active" : null}
                >
                    All Projects
                </button>
                <button
                    onClick={() => {
                        handleClick("html");
                    }}
                    className={curActive === "html" ? "active" : null}
                >
                    HTML & CSS
                </button>
                <button
                    onClick={() => {
                        handleClick("js");
                    }}
                    className={curActive === "js" ? "active" : null}
                >
                    {" "}
                    JavaScript{" "}
                </button>
                <button
                    onClick={() => {
                        handleClick("react");
                    }}
                    className={curActive === "react" ? "active" : null}
                >
                    React
                </button>
            </section>
            <section className="right-section flex ">
                <AnimatePresence>
                    {arr.map((item) => {
                        return (
                            <motion.article
                                layout
                                initial={{ transform: "scale(0.4)" }}
                                animate={{ transform: "scale(1)" }}
                                transition={{ type: "spring", damping: 20, stiffness: 30 }}
                                key={item.imgPath} className="card">
                                <img width={283} src={item.imgPath} alt="" />
                                <div style={{ width: "283" }} className=" box">
                                    <h1 className="land1-title">{item.projectTitle}</h1>
                                    <p className="land1-subtitle">
                                        {item.projectDes} <span>{item.uses}</span>
                                    </p>
                                    <div className="land1-icons flex">
                                        <div className="flex land1-icons-first">
                                            <a href="item.link" target="_blank">
                                                <div className="icon-link"></div>
                                            </a>
                                            <a href={item.githublink} target="_blank">
                                                <div className="icon-github"></div>
                                            </a>
                                        </div>
                                        <a href="#contact" className="more-icon flex">
                                            More
                                            <span
                                                style={{ alignSelf: "end" }}
                                                className="icon-long-arrow-right"
                                            ></span>
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </AnimatePresence>
            </section>
        </main>
    );
};
export default Main;
