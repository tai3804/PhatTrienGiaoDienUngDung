import React from 'react'
import './SideBar.css'

export default function SideBar() {
  return (
    <div id='side-bar'>
        <img src="src\imgs\Image 1858.png" alt="" />
        <ul className='side-bar__list'>
            <li className="side-bar__item">
                <img src="src\imgs\Squares four 1.png" alt="Dashboard icon" />
                <p>Dashborad</p>
            </li>

            <li className="side-bar__item">
                <img src="src\imgs\Folder.png" alt="Folder icon" />
                <p>Project</p>
            </li>

            <li className="side-bar__item">
                <img src="src\imgs\Groups.png" alt="Tearm icon" />
                <p>Tearms</p>
            </li>

            <li className="side-bar__item">
                <img src="src\imgs\Pie chart.png" alt="Analytic icon" />
                <p>Analytics</p>
            </li>

            <li className="side-bar__item">
                <img src="src\imgs\Chat.png" alt="Message icon" />
                <p>Messages</p>
            </li>

            <li className="side-bar__item">
                <img src="src\imgs\Code.png" alt="Integrations icon" />
                <p>Integrations</p>
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
