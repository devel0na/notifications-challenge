import { Col } from "react-bootstrap";

const NotificationComment = ({ picture }) => {
  return (
    <Col md={2} xs={2} className="col-end">
      <img className="img-container" src={picture} />
    </Col>
  );
};

export default NotificationComment;
