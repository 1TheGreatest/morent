import React from "react";
import { Button } from "@/components/ui/button";

const CatalogueCard = () => {
  return (
    <div className="w-[327px] h-[240px] sm:w-[304px] sm:h-[388px] grid border">
      <div className="bg-primary-400 row-span-1">CatalogueCard</div>
      <div className="bg-red-300 row-span-3 grid grid-cols-3 sm:grid-cols-1">
        <div className="bg-primary-500 col-span-2 sm:row-span-2">
          CatalogueCard
        </div>
        <div className="bg-primary-700 col-span-1 sm:row-span-1">
          CatalogueCard
        </div>
      </div>
      <div className="row-span-1 flex items-center justify-between">
        <div className="flex gap-1">
          <div className="ml-4 font-bold text-secondary-500 text-sm sm:text-lg ">
            $80.00/
          </div>
          <div className="font-bold text-secondary-300 text-xs sm:text-base">
            day
          </div>
        </div>
        <Button variant="primary" size="label" className="mr-4">
          Rental Now
        </Button>
      </div>
    </div>
  );
};

export default CatalogueCard;
