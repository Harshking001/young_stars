import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import "./Mask.css"
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger)

const Mask = () => {
    useGSAP(()=>{
        gsap.to("#mask",{
            maskSize: 8000,
            scrollTrigger: {
                trigger: "#mask",
                start: "top top",
                pin: true,
                scrub: true
            }
        })
    },[])
  return (
    <section id="mask">
      <img src="./stadium2.jpg" alt="image" />
    </section>
  )
}

export default Mask
