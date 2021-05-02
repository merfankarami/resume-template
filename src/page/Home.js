import "./Home.css";
import home from "../media/home.jpg";

export default function Home() {
    return(
        <div className="container">
            <img className="img" src={home} alt="Home backGround" />            
        </div>  
    );
}