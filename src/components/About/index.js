import Layout from "../Layout";
import "./index.scss";
import anyaPointing from "../../assets/anya-pointing.png";

import '../../assets/HalloweenHoroscope.ttf';

const About = () => {
    return(
        <>
            <Layout/>
            <div className="about-container">
            <img className="anya-about" src={anyaPointing} alt="anya pointing"/>
                <div className="about-text">
                    <div className="about-box">
                        <p className="me-part">Hi, I'm Rabia Eda Yılmaz and currently a 4th year undergrad Biomedical Engineering
                        student. Reading books and doing art are part of my life. Linguistics has always been
                        a big interest for me. I have interacted with mid-level Russian and Japanese, except my
                        so-believed advanced English. I have a great interest towards artificial intelligence and studying it.
                        Understanding after making a good amount of effort is just fun.</p>  
                    </div>
                </div>
            <div className="contact-part"></div>
            </div>
        </>
    );
}

export default About