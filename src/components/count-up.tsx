"use client";
import ReactCountUp, { CountUpProps } from "react-countup";

export const CountUp: React.FC<CountUpProps> = (props) => {
  return <ReactCountUp {...props} />;
};
