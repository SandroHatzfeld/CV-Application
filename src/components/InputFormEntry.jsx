import InputButton from "./InputButton.jsx"
import { useState } from 'react'

export default function InputFormEntry(props) {
	const [inputVisible, setInputVisible] = useState(true)

	const toggleInputVisible = () => {		
		setInputVisible(inputVisible => !inputVisible)
	}

	if(inputVisible) {
		return (
			<div className="menu-input-container">
				{props.children}
				<InputButton onClick={toggleInputVisible} />
			</div>
		)
	} else {
		return <InputButton onClick={toggleInputVisible} inputText='Add an entry' icon='./assets/icons/add.svg' />
	}
}
