import React from 'react'

function Footer() { return (
  <>
      <hr className='break' />
      <div className='footer'>
        <img src="logo_samar.png" alt="" />
        <div className='footer-right'>
          <div className='footer-list'>
            <h3>COMPANY</h3>
            <a href="https://www.ditommaso.com/" target='_blank'>DiTommaso Real Estate</a>
            <a href="https://www.google.com/localservices/prolist?g2lbs=ANTchaNwIoTLDmb-HJdS6x94StzoMN3J_7NccerPvSyvzwNhMHnB1NwvGFvCB8hapXFjmUmxc54UpSfViL8g1vZ9zrXP9IjLnUBGZNF-hkrXLt89xITkJhWqhPLwHzOpzkK8O3bxTgRh&hl=en-US&gl=us&ssta=1&q=ditommaso%20real%20estate&oq=ditommaso%20real%20estate&slp=MgA6HENoTUl6YW12N1l2MGdnTVZ4UWw3QngxNDVndFhSAggCYAB67wFDaFZrYVhSdmJXMWhjMjhnY21WaGJDQmxjM1JoZEdWSXRwMlh5ZVdBZ0lBSVdpMFFBQkFCRUFJWUFCZ0JHQUlpRldScGRHOXRiV0Z6YnlCeVpXRnNJR1Z6ZEdGMFpTb0lDQUlRQUJBQkVBS1NBUkp5WldGc1gyVnpkR0YwWlY5aFoyVnVZM21xQVVnS0NDOXRMekEyYXpGeUVBRXlIeEFCSWh1UF9wZ3VnZF85V1lPUWRKOWdPM004WUxMTTFETzlKeVY1Wkt3eUdSQUNJaFZrYVhSdmJXMWhjMjhnY21WaGJDQmxjM1JoZEdYZ0FRQZIBSQoLL2cvMXRkbGNtcHEKDS9nLzExdjVqa3E5X3IKDS9nLzExa3FfMjVyNzUKDS9nLzExdjVqa252YmsKDS9nLzExdjVqa3IwdHI%3D&src=2&spp=CgsvZy8xdGRsY21wcTrEAVdpMFFBQkFCRUFJWUFCZ0JHQUlpRldScGRHOXRiV0Z6YnlCeVpXRnNJR1Z6ZEdGMFpTb0lDQUlRQUJBQkVBS1NBUkp5WldGc1gyVnpkR0YwWlY5aFoyVnVZM21hQVFDcUFVZ0tDQzl0THpBMmF6RnlFQUV5SHhBQklodVBfcGd1Z2RfOVdZT1FkSjlnTzNNOFlMTE0xRE85SnlWNVpLd3lHUkFDSWhWa2FYUnZiVzFoYzI4Z2NtVmhiQ0JsYzNSaGRHVT0%3D&lrlstt=1701634868724&ved=2ahUKEwjJ3Zzti_SCAxV_F2IAHYx2CXUQvS56BAgdEAE&scp=ChdnY2lkOnJlYWxfZXN0YXRlX2FnZW5jeRJFEhIJeedb_ThLwokR0YkeTNhDEIsiF1N0YXRlbiBJc2xhbmQsIE5ZIDEwMzE0KhQNrvItGBVCqMTTHWhvOBglIsjT0zABGhVkaXRvbW1hc28gcmVhbCBlc3RhdGUiFWRpdG9tbWFzbyByZWFsIGVzdGF0ZSoSUmVhbCBlc3RhdGUgYWdlbmN5" target='_blank'>Directions and Hours</a>
          </div>
          <div className='footer-list'>
            <h3>RESOURCES</h3>
            <a href="/contact">Contact</a>
            <a href="/review">Leave a review</a>
          </div>
        </div>
      </div>
      <hr className='break' />
      <p className='center'>&copy; {new Date().getFullYear()} Samar Ramzy of Ditommaso Real Estate</p>
      <p style={{fontStyle: 'italic'}} className='center'>Website designed by Caitlyn Curran</p>
  </>
  )
}

export default Footer