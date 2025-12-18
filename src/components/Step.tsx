interface Props {
  id: number;
  mobileView?: boolean;
  stepName: string;
  isCurrentStep?: boolean;
}

export default function Step({ id, stepName }: Props) {
  return (
    <div className="mt-10">
      <div className="w-9 h-9 aspect-square rounded-full outline outline-white flex items-center justify-center text-white font-semibold cursor-pointer hover:bg-primary-pastel-blue hover:text-black transition-colors hover:outline-none">
        {id}
      </div>
      <span className="uppercase hidden md:block font-light">Step {id}</span>
      <h4 className="uppercase hidden md:block font-semibold text-lg">{stepName}</h4>
    </div>
  );
}
