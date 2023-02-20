import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BasicNotificationInfo = ({
  name,
  avatar,
  action,
  interlude,
  content,
  readed,
  date,
}) => {
  return (
    <>
      <Row>
        <Col className="col-start zero-padding" xs={11}>
          <p
            className="zero-padding"
            style={{ marginBottom: "0%", textAlign: "start" }}
          >
            <span className="text-bold">{name}</span> {interlude}{" "}
            {action !== "message" && (
              <span
                className={action === "react" ? "text-readed" : "text-active"}
              >
                {content}
              </span>
            )}{" "}
            {!readed && (
              <span>
                <p className="unreaded-mark"></p>
              </span>
            )}
          </p>
        </Col>
      </Row>
      <Row className="text-readed-soft">{date}</Row>
    </>
  );
};

export default BasicNotificationInfo;
