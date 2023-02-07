import { useEffect, useState } from "react";
import Form from "../form/form";
import Page from "../page/page";
import Language from '../../config/LanguageСonfig.json'
import Header from "./header/header";
import Menu from "./menu/menu";


function Pingwing() {
    const openMenu = () => {
        let state = document.getElementById('nav-icon1').classList.toggle('open')
        console.log(state)
        if (state === true) {
            state = 0
            document.getElementById('menu-fon').style.display = 'block'
            setTimeout(() => {
                document.getElementById('menu').classList.add('activ-menu')
                document.getElementById('nav-icon1').classList.add('open')
            }, 10);
        } else {
            state = 1
            document.getElementById('menu').classList.remove('activ-menu')
            document.getElementById('nav-icon1').classList.remove('open')
            setTimeout(() => {
                document.getElementById('menu-fon').style.display = 'none'
            }, 1000);
        }

    }
    
    let languageContent = Language.ru

    const [lang, setLang] = useState(languageContent)

    const startLang = () => {
        let userLang = navigator.language || navigator.userLanguage;
        if (userLang === 'ru-RU') {
            setLang(languageContent = Language.ru)
            document.getElementById('select').value = 'Русский'
        } else if (userLang === 'en-EN'){
            setLang(languageContent = Language.en)
            document.getElementById('select').value = 'English'
        } else {
            setLang(languageContent = Language.en)
            document.getElementById('select').value = 'English'
        }
        
    }

    const setLangs = () => {
        if (localStorage.getItem("lang") === 'Русский') {
            setLang(languageContent = Language.ru)
            document.getElementById('select').value = 'Русский'
        } else if(localStorage.getItem("lang") === 'English'){
            setLang(languageContent = Language.en)
            document.getElementById('select').value = 'English'
        } else if(localStorage.getItem("lang") === 'Հայերեն'){
            setLang(languageContent = Language.ar)
            document.getElementById('select').value = 'Հայերեն'
        } else if(localStorage.getItem("lang") === 'Français'){
            setLang(languageContent = Language.fr)
            document.getElementById('select').value = 'Français'
        } else if(localStorage.getItem("lang") === 'Deutsch'){
            setLang(languageContent = Language.ger)
            document.getElementById('select').value = 'Deutsch'
        }
    }


    const selectChenge = (e) =>{
        if (e.target.value === 'Русский') {
            document.getElementById('loader').style.display = 'flex'
            document.getElementById('root').classList.add('root')
            setTimeout(() => {
                document.getElementById('loader').classList.remove('loaderPasiv')
            }, 10);
            window.location.reload();
            localStorage.setItem("lang" ,e.target.value)
        } else if(e.target.value === 'English'){
            document.getElementById('loader').style.display = 'flex'
            document.getElementById('root').classList.add('root')
            setTimeout(() => {
                document.getElementById('loader').classList.remove('loaderPasiv')
            }, 10);
            window.location.reload();
            localStorage.setItem("lang", e.target.value)
        } else if(e.target.value === 'Հայերեն'){
            document.getElementById('loader').style.display = 'flex'
            document.getElementById('root').classList.add('root')
            setTimeout(() => {
                document.getElementById('loader').classList.remove('loaderPasiv')
            }, 10);
            window.location.reload();
            localStorage.setItem("lang", e.target.value)
        } else if(e.target.value === 'Français'){
            document.getElementById('loader').style.display = 'flex'
            document.getElementById('root').classList.add('root')
            setTimeout(() => {
                document.getElementById('loader').classList.remove('loaderPasiv')
            }, 10);
            window.location.reload();
            localStorage.setItem("lang", e.target.value)
        } else if(e.target.value === 'Deutsch'){
            document.getElementById('loader').style.display = 'flex'
            document.getElementById('root').classList.add('root')
            setTimeout(() => {
                document.getElementById('loader').classList.remove('loaderPasiv')
            }, 10);
            window.location.reload();
            localStorage.setItem("lang", e.target.value)
        }
    }

    

    useEffect(()=>{
        startLang()
        setLangs()
        window.onbeforeunload = function () {
            document.getElementById('loader').style.display = 'flex'
            document.getElementById('root').classList.add('root')
            setTimeout(() => {
                document.getElementById('loader').classList.remove('loaderPasiv')
            }, 10);
            window.scrollTo(0, 0);
          }
    })


    return(
        <div id="pngwing" className="pngwing ">
            <div className="Select" id="#lang">
                <select id="select" className="" onChange={selectChenge}>
                    <option>Русский</option>
                    <option>English</option>
                    <option>Հայերեն</option>
                    <option>Deutsch</option>
                    <option>Français</option>
                </select>
            </div>
            <div className="menu-btn">
                <div onClick={openMenu} id="nav-icon1">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <Header languageContent={lang}/> 
            <Menu languageContent={lang}/>
            <Form languageContent={lang}/>
            <Page languageContent={lang}/> 
        </div>    
    ) 
} 

export default Pingwing;