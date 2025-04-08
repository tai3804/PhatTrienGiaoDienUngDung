import React from 'react'
import MenuList  from '../components/MenuList'
import './Menu.css'

export default function Menu({data, addToCart}) {
  return (
    <>
      <MenuList data={data} addToCart={addToCart}></MenuList>
    </>
  )
}
