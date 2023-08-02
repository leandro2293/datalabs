import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.svg";
import logo from '../assets/img/datalabs-logo.svg';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/company/data-labs-consultoria/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.instagram.com/datalabsconsultoria/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://wa.me/5585985766870?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20Consultoria%20Gratuita!" target="_blank"><img src={navIcon4} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
