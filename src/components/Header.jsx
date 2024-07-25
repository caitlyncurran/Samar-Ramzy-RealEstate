import React from 'react'

function Header() {
  return (
    <div className="header">
      <a href="/" className="logo"><img className='logo_img' src="logo_samar.png" alt="" /></a>
      <div className="header-right">
        <a className="hide" href="/">Home</a>
        <a href="/contact">Contact</a>
        <a className='hide' href="https://www.google.com/maps/dir//DiTommaso+Real+Estate,+113+New+Dorp+Plaza,+Staten+Island,+NY+10306/@40.5727847,-74.1602016,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c24c6687ae1e87:0x819f29a781df1fe4!2m2!1d-74.119002!2d40.572792?entry=ttu" target='_blank'>Get Directions</a>
        <a className='hide' href="tel:7187557672">718-755-7672</a>
      </div>
    </div>
  )
}

export default Header