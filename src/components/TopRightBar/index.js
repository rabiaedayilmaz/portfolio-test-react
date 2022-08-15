import "./index.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faGoodreads,
  } from '@fortawesome/free-brands-svg-icons'
  
const TopRightBar = () => (
    <div className="toprightbar">
       <ul>
        <li>
            <a href="https://www.linkedin.com/in/redayilmaz/"
            target="_blank" rel="noreferrer" />
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" size="2x" />
        </li>
        <li>
            <a href="https://github.com/cuteopamp"
            target="_blank" rel="noreferrer" />
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" size="2x" />
        </li>
        <li>
            <a href="https://www.goodreads.com/user/show/143662427-eda-yilmaz"
            target="_blank" rel="noreferrer" />
            <FontAwesomeIcon icon={faGoodreads} color="#4d4d4e" size="2x" />
        </li>
        </ul> 
    </div>
)

export default TopRightBar