import InputButton from "./InputButton.jsx"
import InputElement from "./InputElement.jsx"

export default function MenuPersonal({ handleData }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    const generalInformation = {
      title: event.target.title.value,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      eMail: event.target.eMail.value,
      phoneNumber: event.target.phoneNumber.value,
      birthday: event.target.birthday.value,
    }
    const adressInformation = {
      street: event.target.street.value,
      number: event.target.number.value,
      zip: event.target.zip.value,
      city: event.target.city.value,
    }

    handleData({generalInformation: generalInformation, adressInformation: adressInformation})
  }


  return (
    <>
      <form className="menu-input-container" onSubmit={handleSubmit}>
        <h1>General information</h1>
        <InputElement labelText="Title" name='title'/>
        <div className="input-row">
          <InputElement labelText="First Name" name='firstName'/>
          <InputElement labelText="Last Name" name='lastName'/>
        </div>
        <InputElement labelText="E-Mail" type="email" width="form-width-100" name='eMail' />
        <div className="input-row">
          <InputElement labelText="Phone" type="tel" name='phoneNumber'/>
          <InputElement labelText="Birthday" type="date" name='birthday'/>
        </div>
        <h1>Adress information</h1>
        <div className="input-row">
          <InputElement labelText="Street" width="form-width-66" name='street'/>
          <InputElement labelText="Number" width="form-width-33" name='number'/>
        </div>
        <div className="input-row">
          <InputElement labelText="ZIP-Code" width="form-width-33" name='zip'/>
          <InputElement labelText="City" width="form-width-66" name='city'/>
        </div>
        <InputButton
          color="var(--textcolor-light)"
          bgColor="var(--submit-btn)"
        />
      </form>
    </>
  )
}
