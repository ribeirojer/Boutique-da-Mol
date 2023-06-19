import React from "react";

type Props = {};

const Vendor = (props: Props) => {
  return (
    <section className="hidden md:flex container mx-auto">
      <div className="vendor-item border p-4">
        <img src="img/vendor-1.jpg" alt="" />
      </div>
      <div className="vendor-item border p-4">
        <img src="img/vendor-2.jpg" alt="" />
      </div>
      <div className="vendor-item border p-4">
        <img src="img/vendor-3.jpg" alt="" />
      </div>
      <div className="vendor-item border p-4">
        <img src="img/vendor-4.jpg" alt="" />
      </div>
      <div className="vendor-item border p-4">
        <img src="img/vendor-5.jpg" alt="" />
      </div>
      <div className="vendor-item border p-4">
        <img src="img/vendor-6.jpg" alt="" />
      </div>
      <div className="vendor-item border p-4">
        <img src="img/vendor-7.jpg" alt="" />
      </div>
      <div className="vendor-item border p-4">
        <img src="img/vendor-8.jpg" alt="" />
      </div>
    </section>
  );
};

export default Vendor;
