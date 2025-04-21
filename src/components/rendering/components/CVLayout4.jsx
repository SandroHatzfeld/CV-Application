import ListRenderer from "./ListRenderer.jsx"

export default function CVLayout4(props) {
  return (
    <div
      id="CVLayout4"
      className="layout"
      style={{ backgroundColor: props.settings.backgroundColor }}
    >
      <header
        style={{
          backgroundColor: props.settings.mainColor,
          color: props.settings.mainTextColor,
          fontFamily: props.settings.headerFont,
        }}
      >
        <h2>
          Profile
        </h2>
        {props.dataPersonal.description && (
          <p className="description">{props.dataPersonal.description}</p>
        )}
      </header>
      <aside
        style={{
          backgroundColor: props.settings.accentColor,
          fontFamily: props.settings.footerFont,
        }}
      >
         <h1 className="name">
          {props.dataPersonal.title && props.dataPersonal.title}&nbsp;<br />
          {props.dataPersonal.firstName && props.dataPersonal.firstName}&nbsp;<br />
          {props.dataPersonal.lastName && props.dataPersonal.lastName}
        </h1>
        <div className="aside-container">
          <div className="contact">
            {props.dataPersonal.eMail && (
              <>
                <h3>E-Mail:</h3>
                <p> {props.dataPersonal.eMail}</p>
              </>
            )}
          </div>
          <div className="contact">
            {props.dataPersonal.phoneNumber && (
              <>
                <h3>Phone:</h3>
                <p> {props.dataPersonal.phoneNumber}</p>
              </>
            )}
          </div>
          <div className="contact">
            {props.dataPersonal.street ||
            props.dataPersonal.number ||
            props.dataPersonal.zip ||
            props.dataPersonal.city ? (
              <>
                <h3>Adress:</h3>
                <p>{`${props.dataPersonal.street} ${props.dataPersonal.number}`}</p>
                <p>{`${props.dataPersonal.zip} ${props.dataPersonal.city}`}</p>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </aside>
      <main
        style={{
          color: props.settings.textColor,
          fontFamily: props.settings.paragraphFont,
        }}
        className='experience'
      >
        <ListRenderer
          items={props.itemsBusiness}
          title="Experience"
          itemDescription="Position"
          {...props}
        />
      </main>
      <main
        style={{
          color: props.settings.textColor,
          fontFamily: props.settings.paragraphFont,
        }}
        className='education'
      >
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
