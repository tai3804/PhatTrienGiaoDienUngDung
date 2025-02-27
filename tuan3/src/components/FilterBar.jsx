import React from 'react'
import '../css/FilterBar.css'
import rangeImg from '../img/range.png'
import starYellow from '../img/star_yellow.png'
import starGrey from '../img/star_grey.png'

export default function FillterBar() {
  return (
    <div id='filter_bar'>
        <div id="filter-bar-header">
          <b><i className="ti-menu"></i> FILTERS</b>
        </div>

        <div className="filter-bar-body">
          <div id="filter-bar-type">
              <b className='flex-between'>Type <i className="ti-angle-up pink"></i></b>

              <div className="row">
                <input type="checkbox" name="type" id="pan_fried" className="filter-bar-checkbox" value='pan_fried'/>
                <label htmlFor="">Pan fried</label>

                <input type="checkbox" name="type" id="stir-fried" className="filter-bar-checkbox" />
                <label htmlFor="stir-fried">Stir-fried</label>
              </div>
              
              <div className="row">
                <input type="checkbox" name="type" id="grilled" className="filter-bar-checkbox" />
                <label htmlFor="grilled">Grilled</label>
                
                <input type="checkbox" name="type" id="roasted" className="filter-bar-checkbox" />
                <label htmlFor="roasted">Roasted</label>
              </div>
  
              <div className="row">
                <input type="checkbox" name="type" id="sauteed" className="filter-bar-checkbox" />
                <label htmlFor="sauteed">Sauteed</label>
                
                <input type="checkbox" name="type" id="baked" className="filter-bar-checkbox" />
                <label htmlFor="baked">Baked</label>
              </div>

              <div className="row">
                <input type="checkbox" name="type" id="steamed" className="filter-bar-checkbox" />
                <label htmlFor="steamed">Steamed</label>
                
                <input type="checkbox" name="type" id="stewed" className="filter-bar-checkbox" />
                <label htmlFor="stewed">Stewed</label>
              </div>
            </div>
            <hr />
            <div id="filter-time">
              <b className="flex-between">
                Time
                <i className="ti-angle-up pink"></i>
              </b>
              <img src={rangeImg} alt="" id='filter-time-range'/>
            </div>
            <hr />

            <div  id='filter-rate'>
              <div className="filter-rate-header ">
                <b className='flex-between'>
                  Rating
                  <i className="ti-angle-up pink"></i>
                </b>
              </div>
              
              <div className="row">
                <input type="checkbox"/>
                <img src={starYellow} alt=""/>
                <img src={starYellow} alt=""/>
                <img src={starYellow} alt=""/>
                <img src={starYellow} alt=""/>
                <img src={starYellow} alt=""/>
              </div>
              <div className="row">
                <input type="checkbox"/>
                <img src={starYellow} alt=""/>
                <img src={starYellow} alt=""/>
                <img src={starYellow} alt=""/>
                <img src={starYellow} alt=""/>
                <img src={starGrey} alt=""/>
              </div>
              <div className="row">
                <input type="checkbox"/>
                <img src={starYellow} alt=""/>
                <img src={starYellow} alt=""/>
                <img src={starYellow} alt=""/>
                <img src={starGrey} alt=""/>
                <img src={starGrey} alt=""/>
              </div>
              <div className="row">
                <input type="checkbox"/>
                <img src={starYellow} alt=""/>
                <img src={starYellow} alt=""/>
                <img src={starGrey} alt=""/>
                <img src={starGrey} alt=""/>
                <img src={starGrey} alt=""/>
              </div>
              <div className="row">
                <input type="checkbox"/>
                <img src={starYellow} alt=""/>
                <img src={starGrey} alt=""/>
                <img src={starGrey} alt=""/>
                <img src={starGrey} alt=""/>
                <img src={starGrey} alt=""/>
              </div>
            </div>
            <hr />

            <div id="filter-footer">
              <button id='filter-btn'>Apply</button>
            </div>
        </div>
    </div>
  )
}
