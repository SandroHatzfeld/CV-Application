import InputButton from "./inputs/InputButton.jsx"
import InputElement from "./inputs/InputElement.jsx"

export default function MenuPersonal({ items, setItems }) {
  const handleSubmit = (event) => {
    event.preventDefault()

    setItems({
      title: event.target.title.value,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      eMail: event.target.eMail.value,
      phoneNumber: event.target.phoneNumber.value,
      birthday: event.target.birthday.value,
      description: event.target.description.value,
      street: event.target.street.value,
      number: event.target.number.value,
      zip: event.target.zip.value,
      city: event.target.city.value,
    })
  }

  return (
    <>
      <form className="menu-input-container" onSubmit={handleSubmit}>
        <h1>General information</h1>
        <InputElement labelText="Title" name="title" value={items.title} />
        <div className="input-row">
          <InputElement
            labelText="First Name"
            name="firstName"
            value={items.firstName}
          />
          <InputElement
            labelText="Last Name"
            name="lastName"
            value={items.lastName}
          />
        </div>
        <InputElement
          labelText="E-Mail"
          type="email"
          width="form-width-100"
          name="eMail"
          value={items.eMail}
        />
        <div className="input-row">
          <InputElement
            labelText="Phone"
            type="tel"
            name="phoneNumber"
            value={items.phoneNumber}
          />
          <InputElement
            labelText="Birthday"
            type="date"
            name="birthday"
            value={items.birthday}
          />
        </div>
        <InputElement 
        labelText="Description"
          type="textarea"
          width="form-width-100"
          name="description"
          value={items.description}
        />
        <h1 className='adress'>Adress information</h1>
        <div className="input-row">
          <InputElement
            labelText="Street"
            width="form-width-66"
            name="street"
            value={items.street}
          />
          <InputElement
            labelText="Number"
            width="form-width-33"
            name="number"
            value={items.number}
          />
        </div>
        <div className="input-row">
          <InputElement
            labelText="ZIP-Code"
            width="form-width-33"
            name="zip"
            value={items.zip}
          />
          <InputElement
            labelText="City"
            width="form-width-66"
            name="city"
            value={items.city}
          />
        </div>
        <InputButton
          color="var(--textcolor-light)"
          bgColor="var(--submit-btn)"
        />
      </form>
    </>
  )
}
