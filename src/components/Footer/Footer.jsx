import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{ width: "100%"}} />
            <div className="f-content">
                <span>stavitmaimoni@gmail.com</span>
                <div className="f-icons">
                    <a target="_blank" href="https://github.com/StavitMaimoni"> <Gitub color="white" size={"3rem"} />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/stavit-maimoni-5b587623a"><LinkedIn color="white" size={"3rem"} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
