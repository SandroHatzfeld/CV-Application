export default function InputCheckbox({
    
    labelText = "Input",
    width = "form-width-100",
    name = "",
    required = false,
    value = "",
    handleChange,
}) {
  return (
    <div className={width + " input-container input-checkbox"}>
      <label>
        <div>{labelText}</div>
        <input
          onChange={handleChange}
          type="checkbox"
          name={name}
          required={required}
          defaultChecked={value}
        ></input>
      </label>
    </div>
  )
}
