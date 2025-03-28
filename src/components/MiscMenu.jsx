import InputElement from './InputElement.jsx'

export default function MiscMenu() {
	return <div>
		<InputElement type="submit" labelText="Clear all data" />
		<InputElement type="submit" labelText="Fill with example data" />
		<InputElement type="submit" labelText="Export for printing" />
	</div>
}