import ConfirmView from "./views/ConfirmView";
import StepFourView from "./views/StepFourView";
import StepOneView from "./views/StepOneView";
import StepThreeView from "./views/StepThreeView";
import StepTwoView from "./views/StepTwoView";

// const views = import.meta.glob("./views/*.tsx", { eager: true });
// console.log(views);

export default function ViewFrame({
  currentView = 1,
  confirmed
}: {
  currentView: number;
  confirmed: boolean
}) {
  return (
    <div className="bg-white rounded-md w-90 flex items-start gap-5 overflow-x-clip col-span-full justify-self-center z-100 px-5 py-8 -m-20">
      <form
        className={`min-w-full basis-full! ${currentView !== 1 && "hidden"}`}
      >
        <StepOneView />
      </form>
      <div className={`${currentView !== 2 && "hidden"}`}>
        <StepTwoView />
      </div>
      <div className={`${currentView !== 3 && "hidden"}`}>
        <StepThreeView />
      </div>
      <div className={`${(currentView !== 4 && !confirmed) && "hidden"}`}>
        <StepFourView />
      </div>
      <div className={`${!confirmed && "hidden"}`}>
        <ConfirmView />
      </div>
    </div>
  );
}
