import InputButton from './InputButton.jsx'
import InputElement from './InputElement.jsx'

export default function MenuPersonal() {
	return <>
	<div className='menu-input-container'>
		<h1>General information</h1>
		<InputElement labelText='Title'/>
		<InputElement labelText='First Name'/>
		<InputElement labelText='Last Name'/>
		<InputElement labelText='E-Mail' type='email' width='form-width-100' />
		<InputElement labelText='Phone' type='tel'/>
		<InputElement labelText='Birthday' type='date'/>
	</div>
	<div className='menu-input-container'>
		<h1>Adress information</h1>
		<InputElement labelText='Street' width='form-width-66' />
		<InputElement labelText='Number' width='form-width-33' />
		<InputElement labelText='ZIP-Code' width='form-width-33' />
		<InputElement labelText='City' width='form-width-66' />
		<InputButton inputText='Save' />
	</div>
	</>
}