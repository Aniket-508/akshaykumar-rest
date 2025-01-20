import { HttpCodes } from "@/types";

export const httpCodes: HttpCodes = {
  "200": {
    gif: "/images/200.gif",
    png: "/images/200.png",
    message: "OK",
    caption: "Everything is working perfectly!",
  },
  "404": {
    gif: "/images/404.gif",
    png: "/images/404.png",
    message: "Not Found",
    caption: "The requested resource could not be found!",
  },
  "500": {
    gif: "/images/500.gif",
    png: "/images/500.png",
    message: "Internal Server Error",
    caption: "Something went wrong on the server!",
  },
  "403": {
    gif: "/images/403.gif",
    png: "/images/403.png",
    message: "Forbidden",
    caption: "You do not have permission to access this resource!",
  },
  "401": {
    gif: "/images/401.gif",
    png: "/images/401.png",
    message: "Unauthorized",
    caption: "Authentication is required to access this resource!",
  },
};

export const getRandomHttpCode = () => {
  const keys = Object.keys(httpCodes);
  const randomIndex = Math.floor(Math.random() * keys.length);
  return keys[randomIndex];
};
