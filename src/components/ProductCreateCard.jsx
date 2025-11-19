import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { tailspin } from "ldrs";
import toast from "react-hot-toast";

export default function ProductCreateCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSending, setIsSending] = useState(false);
  tailspin.register();

  const navigate = useNavigate();

  const handleCreateProduct = async (data) => {
    // console.log(data);
    setIsSending(true);

    console.log(data);

    await fetch(import.meta.env.VITE_API_URL + "/products", {
      method: "POST",
      body: JSON.stringify({
        product_name: data.product_name,
        price: data.price,
        created_at: new Date().toISOString(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsSending(false);
    reset();
    if (data.back_to_product_list) {
      navigate("/product");
    }
    toast.success("Product created successful!");
  };
  return (
    <div className=" rounded-lg w-full md:w-1/2">
      <h1 className="text-3xl mb-3 font-bold">Create New Product</h1>
      <p className="mb-10 text-stone-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi error ea,
        beatae, alias odit accusamus facere perspiciatis
      </p>
      <form onSubmit={handleSubmit(handleCreateProduct)}>
        <div className="mb-5">
          <label
            htmlFor="first_name"
            className={`block mb-2.5 text-sm font-medium ${
              errors.product_name ? "text-red-500" : "text-heading"
            }`}
          >
            Product Name
          </label>
          <input
            {...register("product_name", {
              required: true,
              minLength: 3,
              maxLength: 30,
            })}
            type="text"
            className={`bg-neutral-secondary-medium  border ${
              errors.product_name
                ? "border-red-500 focus:ring-red-500 focus:border-red-500 "
                : "border-default-medium focus:ring-brand focus:border-brand "
            } text-heading text-sm rounded-base   block w-full px-3 py-2.5 shadow-xs placeholder:text-body `}
            placeholder="eg. apple"
          />
          {errors.product_name?.type === "required" && (
            <p className="text-red-500 mt-1 text-sm">
              Product name is required
            </p>
          )}
          {errors.product_name?.type === "minLength" && (
            <p className="text-red-500 mt-1 text-sm">
              Product name must be greater than 3 characters
            </p>
          )}
          {errors.product_name?.type === "maxLength" && (
            <p className="text-red-500 mt-1 text-sm">
              Product name must be less than 10 characters
            </p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="last_name"
            className={`block mb-2.5 text-sm font-medium ${
              errors.price ? "text-red-500" : "text-heading"
            }`}
          >
            Product Price
          </label>
          <input
            {...register("price", {
              required: true,
              min: 100,
              max: 10000,
            })}
            type="text"
            className={`bg-neutral-secondary-medium  border ${
              errors.price
                ? "border-red-500 focus:ring-red-500 focus:border-red-500 "
                : "border-default-medium focus:ring-brand focus:border-brand "
            } text-heading text-sm rounded-base   block w-full px-3 py-2.5 shadow-xs placeholder:text-body `}
            placeholder="eg. 500"
          />
          {errors.price?.type === "required" && (
            <p className="text-red-500 mt-1 text-sm">
              Product price is required
            </p>
          )}
          {errors.price?.type === "min" && (
            <p className="text-red-500 mt-1 text-sm">
              Product price must be greater than 100
            </p>
          )}
          {errors.price?.type === "max" && (
            <p className="text-red-500 mt-1 text-sm">
              Product price must be less than 10000
            </p>
          )}
        </div>

        <div className="flex items-center mb-4">
          <input
            {...register("all_correct", {
              required: true,
            })}
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

        <div className="flex items-center mb-4">
          <input
            {...register("back_to_product_list")}
            id="back_to_product_list"
            type="checkbox"
            defaultValue
            className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
          />
          <label
            htmlFor="back_to_product_list"
            className="select-none ms-2 text-sm font-medium text-heading"
          >
            Back to Product List after saving
          </label>
        </div>

        <Link
          to="/product"
          type="button"
          className="text-body mr-3 bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        >
          Cancle
        </Link>

        <button
          type="submit"
          className="text-white inline-flex gap-3 bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        >
          <span>Save product</span>
          {isSending && (
            <l-tailspin
              size="20"
              stroke="5"
              speed="0.9"
              color="white"
            ></l-tailspin>
          )}
        </button>
      </form>
    </div>
  );
}
