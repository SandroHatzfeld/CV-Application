export default function InputButton({
    inputText = "Input",
    icon = "./assets/icons/checkmark.svg",
}) {
    return (
        <button className="input-element-container">
            <img src={icon} />
            <span >{inputText}</span>
        </button>
    )
}
