import React from "react";

export default function ProductListEmpty() {
  return (
    <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default hidden last:table-row">
      <td colSpan="5" className="px-6 py-4 text-center">
        There is no Product
      </td>
    </tr>
  );
}
