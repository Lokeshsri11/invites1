import meter1 from "../assets/img/commerce.png";
import meter2 from "../assets/img/employment.png";
import meter3 from "../assets/img/energy.png";
import meter4 from "../assets/img/gender.png";
import meter5 from "../assets/img/reading.png";
import meter6 from "../assets/img/skill.png";
import meter7 from "../assets/img/tree.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              {/* <h2>Projects</h2> */}

              <div class="container">
                <div class="row">
                  <div class="col-md-30 text-center">
                    <p class="animate-charcter">We invite you to join us and take part in this moment for change. <br></br> Driven by our GenZs, The Happy Hippies Show is a web series of discussions by the leaders, on these social themes.. </p>
                  </div>
                </div>
              </div>

              {/* <p>We invite you to join us and take part in this moment for change. Driven by our GenZs, The Happy Hippies Show is a web series of discussions by the leaders, on these social themes</p> */}
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Cause Driven consumerism</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Employement Generation</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Renewable Enegy adoption</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="Image" />
                  <h5>Gender Inclusivity</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="Image" />
                  <h5>Child Education</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="Image" />
                  <h5>Skill Training</h5>
                </div>
                <div className="item">
                  <img src={meter7} alt="Image" />
                  <h5>Tree Plantation</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
