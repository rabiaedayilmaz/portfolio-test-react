import "./index.scss";

import myPhoto from "../../assets/cicekeda.jpeg";
import wakuGif from "../../assets/wakuwaku.gif";

import Layout from "../Layout";

const Home = () => {
    return(
        <>
        <Layout />
        <div className="container homepage">
            <div className="homepage-content">
                <h1>Hey, it's me Eda! </h1>
                <h2 id="welcome">Welcome to my page :)</h2>
                <h2 id="afterwelcome">I'm currently pursuing<br/> Biomedical Engineering degree in YTU and...</h2>
                <h2 id="afterafterwelcome"><br/>...I love building stuff!<br/><br/>Hold on your mouse and enjoy my work before I catch it :3 </h2>
                <div className="img-container">
                    <img id="myPhoto" src={myPhoto} alt="my photo" />
                    <img id="wakuGif" src={wakuGif} alt="waku gif"/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;