export default function InputDropdown({
  labelText = "Input",
  width = "form-width-100",
  name = "",
  options = [],
  handleChange
}) {
  return (
    <div className={width + " input-container input-select"}>
      <label>
        <div>{labelText}</div>
        <select name={name} onChange={handleChange}>
          {options.map((option) => (
            <option style={{ fontFamily: option }} key={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}
