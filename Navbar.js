import React from 'react'

export default function Navbar() {
  return (

    <div className='m-1'>
      <nav className="navbar bg-primary p-2 rounded ">
  <div className="container-fluid">
    <a className="navbar-brand text-white " href="#">
     <h1>Text-Editor</h1>
    </a>
    </div>
    </nav>
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Text editor</strong> It allows you to perform various operatio on text.
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
</div>
  )
}
