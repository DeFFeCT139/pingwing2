import { useEffect, useState } from "react";
import { FreeMode, Keyboard, Mousewheel, Parallax } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDynamicAdapt } from '../../../module/adop/dynamicAdapt'
import 'swiper/css';
import 'swiper/css/parallax';
import 'swiper/css/mousewheel';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Portfolio() {

    useDynamicAdapt("max") 
    useEffect(()=>{
        document.getElementById('root').style.height = 'auto'
        document.getElementById('root').style.overflow = 'initial'
    })

    let razmer = 380
    if (window.innerWidth < 700) {
        razmer = 40
    }
    return(
        <div className="portfolio">
            <div id='about-text-none' className="about-text-none none">Portfolio</div>
            <div className="portfolio-sliders">
            <Swiper className="swiper1 swiper41"
                modules={[ Parallax , Mousewheel, Keyboard, FreeMode]}
                mousewheel = {true}
                keyboard= {true}
                centeredSlides ={true}
                direction = 'vertical'
                spaceBetween={razmer} 
                onSlideChange={(e) => { 
                    let elment = document.querySelectorAll('.swiper-wrapper')
                    elment[1].style.transform = elment[0].style.transform
                    elment[2].style.transform = elment[0].style.transform
                    elment[3].style.transform = elment[0].style.transform
                }}
                slidesOffsetBefore = {-125}
                slidesPerView={1.5}
                >
                <SwiperSlide data-da=".swiper2>.swiper-wrapper,1300,2">   
                    <div className="slider-item-portfolio slider-item-portfolio1"></div>
                </SwiperSlide>
                <SwiperSlide data-da=".swiper2>.swiper-wrapper,1300,2">
                    <div className="slider-item-portfolio slider-item-portfolio2"></div>
                </SwiperSlide>
                <SwiperSlide data-da=".swiper3>.swiper-wrapper,1300,2">
                    <div className="slider-item-portfolio slider-item-portfolio3"></div>
                </SwiperSlide>
                <SwiperSlide data-da=".swiper3>.swiper-wrapper,1300,2">     
                    <div className="slider-item-portfolio slider-item-portfolio4"></div>
                </SwiperSlide>
            </Swiper>
            <Swiper className="swiper2 swiper41"
                modules={[ Parallax , Mousewheel, Keyboard, FreeMode]}
                mousewheel = {true}
                keyboard= {true}
                centeredSlides ={true}
                direction = 'vertical'
                spaceBetween={razmer} 
                slidesPerGroupAuto={true}
                slidesOffsetBefore = {-475}
                onSlideChange={(e) => {
                    let elment = document.querySelectorAll('.swiper-wrapper')
                    elment[0].style.transform = elment[1].style.transform
                    elment[2].style.transform = elment[1].style.transform
                    elment[3].style.transform = elment[1].style.transform
                }}
                slidesPerView={1.5}
                >
                <SwiperSlide>
                    <div className="slider-item-portfolio slider-item-portfolio5" ></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item-portfolio slider-item-portfolio6"></div>
                </SwiperSlide>
                <SwiperSlide> 
                    <div className="slider-item-portfolio slider-item-portfolio7"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item-portfolio slider-item-portfolio8"></div>
                </SwiperSlide>
            </Swiper>
            <Swiper className="swiper3 swiper41"
                modules={[ Parallax , Mousewheel, Keyboard, FreeMode]}
                mousewheel = {true}
                keyboard= {true}
                centeredSlides ={true}
                direction = 'vertical'
                spaceBetween={razmer} 
                slidesPerGroupAuto={true}
                slidesOffsetBefore = {-125}
                slidesPerView={1.5}
                onSlideChange={(e) => {
                    let elment = document.querySelectorAll('.swiper-wrapper')
                    elment[0].style.transform = elment[2].style.transform
                    elment[1].style.transform = elment[2].style.transform
                    elment[3].style.transform = elment[2].style.transform
                }}
                >
                <SwiperSlide>
                    <div className="slider-item-portfolio slider-item-portfolio9"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item-portfolio slider-item-portfolio10"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item-portfolio slider-item-portfolio11"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item-portfolio slider-item-portfolio12"></div>
                </SwiperSlide>
            </Swiper>
            <Swiper className="swiper4 swiper41"
                modules={[ Parallax , Mousewheel, Keyboard, FreeMode]}
                mousewheel = {true}
                keyboard= {true}
                centeredSlides ={true}
                direction = 'vertical'
                spaceBetween={razmer} 
                slidesPerGroupAuto={true}
                slidesOffsetBefore = {-475}
                slidesPerView={1.5}
                onSlideChange={(e) => {
                    let elment = document.querySelectorAll('.swiper-wrapper')
                    elment[0].style.transform = elment[3].style.transform
                    elment[1].style.transform = elment[3].style.transform
                    elment[2].style.transform = elment[3].style.transform
                }}
                >
                <SwiperSlide data-da=".swiper2>.swiper-wrapper,900,2">
                    <div className="slider-item-portfolio slider-item-portfolio1"></div>
                </SwiperSlide>
                <SwiperSlide data-da=".swiper2>.swiper-wrapper,900,2">
                    <div className="slider-item-portfolio slider-item-portfolio3"></div>
                </SwiperSlide>
                <SwiperSlide data-da=".swiper3>.swiper-wrapper,900,2">
                    <div className="slider-item-portfolio slider-item-portfolio6"></div>
                </SwiperSlide>  
                <SwiperSlide data-da=".swiper3>.swiper-wrapper,900,2">
                    <div className="slider-item-portfolio slider-item-portfolio4"></div>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    )
}

export default Portfolio;