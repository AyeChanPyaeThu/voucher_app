import React from "react";
import { HiChevronRight, HiHome } from "react-icons/hi";
import { HiMiniHome } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function Breadcrumb({ currentPageTitle }) {
  return (
    <div className="w-full flex gap-3 mb-5">
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li class="inline-flex items-center">
            <Link
              to="/"
              class="inline-flex gap-2 items-center text-sm font-medium text-body hover:text-fg-brand"
            >
              <HiMiniHome className="size-4" />
              Home
            </Link>
          </li>

          <li aria-current="page">
            <div class="flex items-center space-x-1.5">
              <HiChevronRight />
              <span class="inline-flex items-center text-sm font-medium text-body-subtle">
                {currentPageTitle}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
}
