"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MAIN_METADATA } from "@/lib/meta";
import { API_BASE_URL } from "@/lib/routes";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="mx-auto p-4 max-w-xl space-y-8">
      <Link
        className="bg-yellow-50 flex items-center justify-between p-4 rounded-lg space-x-2"
        href={""}
        target="_blank"
      >
        <span className="text-2xl">✨</span>
        <span className="font-medium text-center">
          Checkout <b>Indian Quotes API</b> for some real wisdom
        </span>
        <span className="text-2xl">✨</span>
      </Link>
      <div className="space-y-3 text-center">
        <h2 className="font-bold text-2xl">🐙 akshaykumar-rest</h2>
        <p className="text-zinc-600 text-sm">{MAIN_METADATA.DESCRIPTION}</p>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Link
            href={API_BASE_URL}
            target="_blank"
            className="text-blue-600 font-semibold"
          >
            {API_BASE_URL}
          </Link>
          <div className="flex items-center space-x-4">
            <button
              className="text-sm font-semibold"
              onClick={() => {
                window.open(
                  `https://twitter.com/intent/tweet?text=${"sadas"}-${API_BASE_URL}`,
                  "_blank"
                );
              }}
            >
              📢 tweet
            </button>
            <button className="text-sm font-semibold">🔄 refresh</button>
          </div>
        </div>
        <div className="bg-zinc-100 border border-zinc-200 p-4 rounded-lg space-y-4">
          <Image src="" alt="" width={600} height={300} />
          <p className="text-sm text-center text-zinc-600">- asd</p>
        </div>
      </div>
      <div className="bg-zinc-100 border border-zinc-200 rounded-lg">
        <div className="flex items-center p-4 justify-between space-x-4">
          <button
            className="font-semibold"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? "⬇️" : "➡️"} HTTP Codes List
          </button>
          {open && (
            <Link
              href=""
              target="_blank"
              className="text-blue-600 font-semibold"
            >
              source
            </Link>
          )}
        </div>
        {open && (
          <div className="border-t-2 border-zinc-400">
            <p className="px-4 py-2 border-b border-zinc-300">asdas</p>
            <p className="px-4 py-2">asdas</p>
            <p className="px-4 py-2">asdas</p>
          </div>
        )}
      </div>
      <div className="text-center">
        <p className="mb-3">
          👋{" "}
          <Link
            href="https://www.aniketpawar.com/"
            target="_blank"
            className="text-blue-600 font-semibold"
          >
            @aniketpawar
          </Link>
        </p>
        <a
          className="github-button"
          href="https://github.com/Aniket-508/instagram-posts-generator"
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star Aniket-508/instagram-posts-generator on GitHub"
        >
          Star
        </a>
      </div>
    </main>
  );
}
