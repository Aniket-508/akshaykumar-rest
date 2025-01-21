"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MAIN_METADATA } from "@/lib/meta";
import {
  API_BASE_URL,
  GITHUB_URL,
  INDIAN_QUOTES_URL,
  PORTFOLIO_URL,
} from "@/lib/routes";
import { getRandomHttpCode, httpCodes } from "@/lib/httpcodes";
import HTTPCodesInfo from "@/components/httpcodes-info";

export default function Main({ initialCode }: { initialCode: string }) {
  const [code, setCode] = useState(initialCode);

  const UNIQUE_URL = `${API_BASE_URL}/${code}`;

  return (
    <main className="mx-auto p-4 max-w-2xl space-y-8">
      <Link
        className="bg-yellow-50 flex items-center justify-between p-4 rounded-lg space-x-2"
        href={INDIAN_QUOTES_URL}
        target="_blank"
      >
        <span className="text-2xl">✨</span>
        <span className="font-medium text-center">
          Checkout <b>Indian Quotes API</b> for some real wisdom
        </span>
        <span className="text-2xl">✨</span>
      </Link>
      <div className="space-y-3 text-center">
        <h2 className="font-bold text-2xl">🦹‍♂️ akshaykumar-rest</h2>
        <p className="text-zinc-600 text-sm">{MAIN_METADATA.DESCRIPTION}</p>
      </div>
      {code && (
        <div className="space-y-3">
          <div className="flex items-center justify-between space-x-4">
            <Link
              href={UNIQUE_URL}
              target="_blank"
              className="text-blue-600 font-semibold truncate"
            >
              {UNIQUE_URL}
            </Link>
            <div className="flex items-center space-x-4 flex-shrink-0">
              <button
                className="text-sm font-semibold"
                onClick={() => {
                  window.open(
                    `https://twitter.com/intent/tweet?text=${code} HTTP status code as Akshay Kumar - ${API_BASE_URL}/${code}`,
                    "_blank"
                  );
                }}
              >
                📢 tweet
              </button>
              <button
                className="text-sm font-semibold"
                onClick={() => setCode(getRandomHttpCode())}
              >
                🔄 refresh
              </button>
            </div>
          </div>

          <div className="bg-zinc-100 border border-zinc-200 p-4 rounded-lg space-y-2">
            <Image
              src={httpCodes[code].png}
              alt={code}
              width={610}
              height={300}
            />
            <p className="text-sm text-center text-zinc-600">
              - {httpCodes[code].caption}
            </p>
          </div>
        </div>
      )}
      <HTTPCodesInfo />
      <div className="text-center">
        <p className="mb-3">
          👋{" "}
          <Link
            href={PORTFOLIO_URL}
            target="_blank"
            className="text-blue-600 font-semibold"
          >
            @aniketpawar
          </Link>
        </p>
        <a
          className="github-button"
          href={GITHUB_URL}
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star Aniket-508/akshaykumar-rest on GitHub"
        >
          Star
        </a>
      </div>
    </main>
  );
}
