import { Link, Outlet } from 'react-router-dom'
import "./Navbar.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {

  useGSAP(()=>{
    gsap.to(".ball",{
      repeat: -1,
      y: -50,
      yoyo: true,
      ease: "expo",
      duration: 0.5,
    })

  },[])
  return (
    <>
      <nav>
        <img src="./favicon.png" className="logo" alt="logo" />
        <div className="nav-links">
          
          <Link  className="button link"><div className="dot"></div> news</Link>
          <Link  className="button link explore_button">explore</Link>
          <Link  className="link"><i className="bi bi-info-circle"></i></Link>
        </div>

        <Link className="chat_button">
          <i className='bi bi-chat-fill'></i>
          <img src="./cursor.png" alt="ball" className="ball" />
          <div className="dot"></div>
        </Link>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar
