import React from 'react'
import "./aside.css"
import logo from "../../assets/image/logo.png"
import logout from "../../assets/image/vector.png"

function Aside() {
return (
<div className="container">
    <div className='aside'>
   
    <a className='logo' href="">
    <img   src={logo} alt="" />
    </a>

    <div className="line"></div>

    <div className='aside-box'>

    <div className="span">
    <a href='' className='todo link'><h3 className='aside-text'>TODO LISTS</h3></a>
    <br />
    <a href="" className='API link'><h3 className='aside-text' >API LIST</h3></a>

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