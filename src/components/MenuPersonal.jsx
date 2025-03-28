import InputButton from "./InputButton.jsx"
import InputElement from "./InputElement.jsx"

export default function MenuPersonal() {
  return (
    <>
      <div className="menu-input-container">
        <h1>General information</h1>
        <InputElement labelText="Title" />
        <div className="input-row">
          <InputElement labelText="First Name" />
          <InputElement labelText="Last Name" />
        </div>
        <InputElement labelText="E-Mail" type="email" width="form-width-100" />
        <div className="input-row">
          <InputElement labelText="Phone" type="tel" />
          <InputElement labelText="Birthday" type="date" />
        </div>
        <InputButton
          color="var(--textcolor-light)"
          bgColor="var(--submit-btn)"
        />
      </div>
      <div className="menu-input-container">
        <h1>Adress information</h1>
        <div className="input-row">
          <InputElement labelText="Street" width="form-width-66" />
          <InputElement labelText="Number" width="form-width-33" />
        </div>
        <div className="input-row">
          <InputElement labelText="ZIP-Code" width="form-width-33" />
          <InputElement labelText="City" width="form-width-66" />
        </div>
        <InputButton
          color="var(--textcolor-light)"
          bgColor="var(--submit-btn)"
        />
      </div>
    </>
  )
}
