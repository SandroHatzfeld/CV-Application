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
            name={name}
            required={required}
            value={value}
            onChange={e => handleChange(e.target.value, name)}
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
          type={type}
          name={name}
          required={required}
          value={value}
          onChange={e => handleChange(e.target.value, name)}
        ></input>
      </label>
    </div>
  )
}
