import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Notification from "../components/Notifications/Notification";

import webber from "../assets/images/avatar-mark-webber.webp";
import gray from "../assets/images/avatar-angela-gray.webp";
import thompson from "../assets/images/avatar-jacob-thompson.webp";
import smith from "../assets/images/avatar-kimberly-smith.webp";
import peterson from "../assets/images/avatar-nathan-peterson.webp";
import kim from "../assets/images/avatar-anna-kim.webp";
import rizky from "../assets/images/avatar-rizky-hasanuddin.webp";

import chessPicture from "../assets/images/image-chess.webp";
import { useState } from "react";

const NotificationsPannel = () => {
  /**
   * Mocks
   */
  const mockNotification = {
    name: "Hola",
    action: "react, follow, message, comment,join,left",
    target: {
      type: "group, post, message,picture",
      content: "name of group, post name, private message, image url",
    },
    readed: "true, false",
    date: "1m aja",
  };

  const mockNotification1 = [
    {
      name: "Mark Webber",
      action: "react",
      target: {
        type: "post",
        content: "My first tournament today!",
      },
      readed: false,
      date: "1m ago",
      avatar: webber,
    },
    {
      name: "Angela Gray",
      action: "follow",
      target: {
        type: "post",
        content: " ",
      },
      readed: false,
      date: "5m ago",
      avatar: gray,
    },
    {
      name: "Jacob Thompson",
      action: "join",
      target: {
        type: "post",
        content: "Chess Club",
      },
      readed: false,
      date: "1 day ago",
      avatar: thompson,
    },
    {
      name: "Rizky Hasanuddin",
      action: "message",
      target: {
        type: "post",
        content:
          "Hello, thanks for setting up the Chess Club, I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      },
      readed: true,
      date: "5 days ago",
      avatar: rizky,
    },
    {
      name: "Kimberly Smith",
      action: "comment",
      target: {
        type: "post",
        content: "",
      },
      readed: true,
      date: "1 week ago",
      avatar: smith,
      picture: chessPicture,
    },
    {
      name: "Nathan Peterson",
      action: "react",
      target: {
        type: "post",
        content: "5 end-game strategies to increase your win rate",
      },
      readed: true,
      date: "2 weeks ago",
      avatar: peterson,
    },
    {
      name: "Anna Kim",
      action: "left",
      target: {
        type: "post",
        content: "Chess Club",
      },
      readed: true,
      date: "2 weeks ago",
      avatar: kim,
    },
  ];

  /**
   * Use state
   */

  const [notificationsArray, setNotificationsArray] =
    useState(mockNotification1);

  const [numberOfNotifications, setNumberOfNotifications] = useState(3);

  /**
   * Handles
   */

  const handleReadAll = () => {
    const newNotifications = notificationsArray.map((not) => {
      return { ...not, readed: true };
    });

    setNotificationsArray(newNotifications);
    setNumberOfNotifications(0);
  };

  return (
    <Container fluid className="general-container">
      <Row>
        <Container fluid className="pannel-container">
          <Row className="header-mobile">
            <Col xs={7}>
              <Container fluid>
                <Row>
                  <Col lg={4} xs={5} className="text-bold__title">
                    Notifications
                  </Col>
                  <Col lg={2} xs={3} className="col-flex mobile-number">
                    <div className="number-container">
                      {numberOfNotifications}
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col className="col-end all-read" onClick={handleReadAll}>
              Mask as all read
            </Col>
          </Row>
          <Row>
            <Container fluid style={{ padding: "2%" }}>
              {notificationsArray.map((notif) => (
                <Notification notification={notif} />
              ))}
            </Container>
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

export default NotificationsPannel;
