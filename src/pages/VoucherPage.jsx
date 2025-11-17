import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import VoucherList from "../components/VoucherList";

export default function VoucherPage() {
  return (
    <section>
      <Breadcrumb currentPageTitle={"Voucher Module"} />
      <VoucherList />
    </section>
  );
}
