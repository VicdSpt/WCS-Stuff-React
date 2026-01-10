import React from "react";

function Page({ children }) {
  return (
    <section className="bg-gradient-to-r from-amber-100 to-orange-100 py-5 px-4 flex items-center">
      {children}
    </section>
  );
}
export default Page;
