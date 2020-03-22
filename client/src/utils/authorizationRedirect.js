import notification from "./notification";

const authorizationRedirect = (path, history) => {
  notification(
    "Authorization",
    "Please login, you have been redirected to login section",
    "error"
  );

  history.push(path);
};

export default authorizationRedirect;
