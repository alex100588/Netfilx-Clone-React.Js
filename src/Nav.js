import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import "./Nav.css"

function Nav() {

    const [show, handleShow]=useState(false)
    const history = useHistory()



    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY>100 ? handleShow(true) : handleShow(false)
        })

    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__content">
                <img
                onClick={()=>history.push('/')}
                className='nav__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="" />
                <img
                onClick={()=> history.push('/profile')}
                className='nav__avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" /> 
            </div>
            
        </div>
    )
}

export default Nav
