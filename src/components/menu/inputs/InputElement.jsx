export default function InputElement({
  type = "text",
  labelText = "Input",
  width = "form-width-50",
  name = "",
  required = false,
  value = "",
  handleChange,
}) {
  if (type === "textarea") {
    return (
      <div className={width + " input-container"}>
        <label>
          <div>{labelText}</div>
          <textarea
            onChange={handleChange}
            name={name}
            required={required}
            defaultValue={value}
          ></textarea>
        </label>
      </div>
    )
  }
  return (
    <div className={width + " input-container"}>
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
