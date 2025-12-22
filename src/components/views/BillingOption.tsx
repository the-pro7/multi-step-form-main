// type Bill = {
//     monthBill: string;
//     yearBill: string
// }

interface Props {
  imgURL: string;
  name: string;
  bill: string;
  freePeriod: string;
  billByMonth?: boolean;
}

export default function BillingOption({
  bill,
  imgURL,
  name,
  freePeriod,
  billByMonth = true,
}: Props) {
  console.log(imgURL);
  return (
    <div className="flex items-start gap-2 p-3 rounded-md w-full cursor-pointer hover:outline hover:outline-primary-purplish-blue first-of-type:outline first-of-type:outline-primary-purplish-blue hover:bg-neutral-alabaster first-of-type:bg-neutral-alabaster">
      <div>
        <img src={imgURL} alt={name} className="object-cover w-12" />
      </div>
      <div className="flex flex-col">
        <h4 className="text-primary-marine-blue text-xl">{name}</h4>
        <span className="text-neutral-cool-gray text-[1em] font-medium">
          {bill}
        </span>
        <span className={`${billByMonth && "hidden"} md:block text-primary-marine-blue text-sm`}>
          {freePeriod}
        </span>
      </div>
    </div>
  );
}
