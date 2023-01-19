import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import "./Home.css"

function Home() {
    let { user, logoutUser } = useContext(AuthContext)

    return (
        <div>
            <div className="mainblock">
                <div className="items">
                    Welcome to our workshop !
                </div>
            </div>
            <div>
                <div className="buttons">
                    <a href="/login" id="bts">Login</a>
                    <a href="/register" id="bts"> Register</a>
                </div>
            </div>
        </div>
    );
}

export default Home;