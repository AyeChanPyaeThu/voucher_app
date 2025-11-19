import React, { useState } from "react";
import {
  HiOutlinePencil,
  HiOutlineTrash,
  HiPlus,
  HiSearch,
  HiTrash,
} from "react-icons/hi";
import { useSWRConfig } from "swr";
import { bouncy } from "ldrs";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

bouncy.register();

export default function ProductRow({
  product: { id, product_name, price, created_at },
}) {
  const { mutate } = useSWRConfig();

  const [isDeleting, setIsDeleting] = useState(false);

  const date = new Date(created_at);

  const currentDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const currentTime = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const handleDeleteBtn = async () => {
    setIsDeleting(true);
    await fetch(import.meta.env.VITE_API_URL + `/products/${id}`, {
      method: "DELETE",
    });

    toast.success("Product deleted successfully!");

    mutate(import.meta.env.VITE_API_URL + `/products/`);
    setIsDeleting(false);
    console.log(id);
  };

  return (
    <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
      <td className="px-6 py-4">{id}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-heading whitespace-nowrap"
      >
        {product_name}
      </th>
      <td className="px-6 py-4 text-end">{price}</td>
      <td className="px-6 py-4 text-end">
        <p className="text-xs">{currentDate}</p>
        <p className="text-xs">{currentTime}</p>
      </td>
      <td className="px-6 py-4 text-end">
        <div
          className="inline-flex rounded-base shadow-xs -space-x-px"
          role="group"
        >
          <Link
            to={`/product/edit/${id}`}
            className="text-body size-10 justify-center items-center bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-s-base text-sm px-3 py-2 focus:outline-none"
          >
            <HiOutlinePencil />
          </Link>
          <button
            onClick={handleDeleteBtn}
            type="button"
            className="text-red-600 size-10 justify-center items-center bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm px-3 py-2 focus:outline-none"
          >
            {isDeleting ? (
              <l-bouncy size="20" speed="1.75" color="red"></l-bouncy>
            ) : (
              <HiOutlineTrash />
            )}
          </button>
        </div>
      </td>
    </tr>
  );
}
