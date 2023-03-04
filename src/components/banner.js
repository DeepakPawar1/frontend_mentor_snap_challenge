import './bannerStyles.css';
import bannerImg from '../assets/images/image-hero-desktop.png';
import second from '../assets/images/client-audiophile.svg'
import third from '../assets/images/client-meet.svg'
import first from '../assets/images/client-databiz.svg'
import fourth from '../assets/images/client-maker.svg'
function Banner(){

    return(
        <div className="banner">
            <div className="left">
                <div className="left-content">
                    <div className="heading">
                    <h5>Make remote work</h5>
                    </div>
                    <div className="about">
                        <p>Get your team in sync, no matter your location.
                            Streamline processes, create team rituals, and watch productivity soar.
                        </p>
                    </div>
                    <div className="learnbutton">
                        <button><h5>Learn More</h5></button>
                    </div>
                    <div className="images">
                        <img src={first} alt=""/>
                        <img src={second} alt=""/>
                        <img src={third} alt=""/>
                        <img src={fourth} alt=""/>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="right-content">
                    <img src={bannerImg} alt=""/>
                </div>
            </div>
        </div>
    )
}
export default Banner;