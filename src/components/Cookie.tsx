import React from "react";

type Props = {};

const Cookie = (props: Props) => {
  return (
    <section className="bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="xs:px-10 flex flex-wrap items-center justify-between rounded-lg border border-[#e7e7e7] bg-[#f4f7ff] py-8 px-6 md:px-8 lg:px-10">
          <div className="w-full md:w-7/12 lg:w-2/3">
            <div className="mb-6 md:mb-0">
              <h4 className="xs:text-2xl mb-1 text-xl font-bold text-black md:text-xl lg:text-2xl">
                We use cookies
              </h4>
              <p className="text-body-color text-base font-medium">
                Please, accept these sweeties to continue enjoying our site!
              </p>
            </div>
          </div>
          <div className="w-full md:w-5/12 lg:w-1/3">
            <div className="flex items-center space-x-3 md:justify-end">
              <button className="bg-primary inline-flex items-center justify-center rounded-md py-[10px] px-8 text-center text-base font-semibold text-white hover:bg-opacity-90">
                Accept
              </button>
              <button className="text-body-color shadow-card hover:bg-primary inline-flex items-center justify-center rounded-md bg-white py-[10px] px-8 text-center text-base font-semibold hover:text-white">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cookie;
