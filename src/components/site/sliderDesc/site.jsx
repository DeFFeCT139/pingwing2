import image from '../../../img/svg/image 6 (1).svg'
import { motion } from "framer-motion";

function Sites({languageContent}) {

    const openForm = () => document.getElementById('form').style.display = 'block'
    return(
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="about-skills-desc-item">
            <div className="duble-name">{languageContent.site.title}</div>
            <div className="about-skills-desc-item-inner">
                <div className="about-skills-desc-item-name">{languageContent.site.title}</div>
                <div className="about-skills-desc-item-desc">
                    <div className="about-skills-desc-item-desc-left">
                        <div className="about-skills-desc-item-desc-text">{languageContent.site.desc}</div>
                        <img src={image} alt="" className="about-skills-desc-item-desc-img-two" />
                        <div className="about-skills-desc-item-desc-pluse" >
                            <div className="about-skills-desc-item-desc-pluse-item">{languageContent.site.btns.one}</div>
                            <div className="about-skills-desc-item-desc-pluse-item">{languageContent.site.btns.two}</div>
                            <div className="about-skills-desc-item-desc-pluse-item">{languageContent.site.btns.three}</div>
                            <div className="about-skills-desc-item-desc-pluse-item">{languageContent.site.btns.for}</div>
                        </div>
                        <div className="btn-box-about ">
                            <button onClick={openForm} className="about-skills-btn">{languageContent.site.btns.free}</button>
                        </div>
                    </div>
                    <div className="about-skills-desc-item-desc-right">
                        <img src={image} alt="" className="about-skills-desc-item-desc-img" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Sites;