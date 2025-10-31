import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  { id: 1, message: "안녕하세요!" },
  { id: 2, message: "오늘은 금요일입니다." },
  { id: 3, message: "리액트 재미있어요!" },
  { id: 4, message: "열심히 공부해봅시다!" },
];

class NotificationList extends React.Component {
  timer = null;

  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.notifications.length < reservedNotifications.length) {
          const index = prevState.notifications.length;
          return {
            notifications: [
              ...prevState.notifications,
              reservedNotifications[index],
            ],
          };
        } else {
          clearInterval(this.timer);
          return null; // 상태 변경 없음
        }
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    //this.setState({ notifications: [] });
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification, index) => (
          <Notification
            key={notification.id}
            id={notification.id}
            message={notification.message}
          />
        ))}
      </div>
    );
  }
}

export default NotificationList;
