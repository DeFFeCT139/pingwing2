import Sites from '../sliderDesc/site'
import Apps from '../sliderDesc/apps'
import Bots from '../sliderDesc/bot'
import Smm from '../sliderDesc/smm'


function ListInfo({languageContent, components}) {
    
    let content;
    
    if (components === 'site') {
        content = <Sites languageContent={languageContent.slider}/>;
    } else if(components === 'app') {
        content = <Apps languageContent={languageContent.slider}/>;
    } else if(components === 'bot') {
        content = <Bots languageContent={languageContent.slider}/>;
    } else if(components === 'smm') {
        content = <Smm languageContent={languageContent.slider}/>;
    }
    return(
        <div className="listInfo">
            {content}
        </div>
    )
}

export default ListInfo; 