import checkmarkImg from '../../../assets/icons/checkmark.svg'

export default function InputButton({
    inputText = "Save",
    icon = checkmarkImg,
    onClick,
    color = 'var(--textcolor-dark)',
    bgColor = 'var(--textcolor-light)',
    classes 
}) {
    return (
        <button onClick={onClick} className={`input-element-container ${classes}`} style={{color: color, backgroundColor: bgColor}}>
            <img src={icon} />
            <span >{inputText}</span>
        </button>
    )
}
