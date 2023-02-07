import beh from '../../../img/svg/Subtract12331.svg'
import inst from '../../../img/svg/Vector (2).svg'
import tg from '../../../img/svg/tg.svg'
import mail from '../../../img/svg/Subtract123.svg'
import { useEffect } from 'react';
import cube from '../../../img/svg/Rectangle 5.svg'
import cube2 from '../../../img/svg/Rectangle 22.svg'
import fish from '../../../img/svg/Group 16.svg'
import fish2 from '../../../img/svg/Vector.svg'

function Contact({languageContent}) {

    useEffect(()=>{
        document.title = languageContent.main.contact.titlePage
        document.getElementById('root').style.height = 'auto'
        document.getElementById('root').style.overflow = 'initial'
      })

    return(
        <div className="conteiner">
            <div className="Contact">
            <div id='about-text-none' className="about-text-none none"> About3</div>
                <div className="Contact-page-title">
                    <div id='page-name' className="none">контакты</div>
                    <div className="page-title">{languageContent.main.contact.title}</div>
                    <div className="page-desc">{languageContent.main.contact.desc}</div>
                    <div className="contact-liks">
                        <a target='_blank' href='https://dribbble.com/pingwing' className="contact-link">
                            <img src={beh} alt="" className="contact-links-icon" />
                        </a>
                        <a target='_blank' href='https://www.instagram.com/pingwing.ru/' className="contact-link">
                            <img src={inst} alt="" className="contact-links-icon" />
                        </a>
                        <a target='_blank' href='https://t.me/pingwingstudio' className="contact-link">
                            <img src={tg} alt="" className="contact-links-icon" />
                        </a>
                        <a target='_blank' href='https://www.tiktok.com/@pingwing.ru' className="contact-link">
                            <img src={mail} alt="" className="contact-links-icon" />
                        </a>
                    </div>
                    <div className="page-desc-mail">pingwingstudio@gmail.com</div>
                </div>
            </div>
            <img src={cube} alt="" className="contact-cube-one cube-fish" />
            <img src={cube2} alt="" className="contact-cube-two cube-fish" />
            <img src={fish} alt="" className="contact-fihe-one cube-fish" />
            <img src={fish2} alt="" className="contact-fihe-two cube-fish" />
        </div>
    )
}

export default Contact;