import image from '../../../img/png/image 9.png'
import { motion } from "framer-motion";

function Bots({languageContent}) {

    const openForm = () => document.getElementById('form').style.display = 'block'
    return(
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="about-skills-desc-item">
            <div className="duble-name">{languageContent.bot.title}</div>
            <div className="about-skills-desc-item-inner">
                <div className="about-skills-desc-item-name">{languageContent.bot.title}</div>
                <div className="about-skills-desc-item-desc">
                    <div className="about-skills-desc-item-desc-left">
                        <div className="about-skills-desc-item-desc-text">{languageContent.bot.desc}</div>
                        <img src={image} alt="" className="about-skills-desc-item-desc-img-two" />
                        <div className="about-skills-desc-item-desc-pluse">
                            <div className="about-skills-desc-item-desc-pluse-item">{languageContent.bot.btns.one}</div>
                            <div className="about-skills-desc-item-desc-pluse-item">{languageContent.bot.btns.two}</div>
                            <div className="about-skills-desc-item-desc-pluse-item">{languageContent.bot.btns.three}</div>
                            <div className="about-skills-desc-item-desc-pluse-item">{languageContent.bot.btns.for}</div>
                        </div>
                        <div className="btn-box-about">
                            <button onClick={openForm} className="about-skills-btn">{languageContent.bot.btns.free}</button>
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

export default Bots;