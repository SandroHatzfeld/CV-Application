export default function InputElement({ type = "text", labelText = "Input", width = "form-width-50"}) {
    return (
        <div className={width}>
            <label>
                <div>{labelText}</div>
                <input type={type}></input>
            </label>
        </div>
    )
}
