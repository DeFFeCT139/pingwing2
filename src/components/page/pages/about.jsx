import pc from '../../../img/svg/image 3 (1).svg'
import phone from '../../../img/svg/3 1 (1).svg'
import bot from '../../../img/svg/image 4 (1).svg'
import phone2 from '../../../img/svg/Frame 9.svg'
import ListInfo from '../../site/sliderDesc/listInfo'
import cube from '../../../img/svg/Rectangle 5.svg'
import cube2 from '../../../img/svg/Rectangle 21.svg'
import fish from '../../../img/svg/Group 16.svg'
import fish2 from '../../../img/svg/Vector.svg'
import { useEffect, useState } from 'react'
import 'swiper/css';
import ScrollMagic from 'scrollmagic'
import { Swiper, SwiperSlide } from 'swiper/react';
import MyTeam from '../../site/myTeam/myTeam'


function About({languageContent}) {
    let about = languageContent.main.about
    let components = 'site'


    const [component, setComponent] = useState(components)
    const site = () =>{
        setComponent(components = 'site')
        let blocks = document.getElementsByClassName('about-skills-trap-item')
        for (let index = 0; index < blocks.length; index++) {
            blocks[index].classList.remove('activeBlock')
        }
        document.getElementById('site').classList.add('activeBlock')
    };
    const apps = () =>{
        setComponent(components = 'app')
        let blocks = document.getElementsByClassName('about-skills-trap-item')
        for (let index = 0; index < blocks.length; index++) {
            blocks[index].classList.remove('activeBlock')
        }
        document.getElementById('apps').classList.add('activeBlock')
    };
    const bots = () =>{
        setComponent(components = 'bot')
        let blocks = document.getElementsByClassName('about-skills-trap-item')
        for (let index = 0; index < blocks.length; index++) {
            blocks[index].classList.remove('activeBlock')
        }
        document.getElementById('bots').classList.add('activeBlock')
    };
    const smms = () =>{
        setComponent(components = 'smm')
        let blocks = document.getElementsByClassName('about-skills-trap-item')
        for (let index = 0; index < blocks.length; index++) {
            blocks[index].classList.remove('activeBlock')
        }
        document.getElementById('smms').classList.add('activeBlock')
    };
    let razmer = 3
    const [raz, setRaz] = useState(razmer)
    useEffect(()=>{
        document.title = "PINGWING " + about.titlePage
        if (document.getElementById('swoper').offsetWidth/ 250 <= 3) {
            setRaz(razmer = document.getElementById('swoper').offsetWidth/ 250)
        }
        var controller = new ScrollMagic.Controller
        var scen = new ScrollMagic.Scene({triggerElement: "#trigger"})
        scen.setClassToggle('.myTeam-item-item', 'itemAnime')
        scen.addTo(controller)

    })

    const btnDribl = () => document.location.href = "https://dribbble.com/pingwing";
    return(
        <div className="conteiner">
            <div id='about-text-none' className="about-text-none none">About</div>
            <div className="about page-pading">
                <div className="about-page-title">
                    <div className="page-title">{about.title}</div>
                    <div className="page-desc">{about.desc}</div>
                    <button onClick={btnDribl} className='pade-btn'>{about.btn}</button>
                    <div id='swoper' className="about-skills" >
                        <Swiper spaceBetween={50} slidesPerView={raz}>
                            <SwiperSlide>
                                <div id='site' onClick={site} className="about-skills-trap-item activeBlock">
                                    <div className="about-skills-trap-item-img">
                                        <img src={pc} alt="" className="about-skills-trap-item-image" />                            </div>
                                    <div className="about-skills-trap-item-title">{about.slider.site.title}</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div id='apps' onClick={apps} className="about-skills-trap-item">
                                    <div className="about-skills-trap-item-img">
                                        <img src={phone} alt="" className="about-skills-trap-item-image" />                            </div>
                                        <div className="about-skills-trap-item-title">{about.slider.app.title}</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div id='bots' onClick={bots} className="about-skills-trap-item">
                                    <div className="about-skills-trap-item-img">
                                        <img src={bot} alt="" className="about-skills-trap-item-image" />                            </div>
                                    <div className="about-skills-trap-item-title">{about.slider.bot.title}</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div id='smms' onClick={smms} className="about-skills-trap-item">
                                    <div className="about-skills-trap-item-img">
                                        <img src={phone2} alt="" className="about-skills-trap-item-image" />                            </div>
                                    <div className="about-skills-trap-item-title">{about.slider.smm.title}</div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="about-skills-desc" >
                            <ListInfo languageContent={about} components={component}/>
                        </div>
                        <div className="about-myteam-block none" id='trigger' >
                            <div className="about-myteam-block-name-page" >
                                <div className="about-myteam-block-name-page-title">Наша команда</div>
                                <div className="about-myteam-block-name-page-decs">Знакомьтесь, это мы :)</div>
                            </div>
                            <MyTeam/>
                        </div>
                    </div>
                </div >
            </div >
            <img src={cube} alt="" className="about-cube-one cube-fish" />
            <img src={cube2} alt="" className="about-cube-two cube-fish" />
            <img src={fish} alt="" className="about-fihe-one cube-fish" />
            <img src={fish2} alt="" className="about-fihe-two cube-fish" />
        </div>
    )
}

export default About;