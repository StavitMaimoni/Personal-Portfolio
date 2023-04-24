import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Pacman from "../../img/pacman.png";
import Cryptonight from "../../img/cryptonight.png";
import Note from "../../img/noteText.png";
import StavitTv from "../../img/stavitTV.png";
import Travel from "../../img/travel.png";
import Steimatzky from "../../img/steimatzky.png";
import SmartShop from "../../img/smartShop.png";
import OnlyHealth from "../../img/onlyHealth.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio" id="portfolio">
            {/* heading */}
            <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper
                grabCursor={true}
                slidesPerView={'auto'}
                spaceBetween={10}
                className="portfolio-slider"
            >
                <SwiperSlide>
                    <img src={StavitTv} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Pacman} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SmartShop} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Travel} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={OnlyHealth} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Steimatzky} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Cryptonight} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Note} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio;
