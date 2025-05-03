"use client";
import Link from "next/link";
import React from "react";

type Props = {
  text: string;
  type: "submit" | "link";
  link?: string;
};

const Button1 = (props: Props) => {
  if (props.type === "link") {
    return <Link className="italic text-amber-200" href={props.link || ""}>{props.text}</Link>;
  } else return <button className="border-amber-400 px-3 py-2 border" type="submit">{props.text}</button>;
};

export default Button1;
