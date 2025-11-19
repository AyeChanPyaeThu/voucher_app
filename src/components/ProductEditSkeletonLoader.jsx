import React from "react";

export default function ProductEditSkeletonLoader() {
  return (
    <form className="animate-pulse">
      {/* Product Name */}
      <div className="mb-5">
        <div className="h-4 w-32 bg-neutral-secondary-medium rounded mb-2.5" />
        <div className="h-10 bg-neutral-secondary-medium rounded-base w-full" />
      </div>

      {/* Product Price */}
      <div className="mb-5">
        <div className="h-4 w-28 bg-neutral-secondary-medium rounded mb-2.5" />
        <div className="h-10 bg-neutral-secondary-medium rounded-base w-full" />
      </div>

      {/* Checkbox 1 */}
      <div className="flex items-center mb-4 gap-3">
        <div className="h-4 w-4 bg-neutral-secondary-medium rounded" />
        <div className="h-4 w-48 bg-neutral-secondary-medium rounded" />
      </div>

      {/* Checkbox 2 */}
      <div className="flex items-center mb-4 gap-3">
        <div className="h-4 w-4 bg-neutral-secondary-medium rounded" />
        <div className="h-4 w-56 bg-neutral-secondary-medium rounded" />
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3 mt-4">
        <div className="h-10 w-24 bg-neutral-secondary-medium rounded-base" />
        <div className="h-10 w-32 bg-neutral-secondary-medium rounded-base" />
      </div>
    </form>
  );
}
