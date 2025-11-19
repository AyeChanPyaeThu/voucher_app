import React from "react";
import { HiChevronRight, HiHome } from "react-icons/hi";
import { HiMiniHome } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function Breadcrumb({ currentPageTitle, links = [] }) {
  return (
    <div className="w-full flex gap-3 mb-5">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex gap-2 items-center text-sm font-medium text-body hover:text-fg-brand"
            >
              <HiMiniHome className="size-4" />
              Home
            </Link>
          </li>

          {links &&
            links.map((link, index) => (
              <li key={index} className="inline-flex items-center">
                <Link
                  to={link.path}
                  className="inline-flex gap-2 items-center text-sm font-medium text-body hover:text-fg-brand"
                >
                  <HiChevronRight />
                  {link.title}
                </Link>
              </li>
            ))}

          <li aria-current="page">
            <div className="flex items-center space-x-1.5">
              <HiChevronRight />
              <span className="inline-flex items-center text-sm font-medium text-body-subtle">
                {currentPageTitle}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
}
