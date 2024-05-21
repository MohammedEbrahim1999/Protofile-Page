import React, { useState } from "react";
import "./header.css";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
    const [showModel, setshowModel] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("Current Mode")?? "light");
    useEffect(() => {
        if(theme === "light"){
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        }else{
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    },[theme])
    return (
        <header className="flex">
            <button className="menu icon-menu flex" onClick={() => {
                setshowModel(true)
            }} />
            <div />
            <nav>
            <motion.ul initial={{ scale: 0 }} animate={{ scale: 1 }} transition= {{damping : 50, type: "spring", stiffness: 100}} className="flex">
                <li>
                    <a href="#hero"> Home </a>
                </li>
                <li>
                    <a href="#projects"> Projects </a>
                </li>
                
                <li>
                    <a href="#contact"> Contact Me </a>
                </li>
                <li>
                    <a href="/mycv/MohammedResume.pdf" download="MohammedResume"> My Cv </a>
                </li>
            </motion.ul>
        </nav>
        <motion.button initial={{ scale: 0 }}  animate={{ scale: 1 }} transition= {{damping : 50, type: "spring", stiffness: 100}} onClick={() => {
            // Send Value To Local Storege
            localStorage.setItem("Current Mode", theme === "dark" ? "light" : "dark");
            // Get Value From Local Storage
            setTheme(localStorage.getItem("Current Mode"));

        }} className="mode flex"> 
            {theme === "dark" ? (<span className="icon-moon-o"></span>) : (<span className="icon-sun"></span>)}
            {/* <span className="icon-sun"></span> */}
        </motion.button>


        {showModel && (
            <div className="fixed">
                <ul className="popup-model">
                    <li> <button onClick={() => { setshowModel(false) }} className="icon-remove" /> </li>
                    <li> <a href="#hero"> Home </a> </li>
                    <li> <a href="#projects"> Projects </a> </li>
                    <li> <a href="#contact"> Contact Me </a> </li>
                    <li><a href="/mycv/MohammedResume.pdf" download="MohammedResume"> My Cv </a></li>
                </ul>
            </div>
        )}
        </header>
    );
};
export default Header;
