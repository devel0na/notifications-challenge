import { Row } from "react-bootstrap";

const NotificationMessage = ({ content }) => {
  return (
    <>
      <Row className="message-container">{content}</Row>
    </>
  );
};

export default NotificationMessage;
