import ListRenderer from "./ListRenderer.jsx"
export default function CVLayout2(props) {
  return (
    <div id="CVLayout2" className="layout">
      <header
        style={{
          backgroundColor: props.settings.mainColor,
          color: props.settings.mainTextColor,
          fontFamily: props.settings.headerFont,
        }}
      >
        <h1 className="name">
          {props.dataPersonal.title && props.dataPersonal.title}
          {props.dataPersonal.firstName && props.dataPersonal.firstName}
          {props.dataPersonal.lastName && props.dataPersonal.lastName}
        </h1>
        {props.dataPersonal.title ||
        props.dataPersonal.firstname ||
        props.dataPersonal.lastName ? (
          <div className="header-container">
            <h2>Contact:</h2>
            <div>
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
      </header>
      <main
        style={{
          color: props.settings.textColor,
          backgroundColor: props.settings.backgroundColor,
          fontFamily: props.settings.paragraphFont,
        }}
      >
        <ListRenderer
          items={props.itemsEducation}
          title="Education"
          itemDescription="Degree"
          {...props}
        />
        <ListRenderer
          items={props.itemsBusiness}
          title="Experience"
          itemDescription="Position"
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
