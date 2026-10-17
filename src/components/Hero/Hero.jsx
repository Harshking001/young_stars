import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const images = [
  "/young_stars/images/image (12).jpg",
  "/young_stars/images/image (2).jpg",
  "/young_stars/images/image (5).jpg",
  "/young_stars/images/image (9).jpg",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  // Automatically move to the next image forever
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => current + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Reset to the first image without showing a reverse animation
  useEffect(() => {
    if (index === images.length) {
      const timeout = setTimeout(() => {
        setAnimate(false);
        setIndex(0);
      }, 700);

      return () => clearTimeout(timeout);
    }

    setAnimate(true);
  }, [index]);

  // Restore the sliding animation after the reset
  useEffect(() => {
    if (!animate && index === 0) {
      const timeout = setTimeout(() => {
        setAnimate(true);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [animate, index]);

  const activeIndex = index % images.length;

  return (
    <section id="hero">
      <h1 id="hero-h1">Young Stars Academy</h1>
      <p>
       Every champion starts with a dream. At Young Stars Academy, we turn passion into purpose, talent into skill, and young dreams into a brighter future for Kenyan sports.
        <i className="bi bi-pin"></i>
      </p>

      <div className="hero">
        <div
          className="hero-track"
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: animate
              ? "transform 700ms ease-in-out"
              : "none",
          }}
        >
          {images.map((src, i) => (
            <img src={src} alt={`Young Stars Academy ${i + 1}`} key={src} />
          ))}

          {/* Clone of the first image for seamless looping */}
          <img src={images[0]} alt="Young Stars Academy" />
        </div>

        <Link className="button link" to="/">
          more
        </Link>

        <p className="no">
          {activeIndex + 1}/{images.length}
        </p>

        <div className="dots">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`no-dot ${activeIndex === i ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Show image ${i + 1}`}
              aria-current={activeIndex === i ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;