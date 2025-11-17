import React from "react";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import ProductList from "../components/ProductList";

export default function ProductPage() {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle={"Product Module"} />

        <ProductList />
      </Container>
    </section>
  );
}
