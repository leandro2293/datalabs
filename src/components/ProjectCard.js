import { Col, Button } from "react-bootstrap";
import { useState } from "react";
import { ModalDashboard } from "./ModalDashboard";

export const ProjectCard = ({ title, description, imgUrl, dashTitle, urlDash }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx" onClick={() => setModalShow(true)}>
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>
      <ModalDashboard 
      show={modalShow}
      onHide={() => setModalShow(false)}
      dashTitle={dashTitle}
      urlDash={urlDash}
      />
    </>
  )
}
