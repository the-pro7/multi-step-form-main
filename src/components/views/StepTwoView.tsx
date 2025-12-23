import { useState } from "react";
import { stepTwoCards } from "../../utils/constants";
import BillingOption from "./BillingOption";

export default function StepTwoView() {
  const [billByMonth, setBillByMonth] = useState(true);
  return (
    <div className="flex flex-col">
      <div className="header">
        <h1 className="step-heading">Select your plan</h1>
        <p className="step-sub-heading">
          You have the option of monthly or yearly biling.
        </p>
      </div>
      <div className="my-3 flex flex-col gap-2">
        {stepTwoCards.map((card) => (
          <BillingOption
            key={card.title}
            bill={billByMonth ? card.monthBill : card.yearBill}
            name={card.title}
            imgURL={card.imgUrl}
            freePeriod={card.free}
            billByMonth={billByMonth}
          />
        ))}
      </div>
      <div className="flex gap-2 items-center justify-center bg-neutral-alabaster p-2 rounded-md">
        <span className="text-primary-marine-blue font-medium text-lg">
          Monthly
        </span>
        <div
          onClick={() => setBillByMonth((prev) => !prev)}
          className="w-13 h-6 flex items-center rounded-full bg-primary-marine-blue cursor-pointer"
        >
          <span
            className={`h-4 w-4 aspect-square rounded-full bg-white! z-100 mx-1  ${
              !billByMonth && "ml-auto!"
            }`}
          ></span>
        </div>
        <span className="text-neutral-cool-gray font-medium text-lg">
          Yearly
        </span>
      </div>
    </div>
  );
}
