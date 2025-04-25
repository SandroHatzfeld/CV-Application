import InputButton from "./InputButton.jsx"
import addBtnImg from '../../../assets/icons/add.svg'

export default function InputFormEntry(props) {
	
	if(props.inputVisible) {
		return (
			<form className="menu-input-container" onSubmit={props.toggleInputAndSubmit}>
				{props.children}
				<InputButton color='var(--textcolor-light)' bgColor='var(--submit-btn)'/>
			</form>
		)
	} else {
		return <InputButton  onClick={props.toggleInputVisible} inputText='Add an entry' icon={addBtnImg} />
	}
}
