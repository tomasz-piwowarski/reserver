import Button from "../Button";

interface ReserveFormProps {
  handleSubmit: (formData: FormData) => void;
}

const selectOptions = [
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
];

export default async function ReserveForm({
  handleSubmit,
}: ReserveFormProps): Promise<JSX.Element> {
  return (
    <form action={handleSubmit}>
      <div className="flex justify-center items-center w-full">
        <label className="mr-2" htmlFor="hours">
          Hours:
        </label>
        <select
          id="hours"
          name="hours"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 p-2.5"
        >
          {selectOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full mt-2">
        <Button type="submit">submit</Button>
      </div>
    </form>
  );
}
