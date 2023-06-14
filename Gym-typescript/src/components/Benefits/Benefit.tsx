import { SelectedPage } from "@/shared/types";
import React from "react";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = (props: Props) => {
  return <div>Benefit</div>;
};

export default Benefit;
