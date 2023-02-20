import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
import BasicNotificationInfo from "./BasicNotificationInfo";
import NotificationMessage from "./NotificationMessage";
import NotificationComment from "./NotificationComment";

const Notification = ({ notification }) => {
  /**
   * Constantes
   */

  const MESSAGES = {
    react: "reacted to your recent post",
    follow: "followed you",
    join: "has joined your group",
    left: "left the group",
    comment: "commented on your picture",
    message: "sent you a private message",
  };

  /**
   * Use State
   */
  const [notifMessage, setNotifMessage] = useState("");

  useEffect(() => {
    const { action } = notification;

    switch (action) {
      case "react":
        setNotifMessage(MESSAGES.react);
        break;
      case "follow":
        setNotifMessage(MESSAGES.follow);
        break;
      case "comment":
        setNotifMessage(MESSAGES.comment);
        break;
      case "join":
        setNotifMessage(MESSAGES.join);
        break;
      case "left":
        setNotifMessage(MESSAGES.left);
        break;

      case "message":
        setNotifMessage(MESSAGES.message);
        break;
    }
  }, []);

  return (
    <Container fluid className="notification-container">
      <Row>
        <Col md={1} xs={2} className={"col-flextop"}>
          <Avatar
            sx={{ width: 46, height: 46 }}
            alt={notification.name}
            src={notification.avatar}
          />
        </Col>
        <Col>
          <Container fluid>
            <BasicNotificationInfo
              name={notification.name}
              action={notification.action}
              interlude={notifMessage}
              content={notification.target.content}
              readed={notification.readed}
              date={notification.date}
            />

            {notification.action === "message" && (
              <NotificationMessage content={notification.target.content} />
            )}
          </Container>
        </Col>
        {notification.action === "comment" && (
          <NotificationComment picture={notification.picture} />
        )}
      </Row>
    </Container>
  );
};

export default Notification;
