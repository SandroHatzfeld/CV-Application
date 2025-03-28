export default function InputElement({type = 'text', labelText = 'Input'}) {
	return <div>
		<label><div>{labelText}</div>
			<input type={type}></input>
		</label>
	</div>
}