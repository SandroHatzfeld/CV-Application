export default function InputLayout({
  name = "",
  options = [],
  handleChange
}) {
  return (
    <div className="input-container input-layout">
      <fieldset>
        {options.map((option, index) => {
          return (
            <label key={option.name}>
              <input
              onChange={handleChange}
                type="radio"
                value={index}
                name={name}
                defaultChecked={index === 0}
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
