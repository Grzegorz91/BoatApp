import notification from "./notification";
import authorizationRedirect from "./authorizationRedirect";

const errorHandling = (e, headerName, history) => {
  const errorMessage = e.response.data.error;
  const responseStatus = e.response.status;

  if (responseStatus === 401) return authorizationRedirect("/login", history);

  notification(headerName, errorMessage, "error");
};

export default errorHandling;
