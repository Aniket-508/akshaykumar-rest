import { HttpCodes } from "@/types";

export const httpCodes: HttpCodes = {
  "200": {
    gif: "/images/http-codes/200.gif",
    jpg: "/images/http-codes/200.jpg",
    message: "OK",
    caption: "Everything is working perfectly!",
  },
  "404": {
    gif: "/images/http-codes/404.gif",
    jpg: "/images/http-codes/404.jpg",
    message: "Not Found",
    caption: "The requested resource could not be found!",
  },
  "500": {
    gif: "/images/http-codes/500.gif",
    jpg: "/images/http-codes/500.jpg",
    message: "Internal Server Error",
    caption: "Something went wrong on the server!",
  },
  "403": {
    gif: "/images/http-codes/403.gif",
    jpg: "/images/http-codes/403.jpg",
    message: "Forbidden",
    caption: "You do not have permission to access this resource!",
  },
  "401": {
    gif: "/images/http-codes/401.gif",
    jpg: "/images/http-codes/401.jpg",
    message: "Unauthorized",
    caption: "Authentication is required to access this resource!",
  },
};

export const getRandomHttpCode = () => {
  const keys = Object.keys(httpCodes);
  const randomIndex = Math.floor(Math.random() * keys.length);
  return keys[randomIndex];
};
