import { useGSAP } from '@gsap/react'
import About from '../components/About/About'
import Coaches from '../components/Coaches/Coaches'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Mask from '../components/Mask/Mask'
import Training from '../components/Training/Training'
import gsap from 'gsap/all'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Homepage = () => {

  useGSAP(()=>{
    gsap.from(".ratting",{
      opacity: 0,
      xPercent: gsap.utils.wrap([-100, 100]),
      stagger: 0.1,
      duration: 5,
      ease: "elastic",
      scrollTrigger: {
        trigger: ".ratting",
        start: "bottom bottom",
        // scrub: 0.1
      }
    })
  },[])
  return (
    <>
      <Hero />
      <About />
      <Training />
      <Mask />
      <Coaches />
      
      <div id="ratting">
        <div className="ratting">

          <img src="../images/ball1.png" alt="profile" />
         
          <div className="rate">
            <h4>Coach Ken</h4>
            <p>Every champion starts with a dream.</p>
          </div>

          <div className="stars">
            <i className="bi-star-fill"></i>
            <i className="bi-star-fill"></i>
            <i className="bi-star-fill"></i>
            <i className="bi-star-fill"></i>
            <i className="bi-star-half"></i>
          </div>
        </div>

        <div className="ratting">

          <img src="../images/ball1.png" alt="profile" />
         
          <div className="rate">
            <h4>Mrs Faith</h4>
            <p>Every day of training turns talent into skill and passion into purpose</p>
          </div>

          <div className="stars">
            <i className="bi-star-fill"></i>
            <i className="bi-star-fill"></i>
            <i className="bi-star-fill"></i>
            <i className="bi-star-fill"></i>
            <i className="bi-star-fill"></i>
          </div>
        </div>

        <div className="ratting">

          <img src="../images/ball1.png" alt="profile" />
         
          <div className="rate">
            <h4>Mr Francis</h4>
            <p>Every champion starts with a dream.</p>
          </div>

          <div className="stars">
            <i className="bi-star-fill"></i>
            <i className="bi-star-fill"></i>
            <i className="bi-star-fill"></i>
            <i className="bi-star-half"></i>
            <i className="bi-star"></i>
          </div>
        </div>

        <div className="ratting">

          <img src="../images/ball1.png" alt="profile" />
         
          <div className="rate">
            <h4>Coach Ken</h4>
            <p>Every champion starts with a dream.</p>
          </div>

          <div className="stars">
            <i className="bi-star-fill"></i>
            <i className="bi-star-fill"></i>
            <i className="bi-star-fill"></i>
            <i className="bi-star-fill"></i>
            <i className="bi-star"></i>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}

export default Homepage
