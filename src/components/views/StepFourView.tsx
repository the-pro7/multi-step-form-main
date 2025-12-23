import { useState } from "react";
import { stepFourData } from "../../utils/constants";

export default function StepFourView() {
  const [arcadeType, setArcadeType] = useState<"monthly" | "yearly">("monthly");

  const { monthly, yearly } = stepFourData;
  return (
    <>
      <div className="header">
        <h1 className="step-heading">Finishing up</h1>
        <p className="step-sub-heading">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="bg-neutral-alabaster rounded-md p-4 mt-3">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-semibold text-primary-marine-blue">
              Arcade <span className="capitalize">({arcadeType})</span>
            </h4>
            <span
              onClick={() =>
                setArcadeType((prev) =>
                  prev === "monthly" ? "yearly" : "monthly",
                )
              }
              className="underline text-neutral-cool-gray cursor-pointer font-medium hover:text-primary-purplish-blue transition-colors"
            >
              Change
            </span>
          </div>
          {/*Bill*/}
          <span className="font-semibold text-primary-marine-blue text-lg">
            ${arcadeType === "monthly" ? monthly.bill : yearly.bill}/mo
          </span>
        </div>
        {/*Separator*/}
        <div className="w-full bg-neutral-cool-gray h-px my-2 opacity-50" />
        {/*Separator end*/}
        <div className="flex flex-col text-neutral-cool-gray text-lg gap-2">
          <div className="flex justify-between items-center">
            Online servive
            <span className="text-primary-marine-blue">
              +${arcadeType === "monthly" ? monthly.online : yearly.online}/mo
            </span>
          </div>
          <div className="flex justify-between items-center">
            Storage service
            <span className="text-primary-marine-blue">
              +${arcadeType === "monthly" ? monthly.storage : yearly.storage}/mo
            </span>
          </div>
        </div>
      </div>
      {/* Total */}
      <div className="m-4 text-neutral-cool-gray flex items-center justify-between text-lg">
        Total(per {arcadeType === "monthly" ? "month" : "year"})
        <span className="text-primary-purplish-blue font-semibold">
          ${arcadeType === "monthly" ? monthly.total : yearly.total}/mo
        </span>
      </div>
    </>
  );
}
