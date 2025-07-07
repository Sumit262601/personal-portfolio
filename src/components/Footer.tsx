"use client";
import React from "react";

export const Footer = () => {
  return (
    <div className="p-4 text-center justify-center text-xs font-extrabold text-primary border-t border-primary">
      <span className="font-extrabold">{new Date().getFullYear()} </span>
      &#8212; Built by Sumit Kumar
    </div>
  );
};
