export default function InputDropdown({
  labelText = "Input",
  width = "form-width-100",
  name = "",
  options = [],
  selected,
  handleChange
}) {
 
  return (
    <div className={width + " input-container input-select"}>
      <label>
        <div>{labelText}</div>
        <select name={name} onChange={handleChange} defaultValue={selected}>
          {options.map((option) => (
            <option style={{ fontFamily: option }} value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}
