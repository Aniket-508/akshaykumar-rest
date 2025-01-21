import Image from "next/image";
import { httpCodes } from "@/lib/httpcodes";
import { useState } from "react";
import Link from "next/link";
import { GITHUB_URL } from "@/lib/routes";

export default function HTTPCodesInfo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-zinc-100 border border-zinc-200 rounded-lg">
      <div className="flex items-center p-4 justify-between space-x-4">
        <button
          className="font-semibold"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "⬇️" : "➡️"} HTTP status codes List
        </button>
        {open && (
          <Link
            href={`${GITHUB_URL}/tree/main/lib/httpcodes.ts`}
            target="_blank"
            className="text-blue-600 font-semibold"
          >
            source
          </Link>
        )}
      </div>
      {open && (
        <div className="border-t-2 border-zinc-400 grid grid-cols-2 gap-4 p-4">
          {Object.keys(httpCodes).map((code) => (
            <div className="space-y-2" key={code}>
              <Image
                src={httpCodes[code].png}
                alt={code}
                width={300}
                height={100}
              />
              <div className="flex items-center justify-center space-x-2">
                <p className="text-sm text-center text-zinc-600">
                  {code} - {httpCodes[code].message}
                </p>
                <a
                  href={`https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${code}`}
                  target="_blank"
                >
                  🔍
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
