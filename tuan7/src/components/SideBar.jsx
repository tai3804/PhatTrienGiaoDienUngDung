import React from 'react'
import { NavLink } from 'react-router-dom'

import './SideBar.css'


export default function SideBar() {
  return (
    <div id='side-bar'>
        <img src="src\imgs\Image 1858.png" alt="" />
        <ul className='side-bar__list'>
            <li className="side-bar__item">
                <NavLink  
                    to="/dashboard" 
                    className={({ isActive }) => 
                        isActive ? "side-bar__link active" : "side-bar__link"
                      }
                >
                    <img src="src\imgs\Squares four 1.png" alt="Dashboard icon" />
                    <p>Dashborad</p>
                </NavLink >
            </li>

            <li className="side-bar__item">
                <NavLink  
                    to="/project"
                    className={({ isActive }) => 
                        isActive ? "side-bar__link active" : "side-bar__link"
                      }
                >
                    <img src="src\imgs\Folder.png" alt="Folder icon" />
                    <p>Project</p>
                </NavLink >
            </li>

            <li className="side-bar__item">
                <NavLink  to="/teams"
                    className={({ isActive }) => 
                        isActive ? "side-bar__link active" : "side-bar__link"
                      }
                >
                    <img src="src\imgs\Groups.png" alt="Tearm icon" />
                    <p>Tearms</p>
                </NavLink >
            </li>

            <li className="side-bar__item">
                <NavLink  to="/analytics" 
                    className={({ isActive }) => 
                        isActive ? "side-bar__link active" : "side-bar__link"
                      }
                >
                    <img src="src\imgs\Pie chart.png" alt="Analytic icon" />
                    <p>Analytics</p>
                </NavLink >
            </li>

            <li className="side-bar__item">
                <NavLink  to="/messages" 
                    className={({ isActive }) => 
                        isActive ? "side-bar__link active" : "side-bar__link"
                      }
                >
                    <img src="src\imgs\Chat.png" alt="Message icon" />
                    <p>Messages</p>
                </NavLink >
            </li>

            <li className="side-bar__item">
                <NavLink  to="/integrations" 
                    className={({ isActive }) => 
                        isActive ? "side-bar__link active" : "side-bar__link"
                      }
                >
                    <img src="src\imgs\Code.png" alt="Integrations icon" />
                    <p>Integrations</p>
                </NavLink >
            </li>

        </ul>

        <div className="side-bar__footer">
            <img src="src/imgs/Group.png" alt="" />
            <b>V2.0 is available</b>
            <button>Try now</button>
        </div>
    </div>
  )
}
