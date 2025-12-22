import StepOneView from "./views/StepOneView";
import StepTwoView from "./views/StepTwoView";

// const views = import.meta.glob("./views/*.tsx", { eager: true });
// console.log(views);

export default function ViewFrame({
  currentView = 1,
}: {
  currentView: number;
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
    </div>
  );
}
