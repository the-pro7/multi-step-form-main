interface Props {
  name: string;
  description: string;
  bill: string;
  defaultSelected: boolean;
}

export default function AddonCard({
  name,
  description,
  bill,
  defaultSelected,
}: Props) {
  return (
    <div className="flex justify-between items-center py-3 px-5 rounded-md outline-1 outline-neutral-cool-gray cursor-pointer hover:outline-primary-purplish-blue hover:bg-neutral-magnolia has-checked:outline-primary-purplish-blue has-checked:bg-neutral-magnolia">
      <div className="flex gap-2">
        <input type="checkbox" checked={defaultSelected} />
        <div className="flex flex-col">
          <h3 className="font-semibold text-primary-marine-blue text-lg">
            {name}
          </h3>
          <span className="text-sm text-neutral-cool-gray font-medium">
            {description}
          </span>
        </div>
      </div>
      <span className="text-primary-purplish-blue opacity-80 font-light">
        {bill}
      </span>
    </div>
  );
}
