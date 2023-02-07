import { useEffect } from 'react';
import logo from '../../../img/svg/Group 12.svg'
import menu from '../../../img/svg/Vector (3).svg'
import bur from '../../../img/svg/burger.svg'

function Header({languageContent}) {
    
    useEffect(()=>{
        if (document.getElementById("about-text-none").innerText === 'About') {
            window.addEventListener('scroll', function() {
                if (window.innerHeight-window.innerHeight/100*20 >= window.scrollY) {
                    document.getElementById('header').classList.remove('activ')
                    document.getElementById('nav-icon1').classList.remove('nav-icon1')
                }else{
                document.getElementById('header').classList.add('activ')
                document.getElementById('nav-icon1').classList.add('nav-icon1')
                }
            });
        } else {
            document.getElementById('header').classList.add('activ')
            document.getElementById('nav-icon1').classList.add('nav-icon1')
        }
    })

    const openForm = () => document.getElementById('form').style.display = 'block'
    return(
        <div id='header' className="header">
            <div className="conteiner">
                <div id='header-inner' className="header-inner">
                    <img src={bur} alt="" className='header-burger-svg'/>
                    <div className="left-links">
                        <a href='/' className="header-link header-link-home">
                            {languageContent.header.home}
                            <div className="line-link"></div>
                        </a>
                        <a href='/contact' className="header-link">
                            {languageContent.header.contact}
                            <div className="line-link"></div>
                        </a>
                    </div>
                    <a href="/"><img src={logo} alt="" className="header-logo-libk" /></a>
                    <div className="right-links">
                        <a href='/portfolio' className="header-link">
                            {languageContent.header.prtfolio}
                            <div className="line-link"></div>
                        </a>
                        <button onClick={openForm} className="header-link header-btn">
                            {languageContent.header.konsul}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;