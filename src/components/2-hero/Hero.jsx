import React, { useRef } from "react";
import "./hero.css";
import Lottie from "lottie-react";
import DeveloperAnimation from "../../animation/developer.json";
import { motion } from "framer-motion";
const Hero = () => {
    const lottieRef = useRef();
    return (
        <div id="hero">
            <section className="hero flex">
                <div className="hero-left">
                    <div className="parent-logo flex">
                        <motion.img
                            initial = {{rotate: 360, scale: 0}}
                            animate = {{rotate: 0, scale: 1}}
                            transition= {{damping : 50, type: "spring", stiffness: 100}}
                            src="/imgs/titleimg.png"
                            className="logo"
                            alt="Hero Logo "
                        />
                        <motion.div
                            initial = {{rotate: 360, scale: 0}}
                            animate = {{rotate: 0, scale: 1}}
                            transition= {{damping : 50, type: "spring", stiffness: 100}}
                        className="icon-verified"></motion.div>
                    </div>
                    <motion.h1
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition= {{damping : 50, type: "spring", stiffness: 100}}
                        className="title"
                    >
                        {" "}
                        Front End Developer{" "}
                    </motion.h1>
                    <p className="subtitle">
                        I'm Mohammed Ebrahim, Front End Developer with a passion for
                        creating engaging and user-friendly interfaces. Proficient in HTML,
                        CSS, and JavaScript, with a strong understanding of responsive
                        design principles and cross-browser compatibility. Skilled in
                        utilizing modern frameworks like React to build dynamic web
                        applications. Dedicated to staying updated with the latest trends
                        and technologies in front-end development to deliver cutting-edge
                        solutions. Excellent collaboration and communication skills, able to
                        work effectively in both independent and team settings. Committed to
                        delivering high-quality code and exceptional user experiences.
                    </p>
                    <div className="icons-area flex">
                        <a href="https://twitter.com/mohamed123348" target="_blank"><motion.div
                            initial={{ scale: 0,rotate: 3600 }}
                            animate={{ scale: 1,rotate: 0 }}
                            transition= {{damping : 50, type: "spring", stiffness: 100}}
                            className="icon icon-x"
                        ></motion.div></a>
                        <a href="https://www.instagram.com/mohammedebrahim500?igsh=MWJvbHdhemN2b3ZlMg%3D%3D&utm_source=qr" target="_blank"><motion.div
                            initial={{ scale: 0,rotate: 3600 }}
                            animate={{ scale: 1,rotate: 0 }}
                            transition= {{damping : 50, type: "spring", stiffness: 100}}
                            className="icon icon-instagram"
                        ></motion.div></a>
                        <a href="https://github.com/MohammedEbrahim1999" target="_blank"> <motion.div
                            initial={{ scale: 0,rotate: 3600 }}
                            animate={{ scale: 1,rotate: 0 }}
                            transition= {{damping : 50, type: "spring", stiffness: 100}}
                            className="icon icon-github"
                        ></motion.div></a>
                        <a href="https://www.linkedin.com/in/mohammed-ebrahim-a655471b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank"> <motion.div
                            initial={{ scale: 0,rotate: 3600 }}
                            animate={{ scale: 1,rotate: 0 }}
                            transition= {{damping : 50, type: "spring", stiffness: 100}}
                            className="icon icon-linkedin-square"
                        ></motion.div></a>
                    </div>
                </div>
                <div className="hero-right animation">
                    {/* @TS-Ignore */}
                    {/* // https://lottiereact.com/ */}
                    <Lottie
                        lottieRef={lottieRef}
                        onLoadedImages={() => {
                            lottieRef.current.setSpeed(2);
                        }}
                        className="developer-animation"
                        animationData={DeveloperAnimation}
                    />
                </div>
            </section>
        </div>
    );
};
export default Hero;
