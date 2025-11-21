import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Container from "../components/Container";
import VoucherInformation from "../components/VoucherInformation";
import SaleForm from "./SaleForm";

export default function SalePage() {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle={"Sale Module"} />
        <VoucherInformation />
      </Container>
    </section>
  );
}
