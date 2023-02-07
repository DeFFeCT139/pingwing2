import pin from '../../../img/png/peng3.webp'


function Menu({languageContent}) {
    const openForm = () => document.getElementById('form').style.display = 'block'
    const clouseMenu = () => {
        document.getElementById('menu').classList.remove('activ-menu')
        document.getElementById('nav-icon1').classList.toggle('open')
        setTimeout(() => {
            document.getElementById('menu-fon').style.display = 'none'
        }, 1000);
    }
    return(
        <div id='menu' className="menu-compontent">
            <div onClick={clouseMenu} id='menu-fon' className="menu-fon"></div>
            <div className="menu">
                <div className="menu-top-header">
                </div>
                <div className="menu-bottom-header">
                    <div className='header-link-menuuu'>
                        <a href='/' className="header-link-menu header-link-home">{languageContent.header.home}</a>
                    </div>
                    <div className='header-link-menuuu'>
                        <a href='/contact' className="header-link-menu">{languageContent.header.contact}</a>
                    </div>
                    <div className='header-link-menuuu'>
                        <a href='/portfolio' className="header-link-menu">{languageContent.header.prtfolio}</a> 
                    </div>
                    <div className='header-link-menuuu'>
                        <button onClick={openForm} className="header-link-menu header-btn">{languageContent.header.konsul}</button>
                    </div>
                    <img src={pin} alt="" className="pingvin" />
                </div>
            </div>
        </div>
    )
}

export default Menu;