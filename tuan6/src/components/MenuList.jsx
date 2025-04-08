import React, { useEffect, useState } from 'react';
import './MenuList.css';

export default function MenuList({data, addToCart}) {
  return (
    <>
      <ul id="menu__list">
        {
          data.map((item) => {
            return (
              <li className='menu__item'>
                <img className='menu__item-img' src={item.img} alt={item.ten} />
                <h3>{item.ten}</h3>
                <p>{item.gia} VND</p>
                <button onClick={() => {addToCart(item)}}> Chọn</button>
              </li>
            )
          })
        }
      </ul>
    </>
  );
}
