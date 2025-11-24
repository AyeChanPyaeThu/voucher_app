import React, { useRef, useState } from "react";
import {
  HiOutlinePencil,
  HiOutlineTrash,
  HiPlus,
  HiSearch,
  HiTrash,
  HiX,
} from "react-icons/hi";
import { HiComputerDesktop } from "react-icons/hi2";
import { Link } from "react-router-dom";
import useSWR from "swr";
import VoucherListRow from "./VoucherListRow";
import { debounce, throttle } from "lodash";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function VoucherList() {
  const [search, setSearch] = useState("");
  console.log(search);

  const searchInput = useRef();
  console.log(searchInput);

  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  //   // console.log(e.target.value);
  // };

  const handleSearch = debounce((e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  }, 500);

  const handleClearSearch = () => {
    setSearch("");
    searchInput.current.value = "";
  };

  const { data, isLoading, error } = useSWR(
    search
      ? `${import.meta.env.VITE_API_URL}/vouchers?voucher_id_like=${search}`
      : `${import.meta.env.VITE_API_URL}/vouchers`,
    fetcher
  );
  return (
    <div>
      <div className="flex justify-between mb-3">
        <div className="">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <HiSearch className="w-4 h-4 text-stone-500 dark:text-stone-400" />
            </div>
            <input
              type="text"
              ref={searchInput}
              onChange={handleSearch}
              className="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3  shadow-xs placeholder:text-body"
              placeholder="Search Voucher"
            />
            {search && (
              <button
                className="absolute right-2 top-0 bottom-0 cursor-pointer"
                onClick={handleClearSearch}
              >
                <HiX
                  fill="red"
                  className="scale-100 active:scale-80 duration-200"
                />
              </button>
            )}
          </div>
        </div>
        <div className="">
          <Link
            to={"/sale"}
            type="submit"
            className="text-white flex justify-center items-center gap-3 bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          >
            Create Sale
            <HiComputerDesktop />
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="bg-neutral-secondary-soft border-b border-default">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">
                # VOUCHER ID
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                CUSTOMER NAME
              </th>

              <th scope="col" className="px-6 py-3 font-medium text-end">
                EMAIL
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
              <td colSpan={5} className="px-6 py-4 text-center">
                There is no Voucher
              </td>
            </tr>
            {isLoading ? (
              <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default hidden last:table-row">
                <td colSpan={5} className="px-6 py-4 text-center">
                  Loading...
                </td>
              </tr>
            ) : (
              data?.map((voucher, index) => (
                <VoucherListRow key={index} voucher={voucher} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
