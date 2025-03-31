import InputButton from './inputs/InputButton.jsx'

export default function MiscMenu() {
	return <div className='misc-menu-wrapper'>
		<InputButton icon='./assets/icons/trash.svg' inputText="Clear all data" />
		<InputButton icon='./assets/icons/database.svg' inputText="Fill with example data" />
		<InputButton icon='./assets/icons/printer.svg' inputText="Export for printing" />
	</div>
}