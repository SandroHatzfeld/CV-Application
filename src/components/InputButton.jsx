export default function InputButton({
    inputText = "Save",
    icon = "./assets/icons/checkmark.svg",
    onClick,
}) {
    return (
        <button onClick={onClick} className="input-element-container">
            <img src={icon} />
            <span >{inputText}</span>
        </button>
    )
}
