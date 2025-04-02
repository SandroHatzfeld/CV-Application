export default function InputLayout({
  name = "",
  options = [],
  handleChange,
  defaultChecked,
}) {
  return (
    <div className="input-container input-layout">
      <fieldset>
        {options.map((option, index) => {
          return (
            <label key={option.name}>
              <input
              onChange={() => handleChange(index)}
                type="radio"
                value={index}
                name={name}
                defaultChecked={index === defaultChecked}
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
