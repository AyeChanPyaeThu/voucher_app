import React, { useState } from "react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import ShowDate from "./ShowDate";
import useSWR, { useSWRConfig } from "swr";
import toast from "react-hot-toast";
import { bouncy } from "ldrs";
import { Link } from "react-router-dom";
import {
  HiOutlineArrowDownLeft,
  HiOutlineArrowDownRight,
} from "react-icons/hi2";

bouncy.register();

export default function VoucherListRow({
  voucher: { id, voucher_id, customer_name, customer_email, sale_date },
}) {
  //   console.log(voucher);

  const { mutate } = useSWRConfig();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteBtn = async () => {
    setIsDeleting(true);

    await fetch(import.meta.env.VITE_API_URL + `/vouchers/${id}`, {
      method: "DELETE",
    });

    toast.success("Voucher deleted successfully");

    mutate(import.meta.env.VITE_API_URL + `/vouchers`);
  };
  return (
    <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
      <td className="px-6 py-4">{voucher_id}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-heading whitespace-nowrap"
      >
        {customer_name}
      </th>

      <td className="px-6 py-4 text-end">{customer_email}</td>
      <td className="px-6 py-4 text-end">
        <ShowDate timestamp={sale_date} />
      </td>

      <td className="px-6 py-4 text-end">
        <div
          className="inline-flex rounded-base shadow-xs -space-x-px"
          role="group"
        >
          <button
            type="button"
            onClick={handleDeleteBtn}
            className="size-10 flex justify-center items-center text-red-600 bg-neutral-primary-soft border border-default rounded-l-lg hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm focus:outline-none"
          >
            {isDeleting ? (
              <l-bouncy size={20} speed={1.75} color="red"></l-bouncy>
            ) : (
              <HiOutlineTrash />
            )}
          </button>

          <Link
            to={`/voucher/detail/${id}`}
            className="size-10 rounded-r-lg flex justify-center items-center text-stone-600 bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm focus:outline-none"
          >
            <HiOutlineArrowDownRight />
          </Link>
        </div>
      </td>
    </tr>
  );
}
