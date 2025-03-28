import InputElement from './InputElement.jsx'

export default function MenuPersonal() {
	return <>
		<h1>General information</h1>
		<InputElement labelText='Title' />
		<InputElement labelText='First Name' />
		<InputElement labelText='Last Name' />
		<InputElement labelText='E-Mail' type='email' />
		<InputElement labelText='Phone' type='tel' />
		<InputElement labelText='Birthday' type='date' />
		<h1>Adress information</h1>
		<InputElement labelText='Street' />
		<InputElement labelText='Number' />
		<InputElement labelText='ZIP-Code' />
		<InputElement labelText='City' />

	</>
}