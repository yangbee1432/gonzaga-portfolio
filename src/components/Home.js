import "./Home.css";
import Me from "../images/me.jpg";

function Home(){
    return(
        <div className="Home" id="home">
            <img src={Me} alt="me"/>
            <div className="home_details">
                <h3>Hi, I am</h3>
                <h1>Dhaine Gonzaga</h1>
                <h3>Welcome to my vlog</h3>
            </div>
        </div>
    )
}

export default Home;
