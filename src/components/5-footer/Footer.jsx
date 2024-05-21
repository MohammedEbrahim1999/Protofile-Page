import React from "react";
import './footer.css';

const Footer = () => {
    return (
        <footer className="flex">
            <ul className="flex">
                <li><a href="#hero"> Home </a></li>
                <li><a href="#projects"> Projects </a></li>
                <li><a href="#contact"> Contact </a></li>
                <li> <a href="/mycv/MohammedResume.pdf" download="MohammedResume"> My Cv </a></li>
            </ul>
            <p> &copy; 2024 Mohammed Ebrahim Protofile, All Right Reserved.  </p>
        </footer>
    );
}
export default Footer ;