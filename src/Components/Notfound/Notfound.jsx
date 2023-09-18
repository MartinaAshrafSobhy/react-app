import React from 'react'

export default function Notfound() {
  return (
    <div className='bgColor text-center text-white py-4'>  
    <div className='py-5'>
    <div className="d-flex align-items-center justify-content-center my-3">
        <div className="line me-3 bg-white"></div>
        <i className="fa-solid fa-star"></i>
        <div className="line ms-3 bg-white"></div>
      </div>
      <h2 className="text-uppercase mb-3 mt-4 fs-1 fw-bolder">Not Found</h2>
      <p className="mb-3 mt-4 fw-bolder">Page doesn't exist</p>
      <div className="d-flex align-items-center justify-content-center my-3">
        <div className="line me-3 bg-white"></div>
        <i className="fa-solid fa-star"></i>
        <div className="line ms-3 bg-white"></div>
      </div>
    </div>
   </div>
  )
}
