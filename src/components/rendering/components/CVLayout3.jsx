import ListRenderer from "./ListRenderer.jsx"

export default function CVLayout3(props) {
  return (
    <div
      id="CVLayout3"
      className="layout"
      style={{ backgroundColor: props.settings.backgroundColor }}
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
        {props.dataPersonal.description && (
          <p className="description" style={{fontFamily: props.settings.paragraphFont}}>{props.dataPersonal.description}</p>
        )}
      </header>
      <aside style={{ backgroundColor: props.settings.accentColor, fontFamily: props.settings.footerFont}}>
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
    </div>
  )
}
