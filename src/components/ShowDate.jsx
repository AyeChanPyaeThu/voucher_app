import React from "react";

export default function ShowDate({ timestamp }) {
  const date = new Date(timestamp);

  const currentDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const currentTime = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return (
    <div>
      <p className="text-xs">{currentDate}</p>
      <p className="text-xs">{currentTime}</p>
    </div>
  );
}
