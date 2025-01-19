export interface HttpCode {
  gif: string;
  jpg: string;
  message: string;
  caption: string;
}

export interface HttpCodes {
  [key: string]: HttpCode;
}

export interface PageData {
  httpCodes: Array<HttpCode & { code: string }>;
}
