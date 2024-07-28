import React from 'react'

const Footer = () => {
  return (
    <div className="container-fluid bg-black text-white ">
      <div className="container px-4">
        <div className="row d-flex">
          <div className="col-lg-3 col-md-6 d-flex flex-column mt-3">
            <p className='footer-heading'>About</p>
            <ul className='footer-sub-heading'>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 d-flex flex-column mt-3">
            <p>About</p>
          </div>
          <div className="col-lg-3 col-md-6 d-flex flex-column mt-3">
            <p>About</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer