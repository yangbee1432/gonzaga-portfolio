import { Link } from "react-scroll";
import "./Nav.css";

function Nav(){
    return(
        <div className="Nav">
            <Link to="home">
                <li>Home</li>
            </Link>
            <Link to="about">
                <li>About</li>
            </Link>
            <Link to="skill">
                <li>Skills</li>
            </Link>
            <Link to="cert">
                <li>Certificates</li>
            </Link>
        </div>
    )

}

export default Nav;
