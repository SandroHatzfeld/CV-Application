import InputButton from "./InputButton.jsx"
import { useState } from 'react'

export default function InputFormEntry(props) {
	const [inputVisible, setInputVisible] = useState(true)

	const toggleInputVisible = () => {		
		setInputVisible(inputVisible => !inputVisible)
	}
	
	const toggleInputAndSubmit = (event) => {
		props.handleSubmit(event)
		setInputVisible(inputVisible => !inputVisible)
	}
	if(inputVisible) {
		return (
			<form className="menu-input-container" onSubmit={toggleInputAndSubmit}>
				{props.children}
				<InputButton color='var(--textcolor-light)' bgColor='var(--submit-btn)'/>
			</form>
		)
	} else {
		return <InputButton  onClick={toggleInputVisible} inputText='Add an entry' icon='./assets/icons/add.svg' />
	}
}
