import React, { useState } from "react";
import "./main.css";
import { AnimatePresence, motion } from "framer-motion";
const myProjects = [
    // 1
    {
        projectTitle: "E-Commerce Website",
        githubLink: "https://github.com/MohammedEbrahim1999/FrontEnd",
        category: "Mui",
        imgPath: "/imgs/E-Commerce.png",
        projectDes: "I Create This Project With React & Matrial Ui And Use BackEnd Strapi In This Project",
        uses: "Technologies Used :React,MUi,JavaScript,HTML,CSS",
        domainLink: "https://front-end-indol-tau.vercel.app",
    },
    // 2
    {
        projectTitle: "Senaei",
        githubLink: "https://github.com/MohammedEbrahim1999/senaei",
        category: "next",
        imgPath: "/imgs/Senaei.png",
        projectDes: "I made This Project As FreeLance To TURNQY Comapny,I Work With Them For Three Months ",
        uses: "Technologies Used :NextJs , Tailwind Css",
        domainLink: "https://senaei-wbxf.vercel.app/",
    },
    // 3
    {
        projectTitle: "DNK Store",
        githubLink: "https://github.com/MohammedEbrahim1999/dnk-store",
        category: "next",
        imgPath: "/imgs/DNK.png",
        projectDes: "I Made This DNK Store With Nextjs To Learn More And Add It To My Works ",
        uses: "Technologies Used :NextJs , Css ,JavaScript",
        domainLink: "https://dnk-store-njp1.vercel.app/",
    },
    // 4
    {
        projectTitle: "Earth Store",
        githubLink: "https://github.com/MohammedEbrahim1999/earth-store",
        category: "next",
        imgPath: "/imgs/Earth Store.png",
        projectDes: "I Made This Earth Store With Nextjs To Learn More And Add It To My Works ",
        uses: "Technologies Used :NextJs , Css ,JavaScript",
        domainLink: "https://earth-store-red.vercel.app/",
    },
    // 5
    {
        projectTitle: "Prayer",
        githubLink: "https://github.com/MohammedEbrahim1999/Prayer",
        category: "react",
        imgPath: "/imgs/prayer.png",
        projectDes: "i Used An API TO Load Data About prayer And Add it TO The Project ",
        uses: "Technologies Used :React, Css, HTML, APILINK",
        domainLink: "https://prayer-ashy.vercel.app/",
    },
    // 6
    {
        projectTitle: "Food Era",
        githubLink: "https://github.com/MohammedEbrahim1999/FoodEra",
        category: "react",
        imgPath: "/imgs/FoodEra.png",
        projectDes: "I Made This Project With React To Get More Experience With React Framework",
        uses: "Technologies Used :React, Css, HTML",
        domainLink: "https://food-era.vercel.app/",
    },
    // 7
    {
        projectTitle: "Kasper",
        githubLink: "https://github.com/MohammedEbrahim1999/Kasper",
        category: "html",
        imgPath: "/imgs/Kasper.png",
        projectDes: "I made This Project Using HTML And CSS Only To Practise On It",
        uses: "Technologies Used : HTML,Css",
        domainLink: "https://kasper-pi-umber.vercel.app/",
    },
    // 8
    {
        projectTitle: "Hospital Management System",
        githubLink: "https://github.com/MohammedEbrahim1999/Hospital-management-system",
        category: "js",
        imgPath: "/imgs/HMS.png",
        projectDes: "This Was My Graduation Project On 2021 I Work On it With All Team",
        uses: "Technologies Used :HTML, Css, javaScript",
        domainLink: "https://hospital-management-system-three-pink.vercel.app/",
    },
    // 9
    {
        projectTitle: "Protofilo",
        githubLink: "https://github.com/MohammedEbrahim1999/Protofile",
        category: "js",
        imgPath: "/imgs/ProtoFilo.png",
        projectDes: "I Made This Project With HTML,CSS and JS , I Use LocalStorage With This Project",
        uses: "Technologies Used :HTML, Css, javaScript",
        domainLink: "https://protofile-six.vercel.app/",
    },
    // 10
    {
        projectTitle: "Logan",
        githubLink: "https://github.com/MohammedEbrahim1999/Logan-main",
        category: "html",
        imgPath: "/imgs/Logan.png",
        projectDes: "I made This Project Using HTML And CSS Only To Practise On It",
        uses: "Technologies Used :HTML, Css",
        domainLink: "https://logan-main.vercel.app/",
    },
    // 11
    {
        projectTitle: " Construction Company",
        githubLink: "https://github.com/MohammedEbrahim1999/Construction-Comapny",
        category: "html",
        imgPath: "/imgs/Construction.png",
        projectDes: "I made This Project Using HTML And CSS Only To Practise On It",
        uses: "Technologies Used :HTML, Css",
        domainLink: "",
    },
    // 12
    {
        projectTitle: "Protofile Page",
        githubLink: "https://github.com/MohammedEbrahim1999/Protofile-Page",
        category: "react",
        imgPath: "/imgs/ProtoFilo Page.png",
        projectDes: "This Is My Protofile Page That Contain All Projects I Made And What I Will Do Next",
        uses: "Technologies Used :React, Css, HTML",
        domainLink: "",
    },
     // 13
    {
        projectTitle: "Casual Store",
        githubLink: "https://github.com/MohammedEbrahim1999/casualstore",
        category: "Mui",
        imgPath: "/imgs/Casual Store.png",
        projectDes: "NextJs Project Represent Small E-commerce Website Using Mui And Use Next Auth to make Login With Social Media",
        uses: "Technologies Used :NextJs,NextAuth,Mui, Css, HTML",
        domainLink: "https://casualstore.vercel.app/",
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
                <button onClick={() => { setcurActive("all"); setArr(myProjects); }} className={curActive === "all" ? "active" : null}> All Projects </button>
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
                <button
                    onClick={() => {
                        handleClick("next");
                    }}
                    className={curActive === "next" ? "active" : null}
                >
                    NextJs
                </button>
                <button
                    onClick={() => {
                        handleClick("Mui");
                    }}
                    className={curActive === "Mui" ? "active" : null}
                >
                    React & MUI
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
                                <img width={283} src={item.imgPath} alt="ProjectImg" />
                                <div style={{ width: "283" }} className=" box">
                                    <h1 className="land1-title">{item.projectTitle}</h1>
                                    <p className="land1-subtitle">
                                        {item.projectDes} <span>{item.uses}</span>
                                    </p>
                                    <div className="land1-icons flex">
                                        <div className="flex land1-icons-first">
                                            <a href={item.domainLink} target="_blank">
                                                <div className="icon-link"></div>
                                            </a>
                                            <a href={item.githubLink} target="_blank">
                                                <div className="icon-github"></div>
                                            </a>
                                        </div>
                                        <a href={item.domainLink} target="_blank" className="more-icon flex">
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
