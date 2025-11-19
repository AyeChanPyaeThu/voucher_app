import React from "react";

export default function ProductListSkeletonLoading() {
  return (
    <>
      <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default animate-pulse">
        {/* ID */}
        <td className="px-6 py-4">
          <div className="h-4 w-4 bg-neutral-400 rounded"></div>
        </td>

        {/* Product Name */}
        <th className="px-6 py-4">
          <div className="h-4 w-40 bg-neutral-400 rounded"></div>
        </th>

        {/* Price */}
        <td className="px-6 py-4 text-end">
          <div className="h-4 w-10 bg-neutral-400 rounded ml-auto"></div>
        </td>

        {/* Created date + time */}
        <td className="px-6 py-4 text-end">
          <div className="h-3 w-20 bg-neutral-400 rounded ml-auto mb-2"></div>
          <div className="h-3 w-16 bg-neutral-400 rounded ml-auto"></div>
        </td>

        {/* Actions */}
        <td className="px-6 py-4 text-end">
          <div className="inline-flex gap-2">
            <div className="h-8 w-8 bg-neutral-400 rounded"></div>
            <div className="h-8 w-8 bg-neutral-400 rounded"></div>
          </div>
        </td>
      </tr>

      <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default animate-pulse">
        {/* ID */}
        <td className="px-6 py-4">
          <div className="h-4 w-4 bg-neutral-400 rounded"></div>
        </td>

        {/* Product Name */}
        <th className="px-6 py-4">
          <div className="h-4 w-40 bg-neutral-400 rounded"></div>
        </th>

        {/* Price */}
        <td className="px-6 py-4 text-end">
          <div className="h-4 w-10 bg-neutral-400 rounded ml-auto"></div>
        </td>

        {/* Created date + time */}
        <td className="px-6 py-4 text-end">
          <div className="h-3 w-20 bg-neutral-400 rounded ml-auto mb-2"></div>
          <div className="h-3 w-16 bg-neutral-400 rounded ml-auto"></div>
        </td>

        {/* Actions */}
        <td className="px-6 py-4 text-end">
          <div className="inline-flex gap-2">
            <div className="h-8 w-8 bg-neutral-400 rounded"></div>
            <div className="h-8 w-8 bg-neutral-400 rounded"></div>
          </div>
        </td>
      </tr>

      <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default animate-pulse">
        {/* ID */}
        <td className="px-6 py-4">
          <div className="h-4 w-4 bg-neutral-400 rounded"></div>
        </td>

        {/* Product Name */}
        <th className="px-6 py-4">
          <div className="h-4 w-40 bg-neutral-400 rounded"></div>
        </th>

        {/* Price */}
        <td className="px-6 py-4 text-end">
          <div className="h-4 w-10 bg-neutral-400 rounded ml-auto"></div>
        </td>

        {/* Created date + time */}
        <td className="px-6 py-4 text-end">
          <div className="h-3 w-20 bg-neutral-400 rounded ml-auto mb-2"></div>
          <div className="h-3 w-16 bg-neutral-400 rounded ml-auto"></div>
        </td>

        {/* Actions */}
        <td className="px-6 py-4 text-end">
          <div className="inline-flex gap-2">
            <div className="h-8 w-8 bg-neutral-400 rounded"></div>
            <div className="h-8 w-8 bg-neutral-400 rounded"></div>
          </div>
        </td>
      </tr>
    </>
  );
}
