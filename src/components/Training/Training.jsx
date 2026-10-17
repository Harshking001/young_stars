import "./Training.css"

const Training = () => {
  return (
    <section id="training">
      <h1>Training</h1>
      

      <div className="training">
        <div className="train">
          <img src="/young_stars/ball1.png" alt="" />
          <div className="schedule">
            <h1>Training (monday - friday)</h1>
            <p>Training every monday to friday from 10.00am - 3.00pm</p>
          </div> 
          <a href="#">Learn more <i className="bi bi-arrow-right"></i></a>
        </div>
        <div className="train">
          <img src="/young_stars/ball3.png" alt="" />
          <div className="schedule">
            <h1>Training (saturday & sunday)</h1>
            <p>Training every monday to friday from 10.00am - 3.00pm</p>
          </div> 
          <a href="#">Learn more <i className="bi bi-arrow-right"></i></a>
        </div>
      </div>
    </section>
  )
}

export default Training
