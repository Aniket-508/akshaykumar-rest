export const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const API_BASE_URL = `${BASE_URL}/api`;

export const PORTFOLIO_URL = "https://www.aniketpawar.com/";

export const GITHUB_URL = "https://github.com/Aniket-508/akshaykumar-rest";

export const INDIAN_QUOTES_URL = "https://indian-quotes-api.vercel.app/";
