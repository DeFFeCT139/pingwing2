import Rellax from "rellax";
import About from "../../page/pages/about";
import { useEffect } from "react";
import MyTeam from "../myTeam/myTeam";


function Paralax({languageContent}) {
    const anime = () => document.getElementById('p-s').classList.add('activ-p-s')
    const animel = () => {
        let lP = document.getElementsByClassName('l-p')
        for (let index = 0; index < lP.length; index++) {
            lP[index].style.left = '0px'            
        }
    }
    
    const setRellax = () => {
        let rellax = new Rellax('.rellax',{
            breakpoints:[320, 768, 1024] 
          }) 
            window.addEventListener('scroll', function() {

                if (window.scrollY > window.innerHeight) {
                    rellax.destroy()
                  } else {
                    rellax.refresh()
                  }
                document.getElementById('obloko-front').style.right = '-' +  window.scrollY * 0.7 + 'px'
                document.getElementById('obloko-midle').style.left =  '-' +  window.scrollY * 0.3 + 'px'
                document.getElementById('obloko-back').style.left =  '-' + window.scrollY * 0.1 + 'px'
                document.getElementById('scroll1').style.opacity =  1 - window.scrollY * 0.005
            });
    }

    useEffect(()=>{
        animel()
        setTimeout(()=>{
            anime()
        },2800)
        setRellax()
    })

    
    return(
        <div  className="paralax"> 
            <div className="scal"> 
                <div className="pngwing2"></div>
                <div className="pingwing-text rellax" data-rellax-tablet-speed="-6" data-rellax-mobile-speed="-5" data-rellax-desktop-speed="-8" >PINGWING</div>
                <div className="luna-logo rellax" data-rellax-tablet-speed="-7" data-rellax-mobile-speed="-6" data-rellax-desktop-speed="-10" ></div> 
                <div className="oblakS">
                    <div id="obloko-back" className="obloko-back rellax" data-rellax-tablet-speed="-7" data-rellax-mobile-speed="-6" data-rellax-desktop-speed="-7"></div>
                    <div id="obloko-midle" className="obloko-midle rellax" data-rellax-tablet-speed="-6" data-rellax-mobile-speed="-5" data-rellax-desktop-speed="-5"></div>   
                    <div id="obloko-front" className="obloko-front rellax" data-rellax-tablet-speed="-5" data-rellax-mobile-speed="-4" data-rellax-desktop-speed="-4"></div>
                </div>
                <div className="back-scal rellax" data-rellax-tablet-speed="-5" data-rellax-mobile-speed="-4" data-rellax-desktop-speed="-8" ></div>   
                <div className="pingwing-slogan rellax" data-rellax-tablet-speed="-8" data-rellax-mobile-speed="-7" data-rellax-desktop-speed="-10" >{languageContent.paralax}</div> 
                <div className="front-scal rellax" data-rellax-tablet-speed="-3" data-rellax-mobile-speed="-2" data-rellax-desktop-speed="-6" ></div> 
                <div id="content" className="content"> 
                    <div id="ocean"  className="ocean" >
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div id="About-page" className="">
                            <About languageContent={languageContent}/>
                        </div> 
                    </div>  
                </div>  
                <div id="scroll1" className="scroll ">
                    <div className="scroll-inner">
                        <div className="scrolldown" >
                            <div className="chevrons">
                                <div className="chevrondown"></div>
                                <div className="chevrondown"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="ldin" className="ldina " >
                    <div  className="ldin-n l-p"></div >
                    <div  className="ldin l-p"></div >  
                    <div id="p-s" className="p-s l-p2"></div >   
                </div> 
            </div> 
        </div>
    )
}

export default Paralax;