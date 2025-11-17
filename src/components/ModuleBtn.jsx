import React from "react";
import { Link } from "react-router-dom";

export default function ModuleBtn({ name, icon, url }) {
  return (
    <Link
      to={url}
      className="flex flex-col h-full gap-3 items-center bg-blue-600 text-white p-5 rounded-lg"
    >
      {icon}
      {name}
    </Link>
  );
}
