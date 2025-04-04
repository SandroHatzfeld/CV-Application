export default function HeaderLayout1(props) {
  return (
    <header
      style={{
        backgroundColor: props.settings.mainColor,
        color: props.settings.mainTextColor,
        fontFamily: props.settings.headerFont
      }}
    >
      <h1 className="name">
        {props.dataPersonal.title && props.dataPersonal.title}
        {props.dataPersonal.firstName && props.dataPersonal.firstName}
        {props.dataPersonal.lastName && props.dataPersonal.lastName}
      </h1>
      <p className="contact">{props.dataPersonal.eMail && `E-Mail: ${props.dataPersonal.eMail}`}</p>
      <p className="contact">{props.dataPersonal.phoneNumber && `Phone: ${props.dataPersonal.phoneNumber}`}</p>
    </header>
  )
}
