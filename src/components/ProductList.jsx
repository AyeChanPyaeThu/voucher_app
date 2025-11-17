import React from "react";
import {
  HiOutlinePencil,
  HiOutlineTrash,
  HiPlus,
  HiSearch,
  HiTrash,
} from "react-icons/hi";

export default function ProductList() {
  return (
    <div>
      <div classname="flex justify-between mb-3">
        <div classname>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <hisearch classname="w-4 h-4 text-stone-500 dark:text-stone-400"></hisearch>
            </div>
            <input
              type="text"
              classname="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3  shadow-xs placeholder:text-body"
              placeholder="Search Product"
            />
          </div>
        </div>
        <div classname>
          <button
            type="submit"
            classname="text-white flex justify-center items-center gap-3 bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          >
            Add new Product
            <hiplus></hiplus>
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="bg-neutral-secondary-soft border-b border-default">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">
                #
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                PRODUCT NAME
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-end">
                PRICE
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-end">
                CREATED AT
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-end">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default hidden last:table-row">
              <td colSpan="{5}" classname="px-6 py-4 text-center">
                There is no Product
              </td>
            </tr>
            <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
              <td classname="px-6 py-4">1</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-heading whitespace-nowrap"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4 text-end">2999</td>
              <td className="px-6 py-4 text-end">
                <p classname="text-xs">7 Sep 2024</p>
                <p classname="text-xs">10:00 PM</p>
              </td>
              <td className="px-6 py-4 text-end">
                <div
                  className="inline-flex rounded-base shadow-xs -space-x-px"
                  role="group"
                >
                  <button
                    type="button"
                    className="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-s-base text-sm px-3 py-2 focus:outline-none"
                  >
                    <hioutlinepencil classname></hioutlinepencil>
                  </button>
                  <button
                    type="button"
                    className="text-red-600 bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm px-3 py-2 focus:outline-none"
                  >
                    <hioutlinetrash classname></hioutlinetrash>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
