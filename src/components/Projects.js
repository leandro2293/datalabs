import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import dashImg1 from "../assets/img/dash1.png";
import dashImg2 from "../assets/img/dash2.png";
import dashImg3 from "../assets/img/dash3.png";
import dashImg4 from "../assets/img/dash4.png";
import dashImg5 from "../assets/img/dash5.png";
import dashImg6 from "../assets/img/dash6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState } from "react";

export const Projects = () => {
  
  const projects = [
    {
      title: "Análise Faturamento",
      description: "Realizado",
      imgUrl: dashImg1,
      dashTitle: "Análise de Faturamento de um PetShop",
      urlDash: "https://app.powerbi.com/view?r=eyJrIjoiYjIzMjQzN2EtYjMzMi00NmJjLWE5MWEtZjE3ODBiZDdiNjQ2IiwidCI6ImNiOGQ3ZjUzLWY2ZmItNDRlOC05N2VlLTQ1M2IyNjM0ODVmMiJ9"
    },
    {
      title: "Financeiro",
      description: "Financeiro + Fluxo de Caixa",
      imgUrl: dashImg2,
      dashTitle: "Financeiro + Fluxo de Caixa",
      urlDash: "https://app.powerbi.com/view?r=eyJrIjoiNjljZTJiNWItZjc4OS00YzljLTk1OTEtOTBiYTczMGQzY2JjIiwidCI6ImNiOGQ3ZjUzLWY2ZmItNDRlOC05N2VlLTQ1M2IyNjM0ODVmMiJ9"
    },
    {
      title: "Dashboard de Vendas",
      description: "Realizado vs Meta",
      imgUrl: dashImg3,
      dashTitle: "Dashboard de Vendas - Realizado vs Meta",
      urlDash: "https://app.powerbi.com/view?r=eyJrIjoiNDM1OWE3ZmUtZmQ4OC00MGJhLTllZjUtYzYzMjk2N2MxNjBkIiwidCI6ImNiOGQ3ZjUzLWY2ZmItNDRlOC05N2VlLTQ1M2IyNjM0ODVmMiJ9"
    },
    {
      title: "DRE",
      description: "Demonstrativo de Resultados e Análise de Títulos",
      imgUrl: dashImg4,
      dashTitle: "Demonstrativo de Resultados e Análise de Títulos",
      urlDash: "https://app.powerbi.com/view?r=eyJrIjoiNWIyZDgyM2YtYjcyYS00ZmEzLTk4Y2ItOTE3YmMzMzhkZjUzIiwidCI6ImNiOGQ3ZjUzLWY2ZmItNDRlOC05N2VlLTQ1M2IyNjM0ODVmMiJ9"
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: dashImg5,
    //   dashTitle: "Book De Custos",
    //   urlDash: ""
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: dashImg6,
    // },
  ];

  return (
    <section className="project" id="portfolio">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "": ""}>
                <h2>Portfólio</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Dashboards</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Treinamentos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Consultorias</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second"></Tab.Pane>
                    <Tab.Pane eventKey="third"></Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
