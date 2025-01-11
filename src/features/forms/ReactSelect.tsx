import { Controller, useForm } from "react-hook-form";

type FormValues = {
  schemeId: string;
};

const ReactSelect = () => {
  const { control, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Selected Scheme:", data);
  };

  return (
    <div className="my-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="schemeId"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div>
              <label htmlFor="schemeId" className="block mb-2">
                Select Scheme:
              </label>
              <select
                {...field}
                id="schemeId"
                className="w-full p-2 border rounded"
              >
                <option value="" disabled>
                  -- Select Scheme --
                </option>
                <option value="light">IPP Scheme</option>
                <option value="dark">Nassit</option>
                <option value="system">Safaris Occupational</option>
              </select>
            </div>
          )}
        />

        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReactSelect;
