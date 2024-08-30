"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import BgCafe from "/public/bg-cafe.jpg";
import { Coffee } from "@/types";
import { Card } from "@/components/Card";
import Button from "@/components/Button";

const page = () => {
  const [data, setData] = useState<Coffee[]>([]);
  const [filterData, setFilterData] = useState<Coffee[]>([]);
  const [showAll, setShowAll] = useState(true);

  const handleFilterData = () => {
    if (showAll) {
      setFilterData(data);
    } else {
      const dataFiltered = data.filter((coffee) => coffee.available);
      setFilterData(dataFiltered);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetch(
          `https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json`
        );
        const response: Coffee[] = await fetchedData.json();
        setData(response);
      } catch (error) {
        console.error("--error while fetching", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    handleFilterData();
  }, [showAll, data]);

  return (
    <div className="w-full min-h-screen bg-[#111315] relative">
      <div className="w-full">
        <Image
          src={BgCafe}
          className="w-full h-[30vh] object-cover"
          alt="Background Img of cafe"
          priority
        />
      </div>

      <div className="absolute h-fit w-fit bg-[#1B1D1F] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 md:p-12 rounded-lg">
        <h2 className="text-[#FEF7EE] text-[32px] text-center font-bold">
          Our Collection
        </h2>

        <div className="flex items-center flex-col space-y-5 ">
          <p className="text-sm md:text-base font-medium text-[#6F757C] text-center w-[250px] md:w-[500px]">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>

          <div className="space-x-6 my-4">
            <Button
              onClick={() => setShowAll(true)}
              className={`px-4 py-2 rounded-lg text-[#FEF7EE] text-sm font-semibold ${
                showAll ? "bg-[#6F757C]" : ""
              }`}
            >
              All Products
            </Button>

            <Button
              onClick={() => setShowAll(false)}
              className={`px-4 py-2 rounded-lg text-[#FEF7EE] text-sm font-semibold ${
                !showAll ? "bg-[#6F757C]" : ""
              }`}
            >
              Available Now
            </Button>
          </div>

          <Card data={filterData} />
        </div>
      </div>
    </div>
  );
};

export default page;
