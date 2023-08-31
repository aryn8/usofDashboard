// import "./navbar.scss";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="logo">
//         <img src="logo.svg" alt="" />
//         <span>lamadmin</span>
//       </div>
//       <div className="icons">
//         <img src="/search.svg" alt="" className="icon" />
//         <img src="/app.svg" alt="" className="icon" />
//         <img src="/expand.svg" alt="" className="icon" />
//         <div className="notification">
//           <img src="/notifications.svg" alt="" />
//           <span>1</span>
//         </div>
//         <div className="user">
//           <img
//             src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
//             alt=""
//           />
//           <span>Jane</span>
//         </div>
//         <img src="/settings.svg" alt="" className="icon" />
//       </div>
//     </div>
//   );
// };

// export default Navbar;


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
                
                {/* <img src="/app.svg" alt="" className="icon" />
                <img src="/expand.svg" alt="" className="icon" />
                <img src="settings.svg" alt="" className="icon" /> */}
            </div>
        </div>
    )
}

export default Navbar