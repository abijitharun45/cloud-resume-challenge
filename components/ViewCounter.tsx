'use client';

import { useState, useEffect } from 'react';

export default function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);

  // Use the FULL URL you discovered:
  const apiUrl = "https://5gihck2rh7.execute-api.us-east-1.amazonaws.com/default/update-visitor-count";

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        // Your Lambda returns: { "count": 123 }
        console.log("Visitor Count Data:", data);
        setViews(data.count); // We need .count to get the number
      })
      .catch((err) => console.error("Error fetching visitor count:", err));
  }, []);

  if (views === null) return null; // Don't show anything until it loads

  return (
    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-4">
      {/* Eye Icon SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
      <span>{views} Views</span>
    </div>
  );
}
