import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Container from "../components/Container";

export default function SalePage() {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle={"Sale Module"} />
      </Container>
    </section>
  );
}
