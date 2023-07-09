import React from "react";
import Button from "./Button";

type Props = {
  closeModal: any;
  functionToExecute: any;
  title: string;
  description: string;
};

const Modal = ({
  closeModal,
  functionToExecute,
  title,
  description,
}: Props) => {
  return (
    <section className="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5">
      <div className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
        <h3 className="text-dark pb-2 text-xl font-bold sm:text-2xl">
          {title}
        </h3>
        <span className="bg-pink-500 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
        <p className="text-body-color mb-10 text-base leading-relaxed">
          {description}
        </p>
        <div className="-mx-3 flex flex-wrap">
          <div className="w-1/2 px-3">
            <Button onClick={closeModal}>Cancelar</Button>
          </div>
          <div className="w-1/2 px-3">
            <Button onClick={functionToExecute}>{title} </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
