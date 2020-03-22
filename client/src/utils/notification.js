import { notification } from "antd";

const flashManagement = (title, description, type) => {
  notification[type]({
    message: title,
    description,
    onClick: () => {
      console.log("Notification Clicked!");
    }
  });
};

export default flashManagement;
