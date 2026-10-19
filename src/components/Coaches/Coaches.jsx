import "./Coaches.css"

const Coaches = () => {
  return (
    <section id="coaches">
      <h1>Meet our Coaches</h1>
      <div className="coaches">
        <div className="coach">
            <h3>Coach Ken</h3>
            <p>Lorem,Temporibus creiciendis nihil quia ducimus placeat distinctio optio.</p>
            <h4>Team manager</h4>
            <a className="contact-coach" href="tel:070000000">contact</a>
        </div>
        <div className="coach">
            <h3>Coach Abi</h3>
            <p>Lorem,quia ducimus placeat distinctio optio.</p>
            <h4>U11</h4>
            <a className="contact-coach" href="tel:070000000">contact</a>
        </div>
      </div>
    </section>
  )
}

export default Coaches
