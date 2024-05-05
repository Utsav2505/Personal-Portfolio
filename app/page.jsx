"use client";
import React from "react";
import "@styles/global.css";
import Carousel from "@components/Carousel";
import Slide1 from "@components/Slide1";
import Slide2 from "@components/Slide2";
import Slide3 from "@components/Slide3";
import Slide6 from "@components/Slide6";

const page = () => {
  const slides = [
    <Slide1 />,
    <Slide2 />,
    <Slide3 />,
    <Slide1 />,
    <Slide1 />,
    <Slide6 />,
  ];
  return <Carousel>{...slides}</Carousel>;
};

export default page;
