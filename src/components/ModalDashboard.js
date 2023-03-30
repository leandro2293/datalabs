import Modal from 'react-bootstrap/Modal';

export const ModalDashboard = (props) => {
    return (
        <Modal
      {...props}
      style={{zIndex: 99999999}}
      size="lg"
      fullscreen={true}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton closeVariant="white">
        <Modal.Title id="contained-modal-title-vcenter">
          {props.dashTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe title="Dashboard" width="100%" height="100%" src={props.urlDash} frameborder="0" allowFullScreen="true"></iframe>
      </Modal.Body>
      <Modal.Footer>
        <button type="button" onClick={props.onHide}><span>Fechar</span></button>
      </Modal.Footer>
    </Modal>
    )
}