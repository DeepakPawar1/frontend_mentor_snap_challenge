import './navbarStyles.css';
import logo from "../assets/images/logo.svg";
import headermenuicondown from '../assets/images/icon-arrow-down.svg';
import headermenuiconup from '../assets/images/icon-arrow-up.svg';
import hamburger from '../assets/images/icon-menu.svg';
import closeham from '../assets/images/icon-close-menu.svg';
import todolist from '../assets/images/icon-todo.svg';
import calendar from '../assets/images/icon-calendar.svg';
import remainders from '../assets/images/icon-reminders.svg';
import planning from '../assets/images/icon-planning.svg';

import {useState} from  'react'; 
function Navbar(){

    const [clickHam,setClickHam] = useState(false);
    const [clickFeatures,setClickFeatures] = useState(false);
    const [clickComapny,setClickCompany] = useState(false);
    return(
        <div className="navbar">
           <div className="logo">
           <img src={logo} alt=""/>
           </div>
           <div className= {clickHam ? "headers " :"headers nocontent"}>
                    <div className="preHeaders">
                                <ul onClick={()=> setClickFeatures((current)=>{return !current})} className="features">
                                    Features
                                    {clickFeatures ? <img src={headermenuicondown} alt=""/> : <img src={headermenuiconup} alt=""/> }
                                    <div className={clickFeatures ? "nobox": "box"}>
                                    <li><img src={todolist} alt=""/>Todo List</li>
                                    <li><img src={calendar} alt=""/>Calender</li>
                                    <li><img src={remainders} alt=""/>Reminder</li>
                                    <li><img src={planning} alt=""/>Planning</li>
                                    </div>
                                </ul>
                                <ul onClick={()=> setClickCompany((current)=>{return !current})} className="company">
                                    
                                    Company
                                    {clickComapny ? <img src={headermenuicondown} alt=""/> : <img src={headermenuiconup} alt=""/> }
                                    <div className={clickComapny ? "nocompanybox": "companybox"}>
                                    <li>History</li>
                                    <li>Our Team</li>
                                    <li>Blog</li>
                                    </div>
                                </ul>
                                <li>
                                    Careers
                                </li>
                                <li>
                                    About
                                </li>
                    </div>
           



                    <div className="log">
                    <ul className={clickHam ? "sigbutton active" : "sigbutton"}>
                                    <li>
                                        Login
                                    </li>
                                    <li>
                                        <button> Register</button>
                                        
                                    </li>
                                </ul>
                    </div>
                   
           </div>
           <div className="hamburger" onClick={()=>setClickHam((current)=>{return !current})}>
                        {clickHam ?  <img src={closeham} alt=""/> : <img src={hamburger} alt=""/>}
                    </div>
        </div>
    )
}
export default Navbar;