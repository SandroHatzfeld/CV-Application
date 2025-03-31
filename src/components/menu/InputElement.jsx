export default function InputElement({
  type = "text",
  labelText = "Input",
  width = "form-width-50",
  name = "",
  required = false,
  value = "",
  options = [],
}) {
  if (type === "textarea") {
    return (
      <div className={width + " input-container"}>
        <label>
          <div>{labelText}</div>
          <textarea
            name={name}
            required={required}
            defaultValue={value}
          ></textarea>
        </label>
      </div>
    )
  }
  if (type === "select") {
    return (
      <div className={width + " input-container input-select"}>
        <label>
          <div>{labelText}</div>
          <select name={name}>
            {options.map((option) => (
              <option style={{fontFamily: option}} key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
    )
  }
  if (type === "layout") {
    return (
      <div className={width + " input-container input-layout"}>
        <fieldset>
          {options.map((option, index) => {
            return (
              <label key={option.name}>
                <input type="radio" value={index} name={name} defaultChecked={index === 0} tabIndex='0' ></input>
                <img src={option.image} />
                <div>{option.name}</div>
              </label>
            )
          })}
        </fieldset>
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
          defaultValue={value}
        ></input>
      </label>
    </div>
  )
}
