import React from "react";
import Card from "./Card";
import { shirt } from "@/utils/data";

type Props = {};

const KidsArea = (props: Props) => {
  return (
    <section className="container" id="kids">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>Kid's Latest</h2>
              <span>
                Details to details is what makes Hexashop different from the
                other themes.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mx-auto">
        <Card item={shirt} />
        <Card item={shirt} />
        <Card item={shirt} />
        <Card item={shirt} />
      </div>
    </section>
  );
};

export default KidsArea;
