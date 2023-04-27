import React, { useContext } from "react";
import "./Skills.css";
import Card from "../Card/Card";
import Languages from "../../img/computer.png";
import DatabaseImg from "../../img/database.png";
import Frameworks from "../../img/js-frameworks.png";
import Tools from "../../img/tools.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Skills = () => {
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    // transition
    const transition = {
        duration: 1,
        type: "spring",
    };

    return (
        <div className="services" id="services">
            {/* left side */}
            <div className="awesome">
                {/* dark mode */}
                <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
                <span>Skills</span>
                <p>
                    My skills include:
                    <br /><br />
                    •	Diligence and the ability to handle multiple tasks while prioritizing effectively.
                    <br /><br />
                    •	Fast independent learning.
                    <br /><br />
                    •	Creative thinking and problem-solving abilities.
                    <br /><br />
                    •	Willingness to learn and adapt to new technologies.
                    <br /><br />
                    •	Excellent customer service and interpersonal skills.
                    <br /><br />
                    •	Hard working, team player with strong organization skills.
                </p>
                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right */}
            <div className="cards">
                {/* first card */}
                <motion.div
                    initial={{ left: "25rem" }}
                    whileInView={{ left: "21.5vw" }}
                    transition={transition}
                >
                    <Card
                        emoji={Languages}
                        heading={"Programming languages"}
                        detail={"JavaScript + TypeScript, JQuery, PHP, CSS+SCSS, HTML"}
                    />
                </motion.div>
                {/* second card */}
                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-2rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={Frameworks}
                        heading={"Frameworks"}
                        detail={"React.JS, Angular.JS, Vue.JS, Next.JS, Node.JS/Express"}
                    />
                </motion.div>
                {/* 3rd */}
                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "21.5vw",top: "12rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={Tools}
                        heading={"Tools"}
                        detail={
                            "Docker,Rest Api,Postman,Swagger,     Redux,Npm"
                        }
                        color="rgba(252, 166, 31, 0.45)"
                    />
                </motion.div>
                {/* 4 card */}
                <motion.div
                    initial={{  left: "25rem" }}
                    whileInView={{ left: "-2rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={DatabaseImg}
                        heading={"Storage & Queues"}
                        detail={
                            "MongoDB,MySql"
                        }
                        color="rgba(252, 166, 31, 0.45)"
                    />
                </motion.div>
                <div
                    className="blur s-blur2"
                    style={{ background: "var(--purple)" }}
                ></div>
            </div>
        </div>
    );
};
export default Skills;
