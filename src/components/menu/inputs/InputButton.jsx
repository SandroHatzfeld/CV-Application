export default function InputButton({
    inputText = "Save",
    icon = "./assets/icons/checkmark.svg",
    onClick,
    color = 'var(--textcolor-dark)',
    bgColor = 'var(--textcolor-light)',
}) {
    return (
        <button onClick={onClick} className="input-element-container" style={{color: color, backgroundColor: bgColor}}>
            <img src={icon} />
            <span >{inputText}</span>
        </button>
    )
}
