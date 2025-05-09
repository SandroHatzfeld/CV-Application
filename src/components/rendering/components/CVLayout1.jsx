import ListRenderer from "./ListRenderer.jsx"

export default function CVLayout1(props) {
  return (
    <div
      id="CVLayout1"
      className="layout"
      style={{ "--accentColor": props.settings.accentColor}}
    >
      <header
        style={{
          backgroundColor: props.settings.mainColor,
          color: props.settings.mainTextColor,
        }}
      >
        <h1 className="name" style={{fontFamily: props.settings.headlineFont}}>
          {props.dataPersonal.title && props.dataPersonal.title}&nbsp;
          {props.dataPersonal.firstName && props.dataPersonal.firstName}&nbsp;
          {props.dataPersonal.lastName && props.dataPersonal.lastName}
        </h1>
        <p style={{fontFamily: props.settings.paragraphFont}}>{props.dataPersonal.description}</p>
      </header>
      <main
        style={{
          color: props.settings.textColor,
          backgroundColor: props.settings.backgroundColor,
          fontFamily: props.settings.paragraphFont,
        }}
      >
        <ListRenderer
          items={props.itemsBusiness}
          title="Experience"
          itemDescription="Position"
          {...props}
        />
        <ListRenderer
          items={props.itemsEducation}
          title="Education"
          itemDescription="Degree"
          {...props}
        />
      </main>
      <footer
        style={{
          color: props.settings.footerTextColor,
          backgroundColor: props.settings.footerColor,
          fontFamily: props.settings.footerFont,
        }}
      >
        {props.dataPersonal.street ||
        props.dataPersonal.number ||
        props.dataPersonal.zip ||
        props.dataPersonal.city ? (
          <div className="footer-container">
            <h2>Adress:</h2>
            <div>
              <p className="contact">{`${props.dataPersonal.street} ${props.dataPersonal.number}`}</p>
              <p className="contact">{`${props.dataPersonal.zip} ${props.dataPersonal.city}`}</p>
            </div>
          </div>
        ) : (
          <></>
        )}
        {props.dataPersonal.title ||
        props.dataPersonal.firstname ||
        props.dataPersonal.lastName ? (
          <div className="footer-container">
            <h2>Contact:</h2>
            <div>
              <p className="contact">
                {`${props.dataPersonal.title} ${props.dataPersonal.firstName} ${props.dataPersonal.lastName}`}
              </p>
              <p className="contact">
                {props.dataPersonal.eMail &&
                  `E-Mail: ${props.dataPersonal.eMail}`}
              </p>
              <p className="contact">
                {props.dataPersonal.phoneNumber &&
                  `Phone: ${props.dataPersonal.phoneNumber}`}
              </p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </footer>
    </div>
  )
}
