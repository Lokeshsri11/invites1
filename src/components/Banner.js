import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/116.png";
import headeImg from "../assets/img/thhs.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["HAPPY HIPPIES SHOW"];
  const period = 2000;










  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>






        <Row className="aligh-items-center">

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headeImg} alt="Heade Img" />
                </div>}
            </TrackVisibility>
          </Col>

          {/* <Col xs={12} md={6} xl={7}> */}
          {/* <TrackVisibility> */}
          {/* {({ isVisible }) => */}
          {/* // <div className={isVisible ? "animate__animated animate__fadeIn" : ""}> */}
          {/* <span className="tagline">#MOON PROJECT</span> */}
          {/* <h1>{`The`} <span className="txt-rotate" dataPeriod="1000" data-rotate='["HAPPY HIPPIES SHOW"]'><span className="wrap">{text}</span></span></h1> */}
          {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
          {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
          {/* // </div>} */}
          {/* /  </TrackVisibility> */}
          {/* </Col> */}
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <div class="tooltip-wrap">
                    <img src={headerImg} alt="Header Img" />
                    <div class="tooltip-content">
                      <b>#MoonProject</b><br></br>

                      In current times, the happy hippies are on their journey to be on the moon by 2024. They are doing this to make earth a better place, cleaner environment, less pollution, no descrimination and happiness for all. Now the happy hippies of future, year 2024, from the moon, are showing us their journey from earth to moon through this show.

                      This show inspires a series of events and conversations with leaders, changemakers and you. We the happy hippies are the GenZs, the generation of hope, for future. And this is our #MoonProject.
                    </div>
                  </div>
                  {/* <acronym title="pop-up text"><img src={headerImg}></acronym> */}
                </div>}
            </TrackVisibility>
          </Col>

          {/* <div class="tooltip-wrap">
            <text ="MOON PROJECT" />
            <div class="tooltip-content">
              Here is some content for the tooltip
            </div>
          </div> */}


        </Row>
      </Container>
    </section>

  )
}
