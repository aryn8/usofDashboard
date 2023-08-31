import "./navbar.scss"
import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="logo">
                <img src="https://1000logos.net/wp-content/uploads/2021/07/Jio-Logo.png" alt="" />
                <span> USOF Dashboard</span>
            </div>
            <div className="icons">
                <Link to={""}><img src="/search.svg" alt="" className="icon" /></Link>
            </div>
        </div>
    )
}

export default Navbar