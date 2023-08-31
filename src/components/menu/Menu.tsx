import "./Menu.scss"
import { Link } from "react-router-dom"

const Menu = () => {

    return (
        <div className="menu">
            <div className="item">
                <span className="title">MAIN</span>
                <Link to="" className="listItem">
                <img src="/home.svg" alt="" />
                <span className="listItemTitle"> Home </span>
                </Link>
                
               
                <span className="title">  Outage Exploration</span>
                <Link to="" className="listItem">
                <span className="listItemTitle"> State Wise </span>
                </Link>

                <Link to="" className="listItem">
                <span className="listItemTitle"> Category Wise </span>
                </Link>

                <Link to="" className="listItem">
                <span className="listItemTitle"> State + Category Wise </span>
                </Link>

                <Link to="" className="listItem">
                <span className="listItemTitle"> Histogram </span>
                </Link>

                <Link to="" className="listItem">
                <span className="listItemTitle"> Average Outage </span>
                </Link>

                <Link to="" className="listItem">
                <span className="listItemTitle"> Outage Range </span>
                </Link>

                
                <span className="title">  Outage Trend</span>
                <Link to="" className="listItem">
                <span className="listItemTitle"> State Wise </span>
                </Link>

                <Link to="" className="listItem">
                <span className="listItemTitle"> Project Wise </span>
                </Link>

               
                <span className="title">  Traffic Exploration</span>
                <Link to="" className="listItem">
                <span className="listItemTitle"> State Wise </span>
                </Link>

                <Link to="" className="listItem">
                <span className="listItemTitle"> Average Traffic </span>
                </Link>

                <Link to="" className="listItem">
                <span className="listItemTitle"> Traffic Range </span>
                </Link>

                
                <span className="title">  Traffic Trend</span>
                <Link to="" className="listItem">
                <span className="listItemTitle"> State Wise </span>
                </Link>

                <Link to="" className="listItem">
                <span className="listItemTitle"> Project Wise </span>
                </Link>

                <Link to="" className="listItem">
                <span className="listItemTitle"> Day Wise </span>
                </Link>

                <Link to="" className="listItem">
                <span className="listItemTitle"> Month Wise </span>
                </Link>


                <span className="title">  FM Events </span>
                <Link to="" className="listItem">
                <span className="listItemTitle"> Total Outage Vs FM </span>
                </Link>

                <Link to="" className="listItem">
                <span className="listItemTitle"> State Wise FM </span>
                </Link>

                <Link to="" className="listItem">
                <span className="listItemTitle"> FM Category Wise </span>
                </Link>

                <Link to="" className="listItem">
                <span className="listItemTitle"> Average FM Outage </span>
                </Link>

                <Link to="" className="listItem">
                <span className="listItemTitle"> FM Outage Range </span>
                </Link>


                <span className="title">  FM Trend </span>
                <Link to="" className="listItem">
                <span className="listItemTitle"> State Wise </span>
                </Link>

                <Link to="" className="listItem">
                <span className="listItemTitle"> Project Wise </span>
                </Link>

                <Link to="" className="listItem">
                <span className="listItemTitle"> Month Wise </span>
                </Link>

            </div>
        </div>
    )
}

export default Menu
