import extraction from "../assets/img/extraction.svg";
import structure from "../assets/img/structure.svg";
import relational from "../assets/img/relational.svg";  
import calculate from "../assets/img/calculate.svg";
import visualize from "../assets/img/visualize.svg";
import distribution from "../assets/img/distribution.svg";
import automation from "../assets/img/automation.svg";  
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
      items: 4
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
                        <h2>Os 7 Pilares</h2>
                        <p>Existem diferentes abordagens e modelos para descrever os pilares do Business Intelligence (BI), mas uma estrutura comum e amplamente aceita é composta pelos seguintes sete pilares</p>
                        <Carousel responsive={responsive} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={extraction} alt="Extração" />
                                <h5>Extração</h5>
                            </div>
                            <div className="item">
                                <img src={structure} alt="Estruturação" />
                                <h5>Estruturação</h5>
                            </div>
                            <div className="item">
                                <img src={relational} alt="Modelagem" />
                                <h5>Modelagem</h5>
                            </div>
                            <div className="item">
                                <img src={calculate} alt="Cálculos" />
                                <h5>Cálculos</h5>
                            </div>
                            <div className="item">
                                <img src={visualize} alt="Visuais" />
                                <h5>Visuais</h5>
                            </div>
                            <div className="item">
                                <img src={distribution} alt="Distribuição" />
                                <h5>Distribuição</h5>
                            </div>
                            <div className="item">
                                <img src={automation} alt="Automação" />
                                <h5>Automação</h5>
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
