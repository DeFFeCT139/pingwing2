import { useState } from 'react' 
import { useEffect } from 'react'
import img from '../../img/svg/Group 5.svg'
import axios from 'axios';


function Form({languageContent}) {
    const formClose = () =>{
        document.getElementById('form').style.display = 'none'
        document.getElementById('form-content').classList.add('formActiv')
        document.getElementById('form-content').classList.remove('none')
        document.getElementById('form-galg').classList.add('none')
        document.getElementById('form-galg').classList.remove('formActiv')
        document.getElementById('svg-container').style.marginTop = '0px'
        document.getElementById('form-galg-text').classList.remove('formActiv')
    }


    const setForm = () => {
        axios.post('https://api.pingwing.ru/login', {
            name: document.getElementById('name').value,
            info:document.getElementById('number').value
        })
        document.getElementById('form-content').classList.remove('formActiv')
        setTimeout(() => {
            document.getElementById('form-content').classList.add('none')
            document.getElementById('form-galg').classList.remove('none')
            setTimeout(() => {
                document.getElementById('form-galg').classList.add('formActiv')
                setTimeout(() => {
                    document.getElementById('svg-container').style.marginTop = '-20px'
                    setTimeout(() => {
                        document.getElementById('form-galg-text').classList.add('formActiv')
                    }, 200);
                }, 1500);
            }, 10);
        }, 200);
    }
    let state = true
    const [button, setButton] = useState(state)

    const changeName = () => {
        document.getElementById('name').classList.remove('errorinput')
        if (document.getElementById('name').value !== '' && document.getElementById('number').value !== '') {
            setButton(state = false)
        } else {
            setButton(state = true)
        }
    }
    const changeNumber = () => {
        document.getElementById('number').classList.remove('errorinput')
        if (document.getElementById('name').value !== '' && document.getElementById('number').value !== '') {
            setButton(state = false)
        } else {
            setButton(state = true)
        }
    }

    useEffect(()=>{
        document.getElementById("number").addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                if (document.getElementById('name').value !== '' && document.getElementById('number').value !== '') {
                    document.getElementById("form-block-btn").click();
                } else {
                    if (document.getElementById('name').value === '') {
                        document.getElementById('name').classList.add('errorinput')
                    } else if (document.getElementById('number').value === '') {
                        document.getElementById('number').classList.add('errorinput')
                    }
                }
            }
        });

        document.getElementById("name").addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                if (document.getElementById('name').value !== '' && document.getElementById('number').value !== '') {
                    document.getElementById("form-block-btn").click();
                } else {
                    if (document.getElementById('name').value === '') {
                        document.getElementById('name').classList.add('errorinput')
                    } else if (document.getElementById('number').value === '') {
                        document.getElementById('number').classList.add('errorinput')
                    }
                }
            }
        });
    })

    
    return(
        <div id="form" className="form">
             <div onClick={formClose} className="form-fone"></div>
             <div className="form-block">
                <div className="form-block-inner">
                    <div className="form-block-img">
                        <img src={img} alt="" className="form-block-image" />
                    </div>
                    <div id='form-content' className="form-block-content formActiv">
                        <div className="form-block-user-name">
                            <div className="form-block-title">{languageContent.form.title}</div>
                            <div className="forms">
                                <input id='name' onChange={changeName} className="input" placeholder={languageContent.form.input} required="" type="text"/>
                                <span className="input-border"></span>
                            </div>
                        </div>
                        <div className="form-block-user-number">
                            <div className="form-block-title">{languageContent.form.title2}</div>
                            <div className="forms">
                                <input id='number' onChange={changeNumber} className="input" placeholder={languageContent.form.input2} required="" type="text"/>
                                <span className="input-border"></span>
                            </div>
                        </div>
                        <button onClick={setForm} id="form-block-btn" className="form-block-btn" disabled={button}>{languageContent.form.btn}</button>
                    </div>
                    <div id='form-galg' className="form-block-gala none">
                        <div id='svg-container' className="svg-container">    
                            <svg className="ft-green-tick" xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 48 48" aria-hidden="true">
                                <circle className="circle" fill="#5bb543" cx="24" cy="24" r="22"/>
                                <path className="tick" fill="none" stroke="#FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M14 27l5.917 4.917L34 17"/>
                            </svg>
                        </div>
                        <div id='form-galg-text' className="form-galg-text">{languageContent.form.desc}</div>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Form;