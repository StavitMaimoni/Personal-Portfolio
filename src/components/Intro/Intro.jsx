import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import stavit from "../../img/stavit.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";


const Intro = () => {
    // Transition
    const transition = { duration: 2, type: "spring" };

    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="Intro" id="Intro">
            {/* left name side */}
            <div className="i-left">
                <div className="i-name">
                    {/* yahan change hy darkmode ka */}
                    <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
                    <span>Stavit Maimoni</span>
                    <span>
                        Driven and Ambitious Full-Stack Developer with high performance capabilities, <br /><br />
                        Dedicated to delivering exceptional results that exceed expectations.
                    </span>
                </div>
                <Link to="contact" smooth={true} spy={true}>
                    <button className="button i-button">Hire me</button>
                </Link>
                {/* social icons */}
                <div className="i-icons">
                    <a target="_blank" href="https://github.com/StavitMaimoni"> <img src={Github} alt="" /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/stavit-maimoni-5b587623a">  <img src={LinkedIn} alt="" /></a>
                </div>
            </div>
            {/* right image side */}
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={stavit} alt="" />
                {/* animation */}
                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        interval: 10,
                    }} src={glassesimoji}
                    alt=""
                />

                <motion.div
                    initial={{ top: "-4%", left: "80%" }}
                    whileInView={{ left: "71.5%" }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        interval: 10,
                    }} className="floating-div"
                >
                    <FloatinDiv img={crown} text1="Frontend" text2="Developer" />
                </motion.div>

                {/* animation */}
                <motion.div
                    initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "0rem" }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        interval: 10,
                    }} className="floating-div"
                >
                    <FloatinDiv img={thumbup} text1="Backend" text2="Developer" />
                </motion.div>

                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div
                    className="blur"
                    style={{
                        background: "#C1F5FF",
                        top: "17rem",
                        width: "21rem",
                        height: "11rem",
                        left: "-9rem",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Intro;
