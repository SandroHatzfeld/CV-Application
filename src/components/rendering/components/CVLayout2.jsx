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
          {props.dataPersonal.title && props.dataPersonal.title} <br/>
          {props.dataPersonal.firstName && props.dataPersonal.firstName} <br/>
          {props.dataPersonal.lastName && props.dataPersonal.lastName}
        </h1>
        <div className="header-container">
          {props.dataPersonal.eMail || 
          props.dataPersonal.phoneNumber ||
          props.dataPersonal.street ||
          props.dataPersonal.number ||
          props.dataPersonal.zip ||
          props.dataPersonal.city ? (
            <h2>Contact:</h2>
          ) : (
            <></>
          )}
          <div>
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
        </div>
      </header>
      <main
        style={{
          color: props.settings.textColor,
          backgroundColor: props.settings.backgroundColor,
          fontFamily: props.settings.paragraphFont,
        }}
      >
        {props.dataPersonal.description && (
          <div>
            <h2>Profile</h2>
            <p className="contact">{props.dataPersonal.description}</p>
          </div>
        )}
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
    </div>
  )
}
