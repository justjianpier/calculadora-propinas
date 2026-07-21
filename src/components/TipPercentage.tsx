type TipPercentageProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>;
};

export function TipPercentage({ setTip }: TipPercentageProps) {
  const tipOptions = [
    {
      id: "tip-10",
      value: 0.1,
      label: "10%",
    },
    {
      id: "tip-20",
      value: 0.2,
      label: "20%",
    },
    {
      id: "tip-50",
      value: 0.5,
      label: "50%",
    },
  ];

  return (
    <div className="mt-5">
      <p>Propina: </p>
      {tipOptions.map((option) => (
        <div key={option.id} className="flex gap-1">
          <input
            type="radio"
            name="tipPercentage"
            id={option.id}
            value={option.value}
            onChange={(e) => setTip(+e.target.value)}
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </div>
  );
}
