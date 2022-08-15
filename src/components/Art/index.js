import { Link, animateScroll as scroll } from "react-scroll";

import art1 from "../../myArt/dgkosenpai2.png";
import art2 from "../../myArt/anyalast.png";
import art3 from "../../myArt/ardayeni.png";
import art4 from "../../myArt/habibi.png";
import art5 from "../../myArt/kagurachannnn.png";
import art6 from "../../myArt/newmiko.png";
import art7 from "../../myArt/pychann.png";
import art8 from "../../myArt/pythonchan2.png";
import art9 from "../../myArt/rengokulast.png";
import art10 from "../../myArt/renkliel2.png";
import art11 from "../../myArt/toto2.png";

import Layout from "../Layout";
import "./index.scss";

const Art = () => {
    return(
        <>
            <Layout />
                <div className="art-container">
                    <div>
                        <img src={art1} alt="art 1"/>
                        <h4>Searching for your secret gift?</h4>
                        <h3>Happy B-day Senpai | 08.08.22</h3>
                    </div>       

                    <div>
                        <img src={art2} alt="art 2"/>
                        <h4>You found a secret cookie!! Here~</h4>
                        <h3>Anya Loves Summer!! | 23.05.22</h3>
                    </div>

                    <div>
                        <img src={art3} alt="art 3"/>
                        <h4>Not everybody is born movie star.</h4>
                        <h3>What If My Brother is a Movie Star... | 09.07.22</h3>
                    </div>

                    <div>
                        <img src={art4} alt="art 4"/>
                        <h4>You can smell the grief of sand from the Middle East Region.</h4>
                        <h3>Habibi - Tamino | 12.07.22</h3>
                    </div>

                    <div>
                        <img src={art5} alt="art 5"/>
                        <h4>Aching facial muscles :D</h4>
                        <h3>Moderator Kagura-chan | 15.02.22</h3>
                    </div>
                        
                    <div>
                        <img src={art6} alt="art 6"/>
                        <h4>Lines and Borderlines?</h4>
                        <h3>This is Our Life - Des Rocs | 02.07.22</h3>
                    </div>

                    <div>
                        <img id="big" src={art7} alt="art 7"/>
                        <h4>You died because of the bite of Py3.</h4>
                        <h3>Desert is Python3's Home | 14.05.22</h3>
                    </div>

                    <div>
                        <img src={art8} alt="art 8"/>
                        <h4>Madame Py3 might seem user-friendly but she is aggresive.</h4>
                        <h3>Portrait of Madame Py3 | 19.02.22</h3>
                    </div>

                    <div>
                        <img src={art9} alt="art 9"/>
                        <h4>Did you watch the movie? Yeah?</h4>
                        <h3>Guidance of Ablazed Heart | 22.02.22</h3>
                    </div>

                    <div>
                        <img src={art10} alt="art 10"/>
                        <h4>You suffocated but nice try.</h4>
                        <h3>Fragile Iron Hand of Mine | 08.08.22</h3>
                    </div>

                    <div>
                        <img src={art11} alt="art 11"/>
                        <h4>The only song everyone knows.</h4>
                        <h3>Another Love - Tom Odell | 17.07.22</h3>
                    </div>
                </div>
        </>
    );
}

export default Art;