export interface HttpCode {
  png: string;
  message: string;
  caption: string;
}

export interface HttpCodes {
  [key: string]: HttpCode;
}

export interface PageData {
  httpCodes: Array<HttpCode & { code: string }>;
}
