import { HttpCodes } from "@/types";

export const httpCodes: HttpCodes = {
  "100": {
    png: "/images/100.png",
    message: "Continue",
    caption:
      "The server is indicating that the client should continue the request!",
  },
  "200": {
    png: "/images/200.png",
    message: "OK",
    caption: "Everything is working perfectly!",
  },
  "201": {
    png: "/images/201.png",
    message: "Created",
    caption: "The resource has been successfully created!",
  },
  "301": {
    png: "/images/301.png",
    message: "Moved Permanently",
    caption: "The resource has permanently moved to a new location!",
  },
  "401": {
    png: "/images/401.png",
    message: "Unauthorized",
    caption: "Authentication is required to access this resource!",
  },
  "402": {
    png: "/images/402.png",
    message: "Payment Required",
    caption: "The payment is required to access this resource!",
  },
  "403": {
    png: "/images/403.png",
    message: "Forbidden",
    caption: "You do not have permission to access this resource!",
  },
  "404": {
    png: "/images/404.png",
    message: "Not Found",
    caption: "The requested resource could not be found!",
  },
  "405": {
    png: "/images/405.png",
    message: "Method Not Allowed",
    caption: "The requested method is not allowed on this resource!",
  },
  "406": {
    png: "/images/406.png",
    message: "Not Acceptable",
    caption: "The requested resource is not available in the requested format!",
  },
  "408": {
    png: "/images/408.png",
    message: "Request Timeout",
    caption: "The request has timed out!",
  },
  "409": {
    png: "/images/409.png",
    message: "Conflict",
    caption: "The request could not be completed due to a conflict!",
  },
  "417": {
    png: "/images/417.png",
    message: "Expectation Failed",
    caption:
      "The expectation given in the Expect request-header field could not be met by this server!",
  },
  "418": {
    png: "/images/418.png",
    message: "I'm a teapot",
    caption: "The server is a teapot!",
  },
  "499": {
    png: "/images/499.png",
    message: "Client Closed Request",
    caption: "The client has closed the request!",
  },
  "500": {
    png: "/images/500.png",
    message: "Internal Server Error",
    caption: "Something went wrong on the server!",
  },
};

export const getRandomHttpCode = () => {
  const keys = Object.keys(httpCodes);
  const randomIndex = Math.floor(Math.random() * keys.length);
  return keys[randomIndex];
};
