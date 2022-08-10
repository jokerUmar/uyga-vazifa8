import React from 'react'
import "./aside.css"
import logo from "../../assets/image/logo.png"
import logout from "../../assets/image/vector.png"
import {Link} from "react-router-dom"

function Aside() {
return (
<div className="container">
    <div className='aside'>
   
    <Link to="/" className='logo'>
    <img  src={logo} alt="" />
    </Link>

    <div className="line"></div>

    <div className='aside-box'>

    <div className="span">
    <Link to="/" className='todo link'><h3 className='aside-text'>TODO LISTS</h3></Link>
    <br />
    <Link to="/api" className='API link'><h3 className='aside-text' >API LIST</h3></Link>

    </div>    

    <br />
    <div className='logout link' style={{display:"flex" , alignItems:"center"}}>
    <img src={logout} style={{marginRight:"22px"}}  alt="" />
    <a href="" ><h3 className='log'>Logout</h3></a>
    </div>

    </div>

    </div>
</div>
)
}

export default Aside