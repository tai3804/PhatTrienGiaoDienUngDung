import React from 'react'
import '../css/FilterBar.css'

export default function FillterBar() {
  return (
    <div className='filter_bar'>
        <div className="filter-bar-header">
            <i className="ti-menu"></i> FILTERS
        </div>

        <div className="filter-bar-body">
            <span>Type <i className="ti-angle-up"></i></span>

            <input type="radio" name="Pan_fried" id="pan_fried" className="filter_radio_box" value='pan_fried'/>
            <label htmlFor="">Pan fried</label>

            <input type="radio" name="" id="" className="filter_radio_box" />
            
            <label htmlFor="">Pan fried</label>
            
            <input type="radio" name="" id="" className="filter_radio_box" />
            
            
            <input type="radio" name="" id="" className="filter_radio_box" />
            
            
            <input type="radio" name="" id="" className="filter_radio_box" />
            
            
            <input type="radio" name="" id="" className="filter_radio_box" />
            
            
            <input type="radio" name="" id="" className="filter_radio_box" />
            
            
            <input type="radio" name="" id="" className="filter_radio_box" />
        </div>
    </div>
  )
}
