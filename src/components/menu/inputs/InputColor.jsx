export default function InputColor({
  type = "color",
  labelText = "Input",
  width = "form-width-100",
  name = "",
  required = false,
  value = "",
  handleChange,
}) {
  return (
    <div className={width + " input-container input-color"}>
      <label>
        <div>{labelText}</div>
        <input
          onChange={handleChange}
          type={type}
          name={name}
          required={required}
          defaultValue={value}
        ></input>
      </label>
    </div>
  )
}
