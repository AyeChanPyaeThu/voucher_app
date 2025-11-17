import React from "react";

export default function Container({ children, className }) {
  return (
    <div className={`w-full md-w-[720px] lg:w-[1000px] mx-auto ${className}`}>
      {children}
    </div>
  );
}
