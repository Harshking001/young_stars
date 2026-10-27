import { useState } from "react"
import Footer from "../components/Footer/Footer"
import { useGSAP } from "@gsap/react"
import gsap, { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const NewsPage = () => {

  const [calender, setCalender] = useState([
    {"title": "Game",
      "done": true,
      "date": "01",
      "year": "2026",
      "month": "Nov",
      "time": "10:00am",
      "team": "stars"
    },
    {"title": "Training",
      "done": true,
      "date": "19",
      "year": "2026",
      "month": "Nov",
      "time": "11:30am"
    },
    {"title": "Game",
      "done": true,
      "date": "28",
      "year": "2026",
      "month": "Nov",
      "time": "01:30pm",
      "team": "young stars"
    },
    {"title": "Training",
      "done": true,
      "date": "30",
      "year": "2026",
      "month": "Nov",
      "time": "12:30pm"
    },
    {"title": "Training",
      "done": true,
      "date": "09",
      "year": "2026",
      "month": "Dec",
      "time": "11:30am"
    },
    {"title": "Friendly",
      "done": false,
      "date": "13",
      "year": "2026",
      "month": "Dec",
      "time": "01:20am"
    },
    {"title": "Game",
      "done": false,
      "date": "19",
      "year": "2026",
      "month": "Dec",
      "time": "08:30am"
    },
    {"title": "Training",
      "done": false,
      "date": "21",
      "year": "2026",
      "month": "Dec",
      "time": "11:30am"
    },
    {"title": "Training",
      "done": false,
      "date": "28",
      "year": "2026",
      "month": "Dec",
      "time": "09:30am"
    }
  ])

  useGSAP(()=>{
    gsap.from(".percent",{
      width: 0,
      ease: "bounce",
      duration: 2,
      scrollTrigger: {
        trigger: "#progress",
        start: "bottom bottom"
      }
    })
  },[])
  return (
    <>

     <h1>This month Calender</h1>

      <div id="calender">
        {calender.map((calender,index)=>(
          <div className="calender" key={index}>
            {calender.done ? <i className="bi bi-check-circle-fill" style={{color: "green"}}></i> : <i className="bi bi-circle" style={{color: "orange"}}></i>}
            <h3>{calender.title}</h3>
            <h1>{calender.date}</h1>
            <h4>{calender.month}</h4>
            <p>{calender.year}</p>
            <h5>{calender.time}</h5>
            {calender.team ? "vs" : ""}
            <h6>{calender?.team}</h6>
          </div>
        ))}
      </div>

      <div id="progress">
        <i className="bi bi-trophy-fill"></i>
        <div className="progress">
          <div className="percent"></div>
        </div>
        <p>32wins/40games</p>
      </div>
      <Footer />
      
    </>
  )
}

export default NewsPage
