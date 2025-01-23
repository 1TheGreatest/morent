import React from "react";
import { Button } from "@/components/ui/button";
import { Heart, Fuel } from "lucide-react";

const CatalogueCard = () => {
  return (
    <div className="bg-primary-0 w-[327px] h-[240px] sm:w-[304px] sm:h-[388px] rounded-[10px] border">
      <div
        className="h-[70px] p-4 sm:h-[96px] sm:p-6 flex justify-between"
        id="title"
      >
        <div className="gap-1">
          <p className="font-semibold text-base sm:font-bold sm:text-xl text-secondary-500">
            CR - V
          </p>
          <p className="font-medium text-xs sm:font-bold sm:text-sm text-secondary-300">
            SUV
          </p>
        </div>
        <Heart color="red" fill="red" className="h-4 w-4 sm:h-6 sm:w-6 " />
      </div>
      <div className="flex sm:block">
        <div className="bg-primary-500 w-[225px] h-[102px] sm:w-[304px] sm:h-[176px]">
          CatalogueCard
        </div>
        <div className="w-[102px] h-[102px] sm:w-[304px] sm:h-[24px]">
          <div className="bg-red-100 h-[74px] w-[70px] my-[14px] mx-[16px] flex flex-col justify-between">
            <div className="flex gap-1 text-xs font-medium text-secondary-300">
              <Fuel
                //  color="red"
                className="h-[14px] w-[14px] sm:h-6 sm:w-6 "
              />
              <p>80L</p>
            </div>
            <p>go home</p>
            <p>go home</p>
          </div>
        </div>
      </div>
      <div
        className="h-[68px] p-4 sm:h-[92px] sm:p-6 flex justify-between"
        id="price-button"
      >
        <div className="flex gap-1 h-[36px] w-[100px] sm:h-[44px] sm:w-[128px] font-bold">
          <div className="text-secondary-500 text-base sm:text-xl ">
            $80.00/
          </div>
          <div className="text-secondary-300 text-xs sm:text-sm">day</div>
        </div>
        <Button
          variant="primary"
          className="h-[36px] w-[100px] sm:h-[44px] sm:w-[116px] font-semibold text-xs sm:text-base"
        >
          Rental Now
        </Button>
      </div>
    </div>
  );
};

export default CatalogueCard;
