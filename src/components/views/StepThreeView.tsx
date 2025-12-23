import { stepThreeCards } from "../../utils/constants";
import AddonCard from "./AddonCard";

export default function StepThreeView() {
  return (
    <>
      <div className="header">
        <h1 className="step-heading">Pick add-ons</h1>
        <p className="step-sub-heading">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        {stepThreeCards.map((card) => (
          <AddonCard
            key={card.title}
            name={card.title}
            description={card.description}
            defaultSelected={card.defaultSelected}
            bill={card.bill}
          />
        ))}
      </div>
    </>
  );
}
