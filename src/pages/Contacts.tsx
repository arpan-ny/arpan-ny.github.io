import React, { useState } from "react";

const Contacts: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "work.arpannyati@gmail.com";
  const phone = "+91 9521416660";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 text-center">
      <h1
        className="text-2xl sm:text-4xl font-bold mb-6"
        style={{ color: "var(--text-color)" }}
      >
        Contact
      </h1>
      <div
        className="flex flex-col items-center mb-2"
        style={{ minHeight: "48px" }}
      >
        <div className="flex items-center space-x-2">
          <span
            className="text-base sm:text-lg select-all"
            style={{ color: "var(--text-color)" }}
          >
            {email}
          </span>
          <button
            onClick={handleCopy}
            aria-label="Copy email"
            className="focus:outline-none"
            title="Copy Email!"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
              />
            </svg>
          </button>
        </div>
        <div className="text-base sm:text-lg mt-2">{phone}</div>
        <div style={{ height: "20px" }} className="mt-2">
          {copied && (
            <span className="text-green-600 text-sm">Email copied!</span>
          )}
        </div>
        <a
          href="https://www.linkedin.com/in/arpan-nyati/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-2 bg-gray-600 text-white rounded shadow hover:bg-gray-700 transition-colors flex items-center"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              clipRule="evenodd"
            />
          </svg>
          Follow on LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Contacts;
