import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { tailspin } from "ldrs";
import toast from "react-hot-toast";
import SaleForm from "../pages/SaleForm";
import VoucherTable from "./VoucherTable";
import useRecordStore from "../stores/userRecordStore";

export default function VoucherInformation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSending, setIsSending] = useState(false);
  tailspin.register();

  const { records, resetRecord } = useRecordStore();

  const onSubmit = async (data) => {
    setIsSending(true);

    const total = records.reduce((a, b) => a + b.cost, 0);
    const tax = total * 0.07;
    const netTotal = total + tax;
    const currentVoucher = { ...data, records, total, tax, netTotal };

    await fetch(import.meta.env.VITE_API_URL + "/vouchers", {
      method: "POST",
      body: JSON.stringify(currentVoucher),
      headers: {
        "Content-Type": "application/json",
      },
    });

    toast.success("Voucher saved successfully");

    resetRecord();
    reset();

    setIsSending(false);
  };

  function generateInvoiceNumber() {
    const date = new Date();

    const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, "");

    const randomNumber = Math.floor(1000 + Math.random() * 9000);

    const invoiceNumber = `INV-${formattedDate}-${randomNumber}`;

    return invoiceNumber;
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} id="infoForm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="col-span-1">
            <div className="mb-5">
              <label
                className={`block mb-2.5 text-sm font-medium ${
                  errors.voucher_id ? "text-red-500" : "text-heading"
                }`}
              >
                Voucher ID
              </label>
              <input
                {...register("voucher_id", {
                  required: true,
                })}
                type="text"
                defaultValue={generateInvoiceNumber()}
                className={`bg-neutral-secondary-medium  border ${
                  errors.voucher_id
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500 "
                    : "border-default-medium focus:ring-brand focus:border-brand "
                } text-heading text-sm rounded-base   block w-full px-3 py-2.5 shadow-xs placeholder:text-body `}
              />
              {errors.voucher_id?.type === "required" && (
                <p className="text-red-500 mt-1 text-sm">
                  Voucher ID is required
                </p>
              )}
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-5">
              <label
                className={`block mb-2.5 text-sm font-medium ${
                  errors.customer_name ? "text-red-500" : "text-heading"
                }`}
              >
                Customer Name
              </label>
              <input
                {...register("customer_name", {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                })}
                type="text"
                className={`bg-neutral-secondary-medium  border ${
                  errors.customer_name
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500 "
                    : "border-default-medium focus:ring-brand focus:border-brand "
                } text-heading text-sm rounded-base   block w-full px-3 py-2.5 shadow-xs placeholder:text-body `}
              />
              {errors.customer_name?.type === "required" && (
                <p className="text-red-500 mt-1 text-sm">
                  Customer name is required
                </p>
              )}
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-5">
              <label
                className={`block mb-2.5 text-sm font-medium ${
                  errors.customer_email ? "text-red-500" : "text-heading"
                }`}
              >
                Customer Email
              </label>
              <input
                {...register("customer_email", {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                })}
                type="text"
                className={`bg-neutral-secondary-medium  border ${
                  errors.customer_email
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500 "
                    : "border-default-medium focus:ring-brand focus:border-brand "
                } text-heading text-sm rounded-base   block w-full px-3 py-2.5 shadow-xs placeholder:text-body `}
              />
              {errors.customer_email?.type === "required" && (
                <p className="text-red-500 mt-1 text-sm">
                  Customer email is required
                </p>
              )}
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-5">
              <label
                htmlFor="first_name"
                className={`block mb-2.5 text-sm font-medium ${
                  errors.sale_date ? "text-red-500" : "text-heading"
                }`}
              >
                Sale Date
              </label>
              <input
                {...register("sale_date", {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                })}
                type="date"
                defaultValue={new Date().toISOString().slice(0, 10)}
                className={`bg-neutral-secondary-medium  border ${
                  errors.sale_date
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500 "
                    : "border-default-medium focus:ring-brand focus:border-brand "
                } text-heading text-sm rounded-base   block w-full px-3 py-2.5 shadow-xs placeholder:text-body `}
              />
              {errors.sale_date?.type === "required" && (
                <p className="text-red-500 mt-1 text-sm">
                  Sale Date is required
                </p>
              )}
            </div>
          </div>
        </div>
      </form>

      <SaleForm />

      <VoucherTable />

      <div className="flex justify-end items-center  gap-3">
        <div className="flex  items-center ">
          <input
            {...register("all_correct", {
              required: true,
            })}
            form="infoForm"
            id="all_correct"
            type="checkbox"
            defaultValue
            className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
          />
          <label
            htmlFor="all_correct"
            className="select-none ms-2 text-sm font-medium text-heading"
          >
            Make sure all fields are correct
          </label>
        </div>

        <button
          type="submit"
          form="infoForm"
          className="text-white inline-flex gap-3 bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        >
          <span>Confirm Voucher</span>
          {isSending && (
            <l-tailspin
              size="20"
              stroke="5"
              speed="0.9"
              color="white"
            ></l-tailspin>
          )}
        </button>
      </div>
    </div>
  );
}
