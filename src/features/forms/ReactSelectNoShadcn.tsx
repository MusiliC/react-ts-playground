import { useState } from "react";
import Select from "react-select";

const ReactSelectNoShadcn = () => {
  const fruitOptions = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
    { value: "mango", label: "Mango" },
  ];

  const [optionPicked, setOptionPicked] = useState<{
    value: string;
    label: string;
  } | null>(null);

  return (
    <div className="mb-20">
      <div>
        <h1>React Select</h1>
      </div>
      <div>
        <Select
          options={fruitOptions}
          onChange={(option) =>
            setOptionPicked(option as { value: string; label: string } | null)
          }
        />
        <h1 className="mt-3">Option picked: {optionPicked?.label || "None"}</h1>
      </div>
    </div>
  );
};

export default ReactSelectNoShadcn;
