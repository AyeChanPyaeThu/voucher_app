import React from "react";
import {
  HiOutlinePencil,
  HiOutlineTrash,
  HiPlus,
  HiSearch,
  HiTrash,
} from "react-icons/hi";
import useSWR from "swr";
import ProductListSkeletonLoading from "./ProductListSkeletonLoading";
import ProductListEmpty from "./ProductListEmpty";
import ProductRow from "./ProductRow";
import { Link } from "react-router-dom";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductList() {
  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + "/products",
    fetcher
  );

  // if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <div className="flex justify-between mb-3">
        <div>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <HiSearch className="w-4 h-4 text-stone-500 dark:text-stone-400" />
            </div>
            <input
              type="text"
              className="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3  shadow-xs placeholder:text-body"
              placeholder="Search Product"
            />
          </div>
        </div>
        <div>
          <Link
            to="/product/create"
            type="submit"
            className="text-white flex justify-center items-center gap-3 bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          >
            Add new Product
            <HiPlus />
          </Link>
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
            {isLoading ? (
              <ProductListSkeletonLoading />
            ) : data.length === 0 ? (
              <ProductListEmpty />
            ) : (
              data.map((el) => <ProductRow product={el} key={el.id} />)
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
