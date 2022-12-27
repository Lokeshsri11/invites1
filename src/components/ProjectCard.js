import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={30} sm={15} md={10}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href="https://www.youtube.com/playlist?list=PLxNKsHD8bM1m0XLQIBGnXNApencPe-XwK">link</a>
        </div>
      </div>
    </Col>
  )
}
