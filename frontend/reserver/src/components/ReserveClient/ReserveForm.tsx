import { ChangeEvent, FormEvent } from "react";
import Button from "../Button";
import { FIELDS } from "@/utils/reserveFormConstants";

interface ReserveFormProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default function ReserveForm({
  handleSubmit,
  handleSelect,
}: ReserveFormProps) {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="flex justify-center items-center w-full">
        <label className="mr-2" htmlFor={FIELDS.hours.name}>
          {FIELDS.hours.label}
        </label>
        <select
          id={FIELDS.hours.name}
          name={FIELDS.hours.name}
          onChange={handleSelect}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 p-2.5"
          defaultValue={FIELDS.hours.options[0].value}
        >
          {FIELDS.hours.options.map((option) => (
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
