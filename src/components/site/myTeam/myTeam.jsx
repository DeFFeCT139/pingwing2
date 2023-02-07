import ros1 from '../../../img/png/teams/den/Frame 31.svg'
import den from '../../../img/png/teams/den/denis 2.svg'
import ros2 from '../../../img/png/teams/vag/Frame 29.svg'
import vag from '../../../img/png/teams/vag/vag.svg'
import ros3 from '../../../img/png/teams/oli/Frame 30.svg'
import oli from '../../../img/png/teams/oli/olivia 4.svg'

function MyTeam() {
    return(
        <div className="myTeam">
            <div className="myTeam-items">
                <div className="myTeam-item">
                    <div className="myTeam-item-inner">
                        <img src={ros2} alt="" className="myTeam-item-rospis" />
                        <div className="myTeam-item-back-fon vag">
                            <img src={vag} alt=""  className="myTeam-item-item" />
                            <div className="myTeam-item-back-fon-border"></div>
                        </div>
                    </div>
                    <div className="myTeam-item-info">
                        <div className="myTeam-item-info-title">Вагинак Месропян</div>
                        <div className="myTeam-item-info-desc">Исполнительный директор. UI/UX Дизайнер.</div>
                    </div>
                </div>
                <div className="myTeam-item myTeam-item-oli">
                    <div className="myTeam-item-inner">
                        <img src={ros3} alt="" className="myTeam-item-rospis" />
                        <div className="myTeam-item-back-fon oli">
                            <img src={oli} alt=""  className="myTeam-item-item" />
                            <div className="myTeam-item-back-fon-border"></div>
                        </div>
                    </div>
                    <div className="myTeam-item-info">
                        <div className="myTeam-item-info-title">Оливия Тринчи</div>
                        <div className="myTeam-item-info-desc">Глава отдела маркетинга</div>
                    </div>
                </div>
                <div className="myTeam-item myTeam-item-den">
                    <div className="myTeam-item-inner">
                        <img src={ros1} alt="" className="myTeam-item-rospis" />
                        <div className="myTeam-item-back-fon den">
                            <img src={den} alt="" className="myTeam-item-item " />
                            <div className="myTeam-item-back-fon-border"></div>
                        </div>
                    </div>
                    <div className="myTeam-item-info">
                        <div className="myTeam-item-info-title">Денис Ходак</div>
                        <div className="myTeam-item-info-desc">Глава отдела разработки</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyTeam;