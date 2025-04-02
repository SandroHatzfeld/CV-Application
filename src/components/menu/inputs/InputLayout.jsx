export default function InputLayout({
  name = "",
  options = [],
  handleChange,
  checkedID,
}) {
  return (
    <div className="input-container input-layout">
      <fieldset>
        {options.map((option, index) => {
          return (
            <label key={option.name + index}>
              <input
              onChange={() => handleChange(index)}
                type="radio"
                value={index}
                name={name}
                defaultChecked={index === checkedID}
                tabIndex="0"
              ></input>
              <img src={option.image} />
              <div>{option.name}</div>
            </label>
          )
        })}
      </fieldset>
    </div>
  )
}
