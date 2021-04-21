import React, { useState } from "react";

// importing testimonials data
import { Testimonials } from "./TestimonialsData";

// importing icons
import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [leftClicked, setLeftClicked] = useState(false);
  const [rightClicked, setRightClicked] = useState(false);
  const length = Testimonials.length;

  // if user clicks on the left button, it will jump to the view of the previous testimonial
  const goLeft = () => {
    setLeftClicked(true);
    current === 0 ? setCurrent(-100 * (length - 1)) : setCurrent(current + 100);
  };

  // if user clicks on the right button, it will jump to the view of the next testimonial
  const goRight = () => {
    current === -100 * (length - 1) ? setCurrent(0) : setCurrent(current - 100);
  };

  // this method allows the testimonials to scroll right (using the goRight method above) and will scroll every 2 seconds.
  const timedScroll = () => {
    setTimeout(() => {
      goRight();
    }, 2000);
  };

  // If either arrow is clicked, the carousel stops and the user will be allowed to manually scroll through instead
  if (leftClicked === false && rightClicked === false) {
    timedScroll();
  } else {
    clearTimeout(timedScroll);
  }

  const addDefaultSrc = (e) => {
    
  };

  return (
    <div className="carousel">
      <h3>We Love our Customers!</h3>
      <ul>
        
        {Testimonials.map((data) => {
          return (
            <li
              key={data.id}
              style={{
                transform: `translateX(${current}%)`,
              }}
            >
              <div className="carouselCard" style={{ background: data.color }}>
                <div className="image">
                  <img onError={addDefaultSrc} src={data.image} alt={data.name} />
                </div>
                <div className="description">
                  <p>{data.description}</p>
                </div>
                <div className="name">
                  – <h4>{data.name}</h4>
                </div>
                <div className="title">
                  <span>{data.title}</span>
                </div>
              </div>
            </li>
          );
        })}
        <button onClick={goLeft} id="leftButton">
          <ArrowCircleLeft size={48} />
        </button>
        <button
          onClick={() => {
            setRightClicked(true);
            goRight();
          }}
          id="rightButton"
        >
          <ArrowCircleRight size={48} />
        </button>
      </ul>
    </div>
  );
};

export default Carousel;
