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
      <div>
        <label htmlFor="hours">
          For how many hours do you want to reserve the room?
        </label>
        <select id="hours" name="hours">
          {selectOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
