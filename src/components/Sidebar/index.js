import { Link, NavLink } from "react-router-dom";
import "./index.scss";

//custom image logos
import logoName from "../../assets/edaLogo.png"

// existent logos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSuitcase, faPalette, faFeatherPointed, faChessQueen, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <div className="mainAnya">
            <a href="https://medium.com/@redayilmaz"
                target="_blank" rel="noreferrer" />
        </div>
    <Link className="logo" to="/">
        <img className="sub-mainLogo" src={logoName} alt="logo-name" />
    </Link>
    <nav>
        <NavLink className="home-link" activeclassname="true" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink className="art-link" activeclassname="true" to="/art">
            <FontAwesomeIcon icon={faPalette} color="#4d4d4e"/>
        </NavLink>
        <NavLink className="blog-link" activeclassname="true" to="/blog">
            <FontAwesomeIcon icon={faFeatherPointed} color="#4d4d4e" />
        </NavLink>
        <NavLink className="about-link" activeclassname="true" to="/about">
            <FontAwesomeIcon icon={faChessQueen} color="#4d4d4e" />
        </NavLink>
    </nav>
</div>
)

export default Sidebar;